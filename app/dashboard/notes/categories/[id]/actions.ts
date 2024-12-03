"use server";

import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const updateCategory = async (id:string,formData: any) => {
  const data = formData;

  const access = (await cookies()).get("access");
  if (!access) {
    redirect("/signin");
  }

  const response = await fetch(`${SERVER_API_URL}/notes/categories/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access.value}`,
    },
    body: JSON.stringify(data),
  });

  if (response.status === 401) {
    redirect("/signin");
  }
  if (response.status !== 204) {
    console.error("Error creating bathes");
    const resjson = await response.json();
    console.error(resjson);
    console.error(resjson.detail[0].loc);
    console.error(resjson.detail[0].input);
  }

  response.status === 204 && redirect("/dashboard/notes/categories");
};
