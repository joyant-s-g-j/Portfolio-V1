"use client"
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { Download, FolderCog, HomeIcon, MenuIcon, UserIcon } from 'lucide-react'
import React, { useState } from 'react'

function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <div className='flex md:hidden items-center space-x-2'>
        <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <MenuIcon className='size-8' />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className='bg-slate-900 text-white'>
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
                    <a href="/assets/file/Joyant_Resume.pdf" download="Joyant_Resume">
                        <button className='flex gap-3' type="button">
                            <Download className='size-5' />Re sume
                        </button>
                    </a>
                </div>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNavbar