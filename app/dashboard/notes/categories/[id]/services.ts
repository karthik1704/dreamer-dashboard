'use server';


import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const getCategory = async (id:string) => {
    const access = (await cookies()).get('access');

    if (!access) {
        redirect('/signin');
    }

    const res = await fetch(`${SERVER_API_URL}/notes/categories/${id}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${access.value}`
        }
    });

    if (res.status === 401) {
        redirect('/signin');
    }

    if (res.status !== 200) {
        console.error('Error fetching category');
        console.error(res);
    }

    const category = await res.json();

    return category;


}