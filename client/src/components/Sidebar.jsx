import {
  Clock,
  PenIcon,
  Send,
  Star,
  Inbox,
  Pen,
  Pencil,
  PencilIcon,
  LucidePencil,
  LucidePencilLine,
  FrameIcon,
  Frame,
  Image,
  ImageDownIcon,
} from "lucide-react";
import React from "react";

const Sidebar = ({ bar }) => {
  const menuitems = [
    {
      name: "inbox",
      icon: <ImageDownIcon className="w-5" />, // Added class for icon size
    },
    {
      name: "Starred",
      icon: <Star className="w-5" />, // Added class for icon size
    },
    {
      name: "Snoozed",
      icon: <Clock className="w-5" />, // Added class for icon size
    },
    {
      name: "sent",
      icon: <Send className="w-5" />, // Added class for icon size
    },
  ];
  return (
    <div
      className={`bg-lightgray ${
        bar ? "w-20" : "w-72"
      } transition-all ease-in-out duration-300 overflow-hidden w-72  h-[90vh]`}
    >
      <button
        className={`${
          bar && "px-3 py-2 transition-all" 
        } flex items-center gap-2 bg-btn px-6 py-4 rounded-2xl ml-4 mt-10 text-[#271D35]
       font-sansmedium`}
      >
        <LucidePencilLine className={` size-5`} />{" "}
        <span className={`${bar && "hidden"}`}>Compose</span>
      </button>
      <div className="  pt-4 pr-">
        {menuitems?.map((menu) => {
          return (
            <div
              className="flex pl-7 text-md rounded-r-full  hover:bg-[#D3E3FD] py-1 
            cursor-pointer items-center text-blk font-sansregular capitalize  gap-4"
            >
              <span className="">{menu?.icon}</span>
              <span className={`${bar && "hidden"}`}>{menu?.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
