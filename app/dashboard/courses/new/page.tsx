import { Metadata } from "next";
import CoursesAddForm from "./courses-add-form";

export const metadata: Metadata = {
  title: "Add New Courses | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function NewCoursesPage() {
  return <div>

   <CoursesAddForm />
  </div>;
}
