import React, { useState, useCallback } from "react";

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, User, Divider } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Image, Avatar, AvatarGroup, AvatarIcon, Skeleton, Link, Checkbox, CheckboxGroup, Dropdown} from "@nextui-org/react";
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import logo from '/public/icons/logo2.png';



export default function About({ auth, laravelVersion, phpVersion }) {
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
            { name: "Help & Feedback", route: "/faq" },
            { name: "Log Out", route: "#" },
        ];


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
                                        src={logo}
                                        alt="Logo"
                                    />
                                </a>
                            </div>
                            <div className="flex lg:hidden">
                            </div>
                        </nav>
                        <a href="/">Encrypto Cloud</a>
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
                                    src={user.avatar}
                                    size="md"
                                    name={user.name.charAt(0)}
                                    description={user.email}

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
                                <Button as={Link} color="primary" href="/dashboard" variant="shadow">
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

            {/* HERO INICIO */}
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">

                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Encrypto Cloud</span>
                                    <span className="block text-indigo-600 xl:inline"> is the best cloud storage</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Encrypto Cloud is a cloud storage service that allows you to store your files securely in the cloud. You can access your files from anywhere in the world thanks to our cloud servers.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link
                                            href="/register"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Get started
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link
                                            href="/login"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                        alt=""
                    />
                </div>
            </div>
            {/* HERO FIN */}
            {/* FEATURES INICIO */}

            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A better way to store your files
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Encrypto Cloud is a cloud storage service that allows you to store your files securely in the cloud. You can access your files from anywhere in the world thanks to our cloud servers.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3 lg:gap-x-8">

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <FingerPrintIcon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Your files are encrypted with AES-256 encryption and stored in our cloud servers. We use the latest security technologies to ensure that your files are safe.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <LockClosedIcon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Private</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Your files are private and only you can access them. We do not share your files with anyone else.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <CloudArrowUpIcon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Unlimited Storage</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    You can store as many files as you want in our cloud servers. There is no limit on the amount of storage space you can use.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <ArrowPathIcon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Easy to Use</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Our service is very easy to use. You can upload your files with just one click.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <ArrowPathIcon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Fast</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Our service is very fast. You can upload your files in seconds.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <ArrowPathIcon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Reliable</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Our service is very reliable. We have a 99.9% uptime guarantee.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            {/* FEATURES FIN */}

            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        <div>
                            <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">About</h2>
                            <p className="mt-2 text-3xl font-extrabold text-gray-900">A better way to send files.</p>
                            <p className="mt-4 text-lg text-gray-500">Encrypto Cloud is a file sharing service that allows users to upload files to a cloud storage and share them with others via a unique link that expires after 24 hours.</p>
                        </div>
                        <div className="mt-12 lg:mt-0 lg:col-span-2">
                            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                                <div>
                                    <dt>
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <LockClosedIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Secure</p>
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">Your files are encrypted with AES-256 and stored on our servers. We do not keep any logs of your activity.</dd>
                                </div>

                                <div>
                                    <dt>
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <FingerPrintIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Private</p>
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">Your files are only accessible by you and the people you share the link with.</dd>
                                </div>

                                <div>
                                    < dt>
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <CloudArrowUpIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Fast</p>
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">We use a global CDN to ensure that your files are delivered as fast as possible.</dd>
                                </div>

                                <div>
                                    <dt>
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <ArrowPathIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Easy</p>
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">Simply drag and drop your files to upload them. No registration required.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURES INICIO */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <h2 className="max-w-md mx-auto text-3xl font-extrabold text-gray-900 lg:max-w-xl lg:text-4xl">
                            Everything you need to start encrypting your files
                        </h2>
                        <div className="mt-12 lg:mt-0 lg:col-span-2">
                            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8">
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <FingerPrintIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Advanced Security</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Implement cutting-edge security measures with OpenSSL to protect data and ensure secure communication channels for your web applications.
                                    </dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <LockClosedIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Privacy Assurance</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        OpenSSL provides SSL/TLS certificates, enhancing privacy and establishing trust between servers and clients by encrypting data in transit.
                                    </dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <ArrowPathIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Robust Encryption</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Utilize OpenSSL's robust encryption algorithms to secure sensitive data, ensuring that your application adheres to the highest standards of data protection.
                                    </dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <CloudArrowUpIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Cloud Integration</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Securely deploy and manage your applications in the cloud with OpenSSL, ensuring that data remains protected across all cloud-based operations.
                                    </dd>
                                </div>
                            </dl>
                        </div>

                    </div>
                </div>
            </div>
            {/* FEATURES FIN */}

            {/* CTA INICIO */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Ready to encrypt your files?</h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Start encrypting your files today. We offer a 14 day free trial, no credit card required.
                        </p>
                        <Link
                            href="/register"
                            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
            {/* CTA FIN */}
            {/* FOOTER INICIO */}
            <footer className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                        {/* Links del Footer */}
                        <div className="px-5 py-2">
                            <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                                About
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link href="/faq" className="text-base text-gray-500 hover:text-gray-900">
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

                    {/* Iconos de Redes Sociales */}
                    <div className="mt-8 flex justify-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-facebook h-6 w-6" viewBox="0 0 16 16">
                                <path
                                    d="M5 3H8V0H5C2.238 0 0 1.791 0 4V8H3V16H8V8H11L12 5H8V4C8 3.346 8.229 3 9 3H12V0H9C7.346 0 7 0.691 7 1.5V3Z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="2"></rect>
                                <path d="M16 11.37a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.46 1s-2 .95-2.62 1.18a4.48 4.48 0 00-7.63 3.06A12.94 12.94 0 013 1s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.46-2.05A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 2C6.48 2 2 6.48 2 12a10 10 0 007.09 9.5c.41.07.56-.18.56-.4v-1.4c-2.89.63-3.51-1.4-3.51-1.4a2.77 2.77 0 00-1.18-1.58c-.97-.66.07-.65.07-.65a2.18 2.18 0 011.61 1.08 2.2 2.2 0 003 1.07 2.22 2.22 0 01.66-1.34c-2.3-.26-4.72-1.15-4.72-5.1a4 4 0 011.07-2.78 3.72 3.72 0 01.1-2.75s.87-.28 2.85 1.05a9.86 9.86 0 015.2 0c2-.33 2.85-1.05 2.85-1.05a3.72 3.72 0 01.1 2.75 4 4 0 011.07 2.78c0 3.95-2.42 4.84-4.72 5.1a2.45 2.45 0 01.7 1.9v2.83c0 .22.15.47.56.4A10 10 0 0022 12C22 6.48 17.52 2 12 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <p className="mt-8 text-center text-base text-gray-400">&copy; 2023 Encrypto Cloud, Inc. All rights reserved.</p>
            </footer>
            {/* FOOTER FIN */}


        </>
    );
}


