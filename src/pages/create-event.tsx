import Header from "@/components/Header/Header";
import Link from "next/link";
import Image from "next/image";
import EventPageImg from "../../public/assets/create-event.png";
import StandOutSection from "@/components/Sections/StandOutSection";
import BenefitSection from "@/components/Sections/BenefitSection";
import PaidInfoSection from "@/components/Sections/PaidInfoSection";
import HelpCenterSection from "@/components/Sections/HelpCenterSection";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/core/ui/button";
export default function CreateEvent() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col bg-[#EFF8FF]">
          <Header />
          {/* BreadCrums */}
          <div className="flex justify-end  py-2 pr-4 font-normal text-btnsecondary">
            <Link href="/">Home</Link>/ Create Event
          </div>

          <div className=" relative mt-12 flex w-full flex-col items-center justify-center bg-secondary">
            <div className="container relative top-[-50px]  ">
              <Image src={EventPageImg} alt="create-event-image" />
            </div>
            <div className=" flex flex-col items-center justify-center gap-5 pb-10">
              <span className="text-center text-4xl font-bold text-white md:text-5xl">
                Become an event-hosting legend
              </span>
              <span className="text-md text-center text-[#B2DBFE] md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur non vestibulum <br className="max-sm:hidden" />
                nulla. Praesent auctor molestie ornare.
              </span>
              <Link href="/create-event-page/welcome">
                <Button className=" mt-4 w-[230px] rounded-lg bg-btnprimary p-2 text-white hover:bg-btnsecondary">
                  Get Started for free
                </Button>
              </Link>
            </div>
          </div>
          <StandOutSection />
          <div className="h-[70px]"></div>
          <BenefitSection />
          <PaidInfoSection />
          <div className="h-[120px] bg-white"></div>
          <HelpCenterSection />
          <div className="h-[120px] bg-white"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}
