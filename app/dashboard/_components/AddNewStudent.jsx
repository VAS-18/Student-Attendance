"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
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

const AddNewStudent = () => {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log("Form Data", data);
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
                                </div>
                                <div className="py-2">
                                    <label className='text-gray-400'>Roll number</label>
                                    <Input placeholder="ex : 220133155xx"
                                        {...register('roll_number', { required: true })}
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-gray-400'>Branch</label>
                                    <select
                                        name="branch"
                                        className="p-2 rounded-10 bg-inherit border border-gray-500"
                                        {...register('branch', { required: true })}
                                    >
                                        <option value={'1'}>CSE</option>
                                        <option value={'ECE'}>ECE</option>
                                        <option value={'IT'}>IT</option>
                                        <option value="AI">AI</option>
                                        <option value="AIML">AIML</option>
                                        <option value="IOT">IOT</option>
                                        <option value="DS">DS</option>
                                        <option value="CS">CS</option>
                                        <option value="CYS">CYS</option>
                                        <option value="ECE">ECE</option>
                                        <option value="ME">ME</option>
                                        <option value="BIO-TECH">BIO-TECH</option>
                                    </select>
                                </div>
                                <div className="flex gap-2 pt-4">
                                    <Button onClick={() => { setOpen(false) }}>Cancel</Button>
                                    <Button type="submit">Save</Button>
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
