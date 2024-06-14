"use client"

import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import { Trash2Icon } from 'lucide-react'
import { deleteTask, updateTask } from '@/lib/action'

export interface TaskProps {
    id: number,
    title: string,
    completed: boolean,
}


export default function Task(props: TaskProps) {

    const { id, title, completed } = props

    return (
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-md px-4 py-2">
            <div className="flex items-center space-x-2">
                <Checkbox id={id+""} className="checkbox" checked={completed} onClick={() => updateTask(id, { completed: !completed })} />
                <label htmlFor={id+""} className="text-gray-800 dark:text-gray-200">
                    {title}
                </label>
            </div>
            <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
                <Trash2Icon className="w-5 h-5" onClick={() => deleteTask(id)} />
            </Button>
        </div>
    )
}
