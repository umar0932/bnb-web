import FollowCard from "@/components/Cards/FollowCard";
import Header from "@/components/Header/Header";
import { Progress } from "@/core/ui/progress";
import Link from "next/link";
import CollectionLogo1 from "../../public/assets/Collection1_logo.svg";
import CollectionLogo2 from "../../public/assets/Collection2_logo.svg";
import CollectionLogo3 from "../../public/assets/Collection3_logo.svg";

export default function Location() {
  return (
    <>
      <div className="flex h-full flex-col  sm:h-screen">
        <Header />
        <div className="flex h-full flex-col lg:flex-row">
          <div className="flex w-full flex-col overflow-y-auto scroll-smooth  bg-[#EFF8FF] p-0 max-lg:order-2 sm:p-10 lg:w-1/2">
            <div className="m-5 bg-white p-5 sm:p-10 ">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary">
                  Curated Collections
                </span>
                <div className="mt-2 flex flex-col gap-3">
                  <FollowCard
                    title="The best virtual events you can attend from home"
                    SubTitle="30 upcoming events"
                    imageSrc={CollectionLogo1}
                  />
                  <FollowCard
                    title="The best virtual events you can attend from home"
                    SubTitle="30 upcoming events"
                    imageSrc={CollectionLogo2}
                  />
                  <FollowCard
                    title="The best virtual events you can attend from home"
                    SubTitle="30 upcoming events"
                    imageSrc={CollectionLogo3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center p-10 max-lg:order-1 lg:ml-10 lg:w-1/2">
            <div className="flex flex-col gap-5">
              <span className="text-5xl font-bold text-primary max-sm:text-4xl">
                Follow your
                <br className="max-sm:hidden" /> favorites
              </span>
              <span className="text-xl text-[#757575]">
                See the latest events from top organizers and{" "}
                <br className="max-sm:hidden" /> curated collections
              </span>
              <div className="flex flex-col gap-2">
                <Progress
                  value={100}
                  className="w-[70%] bg-[#B2DBFE] text-[#B2DBFE]"
                />
                <span className="text-secondary">
                  Step <span className="text-btnsecondary">3</span> of{" "}
                  <span className="text-btnsecondary">3</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="div-drop-shadow flex items-center justify-end gap-5 p-5">
          <Link href="/location">
            <button className="flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-[#DEF0FF] p-3 font-bold text-primary">
              Previous
            </button>
          </Link>
          <Link href="/">
            <button className="flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-btnprimary p-3 font-bold text-white hover:bg-btnsecondary">
              Finish
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
