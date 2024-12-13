const { default: axios } = require("axios");


const GetAllBranch=()=>axios.get('/api/branch');

const CreateNewStudent=(data) => axios.post('/api/student',data);

const GetAllStudents = () => axios.get('/api/student');

export default{
    GetAllBranch,
    CreateNewStudent,
    GetAllStudents
}