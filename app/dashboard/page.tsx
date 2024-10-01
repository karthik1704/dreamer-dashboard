import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dreamer Dashboard | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function Home() {
  return <ECommerce />;
}
