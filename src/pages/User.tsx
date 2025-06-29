import AddUserModel from "@/components/module/users/AddUserModel";



export default function User() {
    const users = "hello"
    // const dispatch = useAppDispatch()
    // const filter = useAppSelector(selectFilter)
    console.log(users)
    return (
        <div className="px-20">
            <div className="flex justify-end items-center my-5 gap-5">
                <h1 className="mr-auto">Tasks</h1>

                <AddUserModel></AddUserModel>
            </div>
            <div className="space-y-2">
                {/* {
                    users?.map((user) => (
                        <UserCard key={user?.id} user={user}></UserCard>
                    ))
                } */}
            </div>
        </div>
    )
}