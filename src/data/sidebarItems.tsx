import { Twitter,SquarePlay,File,Link2,Tags } from "lucide-react";

interface SidebarItem{
    icon:React.ReactNode;
    label:string;
}

export const sidebarItems:SidebarItem[] = [
    {
        icon:<Twitter strokeWidth={1.5} size={20}/>,
        label:"Tweets",
        
    },
    {
        icon:<SquarePlay strokeWidth={1.5} size={20}/>,
        label:"Videos",
       
    },
    {
        icon:<File strokeWidth={1.5} size={20}/>,
        label:"Documents",
       
    },
    {
        icon:<Link2 strokeWidth={1.5} size={20}/>,
        label:"Links",
        
    },
    {
        icon:<Tags strokeWidth={1.5} size={20}/>,
        label:"Tags",
        
    }, 
    
]

