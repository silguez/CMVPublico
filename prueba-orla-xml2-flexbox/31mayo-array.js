let registrados = [];
leerXML();

function leerXML() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this);
    }
  };
  xhr.open("GET", "https://silguez.github.io/CMVPublico/datos.xml", true);
  
  xhr.send();
}
function miFuncion(xml) {
  var i;
  var nombre;
  var foto;
  var elemento = [];
  var xmlDoc = xml.responseXML;
  var contenedor="";
  var y = xmlDoc.getElementsByTagName("elemento");


  contenedor += "<div id='fotos'>";
  for (i = 0; i < y.length; i++) {
    // leo las etiquetas que me interesan del objeto
    nombre = y[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    foto = y[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
   //actualizo contenido
    contenedor += "<img class='eachPh' src='" + foto + "'  alt='" + nombre + "'/>";
    // actualizo el array
    elemento = [foto, nombre];
    registrados.push(elemento);
  }
  contenedor += "</div>"
  document.getElementById("mensaje").innerHTML = contenedor;

  // muestro en consola el array
  registrados.forEach((elemento) => {
    elemento.forEach((datos) => {
      console.log(datos);
    });
  });
}
