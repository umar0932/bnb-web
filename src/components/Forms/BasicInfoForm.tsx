import BasicInfoIcon from "../../../public/assets/basic_info_icon.svg";
import { useFormik } from "formik";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../core/ui/select";
import Image from "next/image";
import { useState } from "react";
export default function BasicInfoForm() {
  const [charCount, setCharCount] = useState(0);
  const maxCharLimit = 75;
  const [tagsInput, setTagsInput] = useState("");
  const [tags, setTags] = useState([]);

  //   Checking Input should not exceed 75 characters limit
  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxCharLimit) {
      formik.handleChange(e); // Handle formik changes
      setCharCount(inputValue.length); // Update charCount
    }
  };

  //  Logic to check valid tags
  const handleTagsChange = (e: any) => {
    const inputValue = e.target.value;

    // Split the input by commas and trim whitespace
    const newTags = inputValue.split(",").map((tag: any) => tag.trim());

    // Filter out empty tags and tags exceeding 25 characters
    const validTags = newTags.filter(
      (tag: any) => tag !== "" && tag.length <= 25
    );

    // Update the tags input field if it doesn't exceed 10 tags
    if (validTags.length <= 10) {
      setTagsInput(inputValue);
      setTags(validTags);
    }
  };
  const formik = useFormik({
    initialValues: {
      event_title: "",
      organizer_name: "",
      tags: "",
    },
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
    },
  });
  return (
    <>
      <div className="flex flex-col rounded-lg bg-white p-10 max-sm:p-3">
        <div className="flex gap-2">
          <Image
            src={BasicInfoIcon}
            alt="basic_info_icon"
            className="mr-5 h-[35px] w-[25px] max-sm:mr-0 max-sm:h-[30px] max-sm:w-[25px]"
          />
          <div className="flex w-full flex-col">
            <span className="text-4xl font-bold text-primary max-sm:text-3xl">
              Basic Info
            </span>
            <span className="text-md text-[#757575] max-sm:text-sm">
              Name your event and tell event-goers why they should come. Add
              details that highlight what makes it unique.
            </span>

            {/* Form */}
            <form
              onSubmit={formik.handleSubmit}
              className="flex w-full flex-col "
            >
              {/* Event Title */}
              <div className="mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3">
                <span>
                  Event Title<span className="text-btnsecondary">*</span>
                </span>
                <input
                  className="h-[25px] bg-transparent outline-none placeholder:text-sm"
                  id="event_title"
                  name="event_title"
                  type="text"
                  placeholder="Be clear and descriptive"
                  onChange={handleInputChange} // Use custom function to handle input change
                  value={formik.values.event_title}
                  maxLength={maxCharLimit} // Set the maximum character limit
                />
              </div>
              <div className="mt-2 flex justify-end text-sm text-btnsecondary">
                {charCount}/{maxCharLimit}
              </div>

              {/* Organizer Name */}

              <div className="mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3">
                <span>Organizer</span>
                <input
                  className="h-[25px] bg-transparent outline-none placeholder:text-sm"
                  id="organizer_name"
                  name="organizer_name"
                  type="text"
                  placeholder="Tell Attendees who is organizing this event"
                  onChange={formik.handleChange}
                  value={formik.values.organizer_name}
                />
              </div>
              <span className="text-md mt-1 text-[#757575] max-sm:text-sm">
                This profile describes a unique organizer and shows all of the
                events on one page.{" "}
                <span className=" cursor-pointer text-[#1556AD] underline">
                  View Organizer Info
                </span>
              </span>

              <div className="mt-5 flex gap-20  max-md:flex-col max-md:gap-5">
                <div className="w-full ">
                  <Select>
                    <SelectTrigger className="w-full border-none bg-[#EFF8FF] text-[#757575]">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="party">Party</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full">
                  <Select>
                    <SelectTrigger className="w-full border-none bg-[#EFF8FF] text-[#757575]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="party">Party</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <span className="text-xl font-bold text-primary">Tags</span>
                <span className="text-md text-[#757575] max-sm:text-sm">
                  Improve discoverability of your event by adding tags relevant
                  to the subject matter.
                </span>
                <div className=" flex  flex-col rounded-lg bg-[#EFF8FF] p-3">
                  <span>Add Tags</span>
                  <input
                    className="h-[25px] bg-transparent outline-none placeholder:text-sm"
                    id="tags"
                    name="tags"
                    type="text"
                    placeholder="Add search keys"
                    onChange={handleTagsChange} // Use a custom function to handle input change
                    value={tagsInput}
                  />
                </div>
                <div className="flex flex-wrap">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="mb-2 mr-2 rounded-full bg-[#757575] px-2 py-1 text-sm text-white"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  <span className="text-btnsecondary">
                    {tags.length}/10 Tags
                  </span>
                  <span className="text-btnsecondary">
                    {tagsInput.length}/25
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
