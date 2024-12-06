import { Metadata } from "next";
import CategoryEditForm from "./category-edit-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getCategories } from "../services";
import { getCategory } from "./services";
import { getBatches } from "@/app/dashboard/batches/services";

export const metadata: Metadata = {
  title: "Edit Batch | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditCategoryPage({ params }: Props) {
  const { id } = await params;
  const category = await getCategory(id);
  const batches = await getBatches();

  return (
    <div>
      <Breadcrumb pageName="Note Category Edit Form" />

      <CategoryEditForm  category={category} batches={batches} />
    </div>
  );
}
