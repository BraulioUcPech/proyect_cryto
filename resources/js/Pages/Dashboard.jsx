import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from "react";
import { getFilesData } from '@/Components/GetFileData';

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import { Card, CardBody, Link } from "@nextui-org/react";
import Chart from 'chart.js/auto';
import { motion } from 'framer-motion';

export default function Dashboard({ auth }) {

     const [filesData, setFilesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // Reemplaza con tu lógica para obtener datos de la API
            const response = await fetch('http://127.0.0.1:8000/api');
            const data = await response.json();
            setFilesData(data);
        };

        fetchData();
    }, []);

    const chartData = {
        labels: filesData.map(file => file.file_name),
        datasets: [
            {
                label: 'Tamaño del archivo',
                data: filesData.map(file => file.file_size),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };






    return (

        <AuthenticatedLayout
            user={auth.user}
            header={

                <Navbar>
                    <NavbarBrand>
                        <p className="font-bold text-inherit">Encrypto Cloud</p>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Features
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link href="#" aria-current="page">
                                Customers
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="/files">
                                Integrations
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            }
        >

            <Head title="Dashboard" />

            <Card color="transparent" shadow>
                <CardBody>
                    <p>You are logged in!</p>
                    <h2>Welcome to your Dashboard, {auth.user.name}! </h2>

                </CardBody>
            </Card>


            <div className="flex h-screen bg-gray-100">
                <div className="flex flex-col w-64 bg-white shadow-lg">
                    <div className="px-4 py-6">
                        <nav className="mt-6">
                            <div>
                                <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white" href="">
                                    Inicio
                                </a>
                                <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white" href="/users">
                                    Usuarios JSON
                                </a>
                                <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white" href="/api/files">
                                    Archivos JSON
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>


                <div className="flex-1 flex flex-col overflow-hidden">


                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <div className="container mx-auto px-6 py-8">
                            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white p-4">
                                    <div className="p-4 flex items-center">
                                        <div className="p-3 rounded-full bg-blue-500 text-white">
                                        </div>
                                        <div className="ml-4 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 truncate">
                                                    Total Usuarios
                                                </dt>
                                                <dd>
                                                    <div className="text-lg font-medium text-gray-900">
                                                        2
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                                onClick={() => window.location.href = 'http://127.0.0.1:8000/verify-face'}
                                className="relative overflow-hidden py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out"
                                style={{
                                    boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)'
                                }}
                            >
                                <span className="absolute left-0 top-0 h-full w-1 bg-white opacity-75 transition-all duration-300 ease-in-out transform scale-0 group-hover:scale-100" />
                                <span className="relative">
                                    Verify Face
                                </span>
                            </motion.button>

                            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white p-4">
                                    <div className="p-4 flex items-center">
                                        <div className="p-3 rounded-full bg-blue-500 text-white">
                                        </div>
                                        <div className="ml-4 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 truncate">
                                                    Total Archivos
                                                </dt>
                                                <dd>
                                                    <div className="text-lg font-medium text-gray-900">
                                                        0
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
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



        </AuthenticatedLayout>

    );
}
