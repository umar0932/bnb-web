import Image, { StaticImageData } from "next/image";
import CardCrossIcon from "../../../public/assets/cross_small_icon.svg";
import { useState } from "react";

interface Organizer {
  imageSrc: StaticImageData;
  name: string;
  countFollowers: string;
}

interface OrganizerCardProps {
  organizer: Organizer;
}

export default function FeaturedCard({ organizer }: OrganizerCardProps) {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const handleClose = () => {
    setIsVisible(false); // Set visibility to false when closing
  };
  return isVisible ? (
    <div className="card-drop-shadow flex min-w-[300px] flex-col rounded-3xl bg-[#F6FBFF] p-5">
      <div className="flex w-full justify-end">
        <div className="flex w-[35px] cursor-pointer rounded-full bg-[#F2F2F2] p-3">
          <Image src={CardCrossIcon} alt="cancel_icon" onClick={handleClose} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex items-center gap-5">
          <Image
            src={organizer.imageSrc}
            alt="organizer_logo"
            className="h-[90px] w-[90px]"
          />
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold text-primary">
              {organizer.name}
            </span>
            <span className="text-md text-[#757575]">
              {organizer.countFollowers} Followers
            </span>
          </div>
        </div>
        <button className="mt-5 w-[170px] rounded-lg bg-btnprimary p-2 text-white hover:bg-btnsecondary">
          Follow
        </button>
      </div>
    </div>
  ) : null;
}
