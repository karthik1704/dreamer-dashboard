"use server";

import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getUsers = async () => {
  const access = (await cookies()).get("access");
  if (!access) {
    redirect("/signin");
  }
  const res = await fetch(`${SERVER_API_URL}/users/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access.value}`,
    },
  });
  if (res.status === 401) {
    redirect("/signin");
  }
  if (res.status !== 200) {
    console.log("Error fetching users");
    console.error(res);
  }
  const users = await res.json();

  return users;
};

export const getCurrentUser = async () => {
  const access = (await cookies()).get("access");
  if (!access) {
    redirect("/signin");
  }
  const res = await fetch(`${SERVER_API_URL}/users/me/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access.value}`,
    },
  });
  if (res.status === 401) {
    redirect("/signin");
  }
  if (res.status !== 200) {
    console.log("Error fetching users");
    console.error(res);
  }
  const users = await res.json();

  return users;
};
