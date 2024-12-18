
"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import GlobalApi from '@/app/_services/GlobalApi';

const AddNewStudent = () => {
    const [open, setOpen] = useState(false);
    const [branch, setBranch] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    useEffect(() => {
        getAllbranchList();
    }, [])

    const getAllbranchList = () => {
            GlobalApi.GetAllBranch().then(response =>{
                console.log(response.data)
                setBranch(response.data)
            })
        }

    const onSubmit = (data) => {
        try {
            setLoading(true);
            console.log("Data being sent to API:", data); 
            GlobalApi.CreateNewStudent(data).then(response => {
                console.log(response);
            })
            console.log("Form Data", data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            reset();
            setOpen(false);

        }
    }

    return (
        <div className='py-3'>
            <Button onClick={() => { setOpen(true) }}>Add New Student</Button>
            <Dialog open={open}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Student</DialogTitle>
                        <DialogDescription>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="py-2">
                                    <label className='text-gray-400'>Student name</label>
                                    <Input placeholder="Name"
                                        {...register('name', { required: true })}
                                    />
                                    {errors.name && <p className="text-red-500">Student name is required</p>}
                                </div>
                                <div className="py-2">
                                    <label className='text-gray-400'>Roll number</label>
                                    <Input placeholder="ex : 220133155xx"
                                        {...register('rollno', { required: true })}
                                    />
                                    {errors.roll_number && <p className="text-red-500">Roll number is required</p>}
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-gray-400'>Branch</label>
                                    <select
                                        name="branch"
                                        className="p-2 rounded-10 bg-inherit border border-gray-500"
                                        {...register('branch', { required: true })}
                                    >
                                        { branch.map((item, index) => (
                                            <option key={index} value={item.branchname}>
                                                {item.branchname}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.branch && <p className="text-red-500">Branch is required</p>}
                                </div>
                                <div className="flex gap-2 pt-4">
                                    <Button onClick={() => { setOpen(false) }}>Cancel</Button>
                                    <Button type="submit" disabled={loading}>Save</Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewStudent