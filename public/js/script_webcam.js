document.addEventListener(
    "wheel",
    (event) => {
        // tu código para manejar el evento 'wheel'
    },
    { passive: true }
);

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
        requestAnimationFrame(onPlay);
        return;
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
    const video = document.getElementById("inputVideo");
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        video.srcObject = stream;
        video.onplay = onPlay;
    } catch (error) {
        console.error("Error al acceder a la cámara web", error);
    }
}

window.onload = loadModels;
