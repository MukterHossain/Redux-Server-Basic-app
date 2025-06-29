import { AddTaskModel } from "@/components/module/tasks/AddTaskModel"
import TaskCard from "@/components/module/tasks/TaskCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { selectTasks, updateFilter } from "@/redux/feature/task/taskSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"

export default function Tasks(){
    // const tasks = useAppSelector((state) => state.todo.tasks)
    const tasks = useAppSelector(selectTasks)
    const dispatch = useAppDispatch()
    // const filter = useAppSelector(selectFilter)
    console.log(tasks)
    return (
        <div className="px-20">
            <div className="flex justify-end items-center my-5 gap-5">
                <h1 className="mr-auto">Tasks</h1>
                <Tabs defaultValue={"all"}>
                    <TabsList>
          <TabsTrigger onClick={()=>dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
        </TabsList>
                </Tabs>
                <AddTaskModel></AddTaskModel>
            </div>
            <div>
                {
                    tasks.map((task) =>(
                       <TaskCard key={task.id} task={task}></TaskCard> 
                    ))
                }
            </div>
        </div>
    )
}