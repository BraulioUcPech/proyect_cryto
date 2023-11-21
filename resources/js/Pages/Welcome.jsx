import React, { useState, useCallback } from "react";

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, User, Divider } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Image, Avatar, AvatarGroup, AvatarIcon, Skeleton, Link, Checkbox, CheckboxGroup, Dropdown} from "@nextui-org/react";
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
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
                        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
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
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to deploy your app
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                            pulvinar et feugiat blandit at. In mi viverra elit nunc.
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
