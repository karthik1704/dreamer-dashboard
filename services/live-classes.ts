'use server';


import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const getLiveClasses = async () => {
    const access = (await cookies()).get('access');

    if (!access) {
        redirect('/signin');
    }

    const res = await fetch(`${SERVER_API_URL}/live-classes/`, {
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
        console.error('Error fetching live classes');
        console.error(res);
    }

    const liveClasses = await res.json();

    return liveClasses;


}



export const getLiveClass = async (id:string) => {
    const access = (await cookies()).get('access');

    if (!access) {
        redirect('/signin');
    }

    const res = await fetch(`${SERVER_API_URL}/live-classes/${id}/`, {
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
        console.error('Error fetching live class');
        console.error(res);
    }

    const liveClass = await res.json();

    return liveClass;


}