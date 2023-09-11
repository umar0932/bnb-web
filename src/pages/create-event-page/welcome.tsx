import Image from "next/image";
import WelcomeImage from "../../../public/assets/welcome_screen.png";
import Link from "next/link";
export default function WelcomePage() {
  return (
    <>
      <div className="flex h-screen flex-col gap-4">
        <div className="flex justify-start p-5">
          <div className="rounded-lg bg-[#F2F2F2] p-5 text-lg font-bold text-black">
            Logo
          </div>
        </div>

        <div className=" flex h-full max-md:flex-col">
          <div className="w-1/2 max-md:w-full">
            <Image
              src={WelcomeImage}
              alt="welcome-screen-image"
              objectFit="cover"
              className="max-md:h-100 h-full"
            />
          </div>
          <div className="ml-10 mt-10 flex w-1/2 flex-col gap-10 p-10 max-xl:ml-5 max-md:ml-0 max-md:w-full max-md:items-center max-md:justify-center max-md:text-center max-sm:p-5">
            <span className="text-5xl font-bold text-primary max-lg:text-4xl">
              Welcome to our
              <br className="max-lg:hidden" /> community of
              <br className="max-lg:hidden" /> organizers!
            </span>
            <span className="text-3xl text-[#757575] max-lg:text-2xl">
              Next are a few questions that can <br className="max-lg:hidden" />{" "}
              help us understand how we can <br className="max-lg:hidden" />
              power your events.
            </span>
            <Link href="/create-event-page/first-step">
              <button className=" mt-4 w-[230px] rounded-lg bg-btnprimary p-2 text-white hover:bg-btnsecondary">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
