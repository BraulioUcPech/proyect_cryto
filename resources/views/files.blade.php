<!-- resources/views/files.blade.php -->
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head> <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{ ucfirst(Route::currentRouteName()) }} | Encrypto Cloud</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
    <style>
        /* En tu archivo CSS o en las etiquetas <style> */
        @media (max-width: 640px) {
        .responsive-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
        .responsive-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        }

        @media (min-width: 1025px) {
        .responsive-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        }
        /* CSS para ocultar la barra de navegación en pantallas pequeñas */
@media (max-width: 768px) {
  #navbar {
    display: none;
  }
}
/* Puedes agregar esto en tu archivo CSS o dentro de una etiqueta <style> en tu documento HTML */
label {
  /* Esto es solo para el ejemplo; Tailwind CSS tiene clases para todo esto */
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  border: 2px solid #e2e8f0; /* border-gray-300 */
  border-radius: 0.375rem; /* rounded-md */
  transition: background-color 150ms ease-in-out, border-color 150ms ease-in-out;
}

label:hover {
  background-color: #f8fafc; /* bg-gray-50 */
  border-color: #c3dafe; /* border-indigo-300 */
}

label:focus-within {
  border-color: #7f9cf5; /* border-indigo-500 */
  box-shadow: 0 0 0 1px #7f9cf5; /* shadow-outline */
}

label input[type='file'] {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

label span {
  cursor: pointer;
  display: inline-block;
  font-size: 1rem; /* text-base */
  color: #4a5568; /* text-gray-700 */
}


    </style>
    @vite('resources/css/app.css')

    </head>
    <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

    <body class="bg-gray-50 font-sans">
    <header class="bg-white py-6 shadow-sm">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/">
            <h1 class="text-4xl font-bold text-gray-800">Mis Archivos</h1>
        </a>
        <div class="flex items-center justify-center">
            <div class="text-center">
                <p id="date" class="text-sm font-medium text-gray-700"> </p> <p id="time" class="text-sm text-gray-500"></p>
                </div>
                </div>
        <div class="flex items-center justify-center">
        @auth
        <div class="flex items-center space-x-3">
        <span class="text-lg font-medium text-gray-900">{{ Auth::user()->name }}</span>
        <span class="text-gray-500">{{ Auth::user()->email }}</span>
        </div>
        @endauth
        </div>
    </header>

    <main class="my-10">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex gap-10">
                <!-- Sidebar -->
                <div class="md:hidden flex items-center">
                    <button id="menuButton"  class="md:hidden">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                       </button>
                </div>

                <div class="w-1/4">
                    <nav class="p-5 bg-white rounded-lg shadow" id="navbar" class="hidden md:block">
                        <h3 class="text-xl font-semibold mb-5">Navegación</h3>
                        <ul class="space-y-2">
                            <li><a href="/profile" class="block text-indigo-600 hover:underline">Profile</a></li>
                            <li><a href="/dashboard" class="block text-indigo-600 hover:underline">Dashboard</a></li>
                            <li><a href="/activity" class="block text-indigo-600 hover:underline">Activity</a></li>
                            <li><a href="/analytics" class="block text-indigo-600 hover:underline">Analytics</a></li>
                            <li><a href="/system" class="block text-indigo-600 hover:underline">System</a></li>
                            <li><a href="/deployments" class="block text-indigo-600 hover:underline">Deployments</a></li>
                            <li><a href="/my-settings" class="block text-indigo-600 hover:underline">My Settings</a></li>
                            <li><a href="/contact" class="block text-indigo-600 hover:underline">Contacto</a></li>
                            <li><a href="/faq" class="block text-indigo-600 hover:underline">Help & Feedback</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="w-3/4 mx-auto">
                    <div class="bg-white p-6 rounded-lg shadow">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            @forelse ($files as $file)
                            <div class="border rounded-lg p-4 flex flex-col items-center space-y-2 relative">

                                @php
                                $fileExtension = pathinfo($file->path, PATHINFO_EXTENSION);
                                @endphp

                                @if(in_array($fileExtension, ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp']))
                                <img src="{{ asset('storage/' . $file->path) }}" alt="Archivo" class="w-full h-32 object-cover rounded-md mb-2">
                                @elseif($fileExtension === 'pdf')
                                <iframe src="{{ asset('storage/' . $file->path) }}" class="w-full h-64"></iframe>
                                @elseif(in_array($fileExtension, ['mp3', 'wav']))
                                <audio controls class="w-full">
                                    <source src="{{ asset('storage/' . $file->path) }}" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio>
                                @elseif(in_array($fileExtension, ['mp4', 'webm', 'ogv']))
                                <video controls class="w-full h-32">
                                    <source src="{{ asset('storage/' . $file->path) }}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                                @else
                                <p> Archivo no previsualizable</p>
                                @endif

                                <div class="w-full h-32 bg-gray-200 flex items-center justify-center">
                                    <span class="text-gray-400">{{$file->file_type}}</span>
                                </div>

                                <h4 class="font-medium text-gray-900 text-sm truncate w-full text-center">{{ $file->file_name }}</h4>

                                <a href="{{ route('files.download', $file->id) }}"
                                    class="text-indigo-600 hover:text-indigo-800 text-xs">Descargar</a>

                                <!-- Botón para desplegar opciones -->
                                <button onclick="toggleDropdown('dropdown{{ $file->id }}')"
                                    class="text-gray-700 font-semibold py-1 px-2 rounded inline-flex items-center">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>

                                <!-- Menú desplegable para acciones -->
                                <div id="dropdown{{ $file->id}}"
                                    class="hidden absolute z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg transition-opacity duration-150 ease-in-out opacity-0">
                                    <ul class="py-1" aria-labelledby="dropdownButton">
                                        <li>
                                            <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Ver</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Editar</a>
                                        </li>
                                        <li>
                                            <a href="{{ route('files.delete', $file->id) }}" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Eliminar</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            @empty
                            <div class="col-span-3">
                                <p class="text-gray-600 text-center">No hay archivos para mostrar.</p>
                            </div>
                            @endforelse
                        </div>
                    </div>
                </div>

                <script>
                    // Función para alternar la visibilidad del menú desplegable
                    function toggleDropdown(dropdownId) {
                            var dropdown = document.getElementById(dropdownId);
                            if (dropdown.classList.contains('hidden')) {
                                dropdown.classList.remove('hidden');
                                setTimeout(() => {
                                    dropdown.style.opacity = 1;
                                }, 10);
                            } else {
                                dropdown.style.opacity = 0;
                                setTimeout(() => {
                                    dropdown.classList.add('hidden');
                                }, 150);
                            }
                        }

                </script>


              <div class="mt-6">
                        <form action="{{ route('files.store') }}" method="post" enctype="multipart/form-data" class="bg-white p-4 shadow rounded-lg">
                            @csrf
                                <!-- Contenedor para el input de archivo y el nombre del archivo -->
                                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div class="space-y-1 text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                                            aria-hidden="true">
                                            <!-- Icono de carga (puedes reemplazarlo con un icono de Heroicons si lo prefieres) -->
                                        </svg>
                                        <div class="flex text-sm text-gray-600">
                                            <label for="file-upload"
                                                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span>Subir un archivo</span>
                                                <input id="file-upload" name="file" type="file" class="sr-only" onchange="updateFileName()">
                                            </label>
                                            <p class="pl-1">o arrastra y suelta</p>
                                        </div>
                                        <p class="text-xs text-gray-500">
                                            Cualquier tipo de archivo; hasta 10MB
                                        </p>
                                        <div id="file-upload-filename" class="text-sm text-gray-900"></div>
                                    </div>
                                </div>

                            <button type="submit" class="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded">
                                Subir y encriptar
                            </button>
                        </form>
                </div>
                </div>
            </div>
        </div>
    </main>


<footer class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-10 md:flex md:items-center md:justify-between">
            <div class="flex justify-center space-x-6 md:order-2">
                <!-- Social media icons -->
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
            <div class="mt-8 md:mt-0 md:order-1">
                <p class="text-center text-base text-gray-400">
                    &copy; 2023 Your Company, Inc. All rights reserved.
                </p>
            </div>
        </div>
        <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
                <!-- Logo and tagline -->
                <a href="#" class="flex items-center">
                    <span class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500">
                        <!-- Heroicon name: globe-alt -->
                    </span>
                    <span class="ml-3 text-xl font-bold text-gray-900 sm:text-2xl">
                        Your Logo
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
                                <li><a href="/documentation" class="text-base text-gray-500 hover:text-gray-900">Documentation</a>
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
                                <li><a href="/privacy" class="text-base text-gray-500 hover:text-gray-900">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</footer>



       <script>
        const dateElement = document.getElementById('date');
        const timeElement = document.getElementById('time');

        function updateDateTime() {
            const now = new Date();
            const date = now.toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            const time = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            dateElement.textContent = date.charAt(0).toUpperCase() + date.slice(1); // Capitalizar la primera letra
            timeElement.textContent = time;
        }

        updateDateTime();
        setInterval(updateDateTime, 1000);


        // JavaScript para alternar la visibilidad de la barra de navegación
            document.getElementById('menuButton').addEventListener('click', function () {
                var navbar = document.getElementById('navbar');
                if (navbar.style.display === 'block') {
                    navbar.style.display = 'none';
                } else {
                    navbar.style.display = 'block';
                }
            });
            document.getElementById('menuButton').addEventListener('click', function () {
                    var navbar = document.getElementById('navbar');
                    navbar.classList.toggle('hidden');
                });
    function updateFileName() {
        var input = document.getElementById('file-upload');
        var filenameContainer = document.getElementById('file-upload-filename');
        var files = input.files;
        if (files.length > 0) {
            filenameContainer.innerText = files[0].name;
        }
    }


    </script>


</body>
</html>
