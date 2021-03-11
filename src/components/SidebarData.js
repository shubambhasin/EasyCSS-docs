import React from 'react';
import * as FaIcons from 'react-icons/fa'
export const SidebarData = [
    {
        title: "EaseCSS",
        path: "/abc",
        icon: <FaIcons.FaHome/>,
        iconClosed: "O",
        iconOpened: "X",
        subNav: [
            {
                title: "Docs",
                path: "/docs",
                icon:""
            },
            {
                title: "Why EaseCSS",
                path: "/why-ease-css",
                icon:""
            },
        ]
    },
    {
        title: "Avatar",
        path: "/avatar",
        icon: "",
        iconClosed: "O",
        iconOpened: "X",
    },
    {
        title: "Alert",
        path: "/alert",
        icon: "",
        iconClosed: "O",
        iconOpened: "X",
    },
    {
        title: "Badges",
        path: "/badge",
        icon: "",
        iconClosed: "O",
        iconOpened: "X",
    },
    {
        title: "Buttons",
        path: "/button",
        icon: "",
        iconClosed: "O",
        iconOpened: "X",
        subNav: [
            {
                title: "Primary",
                path: "/button/primary",
                icon:""
            },
            {
                title: "Secondary",
                path: "/button/secondary",
                icon:""
            },
        ]
    }


]