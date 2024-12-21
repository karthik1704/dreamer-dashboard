import { Metadata } from "next";
import LiveEditForm from "./live-edit-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getBatches } from "../../batches/services";
import { getLiveClass } from "@/services/live-classes";

export const metadata: Metadata = {
  title: "Edit Batch | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditBatchesPage({ params }: Props) {
  const { id } = await params;
  const note = await getLiveClass(id);
  const batches = await getBatches();

  return (
    <div>
      <Breadcrumb pageName="Live Class Edit Form" />

      <LiveEditForm batches={batches} liveClass={note} />
    </div>
  );
}
