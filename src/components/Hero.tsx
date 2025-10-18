import { Button } from "./ui/button"
import { Share2,Plus } from "lucide-react"
import Content from "./Content"

const Hero = () => {
    return (
        <div className="w-5/6  bg-purple-100/50 border-2 border-black-200">
            <header className="flex justify-between items-center px-10 py-8 ">
                <span className="text-2xl font-semibold ">All Notes</span>
                <div className="flex gap-4">
                        <Button className="bg-purple-200 text-purple-600 font-normal hover:bg-transparent hover:border-2 hover:border-purple-600 hover:text-purple-600 hover:scale-105 transition-all duration-300 ">
                            <Share2 strokeWidth={2.5} size={20}/>
                            Share Brain
                        </Button> 
                        <Button className="bg-purple-600 font-normal hover:bg-transparent hover:border-2 hover:border-purple-600 hover:text-purple-600 hover:scale-105 transition-all duration-300">
                            <Plus strokeWidth={2.5} size={20}/>
                            Add Content
                        </Button>                    
                </div> 
            </header>
            <Content />
        </div>
    )
}
export default Hero