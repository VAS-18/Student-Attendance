import React from 'react'
import AddNewStudent from '../_components/AddNewStudent'

const Student = () => {
  return (
    <div className='p-5'>
      <h2 className='text-xl font-bold p-5 flex justify-between items-center'>
        Students
        <AddNewStudent/>
      </h2>
    </div>
  )
}

export default Student
