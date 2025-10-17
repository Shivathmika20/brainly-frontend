import { Brain } from "lucide-react"
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
    return (
        <div className="w-1/6 ">
            <div className="p-4 flex items-center gap-2 border-b border-gray-200">
                <Brain className="text-purple-600 " size={28} strokeWidth={1.8}/>
                <span className="text-xl font-bold">Brainly</span>
            </div>
            <SidebarItems />
        </div>
       
    )
}
export default Sidebar