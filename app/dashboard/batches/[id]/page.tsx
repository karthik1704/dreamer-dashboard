import { Metadata } from "next";
import BatchesEditForm from "./batches-edit-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getBatch } from "./services";

export const metadata: Metadata = {
  title: "Edit Batch | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

interface Props {
  params:Promise<{ id: string }>;
}

export default async function EditBatchesPage({params}: Props) {
    const {id} = await params;
    const batch = await getBatch(id);

  return (
    <div>
      <Breadcrumb pageName="Batch Edit Form" />

      <BatchesEditForm batch={batch} />
    </div>
  );
}
