import { Metadata } from "next";
import BatchAddForm from "./batches-add-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Add New Batch | Seyon Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function NewVideoPage() {
  return (
    <div>
      <Breadcrumb pageName="Batch Add Form" />

      <BatchAddForm />
    </div>
  );
}
