import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import StudentsTable from "./student-table";

export const metadata: Metadata = {
  title: "Students | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function StudentsPage() {
  return (
    <div className="min-h-svh">
      <Breadcrumb pageName="Students" />
      <div className="flex justify-end">
        <Link
          href="students/new"
          className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 mb-5 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          New Students
        </Link>
      </div>
      
      <div className="flex flex-col gap-10">
        < StudentsTable/>
      </div>
    </div>
  );
}
