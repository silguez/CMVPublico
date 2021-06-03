// ejercicios con arrays


// pasos ejercicio con XML:
// generar el array desde el XML
// AÑADIR un botón para cada orden:
// 1 - ascendente por nombre de usuario
// 2 - asecendente por clave de usuario
// 3 - mostrar solamente el usuario solicitado
//    (input - .slice .indexOf)

// variable global de la pagina
// un array con un elemento por cada usuario del XML
// en realidad será un array de arrays, una matriz bidimensional
let registrados = [];


function leerXML() {
    // lee desde GitHub.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cargarArray(this);
        }
    };
    xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados2.xml", true);
    //xhr.open("GET", "registrados2.xml", true);
    xhr.send();
}

function cargarArray(xml) {
    var i;
    var usrNom;
    var usrPsw;
    var usuario = [];
    var xmlDoc = xml.responseXML;

    var x = xmlDoc.getElementsByTagName("usuario");
    // obtenemos algo así como x=[{USR1},{USR2}...,{CANDIDO}]

    // tabla es una variable string que contiene codigo
    // html para poder mostrar en pantalla el XML con formato tabla

    let tabla = "<table><tr><th>EMPLEADO</th><th>CLAVE</th></tr>";
    for (i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        let usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
        let usuario = [usrNom, usrPsw];
        registrados.push(usuario);
    }
    tabla += "</table>"
    document.getElementById("mensaje").innerHTML = tabla;

    // muestro en consola el array de usuarios registrados
    // una vez depurado, comentamos el codigo siguiente
    //   registrados.forEach((usuario) => {
    //       usuario.forEach((datos) => {
    //           console.log(datos);
    //       });
    //   });

}

function mostrarClave() {
    // obtenemos el usuario del campo input y
    // validamos que exista en el array
    // si no, mostramos un alert y no hacemos nada
    // si existe actualizamos el elemento con id clavebuscada

    // sintaxis jQuery: nombre = $("#nom").val();

        usrNom = usuarioSol;
        let usuarioSol = "";
        var x = xmlDoc.getElementsByTagName("nom");

    if (registrados.indexOf() === -1){

        registrados.forEach((usuario) => {
            usuario.forEach((datos) => {
                escrito = "<p>el usuario " + usrNom + " tiene como clave " + usrPsw;
                }
                usuarioSol += "</p>"
            });
        // la mostramos en el html
    document.getElementById("claveBuscada").innerHTML = tabla;
    }else{
        alert("el usuario ingresado no existe");
    }



function ascNombre() {
    // Ordeno la matriz global
    // acendente por nombre
    registrados.sort(
        (usuario1, usuario2) =>
            usuario1[0].localeCompare(usuario2[0]),
    );
    mostrar();
}



function desClave() {
    // Ordeno la matriz global
    // descendente por clave
    registrados.sort(
        (usuario2, usuario1) =>
            usuario1[1].localeCompare(usuario2[1]),
    );
    mostrar();
}

function mostrar() {
    // muestro en pantalla el array de usuarios registrados
    // en formato tabla en el id solicitado
    let tabla = "";
    registrados.forEach((usuario) => {
        usuario.forEach((datos) => {
            tabla = "<table><tr><th>EMPLEADO</th><th>CLAVE</th></tr>";
            for (i = 0; i < registrados.length; i++) {
                // leo las etiquetas que me interesan del objeto
                usrNom = registrados[i][0];
                usrPsw = registrados[i][1];
                // actualizo la tabla de visualización
                tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
                // actualizo el array bidimensional con los usuarios registrados
            }
            tabla += "</table>"
        });
    });
    // la mostramos en el html
    document.getElementById("solicitado").innerHTML = tabla;
    }
}
