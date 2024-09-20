import { Metadata } from "next";
import StudentsAddForm from "./student-add-form";

export const metadata: Metadata = {
  title: "Add New Students | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function NewStudentPage() {
  return <div>

   <StudentsAddForm />
  </div>;
}
