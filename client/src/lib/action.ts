"use server"

import { revalidatePath } from "next/cache"
import { makeRequest } from "./request";


const api = makeRequest('http://localhost:3000/api')

export async function getTasks() {
    const res = await api.get("/task", {cache: 'no-cache'})
    return res.data;
}

export async function addTask(formData: FormData) {
    const title = formData.get("title")
    const body = {
        userId: 1,
        title: title,
    }
    const res = await api.post("/task", body)
    revalidatePath('/')
    return res;
}

export async function deleteTask(id: number) {
    const res = await api.delete(`/task/${id}`)
    revalidatePath('/')
    return res;
}

export async function updateTask(id: number, data = {}) {
    const res = await api.patch(`/task/${id}`, data)
    revalidatePath('/')
    return res;
}