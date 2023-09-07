import React, { useState } from "react";

export default function TrendingCategories() {
  const [selectedSpan, setSelectedSpan] = useState("All");

  const handleSpanClick = (spanText: string) => {
    setSelectedSpan(spanText);
  };

  const getSpanStyle = (spanText: string) => {
    return {
      fontSize: "16px",
      color: selectedSpan === spanText ? "#AF0000" : "#757575",
      borderBottom: selectedSpan === spanText ? "2px solid #AF0000" : "none",
      cursor: "pointer",
    };
  };

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
      <div className="flex min-h-[450px] flex-col gap-3 bg-[#DEF0FF] p-10">
        <span className="text-3xl font-bold text-[#313131]">
          Trending Categories
        </span>
        <div className="flex flex-wrap gap-3 p-1">
          <span
            style={getSpanStyle("All")}
            onClick={() => handleSpanClick("All")}
          >
            All
          </span>
          <span
            style={getSpanStyle("Online")}
            onClick={() => handleSpanClick("Online")}
          >
            Online
          </span>
          <span
            style={getSpanStyle("On-site")}
            onClick={() => handleSpanClick("On-site")}
          >
            On-site
          </span>
          <span
            style={getSpanStyle("Today")}
            onClick={() => handleSpanClick("Today")}
          >
            Today
          </span>
          <span
            style={getSpanStyle("Tomorrow")}
            onClick={() => handleSpanClick("Tomorrow")}
          >
            Tomorrow
          </span>
          <span
            style={getSpanStyle("This weekend")}
            onClick={() => handleSpanClick("This weekend")}
          >
            This weekend
          </span>
        </div>
        <div className="mt-5 flex flex-wrap gap-8 max-lg:items-center max-lg:justify-center">
          {interests.map((interest, index) => (
            <button
              key={index}
              className={`${buttonClasses} ${
                selected.includes(interest)
                  ? "bg-[#AF0001] text-white"
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
