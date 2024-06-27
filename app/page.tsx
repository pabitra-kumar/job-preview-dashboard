import { SideBar } from "@/components/SideBar";
import { JobPreview } from "@/components/JobPreview";

export default function Home() {
  return (
    <main className="flex flex-row w-full h-[82vh] max-lg:flex-col">
      <JobPreview />
      <SideBar />
    </main>
  );
}
