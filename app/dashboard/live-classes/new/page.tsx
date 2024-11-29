import { Metadata } from "next";
import NoteAddForm from "./notes-add-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getBatches } from "../../batches/services";

export const metadata: Metadata = {
  title: "Add New Note | Seyon Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function NewBatchPage() {

  const batches = await getBatches();

  return (
    <div>
      <Breadcrumb pageName="Note Add Form" />

      <NoteAddForm batches = {batches}/>
    </div>
  );
}
