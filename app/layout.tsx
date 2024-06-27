import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FiBriefcase, FiMessageSquare, FiChevronDown } from "react-icons/fi";
import { PiHandCoins } from "react-icons/pi";
import { LuBell } from "react-icons/lu";
import Image from "next/image";
import icon from "../public/icon.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Preview DashBoard",
  description: "Dashboard for job preview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-full py-3 px-5 flex justify-between items-center border-white border-b-[#e7e7e7] border-2 overflow-x-scroll no-scrollbar">
          <div className="p-3 text-[#dc4a2d] bg-[#e7e7e7] font-bold cursor-pointer">
            Logo
          </div>

          <div className="rounded-full border-[#e7e7e7] text-[#b0b0b0] border-2 text-sm flex gap-10 p-1 max-sm:hidden max-sm:w-0">
            <div className="rounded-full bg-[#dc4a2d] text-white p-3 flex items-center gap-1 font-semibold cursor-pointer">
              <FiBriefcase className="text-lg font-semibold" />
              <p>Jobs</p>
            </div>
            <div className="rounded-full p-3 flex items-center gap-1 font-semibold cursor-pointer">
              <FiMessageSquare className="text-lg  font-semibold" />
              <p> Messages </p>
            </div>
            <div className="rounded-full p-3 flex items-end gap-1 font-semibold cursor-pointer">
              <PiHandCoins className="text-lg font-semibold" />
              <p> Payments </p>
            </div>
          </div>

          <div className="gap-3 flex items-center">
            <LuBell className="text-2xl font-semibold cursor-pointer" />
            <div className="flex gap-1 items-center cursor-pointer">
              <Image
                src={icon}
                alt="picture of user"
                className="rounded-full w-1/2"
              />
              <FiChevronDown className="text-lg font-semibold cursor-pointer" />
            </div>
          </div>
        </nav>
        <nav className="px-20 flex gap-14 border-white border-b-[#e7e7e7] text-[#b0b0b0] border-2 text-sm font-semibold w-full overflow-x-scroll no-scrollbar ">
          <div className="py-3 text-[#dc4a2d] relative cursor-pointer">
            Job preview
            <hr className="absolute bottom-0 w-1/2 left-1/2 -translate-x-1/2 border-[#dc4a2d] border-[1.5px]" />
          </div>
          <div className="py-3 cursor-pointer">Applicants</div>
          <div className="py-3 cursor-pointer">Match</div>
          <div className="py-3 cursor-pointer">Messages</div>
        </nav>
        {children}
        <nav className="fixed bottom-3 flex justify-center items-center w-full sm:hidden">
          <div className="rounded-full border-[#e7e7e7] text-[#3d3d3d] border-2 text-xs flex gap-3 p-1 bg-[#e3eaeb79] w-fit mx-10">
            <div className="rounded-full bg-[#dc4a2d] text-white p-3 flex items-center gap-1 font-semibold cursor-pointer">
              <FiBriefcase className=" font-semibold" />
              <p>Jobs</p>
            </div>
            <div className="rounded-full p-3 flex items-center gap-1 font-semibold cursor-pointer">
              <FiMessageSquare className="font-semibold" />
              <p> Messages </p>
            </div>
            <div className="rounded-full p-3 flex items-end gap-1 font-semibold cursor-pointer">
              <PiHandCoins className="font-semibold" />
              <p> Payments </p>
            </div>
          </div>
        </nav>
      </body>
    </html>
  );
}
