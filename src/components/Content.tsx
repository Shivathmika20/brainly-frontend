import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from 'axios'
import {icons} from '../data/sidebarItems'
import { Share2,Trash2 } from 'lucide-react'
import { useContent, type ContentType, type Tags} from '../hooks/useContent'
import { useEffect, useState } from "react"


// import { useNavigate } from 'react-router-dom'


export interface Icons{
    icon:React.ReactNode;
    type:string;
}



const Content = ({type}:{type?:string}) => {
    const { data, len, tags, loading, fetchContent } = useContent()

    useEffect(() => {
        fetchContent(type  || ""); // fetch content for the selected type
      }, [type || ""]);
    
    const handleDelete = async (id: string) => {
        console.log(id)
        try{
            await axios.delete(`http://localhost:3000/api/content/${id}`, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
        } catch (error: any) {
            console.error('Error deleting content:', error)
            alert(error.response.data.error)
        }
    }

    
    const getIconForType = (type: string) => {
        const iconObj = icons.find((i: Icons) => i.type === type);
        return iconObj?.icon || null
      };
  
    return (
        <div className="p-4">
            {loading ? (
                <div>Loading...</div>
            ) : len > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {data.map((item: ContentType, index: number) => (
                        <Card key={index} className="w-full">
                            <CardHeader>
                            <div className="flex items-center gap-2">
                            {getIconForType(item.type)}
                            <span className="truncate">{item.title}</span>
                            </div>
                                <CardAction>
                                    <div className='flex items-center gap-2'>
                                        <a href={item.link} target="_blank">
                                        <Share2 strokeWidth={1.5} size={20} className="cursor-pointer text-purple-600" />

                                        </a>
                                        <Trash2 strokeWidth={1.5} size={20} className="cursor-pointer text-purple-600" onClick={() => handleDelete(item._id)} />
                                    </div>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                
                                
                            </CardContent>
                            <CardFooter>
                                <div className="flex flex-wrap gap-2">
                                    {item.tagofContent.map((tagId: string, tagIndex: number) => {
                                        const tag = tags.find((t: Tags) => t._id === tagId);
                                        return tag ? (
                                            <span 
                                                key={tagIndex}
                                                className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                                            >
                                                {tag.title}
                                            </span>
                                        ) : null;
                                    })}
                                    
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 py-8">No content found</div>
            )}
        </div>
    )
}

export default Content;