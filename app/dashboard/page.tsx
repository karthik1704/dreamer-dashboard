import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Dreamer Dashboard | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default function Home() {
  return (
    <>
    
        <ECommerce />
      
    </>
  );
}
