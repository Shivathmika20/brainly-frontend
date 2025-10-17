import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {

    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const navigate=useNavigate()

    const handleSignup=async()=>{
        const username=usernameRef.current?.value
        const password=passwordRef.current?.value
        console.log(username,password)
        
        const response=await axios.post("http://localhost:3000/api/auth/signup",
            {
                userName:username,
                password:password,
            }
        )
        alert(response.data.message)
        if(response.status===200){
            navigate("/signin")
        }
        else{
            alert(response.data.error)
        }

    }

    
    return (
       <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
        
            <div className="flex flex-col gap-4 max-w-md w-full  p-10 rounded-lg bg-white">
                <h1 className="text-2xl font-bold text-center ">Signup</h1>
                <input ref={usernameRef} required type="text" placeholder="Enter your username" className="border-2 border-gray-500 rounded-md p-2" />
                <input ref={passwordRef} required type="password" placeholder="Enter your password" className="border-2 border-gray-500 rounded-md p-2"/>
                <Button className="bg-blue-500 text-white  rounded-md p-2" onClick={handleSignup}>Signup</Button>
            </div>
       </div> 
    )
}
export default Signup