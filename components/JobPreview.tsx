import { BsDot } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { LiaCoinsSolid } from "react-icons/lia";
import Image from "next/image";
import figma from "../public/figma.svg";
import adobe1 from "../public/Adobe1.svg";
import adobexd from "../public/AdobeXD.svg";
import icon from "../public/icon.png";
import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineEdit } from "react-icons/md";
import { FiUsers, FiMessageSquare } from "react-icons/fi";
import { TbUserCheck } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";

export const JobPreview = () => {
  return (
    <section className="w-3/4 max-lg:w-full h-full border-white border-r-[#e7e7e7] border-2 flex flex-col gap-[2vw] py-[3vw] overflow-y-scroll">
      <div className="px-[5vw] flex flex-col gap-[1.5vw]">
        <div className="flex flex-wrap gap-2 items-center">
          <h1 className="text-4xl font-bold max-sm:text-2xl text-[#3d3d3d]">
            Senior Product Designer
          </h1>
          <BsDot className="text-2xl text-[#d1d1d1]" />
          <p className="text-[#888] ">posted 2 days ago</p>
          <div className="bg-[#ecfdf3] border-[#aaefc6] border-2 rounded-full flex items-center">
            <BsDot className="text-3xl text-[#17b26a]" />
            <p className="text-sm text-[#067647] font-semibold pr-4">Open</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <GrLocation className="text-2xl text-[#5d5d5d]" />
          <p className="text-[#5d5d5d] text-xl max-sm:text-base font-medium">
            Dalaware, USA
          </p>
          <BsDot className="text-2xl text-[#d1d1d1]" />
          <LiaCoinsSolid className="text-2xl text-[#5d5d5d]" />
          <p className="text-[#5d5d5d] text-xl font-medium max-sm:text-base">
            $300k-$400k
          </p>
        </div>
      </div>

      <hr className="border-[#e7e7e7] w-full" />

      <div className="px-[5vw] flex flex-wrap gap-[8vw] ">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#6e6d6d] font-medium">Skills Required</h2>
          <div className="rounded-lg border-2 w-fit p-1 border-[#d0d5dd] flex gap-1">
            <Image src={figma} alt="figma icon" />
            <p className="text-[#344054] text-xs font-medium">Figma</p>
          </div>
          <div className="rounded-lg border-2 w-fit p-1 border-[#d0d5dd] flex gap-1">
            <Image src={adobe1} alt="adobe icon" />
            <p className="text-[#344054] text-xs font-medium">
              Adobe Illustrator
            </p>
          </div>
          <div className="rounded-lg border-2 w-fit p-1 border-[#d0d5dd] flex gap-1">
            <Image src={adobexd} alt="adobe xd icon" />
            <p className="text-[#344054] text-xs font-medium">Adobe XD</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#6e6d6d] font-medium">Preferred Language</h2>
          <h2 className="text-[#3d3d3d] font-semibold">English</h2>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#6e6d6d] font-medium">Type</h2>
          <h2 className="text-[#3d3d3d] font-semibold">Full Time</h2>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#6e6d6d] font-medium">Years of Experience</h2>
          <h2 className="text-[#3d3d3d] font-semibold">
            3+ years of Experience
          </h2>
        </div>
      </div>

      <hr className="border-[#e7e7e7] w-full" />

      <div className="px-[5vw] flex flex-col gap-1 text-[#3d3d3d] font-semibold ">
        <h2 className="text-[#6e6d6d] text-sm font-semibold">About the Job</h2>
        <ol className="list-decimal flex flex-col gap-1 pl-5">
          <li>Handle the UI/UX Research Design</li>
          <li>
            Work on researching on latest web applications designs & trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic related works
          </li>
        </ol>
        <p>Benefits:</p>
        <ul className="list-disc pl-5">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        <p>Schedule:</p>
        <ul className="list-disc pl-5">
          <li>Day shift</li>
        </ul>
        <p>Supplemental pay types:</p>
        <ul className="list-disc pl-5">
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
        <p>Work Location: In person</p>
      </div>

      <hr className="border-[#e7e7e7] w-full" />

      <div className="px-[5vw] flex flex-col gap-[2vw]">
        <div className="flex gap-2 items-center text-[#4f4f4f] text-xl font-semibold">
          <Image src={icon} alt="Atlassian logo" />
          <p>Atlassian</p>
        </div>
        <div className="grid grid-cols-2 max-md:text-xs w-fit gap-x-[10vw] gap-y-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-[#6e6d6d] font-medium">Company Size</h2>
            <h2 className="text-[#3d3d3d] font-semibold">1k - 2k Followers</h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#6e6d6d] font-medium">Type</h2>
            <h2 className="text-[#3d3d3d] font-semibold">Private</h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#6e6d6d] font-medium">Sector</h2>
            <h2 className="text-[#3d3d3d] font-semibold">
              Information Technology, Infrastructure
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#6e6d6d] font-medium">Funding</h2>
            <h2 className="text-[#3d3d3d] font-semibold">Bootstrapped</h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#6e6d6d] font-medium">Founded in</h2>
            <h2 className="text-[#3d3d3d] font-semibold">2019</h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#6e6d6d] font-medium">Founded By</h2>
            <h2 className="text-[#3d3d3d] font-semibold">
              Scott Farquhar, Mike Cannon-Brookes
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#fcfcfc] px-4 py-8 lg:hidden">
        <div className="flex justify-around">
          <button className="rounded-lg border-2 border-[#dc4a2d] text-[#dc4a2d] px-5 py-2 flex justify-center items-center">
            <HiOutlineTrash className=" font-semibold" />
            <p className="text-xs">Delete job</p>
          </button>
          <button className="rounded-lg border-2 border-[#dc4a2d] bg-[#dc4a2d] text-white px-7 py-2 flex justify-center items-center">
            <MdOutlineEdit className=" font-semibold" />
            <p className="text-xs">Edit job</p>
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
    </section>
  );
};
