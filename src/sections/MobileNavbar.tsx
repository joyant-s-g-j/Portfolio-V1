"use client"
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { Contact2Icon, FileText, FolderCog, HomeIcon, MenuIcon, UserIcon } from 'lucide-react'
import React, { useState } from 'react'
import grainImage from "@/assets/images/grain.jpg"

function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <div className='flex lg:hidden items-center space-x-2'>
        <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <MenuIcon className='' />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className=' bg-gray-800 text-white'>
                <div className='absolute inset-0 -z-10 opacity-5' style={{
                    backgroundImage: `url(${grainImage.src})`,
                    }}>
                </div>
                <SheetHeader>
                    <h2 className='text-lg font-semibold'>Menu</h2>
                </SheetHeader>
                <div className='mt-6 flex flex-col space-y-6 text-base font-semibold'>
                    <a href="#home" onClick={() => setShowMobileMenu(false)} className='flex gap-3'>
                        <HomeIcon className='size-5'/>Home
                    </a>
                    <a href="#about" onClick={() => setShowMobileMenu(false)} className='flex gap-3'>
                        <UserIcon className='size-5'/>About
                    </a>
                    <a href="#project" onClick={() => setShowMobileMenu(false)} className='flex gap-3'>
                        <FolderCog className='size-5'/>Project
                    </a>
                    <a href="#contact" onClick={() => setShowMobileMenu(false)} className='flex gap-3'>
                        <Contact2Icon className='size-5'/>Contact
                    </a>
                    <a href="/assets/file/Joyant_Resume.pdf" target='_blank'>
                        <button className='flex gap-3' type="button">
                            <FileText className='size-5' />Resume
                        </button>
                    </a>
                </div>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNavbar