async function loadModels() {
    const MODEL_URL = "/models";

    await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
    await faceapi.loadFaceLandmarkModel(MODEL_URL);
    await faceapi.loadFaceRecognitionModel(MODEL_URL);
    await faceapi.loadFaceExpressionModel(MODEL_URL);

    console.log("Modelos cargados");
}

async function onPlay() {
    const video = document.getElementById("inputVideo");
    const canvas = document.getElementById("overlay");

    if (video.paused || video.ended || !faceapi.nets.ssdMobilenetv1.params) {
        return setTimeout(() => onPlay());
    }

    const fullFaceDescriptions = await faceapi
        .detectAllFaces(video)
        .withFaceLandmarks()
        .withFaceDescriptors()
        .withFaceExpressions();
    const dims = faceapi.matchDimensions(canvas, video, true);
    const resizedResults = faceapi.resizeResults(fullFaceDescriptions, dims);

    faceapi.draw.drawDetections(canvas, resizedResults);
    faceapi.draw.drawFaceLandmarks(canvas, resizedResults);
    faceapi.draw.drawFaceExpressions(canvas, resizedResults, 0.05);

    requestAnimationFrame(onPlay);
}

async function startRegistration() {
    // Inicializa la transmisión de video.
    const video = document.getElementById("inputVideo");
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        video.srcObject = stream;
        video.onplay = onPlay; // Asegúrate de que esta línea sea correcta.
    } catch (error) {
        console.error("Error al acceder a la cámara web", error);
    }
}

// Asegúrate de que esta línea esté al final y solo se llame una vez.
window.onload = loadModels;
