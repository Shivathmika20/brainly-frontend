import { Button } from "./ui/button"
import { Share2,Plus,Copy } from "lucide-react"
import Content from "./Content"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { useState } from "react"
  import axios from "axios"

const Hero = () => {
    const [shareUrl,setShareUrl]=useState<string>("")
    const [copied, setCopied] = useState<boolean>(false)

    const handleOnShare = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/share", 
                { share: true },
                {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }
            )
            console.log(response.data)
            setShareUrl(response.data.shareUrl)
        } catch (error) {
            console.error('Error generating share link:', error)
            alert('Failed to generate share link')
        }
    }
    
    const handleOnCopy=async()=>{
        try {
            await navigator.clipboard.writeText(shareUrl)
            setCopied(true)
            // Reset the "copied" state after 2 seconds
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        } catch (error) {
            console.error('Failed to copy: ', error)
            alert('Failed to copy to clipboard')
        }
    }

    return (
        <div className="w-5/6  bg-purple-100/50 border-2 border-black-200">
            <header className="flex justify-between items-center px-10 py-8 ">
                <span className="text-2xl font-semibold ">All Notes</span>
                <div className="flex gap-4">
               <Dialog> 
                    <DialogTrigger asChild>
                        <Button className="bg-purple-200 text-purple-600 font-normal hover:bg-transparent hover:border-2 hover:border-purple-600 hover:text-purple-600 hover:scale-105 transition-all duration-300 " onClick={handleOnShare}>
                                <Share2 strokeWidth={2.5} size={20}/>
                                Share Brain
                        </Button> 
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Share Your Brain</DialogTitle>
                        <DialogDescription>
                           Share your entrire collection of notes,tweets and videos with others.
                           They'll be able to access it via the link below.
                        </DialogDescription>
                        </DialogHeader>
                        <div>
                            <Button 
                                className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-transparent hover:border-2 hover:border-purple-600 hover:text-purple-600 font-normal text-md py-4" 
                                onClick={handleOnCopy}
                                disabled={!shareUrl}
                            >
                                <Copy strokeWidth={2.5} size={20}/>
                                {copied ? 'Copied to clipboard!' : 'Copy Share Link'}
                            </Button>
                            {shareUrl && (
                                <div className="mt-2 p-2 bg-gray-100 rounded text-sm text-gray-600 break-all">
                                    {shareUrl}
                                </div>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>    
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