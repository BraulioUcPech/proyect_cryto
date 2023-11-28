import React, { useState, useCallback } from "react";

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, User, Divider } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Image, Avatar, AvatarGroup, AvatarIcon, Skeleton, Link, Checkbox, CheckboxGroup, Dropdown} from "@nextui-org/react";
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import ApplicationLogo from '@/Components/ApplicationLogo';
import logo from '/public/icons/logo2.png'; // Asegúrate de que la ruta sea correcta


const features = [
  {
    name: 'Push to Deploy',
    description:
      'Instantly deploy your applications with a simple push to your repository. Our streamlined process ensures your code goes live with zero downtime, ensuring a smooth workflow.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL Certificates',
    description:
      'Leverage OpenSSL to secure your communications with SSL/TLS certificates. Protect data in transit and establish trust with end-to-end encryption for your web applications.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple Queues',
    description:
      'Manage tasks efficiently with our intuitive queuing system. Organize and prioritize your application processes for optimal performance and scalability.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced Security',
    description:
      'With OpenSSLs robust encryption and secure communication features, our platform provides an additional layer of security. Safeguard your application against common vulnerabilities and threats.',
    icon: FingerPrintIcon,
  },
]

const testimonials = [
  // Agrega tus objetos de testimonios aquí con el contenido real
  // Ejemplo:
  {
    quote: "I've been using [Your Product/Service] for a while now, and it's been a game-changer for my business. The ease of use, coupled with the exceptional support, has made all the difference. I can't thank the team enough for their dedication and hard work. 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.' These words truly encapsulate the experience I've had. Highly recommended!"

,
    author: "Leslie Alexander",
    username: "@lesliealexander",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },

  // ... más testimonios
];

const TestimonialCard = ({ testimonial }) => (
  <div className="max-w-sm mx-auto mb-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Testimonial</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{testimonial.author}</a>
        <p className="mt-2 text-gray-500">{testimonial.quote}</p>
      </div>
      <div className="flex items-center">
        <img className="h-12 w-12 rounded-full mx-auto md:mx-0 md:mr-6" src={testimonial.image} alt="Profile image"/>
        <div className="text-center md:text-left">
          <p className="text-gray-400">{testimonial.username}</p>
        </div>
      </div>
    </div>
  </div>
);


export default function Welcome({ auth, laravelVersion, phpVersion }) {

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
                                        src={logo}
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
            <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                <div
                    className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                        }}
                    />
                </div>
                <div
                    className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                        }}
                    />
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="text-sm leading-6 text-gray-900">
                        <strong className="font-semibold">GeneriCon 2023</strong>
                        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        Join us in Denver from June 7 – 9 to see what’s coming next.
                    </p>
                    <a
                        href="/register"
                        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                        Register now <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
                <div className="flex flex-1 justify-end">
                    <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                        <span className="sr-only">Dismiss</span>
                        <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
                    </button>
                </div>
            </div>



            <main className="flex items-center justify-center " >

                <div className="bg-white py-24 sm:py-32">
                    <div className="bg-white">
                        <div className="relative isolate px-6 pt-14 lg:px-8">
                            <div
                                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                                aria-hidden="true"
                            >
                                <div
                                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    }}
                                />
                            </div>
                            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                        Announcing our next round of funding.{' '}
                                        <a href="#" className="font-semibold text-indigo-600">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            Read more <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="container mx-auto px-6 py-12 text-center">
                                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                            Encrypto Cloud: Secure Your Digital Future
                                        </h1>
                                        <p className="mt-6 text-lg leading-8 text-gray-600">
                                            "At Encrypto Cloud, we believe security should empower, not hinder. We're dedicated to providing robust encryption and decryption solutions that safeguard your digital assets effortlessly."
                                        </p>
                                        <p className="mt-2 text-sm text-gray-500">
                                            - Braulio Uc Pech, CEO of Encrypto Cloud
                                        </p>
                                    </div>

                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <a
                                            href="#"
                                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Get started
                                        </a>
                                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                            Learn more <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                                aria-hidden="true"
                            >
                                <div
                                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                            Trusted by the world’s most innovative teams
                        </h2>
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <img
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                                alt="Reform"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                                alt="Tuple"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                                alt="SavvyCal"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                                alt="Statamic"
                                width={158}
                                height={48}
                            />
                        </div>
                    </div>


                    <div className="bg-white py-24 sm:py-32">

                        <div className="mx-auto max-w-7xl px-6 lg:px-8">

                            <div className="mx-auto max-w-2xl lg:text-center">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Secure Your Applications</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    OpenSSL: Robust Cryptography for Secure Communication
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    OpenSSL is an essential toolkit for implementing cryptography and secure communication in your applications. With commercial-grade features, it's designed to be both robust and full-featured, facilitating encryption, decryption, and secure data transfer. Governed by a dedicated committee and available under an open-source license, OpenSSL allows you to fortify your applications against vulnerabilities with confidence. Engage with the community or contribute to the project to enhance its capabilities for a secure digital world.

                                </p>
                            </div>
                            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-16">
                                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                                </div>
                                                {feature.name}
                                            </dt>
                                            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>

                                        </div>
                                    ))}

                                </dl>

                            </div>
                        </div>

                    </div>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -mx-4">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                        <div className="mx-auto max-w-2xl lg:max-w-4xl">
                            <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                            <figure className="mt-10">
                                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                    <p>
                                        “Innovation at Encrypto Cloud isn't just about technology; it's about shaping a future where security and simplicity coexist. 'Laborum quis quam' isn't just a motto, it's our commitment to excellence.”
                                    </p>

                                </blockquote>
                                <figcaption className="mt-10">
                                    <img
                                        className="mx-auto h-10 w-10 rounded-full"
                                        src=""
                                        alt=""
                                    />
                                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                        <div className="font-semibold text-gray-900">Braulio Uc Pech</div>
                                        <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                            <circle cx={1} cy={1} r={1} />
                                        </svg>
                                        <div className="text-gray-600">CEO of Workcation</div>

                                    </div>
                                </figcaption>

                            </figure>

                        </div>
                    </section>
                </div>
            </main>




            <footer className="flex justify-center p-4 gap-4 bg-transparent">

                <Card className="max-w-[400px]" color="transparent" shadow>
                    <CardHeader className="flex gap-3">

                        <div className="flex flex-col">
                            <p className="text-md">Community</p>
                            <p className="text-small text-default-500">Get involved in our community. Everyone is welcome!</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Link color href="https://twitter.com">Twitter</Link>
                        <Link color href="https://discord.com">Discord</Link>
                        <Link color href="https://github.com">Github</Link>
                    </CardBody>
                    <Divider />
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
                    <Divider />
                    <CardBody>
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </CardBody>
                    <Divider />
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
