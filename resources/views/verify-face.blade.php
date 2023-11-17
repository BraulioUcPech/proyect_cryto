<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{ asset('/public/icons/logo.svg') }}" type="image/svg+xml">
    <meta name="description" content="Tu descripción aquí">
    <meta name="keywords" content="Palabras clave, separadas, por, comas">
    <meta name="author" content="Encrypto Cloud(1-17)">
    <title>{{ ucfirst(Route::currentRouteName()) }} | Encrypto Cloud</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @vite('resources/css/app.css')

    <!--   Asegúrate de que la ruta a face-api.min.js sea correcta si decides usar una versión local -->

    <script defer src="{{ asset('js/face-api.min.js') }}"></script>
</head>

<body class="bg-gray-100">
    <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src="/public/icons/logo.svg" alt="Logo" class="w-10 h-10">
                <span class="ml-3 text-xl">Encrypto Cloud</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="/" class="mr-5 hover:text-gray-900">Inicio</a>
                    <a href="/informacion" class="mr-5 hover:text-gray-900">Información</a>
                    <a href="/galeria" class="mr-5 hover:text-gray-900">Galería</a>
                    <a href="/contacto" class="mr-5 hover:text-gray-900">Contacto</a>
                </nav>
            </nav>
        </div>
    </header>

    <main class="container mx-auto p-8">
        <div class="flex justify-center items-center">
            <div class="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-2xl font-semibold text-center text-gray-800 mb-8">Registro Facial</h2>
                <div class="flex flex-col items-center">
                    <div style="position: relative">
                        <video onloadedmetadata="onPlay(this)" id="inputVideo" autoplay muted playsinline></video>
                        <canvas id="overlay">
                    </div>
                    <a href="/">
                        <button class="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Iniciar Registro </button>
                    </a>

                </div>
            </div>
        </div>
    </main>

    <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <div class="max-w-7xl mx-auto px-6 flex justify-between">
                <div class="flex flex-wrap justify-between items-center">
                    <div class="w-full md:w-1/2">
                        <h3 class="font-semibold text-xl">Sobre nosotros</h3>
                        <p class="text-gray-600 mt-2">Somos una empresa dedicada a la seguridad de archivos en línea...
                        </p>
                    </div>
                    <div class="w-full md:w-1/2 mt-4 md:mt-0">
                        <h3 class="font-semibold text-xl">Contacto</h3>
                        <ul class="text-gray-600">
                            <li class="flex items-center"><i class="fas fa-map-marker-alt text-gray-700 mr-2"></i> 123
                                Calle
                                Principal, Ciudad, Estado, Código Postal</li>
                            <li class="flex items-center mt-2"><i class="fas fa-phone text-gray-700 mr-2"></i> (123)
                                456-7890</li>
                            <li class="flex items-center mt-2"><i class="fas fa-envelope text-gray-700 mr-2"></i>
                                info@tusitio.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
            2023 Encrypto Cloud —
            <a href="https://twitter.com/encryptocloud" class="text-gray-600 ml-1" rel="noopener noreferrer"
                target="_blank">@encryptocloud</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a href="https://www.facebook.com/tuPagina" class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-5 h-5" viewBox="0 0 24 24">
                        <!-- Icono de Facebook -->
                        <path
                            d="M18.768 2.002H5.23A3.24 3.24 0 002 5.237v13.525a3.24 3.24 0 003.23 3.235h7.385v-5.88H9.69v-2.29h2.923V11.69c0-2.9 1.776-4.48 4.366-4.48 1.24 0 2.307.092 2.617.134v3.034h-1.795c-1.405 0-1.677.668-1.677 1.647v2.158h3.352l-.437 2.29h-2.915v5.88h4.537a3.24 3.24 0 003.23-3.235V5.237a3.24 3.24 0 00-3.23-3.235z" />
                    </svg>
                </a>
                <a href="https://twitter.com/tuUsuario" class="ml-3 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-5 h-5" viewBox="0 0 24 24">
                        <!-- Icono de Twitter -->
                        <path
                            d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/tuPerfil" class="ml-3 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-5 h-5" viewBox="0 0 24 24">
                        <!-- Icono de LinkedIn -->
                        <path
                            d="M16 8a6 6 0 00-11.85-3.5A6 6 0 0016 14.5zm-1.75-2.5v6.75H12V9.5h2.25zm-6.5 0v6.75H5.5V9.5H8.75z" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/tuUsuario" class="ml-3 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-5 h-5" viewBox="0 0 24 24">
                        <!-- Icono de Instagram -->
                        <path
                            d="M7.5 3h9A4.5 4.5 0 0121 7.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z" />
                    </svg>
                </a>
            </span>
        </span>

        </div>

    </footer>

    <script src="{{ asset('js/script_webcam.js') }}"></script>
</body>

</html>
