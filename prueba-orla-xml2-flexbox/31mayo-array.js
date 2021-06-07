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
  var contenedor = "";
  var y = xmlDoc.getElementsByTagName("elemento");


  contenedor += "<div class='container'><div class='card-columns' id='galeria'>";
  for (i = 0; i < y.length; i++) {
    // leo las etiquetas que me interesan del objeto
    id = y[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
    nombre = y[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    foto = y[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
    //actualizo contenido
    contenedor += `
    <div class='card'>
      <a href='#' data-toggle='modal' data-target='#id${id}'>
        <img class='card-img' src= '${foto}' +  alt='${nombre}'/>
      </a>
    `
    // actualizo el array
    elemento = [foto, nombre];
    registrados.push(elemento);
  }
  contenedor += "</div></div>"
  document.getElementById("mensaje").innerHTML = contenedor;

  // muestro en consola el array
  registrados.forEach((elemento) => {
    elemento.forEach((datos) => {
      console.log(datos);
    });
  });

  var galeria = document.getElementById('galeria');

  for (imagen of id) {
    galeria.innerHTML += `
  <div class="modal fade" id="#id${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">

    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>

  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <img src="${foto}" class="img-fluid rounded">
  </div>

  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
    </div>
  </div>
</div>
</div>
  `
  }

}


