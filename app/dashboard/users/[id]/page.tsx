import { Metadata } from "next";
import UserEditForm from "./user-edit-form";

export const metadata: Metadata = {
  title: "Edit User | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function EditUserPage({params:{id}}: { params: { id: string } }) {

  return <div>

   <UserEditForm />
  </div>;
}
