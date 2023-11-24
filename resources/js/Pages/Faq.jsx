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


export default function About({ auth, laravelVersion, phpVersion }) {
    const { user } = auth;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   const faqItems = [
  {
    key: "openssl",
    title: "¿Qué es la encriptación OpenSSL?",
    content: "OpenSSL es una robusta biblioteca de herramientas de criptografía que permite encriptar y desencriptar datos utilizando una variedad de algoritmos de seguridad. Se utiliza ampliamente para asegurar comunicaciones en Internet y proteger la información sensible."
  },
  {
    key: "encrypto-cloud",
    title: "¿Cómo asegura Encrypto Cloud la privacidad de mis datos?",
    content: "Encrypto Cloud utiliza técnicas de encriptación avanzadas, incluyendo protocolos como AES y RSA, para asegurar que tus datos permanezcan privados y seguros. Nuestra infraestructura está diseñada para garantizar la máxima seguridad y confidencialidad de la información."
  },
  {
    key: "openssl-vs-others",
    title: "¿Qué diferencia a OpenSSL de otras herramientas de encriptación?",
    content: "OpenSSL destaca por su flexibilidad, su amplia adopción en la industria y su comunidad de código abierto activa. Ofrece una gama más amplia de opciones de criptografía y se actualiza regularmente para garantizar la seguridad contra amenazas emergentes."
       },
  {
    key: "enterprise-security",
    title: "¿Cómo puede Encrypto Cloud mejorar la seguridad de mi empresa?",
    content: "Encrypto Cloud ofrece soluciones de encriptación de nivel empresarial que protegen tus datos contra accesos no autorizados y ciberataques. Nuestra tecnología avanzada y protocolos de seguridad garantizan que tus datos críticos estén seguros, tanto en tránsito como en reposo."
  },
  {
    key: "compliance",
    title: "¿Encrypto Cloud ayuda a cumplir con normativas como GDPR y HIPAA?",
    content: "Sí, nuestras soluciones de encriptación están diseñadas para ayudar a las empresas a cumplir con normativas internacionales como GDPR, HIPAA, y más. Al encriptar datos sensibles, Encrypto Cloud asegura que tu empresa cumpla con los estándares de protección de datos."
  },
  {
    key: "benefits-to-businesses",
    title: "¿Cuáles son los beneficios de usar Encrypto Cloud para las empresas?",
    content: "Los beneficios incluyen protección de datos de alto nivel, cumplimiento con regulaciones de privacidad, reducción del riesgo de brechas de datos, y mejora de la confianza del cliente. Además, ofrecemos una plataforma fácil de usar que se integra sin problemas con tus sistemas existentes."
  },
  {
    key: "openssl-in-business",
    title: "¿Cómo se utiliza OpenSSL en un contexto empresarial?",
    content: "En el ámbito empresarial, OpenSSL se utiliza para asegurar las comunicaciones en red, proteger las transacciones en línea, y encriptar datos sensibles. Su flexibilidad y robustez lo hacen ideal para empresas que requieren una seguridad de datos rigurosa."
       },
  {
  key: "easy-to-use",
  title: "¿Es fácil utilizar Encrypto Cloud para encriptar y desencriptar archivos?",
  content: "Sí, en Encrypto Cloud hemos simplificado el proceso de encriptación y desencriptación. Solo tienes que subir tu archivo a nuestra plataforma segura. Una vez encriptado, puedes descargarlo fácilmente. Para desencriptar, sube el archivo encriptado y nuestra herramienta se encargará del resto. Es un proceso intuitivo y accesible, ideal para empresas que buscan seguridad sin complicaciones."
}


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
                                src= {logo}
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

            {/* SOBRE PREGUNTAS Y RESPUESTAS*/}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center">
                    <div className="lg:w-0 lg:flex-1">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Frequently asked questions
                        </h2>
                        <p className="mt-4 max-w-3xl text-lg text-gray-500 lg:mx-0">
                            Can’t find the answer you’re looking for? Reach out to our{" "}
                            <Link href="/contact" className="font-medium text-indigo-600 hover:text-indigo-500">
                                customer support
                            </Link>{" "}
                            team.
                        </p>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:ml-8 lg:flex-1">
                        <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Billing</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Get a better understanding of where your traffic is coming from.
                                </p>
                            </div>
                            <div className="mt-10 lg:mt-0">
                                <h3 className="text-lg font-medium text-gray-900">Reporting</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Speak directly to your customers in a more meaningful way.
                                </p>
                            </div>
                            <div className="mt-10 lg:mt-0">
                                <h3 className="text-lg font-medium text-gray-900">Security</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Your customers' data will be safe and secure.
                                </p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Link
                                href="/faq"
                                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                View all topics &rarr;
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
            {/* SOBRE PREGUNTAS Y RESPUESTAS*/}

<main className="flex items-center justify-center " >
                <div className="bg-white py-24 sm:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
                            <p className="mt-4 text-lg text-gray-500">
                                Can’t find the answer you’re looking for? Reach out to our{" "}
                                <Link href="/contact" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    customer support
                                </Link>{" "}
                                team.
                            </p>
                        </div>
                        <div className="mt-20">

                                <Accordion
                        motionProps={{
                            variants: {
                            enter: {
                                y: 0,
                                opacity: 1,
                                height: "auto",
                                transition: {
                                height: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                    duration: 1,
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 1,
                                },
                                },
                            },
                            exit: {
                                y: -10,
                                opacity: 0,
                                height: 0,
                                transition: {
                                height: {
                                    easings: "ease",
                                    duration: 0.25,
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 0.3,
                                },
                                },
                            },
                            },
                        }}
                        >
                        {faqItems.map(item => (
                                <AccordionItem key={item.key} aria-label={item.title} title={item.title}>
                                {item.content}
                                </AccordionItem>
                            ))}
                        </Accordion>

                        </div>
                    </div>
                </div>
            </main>






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
                    <div className="mt-8 flex justify-center space-x-6">
                        <div className="flex justify-center space-x-6 md:order-2">
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
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke-width="2"></rect>
                        <path d="M16 11.37a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="2"></line>
                    </svg>
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.46 1s-2 .95-2.62 1.18a4.48 4.48 0 00-7.63 3.06A12.94 12.94 0 013 1s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.46-2.05A7.72 7.72 0 0023 3z" />
                        </svg>
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    );
}


