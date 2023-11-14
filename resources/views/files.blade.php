<!-- resources/views/files.blade.php -->
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html> <head> <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{ ucfirst(Route::currentRouteName()) }} | Encrypto Cloud</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
    @vite('resources/css/app.css')

    </head>
    <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

    <body class="bg-gray-50 font-sans">
    <header class="bg-white py-6 shadow-sm">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 class="text-4xl font-bold text-gray-800">Mis Archivos</h1>
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
                <div class="w-1/4">
                    <nav class="p-5 bg-white rounded-lg shadow">
                        <h3 class="text-xl font-semibold mb-5">Navegación</h3>
                        <ul class="space-y-2">
                            <li><a href="/profile" class="block text-indigo-600 hover:underline">Profile</a></li>
                            <li><a href="/dashboard" class="block text-indigo-600 hover:underline">Dashboard</a></li>
                            <li><a href="/activity" class="block text-indigo-600 hover:underline">Activity</a></li>
                            <li><a href="/analytics" class="block text-indigo-600 hover:underline">Analytics</a></li>
                            <li><a href="/system" class="block text-indigo-600 hover:underline">System</a></li>
                            <li><a href="/deployments" class="block text-indigo-600 hover:underline">Deployments</a></li>
                            <li><a href="/my-settings" class="block text-indigo-600 hover:underline">My Settings</a></li>
                            <li><a href="/team-settings" class="block text-indigo-600 hover:underline">Team Settings</a></li>
                            <li><a href="/help-feedback" class="block text-indigo-600 hover:underline">Help & Feedback</a></li>

                        </ul>
                    </nav>
                </div>

        <div class="w-3/4">
            <div class="bg-white p-6 rounded-lg shadow">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    @forelse ($files as $file)
                    <div class="border rounded-lg p-4 flex flex-col items-center space-y-2">
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
                        <p>Archivo no previsualizable</p>
                        @endif

                        <h4 class="font-medium text-gray-900 text-sm truncate w-full text-center">{{ $file->file_name }}</h4>
                        <a href="{{ route('files.download', $file->id) }}"
                            class="text-indigo-600 hover:text-indigo-800 text-xs">Descargar</a>
                    </div>
                    @empty
                    <div class="w-full">
                        <p class="text-gray-600">No hay archivos para mostrar.</p>
                    </div>
                    @endforelse

                </div>
            </div>
        </div>

                    <div class="mt-6">
                        <form action="{{ route('files.store') }}" method="post" enctype="multipart/form-data" class="bg-white p-4 shadow rounded-lg">
                            @csrf
                            <input type="file" name="file" required class="block w-full text-sm text-gray-700 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                            <button type="submit" class="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded">
                                Subir Archivo
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="bg-white py-6 shadow-sm mt-12">
        <div  class="max-w-7xl mx-auto px-6 flex justify-between">
        <div class="flex flex-wrap justify-between items-center">
            <div class="w-full md:w-1/2">
                <h3 class="font-semibold text-xl">Sobre nosotros</h3>
                <p class="text-gray-600 mt-2">Somos una empresa dedicada a la seguridad de archivos en línea...</p>
            </div>
            <div class="w-full md:w-1/2 mt-4 md:mt-0">
                <h3 class="font-semibold text-xl">Contacto</h3>
                <ul class="text-gray-600">
                            <li class="flex items-center"><i class="fas fa-map-marker-alt text-gray-700 mr-2"></i> 123 Calle Principal, Ciudad, Estado, Código Postal</li>
                            <li class="flex items-center mt-2"><i class="fas fa-phone text-gray-700 mr-2"></i> (123) 456-7890</li>
                            <li class="flex items-center mt-2"><i class="fas fa-envelope text-gray-700 mr-2"></i> info@tusitio.com</li>
                        </ul>
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
    </script>


</body>
</html>
