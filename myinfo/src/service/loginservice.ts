import { ILoginInformation } from "../types/ILoginForm";
import axios from "axios";

export default async function Login(d:ILoginInformation) 
{   
  
  return  axios.post("http://127.0.0.1:5001/api/user/login",d).then(u=>{

       localStorage.setItem("token",u.data.token);
    })


}