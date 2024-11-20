"use client";
import Link from 'next/link';
import Image from 'next/image';
import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
 
import {ModeToggle} from "@/components/ModeToggle";
import { NavigationMenu,   NavigationMenuItem, NavigationMenuLink, NavigationMenuList,   } from "@/components/ui/navigation-menu";
 
import { cn } from "@/lib/utils";
 
import { Dialog, DialogClose } from "@radix-ui/react-dialog";

 

export default function NavBar() {
   

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between p-2 border-b dark:bg-black dark:bg-opacity-50 bg-white">
            <div className="flex justify-between w-full min-[825px]:hidden">
                <Dialog>
                    <SheetTrigger className="p-2 transition">
                        <Button size="icon" variant="ghost" className="w-4 h-4" aria-label="Open menu" asChild>
                            <GiHamburgerMenu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>Next Starter</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col space-y-3 mt-[1rem]">
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="outline" className="w-full">Home</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                
                            </DialogClose>
                        </div>
                    </SheetContent>
                </Dialog>
                <ModeToggle />
            </div>
            <NavigationMenu>
                <NavigationMenuList className="max-[825px]:hidden flex gap-3 w-[100%] justify-between">
                    <Link href="/" className="pl-2 flex items-center" aria-label="Home">
                        <Image src='/mlogo1.webp' width={80} height={100} alt='Logo'/>
                        <span className="sr-only">Home</span>
                    </Link>
                </NavigationMenuList>
                <NavigationMenuList>
                 
                    <NavigationMenuItem className="max-[825px]:hidden">
                        <Link href="/" legacyBehavior passHref>
                            <Button variant="ghost">
                               Home
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-2 max-[825px]:hidden">
       
                <ModeToggle />
            </div>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
