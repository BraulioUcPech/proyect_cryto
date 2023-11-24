<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{asset('icons/logo2.png')}}" type="image/svg+xml">
    <meta name="description" content="Tu descripción aquí">
    <meta name="keywords" content="Palabras clave, separadas, por, comas">
    <meta name="author" content="Encrypto Cloud(1-17)">
    <title>{{ ucfirst(Route::currentRouteName()) }} | Encrypto Cloud</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @vite('resources/css/app.css')

    <!--   Asegúrate de que la ruta a face-api.min.js sea correcta si decides usar una versión local -->
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        video#inputVideo {
            width: 720px;
            height: 560px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }

        canvas#overlay {
            width: 720px;
            height: 560px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
        }
    </style>

    <script defer src="{{ asset('js/face-api.min.js') }}"></script>
</head>

<body class="bg-gray-100">
    <div class="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-pink-500 opacity-50 blur-xl -z-10">
    </div>
    <header class="text-gray-600 body-font">

        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src="{{asset('icons/logo2.png')}}" alt="Logo" class="w-10 h-10">
                <span class="ml-3 text-xl">Encrypto Cloud</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="/" class="mr-5 hover:text-gray-900">Inicio</a>
                    <a href="/infoface" class="mr-5 hover:text-gray-900">¿Qué es esto?</a>
                    <a href="/contact" class="mr-5 hover:text-gray-900">Contacto</a>
                    <a href="/login" class="mr-5 hover:text-gray-900">Iniciar Sesion</a>

                </nav>
            </nav>
        </div>
    </header>

<main class="container mx-auto p-8">
    <div class="flex justify-center items-center">
        <section class="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold text-center text-gray-800 mb-8">Registro Facial</h2>
            <div class="flex flex-col items-center">
                <div style="position: relative; width: 720px; height: 560px;">
                    <video id="inputVideo" autoplay muted playsinline></video>
                    <canvas id="overlay" style="position: absolute; top: 0; left: 0;"></canvas>
                </div>
                <button class="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onclick="startRegistration()">Iniciar Registro</button>
            </div>
        </section>
    </div>
</main>
<footer class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-10 md:flex md:items-center md:justify-between">
            <div class="flex justify-center space-x-6 md:order-2">
                <!-- Social media icons -->
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook h-6 w-6"
                        viewBox="0 0 16 16">
                        <path
                            d="M5 3H8V0H5C2.238 0 0 1.791 0 4V8H3V16H8V8H11L12 5H8V4C8 3.346 8.229 3 9 3H12V0H9C7.346 0 7 0.691 7 1.5V3Z" />
                    </svg>

                </a>

                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke-width="2"></rect>
                        <path d="M16 11.37a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="2"></line>
                    </svg>
                </a>

                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.46 1s-2 .95-2.62 1.18a4.48 4.48 0 00-7.63 3.06A12.94 12.94 0 013 1s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.46-2.05A7.72 7.72 0 0023 3z" />
                    </svg>
                </a>

                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 2C6.48 2 2 6.48 2 12a10 10 0 007.09 9.5c.41.07.56-.18.56-.4v-1.4c-2.89.63-3.51-1.4-3.51-1.4a2.77 2.77 0 00-1.18-1.58c-.97-.66.07-.65.07-.65a2.18 2.18 0 011.61 1.08 2.2 2.2 0 003 1.07 2.22 2.22 0 01.66-1.34c-2.3-.26-4.72-1.15-4.72-5.1a4 4 0 011.07-2.78 3.72 3.72 0 01.1-2.75s.87-.28 2.85 1.05a9.86 9.86 0 015.2 0c2-.33 2.85-1.05 2.85-1.05a3.72 3.72 0 01.1 2.75 4 4 0 011.07 2.78c0 3.95-2.42 4.84-4.72 5.1a2.45 2.45 0 01.7 1.9v2.83c0 .22.15.47.56.4A10 10 0 0022 12C22 6.48 17.52 2 12 2z" />
                    </svg>
                </a>
            </div>
            <div class="mt-8 md:mt-0 md:order-1">
                <p class="text-center text-base text-gray-400">
                    &copy; 2023 Your Company, Inc. All rights reserved.
                </p>
            </div>
        </div>
        <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
                <!-- Logo and tagline -->
                <a href="/" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                    <span class="ml-3 text-xl font-bold text-gray-900 sm:text-2xl flex items-center">
                        <img src="{{asset('icons/logo2.png')}}" alt="logo" class="w-10">
                        Encrypto Cloud
                    </span>



                </a>
                <p class="mt-2 text-sm text-gray-500">
                    Making the world a better place through constructing elegant hierarchies.
                </p>
            </div>
            <div class="mt-8 grid grid-cols-2 gap-8 md:mt-0 md:grid-cols-4">
                <div class="col-span-1 flex md:col-span-2 lg:col-span-1">
                    <div class="grid grid-cols-1 gap-8">
                        <!-- Column 1 -->
                        <div>
                            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Solutions
                            </h3>
                            <ul class="mt-4 space-y-4">
                                <li><a href="#" class="text-base text-gray-500 hover:text-gray-900">Marketing</a></li>
                                <li><a href="#" class="text-base text-gray-500 hover:text-gray-900">Analytics</a></li>
                            </ul>
                        </div>
                        <!-- Column 2 -->
                        <div>
                            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Support
                            </h3>
                            <ul class="mt-4 space-y-4">
                                <li><a href="#" class="text-base text-gray-500 hover:text-gray-900">Pricing</a></li>
                                <li><a href="/documentation"
                                        class="text-base text-gray-500 hover:text-gray-900">Documentation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 flex md:col-span-2 lg:col-span-1">
                    <div class="grid grid-cols-1 gap-8">
                        <!-- Column 3 -->
                        <div>
                            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Company
                            </h3>
                            <ul class="mt-4 space-y-4">
                                <li><a href="/about" class="text-base text-gray-500 hover:text-gray-900">About</a></li>
                                <li><a href="/blog" class="text-base text-gray-500 hover:text-gray-900">Blog</a></li>
                            </ul>
                        </div>
                        <!-- Column 4 -->
                        <div>
                            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Legal
                            </h3>
                            <ul class="mt-4 space-y-4">
                                <li><a href="/claim" class="text-base text-gray-500 hover:text-gray-900">Claim</a></li>
                                <li><a href="/privacy" class="text-base text-gray-500 hover:text-gray-900">Privacy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</footer>

    <script src="{{ asset('js/script_webcam.js') }}"></script>
</body>

</html>
