import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getCurrentUser } from "./users/api";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <DefaultLayout user={user}>{ children}</DefaultLayout>
    </div>
  );
}
