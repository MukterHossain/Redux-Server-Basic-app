import type { RootState } from "@/redux/store";
import type {  IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';

interface InitialState{
    users: IUser[],
}

const initialState : InitialState ={
    users: [
        {
        id: "akkflsdfj",
        name: "Mukter Hossain"
        },
        {
        id: "akkflsdfjdd",
        name: "Sarif Hossain"
        },
    ],
}

type DraftUser = Pick<IUser, "name">

const createUser= (userData: DraftUser): IUser => {
    return {id: nanoid(), ...userData}
}


const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers:{
        addUser: (state, action:PayloadAction<IUser>) =>{
            const userData = createUser(action.payload)
            state.users.push(userData)
        },
        removeUser: (state, action:PayloadAction<string>) =>{
            state.users = state.users.filter((user) => user.id !== action.payload)
        },
    },
})


// moduler system
export const selectUsers = (state: RootState): IUser[] =>state.user.users


export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;