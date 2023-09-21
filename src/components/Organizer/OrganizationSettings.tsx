import { Button } from "@/core/ui/button";
export default function OrganizationSettings() {
  return (
    <>
      <div className="flex w-full flex-col p-10 max-sm:p-5">
        <div className="flex flex-col gap-5">
          <div className="flex w-full justify-between">
            <span className="text-2xl font-bold text-primary ">
              Organization Settings
            </span>
            <Button className="h-[38px] w-[180px] bg-btnprimary text-white hover:bg-btnsecondary">
              Add Organizer Profile
            </Button>
          </div>
          <div className="h-[1px] bg-[#0080FF]"></div>
          <div className="flex gap-5 max-md:flex-wrap"></div>
        </div>
      </div>
    </>
  );
}
