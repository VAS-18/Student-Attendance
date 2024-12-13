import React, { useState } from 'react';

const StudentList = ({ studentList }) => {
  const students = typeof studentList === 'string' ? JSON.parse(studentList) : studentList;
  const [searchName, setSearchName] = useState('');
  const [searchBranch, setSearchBranch] = useState('');

  const filteredStudents = students.filter(student => {
    const matchesName = student.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesBranch = student.branch
      ? student.branch.toLowerCase().includes(searchBranch.toLowerCase())
      : true;
    return matchesName && matchesBranch;
  });
  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Student List</h1>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by name"
          className="max-w-xl border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2"
          value={searchName}
          onChange={e => setSearchName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by branch"
          className=" max-w-xl  border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2"
          value={searchBranch}
          onChange={e => setSearchBranch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">Roll Number</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">Branch</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr
                key={index}

              >
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{student.rollno}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{student.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{student.branch || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
