import { useState } from "react";
import AuthHeader from "@/components/Header/AuthHeader";

export default function AccountSetting() {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleDivClick = (index: any) => {
    setSelectedDiv(index);
  };

  return (
    <>
      <div className="flex flex-col bg-[#DEF0FF]">
        <AuthHeader />
        <div className="flex">
          <div className=" w-[60%] border border-red-500"></div>
          <div className="mt-10 flex w-[40%] flex-wrap items-center justify-center gap-5 border border-green-500 p-5">
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
