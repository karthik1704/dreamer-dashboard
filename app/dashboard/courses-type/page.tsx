import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import CoursesType from "./courses-type-table";

export const metadata: Metadata = {
  title: "Courses Type | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function CoursesTypePage() {
  return (
    <div className="min-h-svh">
      <Breadcrumb pageName="Courses" />
      <div className="flex justify-end">
        <Link
          href="courses-type/new"
          className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 mb-5 text-center font-medium text-black hover:bg-opacity-90 dark:text-white dark:border-white lg:px-8 xl:px-10"
        >
          Add New Courses
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        < CoursesType/>
      </div>
    </div>
  );
}
