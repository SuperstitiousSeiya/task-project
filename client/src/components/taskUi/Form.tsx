"use client"

import { addTask } from "@/lib/action";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { SubmitButton } from "./SubmitButton";


const initialValues = {
    title: "",
}

export default function AddTaskForm() {

    const ref = useRef<HTMLFormElement>(null)

    return (
        <form className="flex items-center mb-4" action={
            async (formData) => {
                await addTask(formData)
                ref.current?.reset()
            }
        } ref={ref}>
       <div className="flex w-full gap-2">
             <Input
                 type="text"
                 name="title"
                 placeholder="Add a new task"
                 className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
             />
             <SubmitButton />
       </div>
        </form>
    )
}
