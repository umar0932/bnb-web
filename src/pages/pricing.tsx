import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Link from "next/link";
import { Check } from "lucide-react";
export default function Pricing() {
  return (
    <>
      <div className="flex w-full flex-col  bg-[#EFF8FF]">
        <Header />
        <div className="flex justify-end  py-2 pr-4 font-normal text-btnsecondary">
          <Link href="/">Home</Link>/ Pricing
        </div>
        <div className="flex w-full flex-col gap-3  p-10 pl-10">
          <span className=" text-6xl font-bold text-primary">
            Join our community <br /> Grow yours
          </span>
          <span className="py-6 text-3xl font-normal text-[#757575]">
            Reach 90 million eventgoers on <br /> the world's largest event{" "}
            <br />
            marketplace.
          </span>
          <div className="div-drop-shadow absolute right-[68px] top-[311px] flex  flex-col rounded-lg  bg-white p-5">
            <div className=" flex flex-col  p-10">
              <span className="text-4xl font-bold text-[#313131]">
                About Pricing
              </span>
              <ul className="flex flex-col gap-2 py-7 text-2xl text-[#757575]">
                <li className="flex items-center  gap-3">
                  <Check className="text-[#FF0000]" />
                  Flexible ticket types for in-person or online events
                </li>
                <li className="flex items-center  gap-3">
                  <Check className="text-[#FF0000]" />
                  Unlimited listings in our marketplace
                </li>
                <li className="flex items-center  gap-3">
                  <Check className="text-[#FF0000]" />
                  Integrated email and social media marketing tools
                </li>
                <li className="flex items-center  gap-3">
                  <Check className="text-[#FF0000]" />
                  Ability to sell tickets on your own site
                </li>
                <li className="flex items-center  gap-3">
                  <Check className="text-[#FF0000]" />
                  Seamless attendee checkout experience
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-[#FF0000]" />
                  Payouts before your event happens
                </li>
                <li className="flex items-center  gap-3">
                  <Check className="text-[#FF0000]" />
                  Detailed analytics and reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex w-full flex-col gap-4 bg-white  p-10 pl-10">
          <span className="text-5xl font-bold text-primary">
            Simple pricing, <br />
            clear value
          </span>
          <span className="text-2xl font-normal text-[#757575]">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.{" "}
          </span>
          <button className="my-6 max-w-[322px] rounded-lg bg-btnprimary p-3 font-normal text-white hover:bg-btnsecondary">
            Get Started for free
          </button>
        </div>
        <div
          className="flex w-full flex-col gap-4 "
          style={{
            background:
              "linear-gradient(180deg, #F4FAFF 0%, rgba(242, 242, 242, 0.00) 100%)",
          }}
        >
          <div className="flex flex-col">
            <span className="py-10 text-center text-7xl font-bold text-primary">
              FAQ's
            </span>
            <div className="flex w-full flex-col p-5 md:flex-row md:p-10">
              <div className="ml-1 flex flex-col md:ml-10 md:w-1/2">
                <span className="text-3xl font-normal text-black md:text-4xl">
                  Can I change my package?
                </span>
                <span className="py-8 text-xl font-normal text-[#757575] md:text-2xl">
                  Lorem ipsum dolor sit amet,
                  <br className="hidden lg:block" /> consectetur adipisicing
                  elit, sed do
                  <br className="hidden lg:block" /> eiusoid tempor incididunt
                  ut labore
                  <br className="hidden lg:block" /> amidolore magna aliqua. Ut
                  enim ad
                  <br className="hidden lg:block" /> minim veniam, quis nostrud
                  <br className="hidden lg:block" /> exercitation ullamco
                </span>
              </div>
              <div className="ml-1 flex flex-col md:ml-10 md:w-1/2">
                <span className="text-3xl font-normal text-black md:text-4xl">
                  What is your service Policy?
                </span>
                <span className="py-8 text-xl font-normal text-[#757575] md:text-2xl">
                  Lorem ipsum dolor sit amet,
                  <br className="hidden lg:block" /> consectetur adipisicing
                  elit, sed do
                  <br className="hidden lg:block" /> eiusoid tempor incididunt
                  ut labore
                  <br className="hidden lg:block" /> amidolore magna aliqua. Ut
                  enim ad
                  <br className="hidden lg:block" /> minim veniam, quis nostrud
                  <br className="hidden lg:block" /> exercitation ullamco
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col  p-5 md:flex-row md:p-10">
              <div className="ml-1 flex flex-col md:ml-10 md:w-1/2 ">
                <span className="text-3xl font-normal text-black md:text-4xl">
                  How do I pay my fees?
                </span>
                <span className="py-8 text-xl font-normal text-[#757575] md:text-2xl">
                  Lorem ipsum dolor sit amet,
                  <br className="hidden lg:block" /> consectetur adipisicing
                  elit, sed do
                  <br className="hidden lg:block" /> eiusoid tempor incididunt
                  ut labore
                  <br className="hidden lg:block" /> amidolore magna aliqua. Ut
                  enim ad
                  <br className="hidden lg:block" /> minim veniam, quis nostrud
                  <br className="hidden lg:block" /> exercitation ullamco
                </span>
              </div>
              <div className="ml-1 flex flex-col md:ml-10 md:w-1/2">
                <span className="text-3xl font-normal text-black md:text-4xl">
                  Do packages and prices differ by
                  <br className="hidden md:block" /> location or currency?
                </span>
                <span className="py-8 text-xl font-normal text-[#757575] md:text-2xl">
                  Lorem ipsum dolor sit amet,
                  <br className="hidden lg:block" /> consectetur adipisicing
                  elit, sed do
                  <br className="hidden lg:block" /> eiusoid tempor incididunt
                  ut labore
                  <br className="hidden lg:block" /> amidolore magna aliqua. Ut
                  enim ad
                  <br className="hidden lg:block" /> minim veniam, quis nostrud
                  <br className="hidden lg:block" /> exercitation ullamco
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
