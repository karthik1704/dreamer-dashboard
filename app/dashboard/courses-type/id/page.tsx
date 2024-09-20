import { Metadata } from "next";
import CoursesTypeAddForm from "./courses-type-edit-form";

export const metadata: Metadata = {
  title: "Add New Courses Type | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function NewCoursesTypePage() {
  return <div>

   <CoursesTypeAddForm />
  </div>;
}
