import { Metadata } from "next";
import AttendanceEditForm from "./attendance-edit-form";

export const metadata: Metadata = {
  title: "Edit Attendance Form | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function NewAttendancePage() {
  return <div>

   <AttendanceEditForm />
  </div>;
}
