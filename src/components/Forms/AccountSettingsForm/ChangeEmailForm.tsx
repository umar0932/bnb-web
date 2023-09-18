import { useFormik } from "formik";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/core/ui/dialog";

import { Button } from "@/core/ui/button";

export default function ChangeEmailForm() {
  const formik = useFormik({
    initialValues: {
      email_address: "",
      confirm_email: "",
    },
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
    },
  });
  //   const [showEmailForm, setShowEmailForm] = useState(false);
  //   const handleChangeClick = () => {
  //     setShowEmailForm(true);
  //   };
  return (
    <>
      <div className="card-drop-shadow flex h-[400px] gap-10 rounded-lg bg-white p-10 max-sm:p-5">
        <div className="flex w-full flex-col">
          <span className="text-4xl font-bold text-primary max-sm:text-3xl">
            Change Email
          </span>

          <div className="mt-5 h-[1px] bg-[#BEBEBE]"> </div>

          <div className="mt-5 flex flex-col">
            <span className="text-2xl">Account Email Address</span>
            <span className="text-xl text-[#313131]">johndoe@gmail.com</span>
          </div>

          <Dialog>
            <DialogTrigger className="flex-start flex">
              <Button className="mt-5 w-[130px] bg-btnprimary font-bold text-white hover:bg-btnsecondary">
                Change
              </Button>
            </DialogTrigger>

            <DialogContent
              className="  p-10 "
              style={{
                width: "85%",
                height: "65%",
                maxWidth: "95%",
                maxHeight: "95%",
                overflowX: "auto",
                overflowY: "hidden",
              }}
            >
              <div className="flex flex-col items-center justify-center gap-5 bg-[#DEF0FF] p-5">
                <span className="text-xl font-bold text-primary">
                  Change your Email
                </span>
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex w-full flex-col items-center justify-center gap-5 max-lg:flex-col"
                >
                  <div className="flex w-full flex-col gap-5">
                    {/* Email Address */}
                    <div className=" flex  flex-col rounded-lg bg-white p-3 ">
                      <span className="text-sm text-[#757575]">
                        Email Address
                      </span>
                      <input
                        className="h-[25px] bg-transparent outline-none placeholder:text-sm"
                        id="email_address"
                        name="email_address"
                        type="text"
                        placeholder="Enter your email address"
                        onChange={formik.handleChange}
                        value={formik.values.email_address}
                      />
                    </div>
                    {/*Confirm Email Address */}
                    <div className=" flex  flex-col rounded-lg bg-white p-3">
                      <span className="text-sm text-[#757575]">
                        Confirm Email
                      </span>
                      <input
                        className="h-[25px] bg-transparent outline-none placeholder:text-sm"
                        id="confirm_email"
                        name="confirm_email"
                        type="text"
                        placeholder="Re-Enter your email address"
                        onChange={formik.handleChange}
                        value={formik.values.confirm_email}
                      />
                    </div>
                  </div>
                  <Button className="mt-5 flex w-[130px] bg-btnprimary font-bold text-white hover:bg-btnsecondary">
                    Save
                  </Button>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
