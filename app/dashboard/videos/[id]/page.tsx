import { Metadata } from "next";
import BatchesEditForm from "./batches-edit-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import {  getVideo } from "./services";
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

    const video = await getVideo(id);
    const batches = await getBatches();

  return (
    <div>
      <Breadcrumb pageName="Video Edit Form" />

      <BatchesEditForm video={video} batches = {batches} />
    </div>
  );
}
