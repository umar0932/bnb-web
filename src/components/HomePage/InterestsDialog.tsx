import React, { useState } from "react";
import Image from "next/image";
import CrossIcon from "../../../public/assets/cross_icon.svg";

export default function InterestsDialog() {
  const [selected, setSelected] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility
  const interests: string[] = [
    "Barbers",
    "Stylists",
    "Arts & Entertainment",
    "Gaming",
    "Health",
    "Fashion",
    "Technology",
    "Health",
    "Weight Loss",
    "Dancing",
    "Fitness",
    "Business",
    "Hobbies",
    "Book Club",
  ];

  const toggleInterest = (interest: string): void => {
    if (selected.includes(interest)) {
      setSelected(selected.filter((item) => item !== interest));
    } else {
      setSelected([...selected, interest]);
    }
  };

  const handleClose = () => {
    setIsVisible(false); // Set visibility to false when closing
  };

  const buttonClasses: string =
    "text-md w-[169px] rounded-lg border border-[#C9C9C9] bg-white p-2";

  return isVisible ? (
    <>
      <div className="relative mt-10 flex flex-col gap-3 bg-[#DEF0FF] p-10">
        <Image
          src={CrossIcon}
          alt="cancel_icon"
          className="absolute right-[50px] h-[20px] w-[20px] cursor-pointer"
          onClick={handleClose}
        />
        <span className="text-3xl font-bold text-primary ">
          Let's make it personal
        </span>
        <span className="text-lg text-[#757575]">
          Select your interests to get event suggestions based on what you love
        </span>
        <div className="mt-5 flex flex-wrap gap-8 max-lg:items-center max-lg:justify-center">
          {interests.map((interest, index) => (
            <button
              key={index}
              className={`${buttonClasses} ${
                selected.includes(interest)
                  ? "bg-[#AF0000] text-white"
                  : "text-[#313131]"
              }`}
              onClick={() => toggleInterest(interest)}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>
    </>
  ) : null;
}
