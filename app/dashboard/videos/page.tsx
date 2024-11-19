import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import VidoesTable from "./videos-table";
import { getVideos } from "./services";

export const metadata: Metadata = {
  title: "Videos | Seyon Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function BatchesPage() {
    const videos = await getVideos();
    

  return (
    <div className="min-h-svh">
      <Breadcrumb pageName="Videos" />
      <div className="flex justify-end">
        <Link
          href="videos/new"
          className="mb-5 inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          New Video
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        <VidoesTable videos={videos}/>
      </div>
    </div>
  );
}
