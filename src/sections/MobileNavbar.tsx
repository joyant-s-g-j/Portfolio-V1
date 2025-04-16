"use client"
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import React, { useState } from 'react'

function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <div className='flex md:hidden items-center space-x-2'>
        <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <MenuIcon className='size-5' />
                </Button>
            </SheetTrigger>
        </Sheet>
    </div>
  )
}

export default MobileNavbar