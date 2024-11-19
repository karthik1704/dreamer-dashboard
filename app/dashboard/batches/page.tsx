import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import BatchesTable from "./batches-table";
import { getBatches } from "./services";

export const metadata: Metadata = {
  title: "Batches | Seyon Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function BatchesPage() {
    const batches = await getBatches();
    

  return (
    <div className="min-h-svh">
      <Breadcrumb pageName="Notes" />
      <div className="flex justify-end">
        <Link
          href="batches/new"
          className="mb-5 inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          New Batch
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        <BatchesTable batches={batches}/>
      </div>
    </div>
  );
}
