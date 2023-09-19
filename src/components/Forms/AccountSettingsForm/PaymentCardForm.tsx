import React from "react";
import { useFormik } from "formik";
import { Button } from "@/core/ui/button";

export default function PaymentCardForm() {
  const maxCardLength = 12;
  const maxCVVLength = 3;

  const formatCardNumber = (input: any) => {
    const cardNumber = input.replace(/\D/g, ""); // Remove non-digit characters
    const formattedCardNumber = cardNumber
      .slice(0, 12) // Limit to 12 digits
      .split("")
      .map((char: any, index: number) => {
        if (index % 4 === 3 && index < 11) {
          return char + "-";
        } else {
          return char;
        }
      })
      .join("");
    return formattedCardNumber;
  };

  const handleCVVChange = (e: any) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxCVVLength) {
      formik.handleChange(e); // Handle formik changes
    }
  };
  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    const formattedCardNumber = formatCardNumber(inputValue);
    formik.setFieldValue("card_number", formattedCardNumber);
  };

  const formik = useFormik({
    initialValues: {
      cardholder_name: "",
      card_number: "",
      expiration_date: "",
      cvv_number: "",
    },
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
    },
  });

  return (
    <>
      <div className="card-drop-shadow flex max-h-[600px] gap-10 rounded-lg bg-white p-10 max-sm:p-5">
        <div className="flex w-full flex-col">
          <span className="text-4xl font-bold text-primary max-sm:text-3xl">
            Credit/ Debit Cards
          </span>

          <div className="mt-5 h-[1px] bg-[#BEBEBE]"> </div>

          <form
            onSubmit={formik.handleSubmit}
            className="mt-5 flex w-full flex-col gap-5 max-lg:flex-col"
          >
            <div className=" flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:justify-start">
              <span className="text-xl">Your Cards</span>
              <Button className="flex w-[130px] bg-btnprimary font-bold text-white hover:bg-btnsecondary">
                Add
              </Button>
            </div>
            <div className="flex w-full flex-col gap-5">
              {/* Card Holder Name */}
              <div className=" flex  flex-col rounded-lg bg-[#EFF8FF] p-3 ">
                <span className="text-sm text-[#757575]">Cardholder Name</span>
                <input
                  className="h-[25px] bg-transparent outline-none placeholder:text-sm"
                  id="cardholder_name"
                  name="cardholder_name"
                  type="text"
                  placeholder="Enter Card Holder Name"
                  onChange={formik.handleChange}
                  value={formik.values.cardholder_name}
                />
              </div>
              {/*Card Number */}
              <div className=" flex  flex-col rounded-lg bg-[#EFF8FF] p-3">
                <span className="text-sm text-[#757575]">Card Number</span>
                <input
                  className="h-[25px] bg-transparent outline-none placeholder:text-sm"
                  id="card_number"
                  name="card_number"
                  type="text"
                  placeholder="Enter Card Number"
                  onChange={handleInputChange}
                  value={formik.values.card_number}
                  maxLength={maxCardLength + 2} // Allow room for dashes
                />
              </div>

              {/* Expiry Date and CVV */}
              <div className="flex w-full gap-5  max-lg:flex-col">
                <div className=" flex w-full  flex-col rounded-lg bg-[#EFF8FF] p-3">
                  <span className="text-sm text-[#757575]">
                    Expiration Date
                  </span>
                  <input
                    className="h-[25px] bg-transparent outline-none placeholder:text-sm"
                    id="expiration_date"
                    name="expiration_date"
                    type="date"
                    placeholder=""
                    onChange={formik.handleChange}
                    value={formik.values.expiration_date}
                  />
                </div>
                <div className="flex w-full  flex-col rounded-lg bg-[#EFF8FF] p-3">
                  <span className="text-sm text-[#757575]">CVV</span>
                  <input
                    className="h-[25px] bg-transparent outline-none placeholder:text-sm"
                    id="cvv_number"
                    name="cvv_number"
                    type="password"
                    placeholder="Enter CVV Number"
                    onChange={handleCVVChange}
                    value={formik.values.cvv_number}
                    maxLength={maxCVVLength}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
