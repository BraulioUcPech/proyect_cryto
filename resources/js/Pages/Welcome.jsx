import React, { useState, useCallback } from "react";

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, User, Divider } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Image, Avatar, AvatarGroup, AvatarIcon, Skeleton, Link, Checkbox, CheckboxGroup, Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem, Input,  Listbox,
  ListboxSection,
  ListboxItem,  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter, Popover, PopoverTrigger, PopoverContent, Select, SelectSection, SelectItem, ScrollShadow, Switch, Tabs, Tab, Textarea, Tooltip} from "@nextui-org/react";
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';


export default function Welcome({ auth, laravelVersion, phpVersion }) {

    const { user } = auth;


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: "Profile", route: "/profile" },
        { name: "Dashboard", route: "/dashboard" },
        { name: "Activity", route: "/activity" },
        { name: "Analytics", route: "/analytics" },
        { name: "System", route: "/system" },
        { name: "Deployments", route: "/deployments" },
        { name: "My Settings", route: "/my-settings" },
        { name: "Team Settings", route: "/team-settings" },
        { name: "Help & Feedback", route: "/help-feedback" },
        { name: "Log Out", route: "#" },
    ];

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode(currentMode => !currentMode);
    }, []);

    return (

        <>
            {/* NAVBAR INICIO */}
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <Skeleton className="sm:hidden" />
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden"
                        />
                        <NavbarBrand>
                            <a>Encrypto Cloud</a>
                        </NavbarBrand>
                    <Skeleton />

                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link href="/ruta1">Home</Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="/ruta2">FAQ</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/ruta1">About</Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    {user ? (
                        <>
                          <NavbarItem className="hidden lg:flex">
                            <Avatar
                                isBordered color="primary"
                                //src={user.avatarUrl}
                                size="md"
                                name={user.name.charAt(0)}
                                description={user.email}
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                onClick={() => {
                                    confetti({
                                        particleCount: 100,
                                        spread: 70,
                                        origin: { y: 0.6 }
                                    });
                                }}
                            />
                        </NavbarItem>
                            <NavbarItem>
                                <Button as={Link} color="primary"  href="/dashboard" variant="shadow">
                                    Dashboard
                                </Button>
                            </NavbarItem>
                        </>
                    ) : (
                        <>
                            <NavbarItem className="hidden lg:flex">
                                <Link href="/login">Login</Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Button as={Link} color="primary" href="/register" variant="shadow">
                                    Sign Up
                                </Button>
                            </NavbarItem>
                        </>
                    )}
                </NavbarContent>

               <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.name}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href={item.route}
                                size="lg"
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            {/* NAVBAR FIN */}

            <main className="flex items-center justify-center ">


            </main>



           <footer className="flex justify-center p-4 gap-4 bg-transparent">
                <Card className="max-w-[400px]" color="transparent" shadow>
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-md">Community</p>
                            <p className="text-small text-default-500">Get involved in our community. Everyone is welcome!</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <Link color href="https://twitter.com">Twitter</Link>
                        <Link color href="https://discord.com">Discord</Link>
                        <Link color href="https://github.com">Github</Link>
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://github.com/nextui-org/nextui"
                        >
                            Visit source code on GitHub.
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="max-w-[400px]" color="transparent" shadow>
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-md">Created by Encrypto Cloud</p>
                            <p className="text-small text-default-500">Deployed on <Link color href="https://tu-sitio-web.com">Tu Sitio Web</Link></p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://github.com/nextui-org/nextui"
                        >
                            Visit source code on GitHub.
                        </Link>
                    </CardFooter>
                </Card>
            </footer>



        </>
    );
}
