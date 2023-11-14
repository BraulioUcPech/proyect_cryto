import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from "react";

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, User, Divider } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Image, Avatar, AvatarGroup, AvatarIcon, Skeleton, Link } from "@nextui-org/react";

export default function Dashboard({ auth }) {




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


        </AuthenticatedLayout>

    );
}
