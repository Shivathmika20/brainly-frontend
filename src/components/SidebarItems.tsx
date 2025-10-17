import { sidebarItems } from "../data/sidebarItems";
const SidebarItems = () => {
    return (
        <div className="px-8 py-12">
            <div className="flex flex-col gap-6">
                {
                    sidebarItems.map((item)=>(
                        <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer transition-all duration-300 ">
                            {item.icon}
                            {item.label}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default SidebarItems;