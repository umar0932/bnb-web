import { AuthBroadcastChannel } from "@/lib/Authentication/AuthBroadcastChannel";
import cookie from "cookiejs";
import { jwtDecode } from "jwt-decode";

interface Params {
  shouldBroadcast?: boolean;
}
// eslint-disable-next-line @typescript-eslint/require-await
export const getSession = async ({ shouldBroadcast }: Params) => {
  const accessToken = cookie.get("auth.sessionToken");
  if (!accessToken || typeof accessToken === "boolean") return null;
  const token = jwtDecode(accessToken);
  if (shouldBroadcast) {
    AuthBroadcastChannel().postMessage({
      event: "session",
      data: { trigger: "getSession" },
    });
  }
  return {
    ...token,
    accessToken: accessToken,
  };
};
