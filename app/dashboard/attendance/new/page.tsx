import { Metadata } from "next";
import AttendanceAddForm from "./attendance-add-form";

export const metadata: Metadata = {
  title: "Add New Attendance | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function NewAttendancePage() {
  return <div>

   <AttendanceAddForm />
  </div>;
}
