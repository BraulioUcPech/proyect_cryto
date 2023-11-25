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

let isFaceDataSent = false;

function DataToJSON(faceData) {
    return JSON.stringify(faceData.map((fd) => fd.descriptor));
}

async function sendFaceDataToDatabase(faceDataJSON) {
    const descriptors = JSON.parse(faceDataJSON);
    const response = await fetch("http://127.0.0.1:8000/api/save-face-data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
        body: JSON.stringify({ descriptors }),
    });
    if (!response.ok) {
        throw new Error(
            `Error al enviar datos de la cara: ${response.statusText}`
        );
    }

    return response.json();
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

    if (!isFaceDataSent && fullFaceDescriptions.length > 0) {
        const faceDataJSON = DataToJSON(fullFaceDescriptions);
        const responseData = await sendFaceDataToDatabase(faceDataJSON);
        isFaceDataSent = true; // Establece la bandera para que no se vuelva a enviar

        console.log(responseData.message);
        if (responseData.success) {
            window.location.href = "/dashboard";
        }
    }

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


// Suponiendo que ya has obtenido los descriptores faciales como en el paso anterior

