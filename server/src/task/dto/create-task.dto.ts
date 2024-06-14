import { IsNotEmpty } from "class-validator";

export class CreateTaskDto {
  userId: number;
  @IsNotEmpty() 
  title: string;
  completed?: boolean;
}


