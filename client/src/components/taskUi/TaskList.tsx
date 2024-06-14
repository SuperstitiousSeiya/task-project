import { getTasks } from '@/lib/action'
import React from 'react'
import Task, { TaskProps } from './Task'

export default async function TaskList() {

    const tasks = await getTasks()
    
    return (
        <>
            {tasks.map((task: TaskProps) => (
                <Task key={task.id} {...task} />
            ))}
        </>
    )
}
