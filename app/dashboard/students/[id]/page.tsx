import { Metadata } from "next";
import StudentsEditForm from "./students-edit-form";

export const metadata: Metadata = {
  title: "Edit Students Form | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function EditUserPage({params:{id}}: { params: { id: string } }) {

  return <div>

   <StudentsEditForm />
  </div>;
}
