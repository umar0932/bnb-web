import OrderCard from "@/components/Cards/OrderCard";
import Copyright from "@/components/Copyright/Copyright";
import Header from "@/components/Header/Header";
import ArrowDown from "../../public/assets/arrow_down.svg";
import Image from "next/image";
import { Button } from "@/core/ui/button";

export default function Orders() {
  return (
    <>
      <div className="flex h-[100vh] flex-col gap-5">
        <Header colorScheme="orders-page-header" />
        <div className="p-10 max-sm:p-5 sm:h-full">
          <div className="flex h-full items-center justify-center  gap-3 max-lg:flex-col">
            <div className="flex w-[30%] flex-col items-center justify-center gap-10 bg-[#F6FBFF] p-10 max-lg:w-[100%] max-lg:p-5 max-md:gap-5">
              <span className="text-center text-2xl font-bold text-primary">
                Looking for your tickets?
              </span>
              <span className="text-center text-2xl text-[#616161] max-md:text-xl">
                You need to verify your email to view transfers and gifts.
              </span>
              <Button className="w-[170px] bg-btnprimary font-bold text-white hover:bg-btnsecondary">
                {" "}
                Verify Email
              </Button>
            </div>

            <div className="flex w-[70%] flex-col items-center gap-10 bg-[#F6FBFF] p-5 max-lg:w-[100%]">
              <OrderCard />
              <div className="flex flex-col items-center justify-center gap-2 text-lg text-[#313131]">
                See past orders{" "}
                <Image
                  src={ArrowDown}
                  alt="arrow-down-icon"
                  className="h-[17px] w-[17px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
}
