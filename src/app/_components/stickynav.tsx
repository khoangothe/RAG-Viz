'use client';

import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link'; 
import classnames from 'classnames';
import SelectDemo from './nav-component';
import NavigationMenuDemo from './nav-component';

const links = [
    {
        title : "Learn RAG",
        href : "/",
        value: "home" 
    },
    {
        title : "Simple RAG",
        href : "/simple-rag",
        value: "simple-rag" 
    },
    {
        title : "Chat",
        href : "/chat",
        value: "chat" 
    }
]

export default function StickyNav(){
    return (
        <nav className="flex left-0 w-full  h-20 items-center pl-10 fixed top-0">
            <div className="flex w-full gap-3 justify-between">
                <NavigationMenuDemo/>
            </div>
        </nav>
    )
}