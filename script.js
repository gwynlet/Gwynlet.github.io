const parametros = new URLSearchParams(window.location.search);
const archivo = parametros.get("archivo");

fetch(archivo)
    .then(response => response.text())
    .then(texto => {
        document.getElementById("contenido").innerHTML = marked.parse(texto);
    });