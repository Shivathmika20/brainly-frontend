
import { sidebarItems } from "../data/sidebarItems";

interface SidebarItemsProps {
    onTypeSelect: (type: string) => void
    selectedType: string
}

const SidebarItems = ({ onTypeSelect, selectedType }: SidebarItemsProps) => {
  
    const handleTypeClick = (type: string) => {
        onTypeSelect(type)
    }

    return (
        <div className="px-8 py-12">
            <div className="flex flex-col gap-6">
              {
                sidebarItems.map((item, index)=>(
                    <div 
                        key={index}
                        className={`flex items-center gap-2 cursor-pointer transition-all duration-300 p-2 rounded-lg ${
                            selectedType === item.type 
                                ? 'bg-purple-100 text-purple-600 font-semibold' 
                                : 'hover:text-purple-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handleTypeClick(item.type)}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))
              }
            </div>
        </div>
    )
}
export default SidebarItems;