import { Button } from "@/components/ui/button"
import {useRef} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const handleSignin = async () => {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        
        if (!username || !password) {
            alert("Please enter both username and password")
            return
        }
        
        try {
            const response = await axios.post("http://localhost:3000/api/auth/signin", {
                userName: username,
                password: password,
            })
            localStorage.setItem("token", response.data.token)
            alert("Signin successful")
            navigate("/dashboard")
            
        } catch (error: any) {
            console.error("Signin error:", error)
            // Handle different types of errors
            if (error.response?.data?.error) {
                alert(error.response.data.error)
            } else {
                alert("Failed to sign in. Please try again.")
            }
        }
    }
       
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
            <div className="flex flex-col gap-4 max-w-md w-full  p-10 rounded-lg bg-white">
                <h1 className="text-2xl font-bold text-center ">Signin</h1>
                
                <div className="flex flex-col gap-1">
                    <input 
                        ref={usernameRef} 
                        required 
                        type="text" 
                        placeholder="Enter your username"
                        className="border-2 border-gray-500 rounded-md p-2"
                    />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1">
                    <input 
                        ref={passwordRef} 
                        required 
                        type="password" 
                        placeholder="Enter your password" 
                        className="border-2 border-gray-500 rounded-md p-2"
                    />
                </div>
                <Button onClick={handleSignin} className="bg-blue-500 text-white rounded-md p-2">Signin</Button>
                
                    
               
            </div>
        </div>
    )
}
export default Signin