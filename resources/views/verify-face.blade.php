<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{ asset('/public/icons/logo.svg') }}" type="image/svg+xml">
    <meta name="description" content="Tu descripción aquí">
    <meta name="keywords" content="Palabras clave, separadas, por, comas">
    <meta name="author" content="Encrypto Cloud(1-17)">
    <title>{{ ucfirst(Route::currentRouteName()) }} | Encrypto Cloud</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- <script defer src="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2"></script>  Asegúrate de que la ruta a face-api.min.js sea correcta si decides usar una versión local -->
    <script defer src="{{ asset('js/face-api.min.js') }}"></script>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        video {
            position: absolute;
            z-index: 1;
        }

        canvas {
            position: relative;
            z-index: 20;
        }
    </style>
</head>

<body>
    <div style="position: relative">
        <video onloadedmetadata="onPlay(this)" id="inputVideo" autoplay muted playsinline></video>
        <canvas id="overlay">
    </div>


    <script  src="{{ asset('js/script_webcam.js') }}">

    </script>
</body>

</html>

