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
        type:"twitter",
        
    },
    {
        icon:<SquarePlay strokeWidth={1.5} size={20}/>,
        label:"Videos",
        type:"youtube",
       
    },
    {
        icon:<File strokeWidth={1.5} size={20}/>,
        label:"Documents",
        type:"pdf",
    },
    {
        icon:<Link2 strokeWidth={1.5} size={20}/>,
        label:"Links",
        type:"link",
    },
    {
        icon:<Tags strokeWidth={1.5} size={20}/>,
        label:"Tags",
        type:"tag",
        
    }, 
    
]

export const icons:Icons[] = [
    {
        icon:<Twitter strokeWidth={1.5} size={20}/>,
        type:"twitter",
    },
    {
        icon:<SquarePlay strokeWidth={1.5} size={20}/>,
        type:"youtube",
    },
    {
        icon:<File strokeWidth={1.5} size={20}/>,
        type:"pdf",
    },
    {
        icon:<Link2 strokeWidth={1.5} size={20}/>,
        type:"link",
    },
    {
        icon:<Tags strokeWidth={1.5} size={20}/>,
        type:"tag",
    },
]