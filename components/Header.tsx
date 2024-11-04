// components/Header.tsx
"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FiGlobe, FiMenu } from 'react-icons/fi';
import {
 Navbar, 
 NavbarBrand, 
 NavbarContent, 
 NavbarItem,
 Dropdown,
 DropdownTrigger,
 DropdownMenu,
 DropdownItem,
 Button,
 NavbarMenuToggle,
 NavbarMenu,
 NavbarMenuItem
} from "@nextui-org/react";
import { useState } from "react";

export default function Header() {
 const t = useTranslations('Header');
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 return (
   <Navbar 
     maxWidth="xl" 
     className="border-b border-gray-100"
     classNames={{
       wrapper: "px-4 sm:px-6",
     }}
     isMenuOpen={isMenuOpen}
     onMenuOpenChange={setIsMenuOpen}
   >
     {/* Logo Section - Left */}
     <NavbarContent className="gap-4" justify="start">
       <NavbarMenuToggle 
         aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
         className="sm:hidden" 
         icon={<FiMenu className="h-5 w-5" />}
       />
       <NavbarBrand>
         <Link 
           href="/" 
           className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
         >
           Dream Interpretation AI
         </Link>
       </NavbarBrand>
     </NavbarContent>

     {/* Navigation - Center */}
     <NavbarContent className="hidden sm:flex" justify="center">
       <NavbarItem>
         <Link 
           href="/interpret" 
           className="text-gray-600 hover:text-purple-600 transition-colors"
         >
           {t('interpret')}
         </Link>
       </NavbarItem>
     </NavbarContent>

     {/* Language Selector - Right */}
     <NavbarContent justify="end">
       {/* Desktop Language Selector */}
       <NavbarItem className="hidden sm:flex">
         <Dropdown>
           <DropdownTrigger>
             <Button 
               variant="light" 
               startContent={<FiGlobe />}
               className="text-gray-600"
             >
               {t('language')}
             </Button>
           </DropdownTrigger>
           <DropdownMenu 
             aria-label="Language selection"
             className="min-w-[120px]"
           >
             <DropdownItem key="en">
               <Link 
                 href="/" 
                 locale="en"
                 className="block w-full h-full text-gray-600 hover:text-purple-600"
               >
                 English
               </Link>
             </DropdownItem>
             <DropdownItem key="zh">
               <Link 
                 href="/" 
                 locale="zh"
                 className="block w-full h-full text-gray-600 hover:text-purple-600"
               >
                 简体中文
               </Link>
             </DropdownItem>
             <DropdownItem key="tw">
               <Link 
                 href="/" 
                 locale="tw"
                 className="block w-full h-full text-gray-600 hover:text-purple-600"
               >
                 繁體中文
               </Link>
             </DropdownItem>
           </DropdownMenu>
         </Dropdown>
       </NavbarItem>

       {/* Mobile Language Selector */}
       <NavbarItem className="sm:hidden">
         <Dropdown>
           <DropdownTrigger>
             <Button 
               isIconOnly
               variant="light" 
               className="text-gray-600"
             >
               <FiGlobe className="h-5 w-5" />
             </Button>
           </DropdownTrigger>
           <DropdownMenu 
             aria-label="Language selection"
             className="min-w-[120px]"
           >
             <DropdownItem key="en">
               <Link 
                 href="/" 
                 locale="en"
                 className="block w-full h-full text-gray-600 hover:text-purple-600"
               >
                 English
               </Link>
             </DropdownItem>
             <DropdownItem key="zh">
               <Link 
                 href="/" 
                 locale="zh"
                 className="block w-full h-full text-gray-600 hover:text-purple-600"
               >
                 简体中文
               </Link>
             </DropdownItem>
             <DropdownItem key="tw">
               <Link 
                 href="/" 
                 locale="tw"
                 className="block w-full h-full text-gray-600 hover:text-purple-600"
               >
                 繁體中文
               </Link>
             </DropdownItem>
           </DropdownMenu>
         </Dropdown>
       </NavbarItem>
     </NavbarContent>

     {/* Mobile Menu */}
     <NavbarMenu className="pt-6">
       <NavbarMenuItem className="mb-4">
         <Link 
           href="/interpret"
           className="w-full text-gray-600 hover:text-purple-600 text-lg font-medium"
           onClick={() => setIsMenuOpen(false)}
         >
           {t('interpret')}
         </Link>
       </NavbarMenuItem>
     </NavbarMenu>
   </Navbar>
 );
}