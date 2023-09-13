import BasicInfoForm from "@/components/Forms/BasicInfoForm";
import DateTimeForm from "@/components/Forms/DateTimeForm";
import LocationForm from "@/components/Forms/LocationForm";
import Link from "next/link";

export default function CreateEvent() {
  return (
    <>
      <div className="flex flex-col bg-[#F1F9FF] p-10 max-sm:p-5">
        <BasicInfoForm />
        <LocationForm />
        <DateTimeForm />
        <div className="mt-10 flex w-full justify-end gap-10 max-sm:flex-col max-sm:items-center max-sm:gap-5">
          <Link href="/create-event-page/first-step">
            <button className="flex h-[43px] w-[170px] items-center justify-center rounded-sm bg-[#DEF0FF] p-4 font-bold text-primary max-sm:w-[160px]">
              Discard
            </button>
          </Link>
          <Link href="/create-event-page/third-step">
            <button className="flex h-[43px] w-[170px] items-center justify-center rounded-sm bg-btnprimary p-4 font-bold text-white hover:bg-btnsecondary max-sm:w-[160px]">
              Save & Continue
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
