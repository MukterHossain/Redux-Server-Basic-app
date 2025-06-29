import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { removeUser } from "@/redux/feature/user/userSlice";
// import { cn } from "@/lib/utils";

import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
import { Trash2 } from "lucide-react";


interface IProps{
    user: IUser
}



export default function UserCard({user}:IProps) {
    const dispatch = useAppDispatch()
    console.log(user)
  return (
    <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl text-green-600">Name: {user.name}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button onClick={()=>dispatch(removeUser(user.id))} variant="link" className="p-0 text-red-500">
                        <Trash2></Trash2>
                    </Button>
                    {/* onClick={()=>dispatch(deleteTask(task.id))} */}
                    <Checkbox ></Checkbox>
                </div>
            </div>
            {/* <p className="mt-5">Task Description: </p> */}
        </div>
  )
}
