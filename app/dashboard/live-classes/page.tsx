import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import LiveClassTable from "./live-class-table";
import { getLiveClasses } from "@/services/live-classes";

export const metadata: Metadata = {
  title: "Notes | Seyon Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function BatchesPage() {
    const notes = await getLiveClasses();
    

  return (
    <div className="min-h-svh">
      <Breadcrumb pageName="LIve Classes" />
      <div className="flex justify-end">
        <Link
          href="live-classes/new"
          className="mb-5 inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          New Live Class
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        <LiveClassTable lives={notes}/>
      </div>
    </div>
  );
}
