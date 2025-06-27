import { AddTaskModel } from "@/components/module/tasks/AddTaskModel"
import TaskCard from "@/components/module/tasks/TaskCard"
import { selectTasks } from "@/redux/feature/task/taskSlice"
import { useAppSelector } from "@/redux/hook"

export default function Tasks(){
    // const tasks = useAppSelector((state) => state.todo.tasks)
    const tasks = useAppSelector(selectTasks)
    // const filter = useAppSelector(selectFilter)
    console.log(tasks)
    return (
        <div>
            <div>
                <h1>Tasks</h1>
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