import { Brain,LogOut } from "lucide-react"
import SidebarItems from "./SidebarItems";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

    const navigate = useNavigate();
    const  handleSignOut=()=>{
        localStorage.removeItem('token')
        navigate('/signin')
    }
    
    return (
        <div className="w-1/6 flex flex-col justify-between ">
            <div>
                <div className="p-4 flex items-center gap-2 ">
                    <Brain className="text-purple-600 " size={28} strokeWidth={1.8}/>
                    <span className="text-xl font-bold">Brainly</span>
                </div>
                <SidebarItems />
            </div>
            <div>
                <Button onClick={handleSignOut} className="mb-8 mx-4 bg-purple-600 text-white font-normal hover:bg-purple-600 flex items-center justify-center hover:cursor-pointer">
                    <LogOut className="mr-2" size={20} strokeWidth={2.5}/>
                    Sign Out</Button>
            </div>
        </div>
       
    )
}
export default Sidebar