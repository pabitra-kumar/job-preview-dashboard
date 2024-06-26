import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineEdit } from "react-icons/md";
import { FiUsers, FiMessageSquare } from "react-icons/fi";
import { TbUserCheck } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex w-full min-h-[80vh]">
      <div className="w-3/4 min-h-[80vh] border-white border-r-[#e7e7e7] border-2"></div>
      <div className="w-1/4 bg-[#fcfcfc] px-4 py-8 right-0 fixed min-h-[85vh]">
        <div className="flex justify-around">
          <button className="rounded-lg border-2 border-[#dc4a2d] text-[#dc4a2d] px-5 py-2 flex justify-center items-center gap-2">
            <HiOutlineTrash className="text-lg font-semibold" />
            <p>Delete job</p>
          </button>
          <button className="rounded-lg border-2 border-[#dc4a2d] bg-[#dc4a2d] text-white px-7 py-2 flex justify-center items-center gap-2">
            <MdOutlineEdit className="text-lg font-semibold" />
            <p>Edit job</p>
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-5 mx-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-[#4f4f4f]">
              <FiUsers className="text-lg font-semibold" />
              <p>Applicants</p>
            </div>
            <p className="text-[#3d3d3d]">400</p>
          </div>

          <hr className="border-[#e7e7e7]" />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-[#4f4f4f]">
              <TbUserCheck className="text-lg font-semibold" />
              <p>Matches</p>
            </div>
            <p className="text-[#3d3d3d]">100</p>
          </div>

          <hr className="border-[#e7e7e7]" />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-[#4f4f4f]">
              <FiMessageSquare className="text-lg font-semibold" />
              <p>Messages</p>
            </div>
            <p className="text-[#3d3d3d]">147</p>
          </div>

          <hr className="border-[#e7e7e7]" />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-[#4f4f4f]">
              <IoEyeOutline className="text-lg font-semibold" />
              <p>Views</p>
            </div>
            <p className="text-[#3d3d3d]">800</p>
          </div>
        </div>
      </div>
    </main>
  );
}
