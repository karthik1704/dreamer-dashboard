import { Metadata } from "next";
import PasswordChangeForm from "./password-change-form";

export const metadata: Metadata = {
  title: "Password Change | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function NewPasswordrPage() {
  return <div>

   <PasswordChangeForm />
  </div>;
}
