import { Twitter,SquarePlay,File,Link2,Tags } from "lucide-react";

interface SidebarItem{
    icon:React.ReactNode;
    label:string;
    type:string;
    
}

interface Icons{
    icon:React.ReactNode;
    type:string;
}

export const sidebarItems:SidebarItem[] = [
    {
        icon:<Twitter strokeWidth={1.5} size={20}/>,
        label:"Tweets",
        type:"tweets",
        
    },
    {
        icon:<SquarePlay strokeWidth={1.5} size={20}/>,
        label:"Videos",
        type:"videos",        
       
    },
    {
        icon:<File strokeWidth={1.5} size={20}/>,
        label:"Documents",
        type:"documents",
    },
    
    
]

export const icons:Icons[] = [
    {
        icon:<Twitter strokeWidth={1.5} size={20}/>,
        type:"tweets",
    },
    {
        icon:<SquarePlay strokeWidth={1.5} size={20}/>,
        type:"videos",
    },
    {
        icon:<File strokeWidth={1.5} size={20}/>,
        type:"documents",
    },
    
]