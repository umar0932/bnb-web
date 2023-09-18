import { useState } from "react";
import AuthHeader from "@/components/Header/AuthHeader";
import ContactInfoForm from "@/components/Forms/AccountSettingsForm/ContactInfoForm";

export default function AccountSetting() {
  const [selectedDiv, setSelectedDiv] = useState(0); // Set the initial state to 0 (index of "Contact Information")

  const handleDivClick = (index: any) => {
    setSelectedDiv(index);
  };

  return (
    <>
      <div className="flex flex-col bg-[#DEF0FF]">
        <AuthHeader />
        <div className="flex max-md:flex-col">
          <div className=" relative w-[60%]  max-md:order-2 max-md:w-full">
            <div className=" max-md:full absolute w-full p-10 max-md:top-full max-md:order-3 max-md:w-full max-sm:p-5">
              <ContactInfoForm />
            </div>
          </div>
          <div className="mt-10 flex w-[40%] flex-wrap items-center justify-center gap-5  p-5 max-md:order-1 max-md:w-full">
            {[
              "Contact Information",
              "Change Email",
              "Change Password",
              "Debit/ Credit Card",
              "Linked Account",
              "Email Preference",
              "Close Account",
              "Personal Data",
            ].map((label, index) => (
              <div
                key={index}
                className={`div-drop-shadow flex h-[110px] w-[110px] cursor-pointer items-center justify-center rounded-lg  p-3 text-center ${
                  selectedDiv === index
                    ? "bg-secondary  text-white"
                    : "bg-white text-[#757575]"
                }`}
                onClick={() => handleDivClick(index)}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
