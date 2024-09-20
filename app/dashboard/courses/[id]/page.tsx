import { Metadata } from "next";
import CoursesEditForm from "./courses-edit-form";

export const metadata: Metadata = {
  title: "Edit User | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function EditUserPage({params:{id}}: { params: { id: string } }) {

  return <div>

   <CoursesEditForm />
  </div>;
}
