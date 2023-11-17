import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from "react";
import { getFilesData } from '@/Components/GetFileData';

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import { Card, CardBody, Link } from "@nextui-org/react";
import Chart from 'chart.js/auto';

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



        </AuthenticatedLayout>

    );
}
