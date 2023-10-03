import OrderCard from "@/components/Cards/OrderCard";
import Copyright from "@/components/Copyright/Copyright";
import { useState } from "react";
import Header from "@/components/Header/Header";
import ArrowDown from "../../public/assets/arrow_down.svg";
import { Mail } from "lucide-react";
import { useFormik } from "formik";
import Image from "next/image";
import { Button } from "@/core/ui/button";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/core/ui/dialog";

export default function Orders() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showPastOrders, setShowPastOrders] = useState(false); // Add state for past orders
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
    },
  });
  return (
    <>
      <div className="flex min-h-[100vh]  flex-col gap-5">
        <Header colorScheme="orders-page-header" />
        <div className="mt-20 p-10 max-lg:p-5 max-sm:mt-0 sm:h-full">
          <div className="flex h-full items-center justify-center  gap-3 max-lg:flex-col">
            <div className="flex w-[30%] flex-col items-center justify-center gap-10 bg-[#F6FBFF] p-10 max-lg:w-[100%] max-lg:p-5 max-md:gap-5">
              <span className="text-center text-2xl font-bold text-primary">
                Looking for your tickets?
              </span>
              <span className="text-center text-2xl text-[#616161] max-md:text-xl">
                You need to verify your email to view transfers and gifts.
              </span>
              <Button
                className="w-[170px] bg-btnprimary font-bold text-white hover:bg-btnsecondary"
                onClick={() => {
                  setIsDialogOpen(true);
                }}
              >
                {" "}
                Verify Email
              </Button>
            </div>

            <div className="flex w-[70%] flex-col items-center gap-10 bg-[#F6FBFF] p-5 max-lg:w-[100%]">
              <div className="flex w-full flex-col gap-4 overflow-y-auto">
                <OrderCard />
                {/* Conditionally render past orders */}
                <div
                  className={`bg-red flex flex-col transition-all ease-in-out  ${
                    showPastOrders ? "max-h-[500px]" : "max-h-0"
                  }`}
                  style={{
                    overflow: showPastOrders ? "auto" : "hidden",
                    opacity: showPastOrders ? 1 : 0,
                    gap: showPastOrders ? "30px" : "0px",
                  }}
                >
                  <OrderCard />
                  <OrderCard />
                  <OrderCard />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-lg text-[#313131]">
                {/* Toggle visibility of past orders */}
                <button
                  onClick={() => setShowPastOrders(!showPastOrders)}
                  className="flex cursor-pointer items-center gap-3"
                >
                  See past orders{" "}
                  <Image
                    src={ArrowDown}
                    alt="arrow-down-icon"
                    className={`h-[17px] w-[17px] transition-transform ${
                      showPastOrders ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
      <Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(false)}>
        <DialogContent>
          <DialogHeader className="flex items-center justify-center gap-5">
            <Mail size={40} stroke="red" />
            <DialogTitle className="text-center text-2xl font-bold text-primary">
              Where should we send your verification link?
            </DialogTitle>
            <input
              className=" shadow-tertiary-500 h-[45px] w-full rounded-lg bg-[#EFF8FF] p-5 shadow-sm outline-none"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <div className="flex justify-center gap-5">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="shadow-tertiary-500 flex h-[48px] w-[131px] items-center justify-center rounded-lg bg-btnprimary text-white shadow-sm hover:bg-btnsecondary"
              >
                Verify Email
              </button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
