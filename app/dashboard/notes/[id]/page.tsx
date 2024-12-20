import { Metadata } from "next";
import NoteEditForm from "./notes-edit-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getNote } from "./services";
import { getBatches } from "../../batches/services";
import { getCategoriesWithoutRepeat } from "../categories/services";

export const metadata: Metadata = {
  title: "Edit Batch | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditNotesPage({ params }: Props) {
  const { id } = await params;
  const note = await getNote(id);
  const batches = await getBatches();
  const categories = await getCategoriesWithoutRepeat();

  return (
    <div>
      <Breadcrumb pageName="Notes Edit Form" />

      <NoteEditForm batches={batches} note={note} categories={categories} />
    </div>
  );
}
