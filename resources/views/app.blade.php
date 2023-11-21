<!DOCTYPE html> <html lang="{{ str_replace('_', '-', app()->getLocale()) }}"> <head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{asset('icons/logo2.png')}}" type="image/svg+xml">
<meta name="description" content="Tu descripción aquí">
<meta name="keywords" content="Palabras clave, separadas, por, comas">
<meta name="author" content="Encrypto Cloud(1-17)">
<title>{{ ucfirst(Route::currentRouteName()) }} | Encrypto Cloud</title>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.bunny.net">
<link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

<!-- Scripts -->
@routes
@viteReactRefresh
@vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
@inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>

