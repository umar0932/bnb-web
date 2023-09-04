import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import EventBusiness from "../../public/assets/event_business.png";
import Image from "next/image";
import Link from "next/link";
import TrustedSection from "@/components/Sections/TrustedSection";
import ContactSalesForm from "@/components/Forms/ContactSalesForm";

export default function FindTickets() {
  return (
    <>
      <div className="flex w-full flex-col">
        <Header />
        <div className="flex justify-end  bg-primary py-2 pr-4 font-normal text-btnsecondary">
          <Link href="/">Home</Link>/ Contact Sales
        </div>
        <div className="flex  bg-primary p-2 max-lg:flex-col md:p-10">
          <div className="flex w-full flex-col items-center justify-center gap-8  px-4 max-lg:order-2 lg:w-[45%]">
            <ContactSalesForm />
            <button className=" mt-4 w-[230px] rounded-lg bg-btnprimary p-2 text-white hover:bg-btnsecondary">
              Contact Sales
            </button>
          </div>
          <div className="max-lgorder-1 flex w-full flex-col gap-3  p-8 max-sm:text-center lg:w-[55%]">
            <span className="  text-6xl font-bold text-white max-md:text-5xl">
              Reach 90 million unique ticket-buyers on Bnb
            </span>
            <span className="py-6 text-3xl font-normal text-[#B2DBFE] max-md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              egestas nisl magna, non malesuada metus ornare in.
            </span>
            <div className="mt-4">
              <TrustedSection />
            </div>
          </div>
        </div>
        <div className="relative mt-4 flex flex-col gap-6 overflow-hidden   p-10 ">
          <span className="mt-10 text-5xl font-bold text-primary max-sm:text-center">
            Trusted By
          </span>
          <div className="mt-10 ">
            <TrustedSection />
          </div>
          <div className="absolute bottom-0 right-0 top-40 -z-10 h-[300px] w-[60%] bg-[#DEF0FF]"></div>
        </div>

        <div className=" relative mt-10 flex gap-5  p-10 max-lg:flex-col max-lg:justify-center max-md:items-center max-sm:p-5">
          <div className="w-full max-lg:w-1/2 max-sm:hidden">
            <Image src={EventBusiness} alt="business_image" />
          </div>
          <div className="flex flex-col gap-4 p-10 max-xl:gap-2 max-xl:p-5">
            <span className="mt-5 text-5xl font-bold text-primary max-sm:text-4xl">
              Power your events business.
              <br className="max-xl:hidden" /> Partner with Bnb
            </span>
            <span className="text-xl text-[#757575] md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusoid tempor incididunt ut labore amidolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </span>
            <button className=" mt-5 w-[210px] rounded-lg bg-btnprimary p-2 font-bold text-white hover:bg-btnsecondary">
              Connect with sales
            </button>
          </div>
          <div className="absolute bottom-20 left-0 top-0 -z-10 mb-10 h-[300px] w-[60%] bg-[#DEF0FF]"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
