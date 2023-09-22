import StaticImage from "next/image";
import Logo from "../../../public/assets/logo.jpg";
import Link from "next/link";
import Copyright from "../Copyright/Copyright";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/core/ui/select";

export default function Footer() {
  return (
    <div className=" w-full">
      <footer className=" bg-primary px-6 py-6">
        <div
          className="flex flex-col  justify-between md:flex-row"
          style={{ borderBottomColor: "#00437A", borderBottomWidth: "1px" }}
        >
          <div className="mt-4 flex flex-shrink-0 justify-center">
            <div className="flex h-[50px] w-[100px] items-center justify-center rounded-xl bg-white text-center">
              Logo
            </div>
          </div>
          <div className="container  p-6 px-16 md:flex md:flex-wrap md:justify-between">
            <div className="flex flex-col max-md:items-center max-md:justify-center ">
              <span className="mb-2 text-xl font-bold text-btnsecondary md:text-2xl">
                Helpful links
              </span>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Create Events
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Pricing
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Resource
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Contact sales
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Find your tickets
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer text-center font-normal text-navcolors hover:text-white"
              >
                Contact an organizer
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Visit help center
              </Link>
            </div>
            <div className="flex flex-col max-md:items-center max-md:justify-center">
              <span className="mb-2 text-xl font-bold text-btnsecondary md:text-2xl">
                Discover more
              </span>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Sale ticket online
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Event planning
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer text-center font-normal text-navcolors hover:text-white"
              >
                Event payment system
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Blogs
              </Link>
            </div>
            <div className="flex flex-col max-md:items-center max-md:justify-center">
              <span className="mb-2 text-xl font-bold text-btnsecondary md:text-2xl">
                Contact us
              </span>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Contact support
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Twitter
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Facebook
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Linkedin
              </Link>
              <Link
                href="/"
                className="mb-0.5 cursor-pointer font-normal text-navcolors hover:text-white"
              >
                Instagram
              </Link>
            </div>
            <div className="flex flex-col max-md:items-center max-md:justify-center">
              <span className="mb-2 text-2xl  font-bold text-btnsecondary md:text-2xl">
                Language
              </span>
              <Select>
                <SelectTrigger className="w-[120px] border-none  bg-transparent font-normal text-navcolors outline-none">
                  <SelectValue placeholder="United State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className=" font-normal">
                      United State
                    </SelectLabel>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex-col p-4 ">
              <div className="mt-3 flex h-14 w-48 cursor-pointer items-center justify-center rounded-lg bg-white text-black">
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width={30}>
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    />
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    />
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    />
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    Google Play
                  </div>
                </div>
              </div>

              <div className="mt-3 flex h-14 w-48 cursor-pointer items-center justify-center rounded-xl bg-white text-black">
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width={30}>
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-2xl font-semibold">
                    App Store
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </div>
  );
}
