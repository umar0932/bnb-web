import StaticImage from "next/image";
import Logo from "../../public/assets/logo.jpg";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import { Info } from "lucide-react";
import { Pencil } from "lucide-react";
import SignupImage from "../../public/assets/signup_page.png";
import { Facebook } from "lucide-react";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/core/ui/dialog";
import { Button } from "@/core/ui/button";

export default function Signup() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showSecondForm, setShowSecondForm] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      confirm_email: "",
      password: "",
      first_name: "",
      last_name: "",
    },
    onSubmit: (values) => {
      setShowSecondForm(true);
      JSON.stringify(values, null, 2);
    },
  });
  return (
    <>
      <div className="flex h-screen w-full justify-center">
        <div className="hidden w-1/2 md:block">
          <StaticImage
            src={SignupImage}
            alt="Logo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-full flex-col justify-between md:w-1/2">
          <div className=" mr-4 flex flex-shrink-0 justify-end">
            <StaticImage src={Logo} alt="Logo" className="mt-4 h-20 w-32" />
          </div>
          {!showSecondForm && (
            <div
              className="div-drop-shadow relative right-20 mt-[auto] flex max-h-[550px] flex-shrink rounded-t-[30px]
          bg-[#EFF8FF] max-lg:right-0 max-lg:w-full max-lg:justify-center"
            >
              <div className="m-10 w-full ">
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col gap-6 md:gap-8"
                >
                  <input
                    className="field-drop-shadow h-[45px] rounded-lg p-5 outline-none"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />

                  <button
                    type="submit"
                    className="h-[45px] rounded-lg bg-btnprimary text-white hover:bg-btnsecondary"
                  >
                    Continue
                  </button>
                  <div className="rounded-10 flex items-center p-2 text-[#313131]">
                    <div className="flex-grow border-t-2 border-[#B2DBFE]"></div>
                    <div className="rounded-lg bg-white px-2">or</div>
                    <div className="flex-grow border-t-2 border-[#B2DBFE]"></div>
                  </div>

                  <button
                    type="submit"
                    className=" field-drop-shadow flex h-[45px] items-center justify-center gap-3 rounded-lg bg-white"
                  >
                    <FcGoogle size={25} /> Sign up with Google
                  </button>
                  <p className="text-center text-btnprimary">
                    Other sign up methods
                  </p>
                  <div className="flex justify-center gap-5">
                    <button className="field-drop-shadow flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white ">
                      <Facebook size={25} fill="#3B5998" stroke="none" />
                    </button>
                    <button className="field-drop-shadow flex h-[54px] w-[54px] items-center justify-center rounded-full  bg-white">
                      <AiFillApple size={25} fill="black" stroke="none" />
                    </button>
                  </div>
                  <div>
                    <Link
                      href="/login"
                      className="flex cursor-pointer justify-end font-normal text-secondary underline"
                    >
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          )}
          {showSecondForm && (
            <div
              className="div-drop-shadow relative right-20 mt-[auto] flex max-h-[550px] flex-shrink rounded-t-[30px]
            bg-[#EFF8FF] max-lg:right-0 max-lg:w-full max-lg:justify-center"
            >
              <div className="m-10 w-full ">
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col gap-6 md:gap-8"
                >
                  <div className="relative">
                    <input
                      className="field-drop-shadow h-[45px] w-full rounded-lg p-5 pr-12 outline-none"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
                      <Pencil
                        size={20}
                        color="red"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  <input
                    className=" field-drop-shadow h-[45px] rounded-lg p-5  outline-none"
                    id="confirm_email"
                    name="confirm_email"
                    type="email"
                    placeholder="Confirm Email"
                    onChange={formik.handleChange}
                    value={formik.values.confirm_email}
                  />
                  <div className="flex flex-col justify-between gap-6 sm:flex-row">
                    <input
                      className=" field-drop-shadow h-[45px] w-full rounded-lg p-5 outline-none"
                      id="first_name"
                      name="first_name"
                      type="text"
                      placeholder="First Name"
                      onChange={formik.handleChange}
                      value={formik.values.first_name}
                    />
                    <input
                      className="field-drop-shadow h-[45px] w-full rounded-lg p-5 outline-none"
                      id="last_name"
                      name="last_name"
                      type="text"
                      placeholder="Last Name"
                      onChange={formik.handleChange}
                      value={formik.values.last_name}
                    />
                  </div>
                  <input
                    className=" field-drop-shadow h-[45px] rounded-lg p-5 outline-none"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <p className="text-[#757575]">
                    Password must be at least 8 characters
                  </p>

                  <button
                    type="submit"
                    className="h-[45px] rounded-lg bg-btnprimary text-white hover:bg-btnsecondary"
                    onClick={() => {
                      setIsDialogOpen(true);
                    }}
                  >
                    Create an account
                  </button>

                  <div>
                    <Link
                      href="/login"
                      className="flex cursor-pointer justify-end font-normal text-secondary underline"
                    >
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        <div className="absolute mt-9 text-center max-md:mt-10 max-md:py-10">
          <span className="text-4xl font-bold text-primary md:text-6xl md:text-white">
            Create a<span className="text-primary">n account</span>
          </span>
        </div>
      </div>

      <Footer />
      <Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(false)}>
        <DialogContent>
          <DialogHeader className="flex items-center justify-center gap-5">
            <Info size={40} stroke="red" />
            <DialogTitle className="text-2xl font-bold text-primary">
              Terms & Conditions
            </DialogTitle>
            <p className="text-center text-[#757575]">
              I accept the BnB{" "}
              <span className="underline">Terms Of Service</span>,{" "}
              <span className="underline">Community Guidelines</span> and have
              read the <span className="underline">Privacy Policy</span>
            </p>
            <div className="flex justify-center gap-5">
              <Button
                onClick={() => setIsDialogOpen(false)}
                className="shadow-tertiary-500 flex h-[48px] w-[131px] items-center justify-center rounded-lg bg-[#DEF0FF] font-bold text-primary shadow-sm"
              >
                Cancel
              </Button>
              <Link href="/interests">
                <Button className="shadow-tertiary-500 flex h-[48px] w-[131px] items-center justify-center rounded-lg bg-btnprimary text-white shadow-sm hover:bg-btnsecondary">
                  I Agree
                </Button>
              </Link>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
