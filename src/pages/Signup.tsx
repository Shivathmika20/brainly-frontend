import { Button } from "@/components/ui/button";
import { useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signupSchema } from "@/schemas/Authschema";
import z from "zod";


const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [isLoading, setIsLoading] = useState(false)
    
    const navigate = useNavigate()
    
    const handleSignup = async () => {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value

        
        const result=signupSchema.safeParse({
            userName: username,
            password: password,
        })
        if(!result.success){
            const errorMessages=result.error.issues.map((issue)=>issue.message)
            alert(errorMessages.join("\n"))
            return
        }

        setIsLoading(true)
        try {
            const response = await axios.post("http://localhost:3000/api/auth/signup", {
                userName: username,
                password: password,
            })
            
            alert(response.data.message)
            navigate("/signin")
        } catch (error: any) {
            console.error("Signup error:", error)
            if (error.response?.data?.error) {
                alert(error.response.data.error)
            } else {
                alert("Failed to sign up. Please try again.")
            }
        }
        finally {
            setIsLoading(false)
        }   
    }

    
    return (
       <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
            <div className="flex flex-col gap-4 max-w-md w-full  p-10 rounded-lg bg-white">
                <h1 className="text-2xl font-bold text-center ">Signup</h1>
                {/* Username Field */}
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

                {/* Password Requirements */}
                <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-md">
                    <div className="font-semibold mb-1">Password Requirements:</div>
                    <ul className="space-y-1">
                        <li>• 8-20 characters long</li>
                        <li>• At least one lowercase letter</li>
                        <li>• At least one uppercase letter</li>
                        <li>• At least one number</li>
                        <li>• At least one special character (@$!%*?&)</li>
                    </ul>
                </div>
                <Button onClick={handleSignup} className="bg-blue-500 text-white rounded-md p-2 disabled:opacity-50" disabled={isLoading}>{isLoading ? "Signing up..." : "Signup"}</Button>
                
                {/* Sign in link */}
                <div className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <button 
                        onClick={() => navigate("/signin")}
                        className="text-blue-500 hover:text-blue-700 underline font-medium"
                    >
                        Sign in
                    </button>
                </div>
            </div>
       </div> 
    )
}
export default Signup