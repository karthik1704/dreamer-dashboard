import { Metadata } from "next";
import VideoEditForm from "./video-edit-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import {  getVideo } from "./services";
import { getBatches } from "../../batches/services";

export const metadata: Metadata = {
  title: "Edit Batch | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

interface Props {
  params:Promise<{ id: string }>;

}

export default async function EditBatchesPage({params}: Props) {
    const {id} = await params;
    const video = await getVideo(id);
    const batches = await getBatches();

  return (
    <div>
      <Breadcrumb pageName="Video Edit Form" />

      <VideoEditForm video={video} batches = {batches} />
    </div>
  );
}
