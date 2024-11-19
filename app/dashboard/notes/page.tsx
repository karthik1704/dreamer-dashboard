import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import BatchesTable from "./notes-table";
import { getNotes } from "./services";

export const metadata: Metadata = {
  title: "Notes | Seyon Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function BatchesPage() {
    const notes = await getNotes();
    

  return (
    <div className="min-h-svh">
      <Breadcrumb pageName="Notes" />
      <div className="flex justify-end">
        <Link
          href="notes/new"
          className="mb-5 inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          New Note
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        <BatchesTable notes={notes}/>
      </div>
    </div>
  );
}
