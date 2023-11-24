import StaticImage from "next/image";
import Footer from "@/components/Footer/Footer";
import { type ReactNode, type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  Title: string | ReactNode;
  imagePath?: string;
}
export default function AuthLayout({
  imagePath = "/assets/signup_page.png",
  children,
  Title,
}: Props) {
  return (
    <div>
      <div className="flex w-full min-h-screen items-stretch justify-center">
        <div className="relative hidden flex-1 md:block">
          <StaticImage
            src={imagePath}
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex w-[40%] min-w-[500px] flex-col justify-between">
          <div className="mt-8 space-y-12">
            <div className="relative min-w-max text-center md:right-64">
              <span className="text-5xl font-bold text-primary md:text-6xl md:text-white">
                {Title}
              </span>
            </div>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
