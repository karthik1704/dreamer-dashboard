import { Metadata } from "next";
import UsersEditForm from "./user-edit-form";

export const metadata: Metadata = {
  title: "Edit User Form | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function EditUserPage({params:{id}}: { params: { id: string } }) {

  return <div>

   <UsersEditForm />

  </div>;
}
