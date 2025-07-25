import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";


import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";


interface IProps{
    task: ITask
}

export default function TaskCard({task} : IProps){
 console.log(task)


    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full", 
                        {"bg-green-500": task.priority == "low"},
                        {"bg-yellow-500": task.priority == "medium"},
                        {"bg-red-500": task.priority == "high"},
                        )}>

                    </div>
                    <h1 className={cn({"line-through": task.isCompleted}) }>Task Title: {task.title} </h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button  variant="link" className="p-0 text-red-500">
                        <Trash2></Trash2>
                    </Button>
                    <Checkbox ></Checkbox>
                </div>
            </div>
            <p>Assign To : </p>
            <p className="mt-5">Task Description: {task.description}</p>
        </div>
    )
}