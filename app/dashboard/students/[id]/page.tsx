import { Metadata } from "next";
import StudentsEditForm from "./students-edit-form";

export const metadata: Metadata = {
  title: "Edit Students Form | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function EditUserPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const {
    id
  } = params;

  return <div>

   <StudentsEditForm />
  </div>;
}
