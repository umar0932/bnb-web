import React, { useState } from "react";
import Link from "next/link";
import UserProfileIcon from "../../../public/assets/user_profile_icon.svg";
import TicketIconRed from "../../../public/assets/ticket_icon_red.svg";

import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/core/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/core/ui/dropdown-menu";

import { Menu, XCircle, Heart, Cross } from "lucide-react";
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
export default function AuthHeader({ colorScheme = "default" }) {
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
                  <li className="my-6 min-w-[150px]  md:my-0">
                    <div>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none">
                          <div className="flex  cursor-pointer items-center  gap-2 text-secondary">
                            johndoe@gmail.com
                            <Image
                              src={UserProfileIcon}
                              alt="user-profile-icon"
                              className="h-[17px] w-[17px]"
                            />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="cursor-pointer bg-[#07264E] p-3 text-white">
                          <DropdownMenuItem className="cursor-pointer">
                            Switch to attendee
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            Account Settings
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            Logout
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </li>

                  <li className="mx-4 my-6 md:my-0">
                    <div className="flex  cursor-pointer items-center  gap-2 text-secondary">
                      <p className="min-w-[100px] text-sm font-normal">
                        Create an event
                      </p>
                      <Cross size={12} stroke="none" fill="#CC0001" />
                    </div>
                  </li>
                  <li className="mx-4 my-6 md:my-0">
                    <div className="flex  cursor-pointer items-center  gap-2 text-secondary">
                      <p className="min-w-[100px] text-sm font-normal">Like</p>
                      <Heart size={14} stroke="none" fill="#CC0001" />
                    </div>
                  </li>
                  <li className="mx-4 my-6 md:my-0">
                    <div className="flex  cursor-pointer items-center  gap-2 text-secondary">
                      <p className="min-w-[100px] text-sm font-normal">
                        Tickets
                      </p>
                      <Image
                        src={TicketIconRed}
                        alt="ticket_icon"
                        className="h-[15px] w-[15px]"
                      />
                    </div>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
          {colorScheme !== "second-alternative" && (
            <ul
              className={`absolute display-${
                colorScheme === "second-alternative" ? "none" : ""
              }  left-0 top-[-400px] z-[-1] w-full gap-5 bg-transparent py-4 pl-7 opacity-0 transition-all duration-500 ease-in lg:static lg:z-auto lg:flex lg:items-center lg:justify-end lg:py-0 lg:pl-5 lg:opacity-100 `}
            >
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
              <li className="mx-6 my-6   md:my-0">
                <div
                  className={`flex cursor-pointer items-center  gap-2 text-secondary text-${
                    colorScheme === "alternative" ? "white" : "secondary"
                  } `}
                >
                  <p className="text-sm font-normal ">Like</p>
                  <Heart size={14} stroke="#CC0001" />
                </div>
              </li>
              <li className="mx-6 my-6   md:my-0">
                <div
                  className={`flex cursor-pointer items-center  gap-2 text-secondary text-${
                    colorScheme === "alternative" ? "white" : "secondary"
                  } `}
                >
                  <p className="text-sm font-normal ">Tickets</p>
                  <Image
                    src={TicketIconRed}
                    alt="ticket_icon"
                    className="h-[15px] w-[15px]"
                  />
                </div>
              </li>
              <li className="my-6 min-w-[150px]  md:my-0">
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none">
                      <div
                        className={`flex cursor-pointer items-center  gap-2 text-secondary text-${
                          colorScheme === "alternative" ? "white" : "secondary"
                        } `}
                      >
                        johndoe@gmail.com
                        <Image
                          src={UserProfileIcon}
                          alt="user-profile-icon"
                          className="h-[17px] w-[17px]"
                        />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="cursor-pointer bg-[#07264E] p-3 text-white">
                      <DropdownMenuItem className="cursor-pointer">
                        Switch to attendee
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Account Settings
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
            </ul>
          )}
        </nav>
        <div className="mx-5 border-b border-b-[#00437A]"></div>
      </div>
      {/* Event Page */}
    </>
  );
}
