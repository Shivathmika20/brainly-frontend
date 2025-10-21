import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    
  } from "@/components/ui/dialog"
import { Button } from "./ui/button"
  import { useRef, useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
interface ContentModelProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onContentAdded: (contentData: {title: string, type: string, link: string, tags: string[]}) => void
}

export const ContentModel = ({open, onOpenChange, onContentAdded}: ContentModelProps) => {
    const [formData,setFormData]=useState<{title:string,type:string,link:string,tags:string[]}>({title:"",type:"",link:"",tags:[]})
    const titleRef=useRef<HTMLInputElement>(null)
    const typeRef=useRef<HTMLSelectElement>(null)
    const linkRef=useRef<HTMLInputElement>(null)
    const tagsRef=useRef<HTMLInputElement>(null)

    const handleSubmit=()=>{
        const title=titleRef.current?.value || ""
        const type=typeRef.current?.value || ""
        const link=linkRef.current?.value || ""
        const tags=tagsRef.current?.value.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0)
        
        // Validate required fields
        if (!title || !type || !link) {
            alert('Please fill in all required fields')
            return
        }
        
        // Call the callback with the form data
        onContentAdded({
            title,
            type,
            link,
            tags: tags || []
        })
        
        // Reset form
        if (titleRef.current) titleRef.current.value = ""
        if (typeRef.current) typeRef.current.value = ""
        if (linkRef.current) linkRef.current.value = ""
        if (tagsRef.current) tagsRef.current.value = ""
        
        onOpenChange(false)
    }   


    return(
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Content</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                   <div className="flex flex-col gap-4 text-black p-4 ">
                   <Label htmlFor="title">Title</Label>
                    <Input ref={titleRef} type="text" placeholder="Enter Title" className="border-2 border-gray-600 rounded-md p-2 focus:outline-none " />
                    <Label htmlFor="type">Type</Label>
                    <select name="" id="type" ref={typeRef} className="border-2 border-gray-600 rounded-md p-2 focus:outline-none ">
                        <option value="documents">Documents</option>
                        <option value="tweets">Tweets</option>
                        <option value="videos">Videos</option>
                    </select>
                    <Label htmlFor="link">Link</Label>
                    <Input ref={linkRef} type="text" placeholder="Enter Link" className="border-2 border-gray-600 rounded-md p-2 focus:outline-none "/>
                    <Label htmlFor="tags">Tags(comma separated)</Label>
                    <Input ref={tagsRef} type="text" placeholder="Enter Tags" className="border-2 border-gray-600 rounded-md p-2 focus:outline-none " />
                   </div>
                </DialogDescription>
                <DialogFooter>
                    <Button type="button" variant="outline" onClick={()=>onOpenChange(false)} className="bg-purple-600 text-white font-normal hover:bg-purple-700 hover:text-white">Cancel</Button>
                    <Button type="submit" onClick={handleSubmit} className="bg-purple-600 text-white font-normal hover:bg-purple-700 hover:text-white">Add Content</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}