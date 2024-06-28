import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineEdit } from "react-icons/md";
import { FiUsers, FiMessageSquare } from "react-icons/fi";
import { TbUserCheck } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";

export const SideBar = () => {
  return (
    <div className="w-1/4 bg-[#fcfcfc] px-2 py-5 right-0 fixed h-full max-lg:hidden">
      <div className="flex justify-around">
        <button className="rounded-lg border-2 border-[#dc4a2d] text-[#dc4a2d] px-5 py-2 flex justify-center items-center gap-2">
          <HiOutlineTrash className=" font-semibold" />
          <p className="text-xs">Delete job</p>
        </button>
        <button className="rounded-lg border-2 gap-2 border-[#dc4a2d] bg-[#dc4a2d] text-white px-7 py-2 flex justify-center items-center">
          <MdOutlineEdit className=" font-semibold" />
          <p className="text-xs">Edit job</p>
        </button>
      </div>

      <div className="mt-7 flex flex-col gap-3 mx-4">
        <div className="flex justify-between text-xs font-semibold items-center">
          <div className="flex items-center gap-2 font-medium text-[#4f4f4f]">
            <FiUsers className="text-sm font-semibold" />
            <p>Applicants</p>
          </div>
          <p className="text-[#3d3d3d]">400</p>
        </div>

        <hr className="border-[#e7e7e7]" />

        <div className="flex justify-between text-xs font-semibold items-center">
          <div className="flex items-center font-medium gap-2 text-[#4f4f4f]">
            <TbUserCheck className="text-sm font-semibold" />
            <p>Matches</p>
          </div>
          <p className="text-[#3d3d3d]">100</p>
        </div>

        <hr className="border-[#e7e7e7]" />

        <div className="flex justify-between text-xs font-semibold items-center">
          <div className="flex items-center font-medium gap-2 text-[#4f4f4f]">
            <FiMessageSquare className="text-sm font-semibold" />
            <p>Messages</p>
          </div>
          <p className="text-[#3d3d3d]">147</p>
        </div>

        <hr className="border-[#e7e7e7]" />

        <div className="flex justify-between text-xs font-semibold items-center">
          <div className="flex items-center font-medium gap-2 text-[#4f4f4f]">
            <IoEyeOutline className="text-sm font-semibold" />
            <p>Views</p>
          </div>
          <p className="text-[#3d3d3d]">800</p>
        </div>
      </div>
    </div>
  );
};
