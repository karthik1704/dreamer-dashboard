import { Metadata } from "next";
import UsersAddForm from "./user-add-form";
import { APP_TITLE } from "@/app/constants";

export const metadata: Metadata = {
  title:  `New User | ${APP_TITLE} `,
  description: "Admin dashboard for dreamer academy",
};

export default function NewUserPage() {
  return <div>

   <UsersAddForm />
  </div>;
}
