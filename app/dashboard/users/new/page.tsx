import { Metadata } from "next";
import UserAddForm from "./user-add-form";

export const metadata: Metadata = {
  title: "Add New User | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function NewUserPage() {
  return <div>

   <UserAddForm />
  </div>;
}
