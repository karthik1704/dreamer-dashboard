import { Metadata } from "next";
import CategoryAddForm from "./category-add-form";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import {  getCategoriesWithoutRepeat } from "../services";
import { getBatches } from "@/app/dashboard/batches/services";

export const metadata: Metadata = {
  title: "Add New Note | Seyon Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function NewBatchPage() {

  const batches = await getBatches();

  return (
    <div>
      <Breadcrumb pageName="Video Category Add Form" />

      <CategoryAddForm  batches={batches} />
    </div>
  );
}
