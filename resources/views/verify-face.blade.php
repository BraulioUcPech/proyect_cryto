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
    <!--    <script defer src="{{ asset('js/face-api.min.js') }}"></script>-->

</head>


<body class="bg-gray-100">


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
            <div class="container mx-auto p-4">
                <h1 class="text-2xl font-bold text-center mb-4">Facial Authentication for the Web</h1>
                <div class="flex justify-center space-x-4">
                    <button onclick="enrollNewUser()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        title="Enroll a new user on this FACEIO application">
                        Enroll New User
                    </button>
                    <button onclick="authenticateUser()"
                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        title="Authenticate a previously enrolled user on this application">
                        Authenticate User
                    </button>
                </div>
            </div>
        </section>
    </div>
</main>
<div id="faceio-modal"></div>
<script src="https://cdn.faceio.net/fio.js"></script>

<script type="text/javascript">
	// Initialize the library first with your application Public ID.
	// Grab your public ID from the Application Manager on the FACEIO console at: https://console.faceio.net/
	const faceio = new faceIO("fioa50e2"); // Replace with your application Public ID

	function enrollNewUser() {
		// Start the facial enrollment process
		faceio.enroll({
			"locale": "auto", // Default user locale
			"userConsent": false, // Set to true if you have already collected user consent
			"payload": {
				/* The payload we want to associate with this particular user
				* which is forwarded back to us on each of his future authentication...
				*/
				"whoami": 123456, // Example of dummy ID linked to this particular user
				"email": "john.doe@example.com"
			}
		}).then(userInfo => {
			// User Successfully Enrolled!
			alert(
			`User Successfully Enrolled! Details:
			Unique Facial ID: ${userInfo.facialId}
			Enrollment Date: ${userInfo.timestamp}
			Gender: ${userInfo.details.gender}
			Age Approximation: ${userInfo.details.age}`
			);
			console.log(userInfo);
			// handle success, save the facial ID, redirect to dashboard...
			    window.location.href = '/login';

			// faceio.restartSession() let you enroll another user again (without reloading the entire HTML page)
		}).catch(errCode => {
			// handle enrollment failure. Visit:
			// https://faceio.net/integration-guide#error-codes
			// for the list of all possible error codes
			handleError(errCode);

			// If you want to restart the session again without refreshing the current TAB. Just call:
			faceio.restartSession();
			// restartSession() let you enroll the same or another user again (in case of failure) without refreshing the entire page.
		});
	}
	function authenticateUser() {
		// Start the facial authentication process (Identify a previously enrolled user)
		faceio.authenticate({
			"locale": "auto" // Default user locale
		}).then(userData => {
			console.log("Success, user recognized")
			// Grab the facial ID linked to this particular user which will be same
			// for each of his successful future authentication. FACEIO recommend
			// that your rely on this ID if you plan to uniquely identify
			// all enrolled users on your backend for example.
            window.location.href = '/login';

			console.log("Linked facial Id: " + userData.facialId)
			// Grab the arbitrary data you have already linked (if any) to this particular user
			// during his enrollment via the payload parameter the enroll() method takes.
			console.log("Associated Payload: " + JSON.stringify(userData.payload))
			// {"whoami": 123456, "email": "john.doe@example.com"} set via enroll()
			//
			// faceio.restartSession() let you authenticate another user again (without reloading the entire HTML page)
			//
		}).catch(errCode => {
			// handle authentication failure. Visit:
			// https://faceio.net/integration-guide#error-codes
			// for the list of all possible error codes
			handleError(errCode);

			// If you want to restart the session again without refreshing the current TAB. Just call:

			faceio.restartSession();
			// restartSession() let you authenticate the same user again (in case of failure)
			// without refreshing the entire page.
			// restartSession() is available starting from the PRO plan and up, so think of upgrading your app
			// for user usability.
		});
	}
    function handleError(errCode) {
        // Log all possible error codes during user interaction..
        // Refer to: https://faceio.net/integration-guide#error-codes
        // for a detailed overview when these errors are triggered.
        switch (errCode) {
            case fioErrCode.PERMISSION_REFUSED:
                console.log("Access to the Camera stream was denied by the end user");
                break;
            case fioErrCode.NO_FACES_DETECTED:
                console.log("No faces were detected during the enroll or authentication process");
                break;
            case fioErrCode.UNRECOGNIZED_FACE:
                console.log("Unrecognized face on this application's Facial Index");
                break;
            case fioErrCode.MANY_FACES:
                console.log("Two or more faces were detected during the scan process");
                break;
            case fioErrCode.FACE_DUPLICATION:
                console.log("User enrolled previously (facial features already recorded). Cannot enroll again!");
                break;
            case fioErrCode.MINORS_NOT_ALLOWED:
                console.log("Minors are not allowed to enroll on this application!");
                break;
            case fioErrCode.PAD_ATTACK:
                console.log("Presentation (Spoof) Attack (PAD) detected during the scan process");
                break;
            case fioErrCode.FACE_MISMATCH:
                console.log("Calculated Facial Vectors of the user being enrolled do not matches");
                break;
            case fioErrCode.WRONG_PIN_CODE:
                console.log("Wrong PIN code supplied by the user being authenticated");
                break;
            case fioErrCode.PROCESSING_ERR:
                console.log("Server side error");
                break;
            case fioErrCode.UNAUTHORIZED:
                console.log("Your application is not allowed to perform the requested operation (eg. Invalid ID, Blocked, Paused, etc.). Refer to the FACEIO Console for additional information");
                break;
            case fioErrCode.TERMS_NOT_ACCEPTED:
                console.log("Terms & Conditions set out by FACEIO/host application rejected by the end user");
                break;
            case fioErrCode.UI_NOT_READY:
                console.log("The FACEIO Widget could not be (or is being) injected onto the client DOM");
                break;
            case fioErrCode.SESSION_EXPIRED:
                console.log("Client session expired. The first promise was already fulfilled but the host application failed to act accordingly");
                break;
            case fioErrCode.TIMEOUT:
                console.log("Ongoing operation timed out (eg, Camera access permission, ToS accept delay, Face not yet detected, Server Reply, etc.)");
                break;
            case fioErrCode.TOO_MANY_REQUESTS:
                console.log("Widget instantiation requests exceeded for freemium applications. Does not apply for upgraded applications");
                break;
            case fioErrCode.EMPTY_ORIGIN:
                console.log("Origin or Referer HTTP request header is empty or missing");
                break;
            case fioErrCode.FORBIDDDEN_ORIGIN:
                console.log("Domain origin is forbidden from instantiating fio.js");
                break;
            case fioErrCode.FORBIDDDEN_COUNTRY:
                console.log("Country ISO-3166-1 Code is forbidden from instantiating fio.js");
                break;
            case fioErrCode.SESSION_IN_PROGRESS:
                console.log("Another authentication or enrollment session is in progress");
                break;
            case fioErrCode.NETWORK_IO:
            default:
                console.log("Error while establishing network connection with the target FACEIO processing node");
                break;
        }
    }
</script>
<!--   <main class="container mx-auto p-8">
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
-->



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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
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
                                    <li><a href="#" class="text-base text-gray-500 hover:text-gray-900">Marketing</a>
                                    </li>
                                    <li><a href="#" class="text-base text-gray-500 hover:text-gray-900">Analytics</a>
                                    </li>
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
                                    <li><a href="/about" class="text-base text-gray-500 hover:text-gray-900">About</a>
                                    </li>
                                    <li><a href="/blog" class="text-base text-gray-500 hover:text-gray-900">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- Column 4 -->
                            <div>
                                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                    Legal
                                </h3>
                                <ul class="mt-4 space-y-4">
                                    <li><a href="/claim" class="text-base text-gray-500 hover:text-gray-900">Claim</a>
                                    </li>
                                    <li><a href="/privacy"
                                            class="text-base text-gray-500 hover:text-gray-900">Privacy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </footer>
    <!--        <script src="{{ asset('js/script_webcam.js') }}"></script> -->

</body>

</html>
