import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import AttendanceTable from "./attendance-table";

export const metadata: Metadata = {
  title: "Attendance | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function AttendancePage() {
  return (
    <div className="min-h-svh">
      <Breadcrumb pageName="Attendance" />
      <div className="flex justify-end">
        <Link
          href="attendance/new"
          className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 mb-5 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          New Attendance
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        < AttendanceTable/>
      </div>
    </div>
  );
}
