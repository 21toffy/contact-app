import axiosInstance from "../../helpers/axios";

export const register = () =>{
    axiosInstance.post("/auth/register")
    .then(res=>(console.log("data: ", res.data)))
    .catch(error=>console.log("error: ",error))
}