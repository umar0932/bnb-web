import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/calendar.css";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Toaster } from "@/core/ui/toaster";
import { AuthSessionProvider } from "@/lib/Authentication/context/AuthSessionContext";
import AuthRedirection from "@/lib/Authentication/hoc/AuthRedirection";
import { toast } from "@/core/ui/use-toast";
import { ClientError } from "graphql-request";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError(error) {
      if (error instanceof ClientError) {
        const firstError = error.response.errors?.find((e) => e.message);
        if (!firstError) return;
        toast({
          title: firstError.message,
          variant: "destructive",
        });
      }
    },
  }),
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthSessionProvider>
        <AuthRedirection>
          <Component {...pageProps} />
          <Toaster />
        </AuthRedirection>
      </AuthSessionProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
