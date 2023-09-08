import React, { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/core/ui/sheet";

import { Menu, XCircle, Cross } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/core/ui/select";
import { useFormik } from "formik";

export default function Header({ colorScheme = "default" }) {
  const formik = useFormik({
    initialValues: { search: "" },
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
    },
  });

  const getButtonClasses = () => {
    if (colorScheme === "default") {
      return "text-secondary";
    } else if (colorScheme === "alternative") {
      return "text-white";
    } else if (colorScheme === "second-alternative") {
      return "text-white";
    }
  };

  return (
    <>
      <div className=" relative z-20  bg-transparent">
        <nav className="  bg-transparent p-5 lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="w-[50px] rounded-lg bg-white p-2 text-center">
              <span className="text-lg">Logo</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <span className="mx-2 block cursor-pointer text-3xl lg:hidden">
                  <Menu
                    size={25}
                    className={`text-${
                      colorScheme === "alternative" ? "white" : "secondary"
                    }`}
                  />
                </span>
              </SheetTrigger>
              <SheetContent>
                <ul className="my-10 flex w-full flex-col items-center justify-between gap-5 bg-transparent  transition-all duration-500 ease-in ">
                  <li className="mx-4 my-3 md:my-0">
                    <Select>
                      <SelectTrigger className="w-[110px] border-none  bg-transparent font-normal text-secondary outline-none">
                        <SelectValue placeholder="Organizer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel className=" font-normal">
                            Organize
                          </SelectLabel>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </li>
                  <li className="mx-4 my-6 md:my-0">
                    <Select>
                      <SelectTrigger className="w-[80px] border-none  bg-transparent font-normal text-secondary outline-none">
                        <SelectValue placeholder="Help" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel className=" font-normal">
                            Help
                          </SelectLabel>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </li>
                  <li className="mx-4 my-6 md:my-0">
                    <div className="flex  cursor-pointer items-center  gap-2 text-secondary">
                      <p className="min-w-[100px] text-sm font-normal">
                        Create an event
                      </p>
                      <Cross size={12} stroke="none" fill="#CC0001" />
                    </div>
                  </li>
                  <form onSubmit={formik.handleSubmit} className="mx-4">
                    <input
                      className="h-[30px] w-[230px] rounded-lg bg-navcolors p-3 text-xs font-normal italic placeholder-tertiary outline-none"
                      id="search"
                      name="search"
                      type="search"
                      placeholder="Search Event"
                      onChange={formik.handleChange}
                      value={formik.values.search}
                    />
                  </form>
                  <div className=" mx-4 my-6 flex max-w-[268px] items-center rounded-lg bg-btnprimary transition-all hover:bg-btnsecondary md:my-0">
                    <Link href="/login">
                      <button className="mx-2 bg-transparent px-2 py-2 text-white max-sm:text-sm ">
                        Login
                      </button>
                    </Link>
                    <div className="h-[30px] border border-[#878787] opacity-70 "></div>
                    <Link href="/signup">
                      <button
                        className="mx-2 bg-transparent px-2 py-2 text-white max-sm:text-sm"
                        // style={{ whiteSpace: "nowrap" }}
                      >
                        Sign Up
                      </button>
                    </Link>
                  </div>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
          {colorScheme !== "second-alternative" && (
            <ul
              className={`absolute display-${
                colorScheme === "second-alternative" ? "none" : ""
              }  left-0 top-[-400px] z-[-1] w-full gap-5 bg-transparent py-4 pl-7 opacity-0 transition-all duration-500 ease-in lg:static lg:z-auto lg:flex lg:items-center lg:justify-center lg:py-0 lg:pl-10 lg:opacity-100 `}
            >
              <li className="mx-6 my-6  md:my-0">
                <Select>
                  <SelectTrigger
                    className={`w-[110px] border-none text-${
                      colorScheme === "alternative" ? "white" : "secondary"
                    }  bg-transparent font-normal  outline-none`}
                  >
                    <SelectValue
                      placeholder="Organizer"
                      className="text-[30px]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className=" font-normal ">
                        Organize
                      </SelectLabel>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              <li className="mx-6 my-6 md:my-0">
                <Select>
                  <SelectTrigger
                    className={`w-[80px] border-none  bg-transparent font-normal text-${
                      colorScheme === "alternative" ? "white" : "secondary"
                    }  outline-none`}
                  >
                    <SelectValue placeholder="Help" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className=" font-normal">Help</SelectLabel>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              <li className="mx-6 my-6 min-w-[150px]  md:my-0">
                <div
                  className={`flex cursor-pointer items-center  gap-2 text-secondary text-${
                    colorScheme === "alternative" ? "white" : "secondary"
                  } `}
                >
                  <p className="text-sm font-normal ">Create an event</p>
                  <Cross size={12} stroke="none" fill="#CC0001" />
                </div>
              </li>
            </ul>
          )}
          {colorScheme !== "second-alternative" && (
            <div>
              <form onSubmit={formik.handleSubmit} className="mx-4">
                <input
                  className=" mr-4 hidden h-[30px] w-[260px] rounded-lg bg-navcolors p-4 text-xs font-normal italic placeholder-tertiary outline-none max-xl:w-[210px] lg:flex"
                  id="search"
                  name="search"
                  type="search"
                  placeholder="Search Event"
                  onChange={formik.handleChange}
                  value={formik.values.search}
                />
              </form>
            </div>
          )}
          <div className="flex h-full min-w-[328px] items-center justify-evenly rounded-lg bg-btnprimary  p-1 transition-all hover:bg-btnsecondary max-xl:min-w-[128px] max-xl:flex-col max-lg:hidden md:my-0 lg:opacity-100">
            <Link href="/login">
              <button className=" bg-transparent  text-white max-sm:text-sm ">
                Login
              </button>
            </Link>
            <div className="h-[25px] border border-[#878787] border-opacity-50 max-xl:hidden max-xl:h-0"></div>
            <Link href="/signup">
              <button className="bg-transparent text-white  max-xl:border-t-2 max-xl:border-[#878787] max-xl:border-opacity-60 max-sm:text-sm">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
        <div className="mx-5 border-b border-b-[#00437A]"></div>
      </div>
    </>
  );
}
