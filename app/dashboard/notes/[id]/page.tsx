import { Metadata } from "next";
import NoteEditForm from "./notes-edit-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import {  getNote } from "./services";
import { getBatches } from "../../batches/services";

export const metadata: Metadata = {
  title: "Edit Batch | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

interface Props {
  params: {
    id: string;
  };
}

export default async function EditBatchesPage({params: {id}}: Props) {

    const note = await getNote(id);
    const batches = await getBatches();

  return (
    <div>
      <Breadcrumb pageName="Batch Edit Form" />

      <NoteEditForm batches={batches}  note={note}/>
    </div>
  );
}