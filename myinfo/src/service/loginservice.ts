import { ILoginInformation } from "../types/ILoginForm";
import axios from "axios";

export default function Login(d:ILoginInformation) 
{   
    axios.post("http://127.0.0.1:5001/api/user/login",d).then(u=>{

        console.log("data logged in sucessfilly");
    })


}