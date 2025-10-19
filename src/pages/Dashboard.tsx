import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Hero from "@/components/Hero"

const Dashboard = () => {
    const [selectedType, setSelectedType] = useState<string>("")
    
    return (
        <div className="flex flex-row h-screen">
            <Sidebar onTypeSelect={setSelectedType} selectedType={selectedType} />
            <Hero selectedType={selectedType} />
        </div>
    )
}
export default Dashboard