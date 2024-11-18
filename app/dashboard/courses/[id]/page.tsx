import { Metadata } from "next";
import CoursesEditForm from "./courses-edit-form";

export const metadata: Metadata = {
  title: "Edit User | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function EditUserPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const {
    id
  } = params;

  return <div>

   <CoursesEditForm />
  </div>;
}
