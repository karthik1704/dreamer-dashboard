'use server';


import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const getStudent = async (id:string) => {
    const access = (await cookies()).get('access');

    if (!access) {
        redirect('/signin');
    }

    const res = await fetch(`${SERVER_API_URL}/students/${id}/`, {
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
        console.error('Error fetching batches');
        console.error(res);
    }

    const student = await res.json();

    return student;


}