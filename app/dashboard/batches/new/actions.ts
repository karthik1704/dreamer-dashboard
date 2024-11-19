"use server";

import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const createBatch = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  const access = (await cookies()).get("access");
  if (!access) {
    redirect("/signin");
  }

  const response = await fetch(`${SERVER_API_URL}/batches/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access.value}`,
    },
    body: JSON.stringify(data),
  });

  if (response.status === 401) {
    redirect("/signin");
  }
  if (response.status !== 201) {
    console.error("Error creating bathes");
    const resjson = await response.json();
    console.error(resjson);
    console.error(resjson.detail[0].loc);
    console.error(resjson.detail[0].input);
  }

  response.status === 201 && redirect("/dashboard/batches");
};
