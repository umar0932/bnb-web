import { Button } from "@/core/ui/button";
import { Checkbox } from "@/core/ui/checkbox";
export default function EmailPreferanceForm() {
  return (
    <>
      <div className="card-drop-shadow flex gap-10 rounded-lg bg-white p-10 max-sm:p-5">
        <div className="flex w-full flex-col">
          <span className="text-4xl font-bold text-primary max-sm:text-3xl">
            Linked Accounts
          </span>

          <div className="mt-5 h-[1px] bg-[#BEBEBE]"> </div>

          <div className="mt-5 flex  flex-col ">
            <span className="text-2xl">Attending Events</span>
            <span className="text-sm text-[#757575]">
              News and updates about events created by event organizers
            </span>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <span className="text-lg">Email me</span>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>Updates about new Bnb features and announcements</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>
                Requests for additional information on an event after you have
                attended
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>Updates about new Bnb features and announcements</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>
                Requests for additional information on an event after you have
                attended
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <span className="text-lg">Notifications</span>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>When an organizer you follow announces a new event</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>Receive updates on collections you follow</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>When an organizer you follow announces a new event</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>Receive updates on collections you follow</span>
            </div>
          </div>

          {/* Organizing Events */}
          <div className="mt-5 flex  flex-col ">
            <span className="text-2xl">Organizing Events</span>
            <span className="text-sm text-[#757575]">
              Helpful updates and tips for organizing events on Bnb
            </span>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <span className="text-lg">Email me</span>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>Monthly tips and tools for organizing events</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>Event Sales Recap</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>Monthly tips and tools for organizing events</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>Event Sales Recap</span>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <span className="text-lg">Notifications</span>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>Important reminders for my next event</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>Order confirmations from my attendees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>Important reminders for my next event</span>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="text-btnseondary" />
              <span>Order confirmations from my attendees</span>
            </div>
          </div>
          <Button className=" mt-5 flex w-[130px] bg-btnprimary font-bold text-white hover:bg-btnsecondary">
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
