import OrganizerProfileForm from "../Forms/OrganizerProfileForm";

export default function EditOrganizerProfile() {
  return (
    <>
      <div>
        <div className="flex w-full flex-col gap-5 p-10 max-sm:p-5">
          <span className="text-4xl font-bold text-primary max-sm:text-3xl">
            Edit Organizer Profile
          </span>
          <div>
            <OrganizerProfileForm />
          </div>
        </div>
      </div>
    </>
  );
}
