import Header from "@/components/Header/Header";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@/core/ui/button";
import { useFormik } from "formik";
import { Pencil } from "lucide-react";
import GeneralInfoForm from "@/components/Forms/GeneralInfoForm";
import Copyright from "@/components/Copyright/Copyright";

export default function PastOrders() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email_address: "",
      delivery_method: "",
    },
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
    },
  });
  return (
    <>
      <div className="flex flex-col">
        <Header colorScheme="orders-page-header" />
        <div className="flex flex-col gap-5 bg-[#F6FBFF] p-10  max-sm:p-5">
          <div className="flex justify-between max-sm:flex-col">
            <div className="flex items-center gap-2 text-lg text-[#3B5998]">
              <ChevronLeftIcon size={21} className="text-btnsecondary" />
              Back to current order
            </div>
            <div className="cursor-pointer text-[#F00] underline max-sm:pl-7">
              Report this event
            </div>
          </div>
          <div className="mt-10 flex max-md:flex-col">
            <div className="flex w-[50%] flex-col p-10 max-md:w-full max-sm:p-2">
              <span className="text-3xl text-primary">
                Order for{" "}
                <span className="text-3xl font-bold text-primary">
                  Lorem ipsum dolor sit amet
                </span>
              </span>
              <div className="mt-3 flex flex-col text-lg text-[#4B4B4B]">
                <span>Order #6959644679 on Jun 16, 2023</span>
                <span> Thursday, June 22, 2023 from 7:00 PM to 8:00 PM</span>
                <span>USA</span>
              </div>
              <div className="mt-10 flex flex-col gap-5">
                <Button className="w-[200px] bg-[#DEF0FF] font-bold text-primary hover:bg-[#DEF0FF]">
                  {" "}
                  Cancel Order
                </Button>
                <Button className="w-[200px] bg-btnprimary font-bold text-white hover:bg-btnsecondary">
                  {" "}
                  Contact Organizer
                </Button>
              </div>
            </div>

            {/* Form for General Info */}
            <div className="flex w-[50%] flex-col bg-white p-10 max-md:w-full max-sm:mt-10 max-sm:p-2">
              <GeneralInfoForm />
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
}
