const { default: axios } = require("axios");


const GetAllBranch=()=>axios.get('/api/branch');

export default{
    GetAllBranch
}