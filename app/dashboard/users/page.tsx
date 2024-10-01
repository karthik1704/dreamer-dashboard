import { Metadata } from "next";
import UserTable from "./user-table";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import { APP_TITLE } from "@/app/constants";
import { getUsers } from "./api";

export const metadata: Metadata = {
  title:  `Users | ${APP_TITLE} `,
  description: "Admin dashboard for dreamer academy",
};



export default async function UserPage() {
  const users = await getUsers();
console.log(users)

  return (
    <div className="min-h-svh">
      <Breadcrumb pageName="Users" />
      <div className="flex justify-end">
        <Link
          href="users/new"
          className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 mb-5 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          New User
        </Link>
      </div> 

      
      <div className="flex flex-col gap-10">


        <UserTable users={users}/>
        
      </div>
    </div>
  );
}
