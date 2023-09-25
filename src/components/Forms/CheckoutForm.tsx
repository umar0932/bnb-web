import { useFormik } from "formik";
import { RadioGroup, RadioGroupItem } from "@/core/ui/radio-group";
import { Label } from "@/core/ui/label";
import CreditCardIcon from "../../../public/assets/credit_card.svg";
import PayPalIcon from "../../../public/assets/paypal.svg";
import Image from "next/image";
import { Checkbox } from "@/core/ui/checkbox";
import { Button } from "@/core/ui/button";
export default function CheckoutForm() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
    },
  });
  return (
    <>
      <div className="flex justify-between gap-20 max-md:flex-col">
        {/* Left Side */}
        <div className="flex w-[60%]  flex-col gap-5 max-md:order-2 max-md:w-full">
          {/* Contact Info */}
          <div className="flex w-full flex-col justify-center gap-3 bg-[#F6FBFF] p-10 max-sm:p-5">
            <span className="text-center text-3xl font-bold text-primary">
              Contact Info
            </span>
            <form
              onSubmit={formik.handleSubmit}
              className="flex w-full flex-col "
            >
              {/* First Name */}
              <div className="div-drop-shadow mt-5 flex flex-col rounded-lg bg-white p-3">
                <span className="text-sm text-[#757575]">First Name</span>
                <input
                  className="h-[25px] bg-transparent outline-none placeholder:text-sm"
                  id="first_name"
                  name="first_name"
                  type="text"
                  placeholder="Enter First Name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                />
              </div>
              {/* Last Name */}
              <div className="div-drop-shadow mt-5 flex flex-col rounded-lg bg-white p-3">
                <span className="text-sm text-[#757575]">Last Name</span>
                <input
                  className="h-[25px] bg-transparent outline-none placeholder:text-sm"
                  id="last_name"
                  name="last_name"
                  type="text"
                  placeholder="Enter Last Name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="div-drop-shadow mt-5 flex flex-col rounded-lg bg-white p-3">
                <span className="text-sm text-[#757575]">Email Address</span>
                <input
                  className="h-[25px] bg-transparent outline-none placeholder:text-sm"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
            </form>
          </div>

          {/* Payment Mode Selection */}
          <div className="flex w-full flex-col justify-center gap-3 bg-[#F6FBFF] p-10 max-sm:p-5">
            <span className="text-center text-3xl font-bold text-primary">
              Payment
            </span>

            <RadioGroup
              defaultValue="option-one"
              className="div-drop-shadow mt-2 flex flex-col rounded-lg bg-white p-3"
            >
              <div className=" flex items-center justify-between gap-5 rounded-lg bg-white p-5">
                <Label
                  htmlFor="option-one"
                  className=" text-md flex items-center gap-2 text-[#313131] max-sm:text-sm"
                >
                  <Image
                    src={CreditCardIcon}
                    alt="credit-card-icon"
                    className="h-[25px] w-[25px]"
                  />
                  Credit or debit card
                </Label>
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="h-[20px] w-[20px] border-btnprimary bg-white text-btnprimary"
                />
              </div>
              <div className=" flex items-center justify-between gap-5 border-t border-t-[#9CB2DF] bg-white p-5">
                <Label
                  htmlFor="option-two"
                  className=" text-md flex items-center gap-2 text-[#313131] max-sm:text-sm"
                >
                  <Image
                    src={PayPalIcon}
                    alt="pay-pal-icon"
                    className="h-[25px] w-[25px]"
                  />
                  PayPal
                </Label>
                <RadioGroupItem
                  value="option-two"
                  id="option-two"
                  className="h-[20px] w-[20px] border-btnprimary bg-white text-btnprimary"
                />
              </div>
            </RadioGroup>
          </div>

          {/* CheckBox section */}

          <div className="flex w-full flex-col gap-3 p-10 max-lg:p-1">
            <div className="flex items-center space-x-2">
              <Checkbox defaultChecked={true} />
              <span className="text-[#757575]">
                Keep me updated on more events and news from this event
                organizer
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox defaultChecked={true} />
              <span className="text-[#757575]">
                Send me emails about the best events happening nearby or online
              </span>
            </div>
            <span className="black mt-2">
              By selecting Register, I agree to the Bnb Terms of Service
            </span>
            <Button className="text-md mt-3 h-[45px] w-[150px] bg-btnprimary font-bold text-white hover:bg-btnsecondary">
              Register
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-10 max-md:order-1">
          <div className="flex flex-col items-center gap-5 bg-[#F6FBFF] p-10 max-sm:p-5">
            <span className="text-2xl text-primary">Ticket Summary</span>
            <div className="flex w-full justify-between gap-10 border-b border-b-[#9CB2DF] p-2">
              <span className="text-[#00437A]">1 x General Admission</span>
              <span className="text-btnsecondary">$45.00</span>
            </div>
            <div className="flex w-full justify-between gap-10 border-b border-b-[#9CB2DF] p-2">
              <span className="text-[#00437A]">Subtotal</span>
              <span className="text-btnsecondary">$45.00</span>
            </div>
            <div className="flex w-full justify-between gap-10 border-b border-b-[#9CB2DF] p-2">
              <span className="text-[#00437A]">Fee</span>
              <span className="text-btnsecondary">$4.39</span>
            </div>
            <div className="flex w-full justify-between gap-10 p-2">
              <span className="text-btnprimary">Total</span>
              <span className="text-btnsecondary">$49.39</span>
            </div>
          </div>

          {/* Event Type */}
          <div className="flex w-full flex-col justify-center gap-3 bg-[#F6FBFF] p-10 max-sm:p-5">
            <span className="text-center text-3xl font-bold text-primary">
              Event type
            </span>

            <RadioGroup
              defaultValue="option-one"
              className="div-drop-shadow mt-2 flex flex-col rounded-lg bg-white p-3"
            >
              <div className=" flex items-center justify-between gap-5 rounded-lg bg-white p-5">
                <Label
                  htmlFor="option-one"
                  className=" text-md flex items-center gap-2 text-[#313131]"
                >
                  Public
                </Label>
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="h-[20px] w-[20px] border-btnprimary bg-white text-btnprimary"
                />
              </div>
              <div className=" flex items-center justify-between gap-5 border-t border-t-[#9CB2DF] bg-white p-5">
                <Label
                  htmlFor="option-two"
                  className=" text-md flex items-center gap-2 text-[#313131]"
                >
                  Private
                </Label>
                <RadioGroupItem
                  value="option-two"
                  id="option-two"
                  className="h-[20px] w-[20px] border-btnprimary bg-white text-btnprimary"
                />
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </>
  );
}
