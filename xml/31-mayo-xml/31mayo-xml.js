// EJERCICIOS CON ARRAYS

// pasos: 
// crear el Array 
// genenara 7 elemoentos de forma aleatoria entre 1 y 7
// pedir por pantalla el metodo de ordenamiento: 
// 1- mayor a menor 
// 2- menor a mayor 
// mostrar el array ordenado

let registrados = [];

function leerXML() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        miFuncion(this,"Desde aquí");
      }
    };
     xhr.open("GET", "xml.xml", true);
    xhr.send();
  }


  function miFuncion(xml) {
    var i;
    var usrNom;
    var usrPsw;
    var usuario = [];
    var xmlDoc = xml.responseXML;
    var tabla=fuente + "<br/>";
    var x = xmlDoc.getElementsByTagName("usuario");
    //x=[{Alberto}, {Nacho}...,SILVIA]
    //tabla es una variable string que contiene codigo
    //html para poder mostrar en pantalla el xml con formato tabla

    tabla += "<table><tr><th>Usuario</th><th>Clave</th></tr>";
    for (i = 0; i <x.length; i++) { 
      // leo las etiquetas que me interesan del objeto
      let usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
      let usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
      // actualizo la tabla de visualización
      tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
      // actualizo el array bidimensional con los usuarios registrados
      let usuario = [usrNom,usrPsw];
      registrados.push(usuario);
    }
    tabla += "</table>"
    document.getElementById("contenidoXML").innerHTML = tabla;
    
    // muestro en consola el array de usuarios registrados
      registrados.forEach((usuario) => {
          usuario.forEach((datos) => {
              console.log(datos);
          });
        });
    }


// function menor(){
//     document.write(numeros.sort());
// }

// function mayor(){
//     numeros.sort();
//     document.write(numeros.reverse());
// }

// arrayRandom(numeros);
// let orden = window.prompt("introduce un orden (A) ascendente o (D) descendente");
// direccionOrden

// num=parseInt(dato);
