"use client"

import React, { useEffect, useState } from 'react'
import AddNewStudent from '../_components/AddNewStudent'
import GlobalApi from '@/app/_services/GlobalApi'
import StudentList from '../_components/StudentList'





const Student = () => {

  const [studentList, setStudentList] = useState([]);

  useEffect(()=>{
    GetAllStudent();
  },[])

  const GetAllStudent = () => {
   
    GlobalApi.GetAllStudents().then(response => {
      console.log(response.data);
      setStudentList(response.data); // Set the fetched data to state
    })

  }


  return (
    <div className='p-5'>
      <h2 className='text-xl font-bold p-5 flex justify-between items-center'>
        Students
        <AddNewStudent/>
      </h2>

      {/* <StudentList studentList={studentList} /> */}
    </div>
  )
}

export default Student
