import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl,  FormField, FormItem, FormLabel} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addUser } from "@/redux/feature/user/userSlice"
import { useAppDispatch } from "@/redux/hook"
import type {  IUser } from "@/types"

import { useForm,  type FieldValues, type SubmitHandler } from "react-hook-form"


export default function AddUserModel() {

    const dispatch = useAppDispatch()
        const form = useForm()
    
        const onSubmit: SubmitHandler<FieldValues> =(data)=>{
            console.log(data)
            dispatch(addUser(data as IUser))
        }
  return (
    <Dialog>
     
        <DialogTrigger asChild>
          <Button >Add User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogDescription className="sr-only">Fill up this form</DialogDescription>
          <DialogHeader>
            
            <DialogTitle>Add User</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                        name="name"
                        render={({field}) => (
                    <FormItem>
                <FormLabel>Name</FormLabel>
            <FormControl>
            { /* Your form field */}
            <Input {...field} value={field.value || ""}></Input>
                </FormControl>
            </FormItem>
            )}
            />

          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
           </form>
          </Form>
        </DialogContent>
      
    </Dialog>
  )
}
