import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState{
    tasks: ITask[],
    filter: "all" | "high" | "medium" | "low"
}

const initialState : InitialState ={
    tasks: [
        {
        id: "akkflsdfj",
        title: "Initialize frontend",
        description: "Create Home page , and routing",
        dueDate: "2025-11",
        isCompleted: false,
        priority: "High"
        },   
        {
        id: "akkflsdfj125",
        title: "Init github Repo",
        description: "Create Home page , and routing",
        dueDate: "2025-11",
        isCompleted: false,
        priority: "Low"
        },   
        {
        id: "akkflsdfj125251",
        title: "Init github Repo",
        description: "Create Home page , and routing",
        dueDate: "2025-11",
        isCompleted: false,
        priority: "Medium"
        },   
    ],
    filter: "all",
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{}
})


// moduler system
export const selectTasks = (state: RootState) =>{
    return state.todo.tasks
}
export const selectFilter = (state: RootState) =>{
    return state.todo.filter
}

export default taskSlice.reducer;