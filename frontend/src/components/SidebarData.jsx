import React from 'react'
import { LuBot } from "react-icons/lu";
import { PiImageSquare } from "react-icons/pi";
export const SidebarData = [
    {
        title:'AI Chat',
        path:'/textgen',
        icon:<LuBot/>,
        cName:'nav-text'
    },
    {
        title:'Image Generator',
        path:'/imagegen',
        icon:<PiImageSquare />,
        cName:'nav-text'
    }

]


