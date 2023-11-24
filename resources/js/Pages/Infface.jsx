import React, { useState, useCallback } from "react";

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, User, Divider } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Image, Avatar, AvatarGroup, AvatarIcon, Skeleton, Link,Accordion, AccordionItem} from "@nextui-org/react";
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import logo from '/public/icons/logo2.png';





export default function Infface({ auth, laravelVersion, phpVersion }) {

  const { user } = auth;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: "Profile", route: "/profile" },
        { name: "Dashboard", route: "/dashboard" },
        { name: "Activity", route: "/activity" },
        { name: "Analytics", route: "/dashboard" },
        { name: "System", route: "/system" },
        { name: "Deployments", route: "/dashboard" },
        { name: "My Settings", route: "/profile" },
        { name: "About", route: "/about" },
        { name: "Help & Feedback", route: "/faq" },
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
                        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Encrypto Cloud</span>
                            <img
                                className="h-16 w-auto "
                                src= {logo}
                                alt="Logo"
                            />
                            </a>
                        </div>
                            <div className="flex lg:hidden">
                            </div>
                            </nav>
                        <a>Encrypto Cloud</a>
                        </NavbarBrand>
                    <Skeleton />

                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link href="/">Home</Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="/faq">FAQ</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/about">About</Link>
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
            {/* CONTENIDO INICIO */}

            <div className="flex flex-col min-h-screen">
                <main className="flex-1">
                    <div className="bg-white py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between flex-wrap">
                                <div className="w-0 flex-1 flex items-center">
                                    <span className="flex p-2 rounded-lg bg-indigo-800">
                                        <LockClosedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </span>
                                    <p className="ml-3 font-medium text-black truncate">
                                        <span className="md:hidden">We announced a new product!</span>
                                        <span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
                                    </p>
                                </div>
                                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                                   <a
                                        href="https://github.com/justadudewhohacks/face-api.js/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-800 bg-white hover:bg-indigo-50"
                                    >
                                        Learn more
                                    </a>

                                </div>
                                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                                    <button type="button" className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2" onClick={() => setIsMenuOpen(true)}>
                                        <span className="sr-only">Dismiss</span>
                                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="px-4 py-6 sm:px-0">
                                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                                    <div className="py-6">
                                        <div className="max-w-6xl mx-auto px-6 lg:px-8">
                                            <div className="">
                                                <div className="bg-indigo-700 p-6 lg:p-8 rounded-md">
                                                    <h2 className="text-3xl font-bold text-white mb-2">Discover face-api.js</h2>
                                                    <p className="text-white text-opacity-80 text-lg">
                                                        A cutting-edge tool for facial recognition technology in web applications.
                                                    </p>
                                                </div>
                                                <div className="p-6 lg:p-8 space-y-4">
                                                    <h3 className="text-2xl font-semibold text-indigo-600">How It Enhances User Experience</h3>
                                                    <p className="text-gray-700">
                                                        Face-api.js utilizes TensorFlow.js for real-time face detection and recognition, bringing a new level of interactivity and security to web and Node.js applications.
                                                    </p>
                                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                                        <li><strong>Face Detection</strong>: Quickly and accurately identifies faces in images and videos.</li>
                                                        <li><strong>Landmark Detection</strong>: Provides detailed analysis of facial features.</li>
                                                        <li><strong>Face Recognition</strong>: Enhances security by verifying user identity.</li>
                                                        <li><strong>Expression Recognition</strong>: Opens up possibilities for dynamic, responsive user interfaces.</li>
                                                    </ul>
                                                    <p className="text-gray-700">
                                                        From security enhancements to creating engaging user interfaces, face-api.js is a versatile tool that's reshaping how we interact with technology.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </main>


            </div>

                        <section className="my-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-6">Discover face-api.js</h2>
                    <p className="text-lg text-gray-700 mb-4">
                    Face-api.js is a comprehensive JavaScript library that offers robust and precise face detection and
                    recognition capabilities in the browser and on Node.js. Utilizing TensorFlow.js, it provides several
                    high-performance models for a variety of face detection tasks.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-3xl font-semibold mb-3">Key Features</h3>
                        <ul className="text-gray-600 space-y-2">
                        <li>Multiple deep learning models for face detection, such as SSD Mobilenet V1, Tiny Face Detector, and MTCNN.</li>
                        <li>Real-time face detection and tracking capabilities.</li>
                        <li>68-point facial landmark detection for precise feature tracking.</li>
                        <li>Facial expression recognition to classify various emotional states.</li>
                        <li>Robust performance under various conditions, including challenging lighting and angles.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-semibold mb-3">Applications</h3>
                        <ul className="text-gray-600 space-y-2">
                        <li>Enhanced security and user verification for web applications.</li>
                        <li>Interactive augmented reality experiences on social media.</li>
                        <li>Emotion analysis for user feedback and engagement monitoring.</li>
                        <li>Accessible interfaces through face gesture-based navigation.</li>
                        </ul>
                    </div>
                    </div>

                    <div className="mt-8">
                    <h3 className="text-3xl font-semibold mb-3">Getting Started</h3>
                    <p className="text-gray-700 mb-4">
                        Installing face-api.js is straightforward with npm, and its high-level API interface
                        simplifies the integration into your projects. It's an open-source library, with
                        extensive documentation and community support, perfect for developers looking to
                        implement face detection features.
                    </p>
                    <a href="https://github.com/justadudewhohacks/face-api.js/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition-colors duration-200">
                        Learn More
                    </a>
                    </div>
                </div>
                </section>
            {/* CONTENIDO FIN */}
            {/* FOOTER INICIO */}
            <footer className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                        <div className="px-5 py-2">
                            <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                                About
                            </Link>
                        </div>

                        <div className="px-5 py-2">
                            <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                                FAQ
                            </Link>
                        </div>

                        <div className="px-5 py-2">
                            <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                                Contact
                            </Link>
                        </div>

                        <div className="px-5 py-2">
                            <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                                Terms
                            </Link>
                        </div>

                        <div className="px-5 py-2">
                            <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                                Privacy
                            </Link>
                        </div>
                    </nav>
                    <div className="mt-8 flex justify-center space-x-6">
                        <div class="flex justify-center space-x-6 md:order-2">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook h-6 w-6" viewBox="0 0 16 16">
                        <path
                            d="M5 3H8V0H5C2.238 0 0 1.791 0 4V8H3V16H8V8H11L12 5H8V4C8 3.346 8.229 3 9 3H12V0H9C7.346 0 7 0.691 7 1.5V3Z" />
                    </svg>

                </a>

                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke-width="2"></rect>
                        <path d="M16 11.37a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="2"></line>
                    </svg>
                </a>

                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.46 1s-2 .95-2.62 1.18a4.48 4.48 0 00-7.63 3.06A12.94 12.94 0 013 1s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.46-2.05A7.72 7.72 0 0023 3z" />
                        </svg>
                </a>

                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 2C6.48 2 2 6.48 2 12a10 10 0 007.09 9.5c.41.07.56-.18.56-.4v-1.4c-2.89.63-3.51-1.4-3.51-1.4a2.77 2.77 0 00-1.18-1.58c-.97-.66.07-.65.07-.65a2.18 2.18 0 011.61 1.08 2.2 2.2 0 003 1.07 2.22 2.22 0 01.66-1.34c-2.3-.26-4.72-1.15-4.72-5.1a4 4 0 011.07-2.78 3.72 3.72 0 01.1-2.75s.87-.28 2.85 1.05a9.86 9.86 0 015.2 0c2-.33 2.85-1.05 2.85-1.05a3.72 3.72 0 01.1 2.75 4 4 0 011.07 2.78c0 3.95-2.42 4.84-4.72 5.1a2.45 2.45 0 01.7 1.9v2.83c0 .22.15.47.56.4A10 10 0 0022 12C22 6.48 17.52 2 12 2z" />
                    </svg>
                </a>
            </div>
                    </div>
                    <p className="mt-8 text-center text-base text-gray-400">&copy; 2023 Encrypto Cloud, Inc. All rights reserved.</p>
                </div>
            </footer>
            {/* FOOTER FIN */}
            </>
    )

}
