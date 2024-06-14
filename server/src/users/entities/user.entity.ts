import { Task } from "@prisma/client";

export class User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    tasks: Task[];
}
