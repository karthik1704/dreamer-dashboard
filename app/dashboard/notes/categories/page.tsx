import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import CategoryTable from "./category-table";
import { getCategories } from "./services";

export const metadata: Metadata = {
  title: "Notes Categories | Seyon Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function BatchesPage() {
    const categories = await getCategories();
    

  return (
    <div className="min-h-svh">
      <Breadcrumb pageName="Notes Category" />
      <div className="flex justify-end">
        <Link
          href="categories/new"
          className="mb-5 inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          New Category
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        <CategoryTable categories={categories}/>
      </div>
    </div>
  );
}
