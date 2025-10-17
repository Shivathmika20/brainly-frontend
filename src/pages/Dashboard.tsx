import Sidebar from "@/components/Sidebar"
import Hero from "@/components/Hero"

const Dashboard = () => {
    return (
        <div className="flex flex-row h-screen  ">
            <Sidebar />
            <Hero />
        </div>
    )
}
export default Dashboard