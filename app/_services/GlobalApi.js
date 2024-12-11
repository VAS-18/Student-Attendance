const { default: axios } = require("axios");


const GetAllBranch=()=>axios.get('/api/branch');

<<<<<<< Updated upstream
export default{
    GetAllBranch
=======
const CreateNewStudent=(data)=> axios.post('/api/student',data);

const GetAllStudents = () => axios.get('/api/student');

export default{
    GetAllBranch,
    CreateNewStudent,
    GetAllStudents
>>>>>>> Stashed changes
}