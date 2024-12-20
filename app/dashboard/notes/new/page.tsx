import { Metadata } from "next";
import NoteAddForm from "./notes-add-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getBatches } from "../../batches/services";
import { getCategoriesWithoutRepeat } from "../categories/services";

export const metadata: Metadata = {
  title: "Add New Note | Seyon Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function NewBatchPage() {

  const batches = await getBatches();
  const categories = await getCategoriesWithoutRepeat();


  return (
    <div>
      <Breadcrumb pageName="Note Add Form" />

      <NoteAddForm batches = {batches} categories={categories}/>
    </div>
  );
}
