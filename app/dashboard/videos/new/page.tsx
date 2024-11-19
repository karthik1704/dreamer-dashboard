import { Metadata } from "next";
import VideoAddForm from "./Videos-add-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getBatches } from "../../batches/services";

export const metadata: Metadata = {
  title: "Add New Video | Seyon Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function NewBatchPage() {

  const batches = await getBatches();

  return (
    <div>
      <Breadcrumb pageName="Video Add Form" />

      <VideoAddForm batches={batches}/>
    </div>
  );
}
