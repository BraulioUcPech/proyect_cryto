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
    const cardData = [
    {
        title: "Título 1",
        description: "Esta es alguna información para el primer cuadro.",
        imageUrl: "https://ruta-a-la-imagen.com/imagen1.jpg"
    },
    {
        title: "Título 2",
        description: "Esta es alguna información para el segundo cuadro.",
        imageUrl: "https://th.bing.com/th/id/OIG.Qw.JE_eb_Y0zs9NbAba2?pid=ImgGn"
    },
     {
        title: "Título 4",
        description: "Esta es alguna información para el segundo cuadro.",
        imageUrl: "https://ruta-a-la-imagen.com/imagen2.jpg"
    },
    ];
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
                            <a>Mi Aplicación</a>
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
                <Card  className="flex items-center justify-center " >
                   <CardBody className="flex items-center justify-center backdrop-blur-md bg-red-500 bg-opacity-10">
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </CardBody>
                <div className="max-w-[900px] gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 " >
                    <Card className="h-[300px] flex items-center justify-center">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                        </CardHeader>
                        <Image
                            isBlurred
                            isZoomed
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://th.bing.com/th/id/OIG.fSNBjYq8HtQQh8Z7BSy7?pid=ImgGn"
                        />

                    </Card>
                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                            <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Relaxing app background"
                            className="z-0 w-full h-full object-cover"
                            src="https://th.bing.com/th/id/OIG.xIQjtlXfWlS8iM8wbmtU?pid=ImgGn"
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <Image
                                    isZoomed
                                    isBlurred
                                    alt="Breathing app icon"
                                    className="rounded-full w-10 h-11 bg-black"
                                    src="#"
                                />
                            <div className="flex flex-col">
                                <p className="text-tiny text-white/60">Breathing App</p>
                                <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                            </div>
                            </div>
                            <Button radius="full" size="sm">Get App</Button>
                            </CardFooter>

                    </Card>


                    </div>

                     {cardData.map((data, index) => (
                        <div key={index} className="p-4 w-full md:w-1/2 lg:w-1/4">
                            <Card>
                            <CardHeader>
                                <h2>{data.title}</h2>
                            </CardHeader>
                            <Image
                                src={data.imageUrl}
                                alt="Imagen representativa"
                                width="100%"
                                height="auto"
                            />
                            <CardBody>
                                <p>{data.description}</p>
                            </CardBody>
                            </Card>
                        </div>
                        ))}
                </Card>

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
