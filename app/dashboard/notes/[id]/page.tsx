import { Metadata } from "next";
import BatchesEditForm from "./batches-edit-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { get } from "http";
import { getBatch } from "./services";

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

    const batch = await getBatch(id);

  return (
    <div>
      <Breadcrumb pageName="Batch Edit Form" />

      <BatchesEditForm batch={batch} />
    </div>
  );
}
