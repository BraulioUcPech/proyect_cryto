function dropHandler(ev) {
    console.log("Archivo(s) arrastrado(s)");

    ev.preventDefault();

    if (ev.dataTransfer.items) {
        if (ev.dataTransfer.items[0].kind === "file") {
            var file = ev.dataTransfer.items[0].getAsFile();
            console.log("... archivo[" + 0 + "].nombre = " + file.name);

            document.getElementById("file-upload").files =
                ev.dataTransfer.files;
        }
    } else {
        for (var i = 0; i < ev.dataTransfer.files.length; i++) {
            console.log(
                "... archivo[" +
                    i +
                    "].nombre = " +
                    ev.dataTransfer.files[i].name
            );
        }
    }

    updateFileName(ev);
}

function updateFileName(ev) {
    var input = ev.target;
    var fileName = "";
    if (input.files && input.files.length > 0) {
        fileName = input.files[0].name;
    }
    document.getElementById("file-upload-filename").innerText = fileName;
}

const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString("es-MX", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const time = now.toLocaleTimeString("es-MX", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    dateElement.textContent = date.charAt(0).toUpperCase() + date.slice(1);
    timeElement.textContent = time;
}

updateDateTime();
setInterval(updateDateTime, 1000);

document.getElementById("menuButton").addEventListener("click", function () {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
});
document.getElementById("menuButton").addEventListener("click", function () {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("hidden");
});
function updateFileName() {
    var input = document.getElementById("file-upload");
    var filenameContainer = document.getElementById("file-upload-filename");
    var files = input.files;
    if (files.length > 0) {
        filenameContainer.innerText = files[0].name;
    }
}
