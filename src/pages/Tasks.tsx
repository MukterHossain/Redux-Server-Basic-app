import { AddTaskModel } from "@/components/module/tasks/AddTaskModel"
import TaskCard from "@/components/module/tasks/TaskCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useGetTasksQuery } from "@/redux/api/baseApi"
import type { ITask } from "@/types"


export default function Tasks() {
    const {data, isLoading} = useGetTasksQuery(undefined)
    console.log(data)
    

    if(isLoading){
        return <p>Loading ....</p>
    }
    return (
        <div className="px-20">
            <div className="flex justify-end items-center my-5 gap-5">
                <h1 className="mr-auto">Tasks</h1>
                <Tabs defaultValue={"all"}>
                    <TabsList>
          <TabsTrigger  value="all">All</TabsTrigger>
          <TabsTrigger  value="low">Low</TabsTrigger>
          {/* onClick={()=>dispatch(updateFilter("low"))} */}
          <TabsTrigger  value="medium">Medium</TabsTrigger>
          <TabsTrigger  value="high">High</TabsTrigger>
        </TabsList>
                </Tabs>
                <AddTaskModel></AddTaskModel>
            </div>
            <div>
                {!isLoading && 
                    data.tasks.map((task : ITask) => (
                        <TaskCard key={task.id} task={task}></TaskCard>
                    ))
                }
            </div>
        </div>
    )
}