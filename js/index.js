///////DATOS PERSONALES

const datosCV = '{"nombre":"Jonathan","apellido":"Garrett","calle":"Church Lane 3192","ciudad":"Canterbury","estado":"Suffolk","pais":"United Kingdom","codPostal":"MN58 2ET","email":"jonathan.garrett@example.com","fechaNac":"08-01-1996","edad":27,"telefono":"019467 06229","foto":"https://randomuser.me/api/portraits/men/38.jpg"}';
const curriculum = JSON.parse(datosCV);

let miContenedor1 = document.getElementById("contenedor1");
let miContenedor2 = document.getElementById("contenedor2");

miContenedor1.innerHTML= `<img src=${curriculum.foto} alt="">`
miContenedor2.innerHTML= `  
<p> <strong> Nombre: </strong> ${curriculum.nombre}</p>
<p> <strong> Apellido: </strong> ${curriculum.apellido}</p>
<p> <strong> Calle: </strong> ${curriculum.calle}</p>
<p> <strong> Ciudad: </strong> ${curriculum.ciudad}</p>
<p> <strong> Estado: </strong> ${curriculum.estado}</p>
<p> <strong> País: </strong> ${curriculum.pais}</p>
<p> <strong> Código Postal: </strong> ${curriculum.codPostal}</p>
<p> <strong> e-mail: </strong> ${curriculum.email}</p>
<p> <strong> Fecha de nacimiento: </strong> ${curriculum.fechaNac}</p>
<p> <strong> Edad: </strong> ${curriculum.edad}</p>
<p> <strong> Teléfono: </strong> ${curriculum.telefono}</p>
`
//////FORMACION ACADEMICA
const datosEstudios =` [
    {
      "nivel": "Universitario",
      "año": "2019-2022",
      "titulo": "Arquitectura",
      "institucion": "Universidad Nacional del Sur"
    },
    {
      "nivel": "Terciario",
      "año": "2014-2018",
      "titulo": "Analista en control de gestión",
      "institucion": "Inst. Sup. Juan XXIII"
    },
    {
      "nivel": "Secundario",
      "año": "2009-2013",
      "titulo": "Perito mercantil con orientación contable e impositiva",
      "institucion": "Colegio Nacional Superior"
    }
  ]`
  
let btnMostrar1 = document.getElementById("btnMostrar1");
let miContenedor3 = document.getElementById("contenedor3");

function crearFormAcademica(string) {
    let datos = JSON.parse(string);
    console.log(datos);
    for (let item of datos) {
        console.log(item)
        miContenedor3.innerHTML +=
        `
        <li> <strong> Nivel: ${item.nivel}</strong>
        <p> <strong> Año: </strong> ${item.año} </p>
        <p> <strong> Título: </strong> ${item.titulo} </p>
        <p> <strong> Institución: </strong> ${item.institucion} </p></li>    
        `
    }

}
let boton =true;
btnMostrar1.addEventListener("click", function() {
    if (boton){
        crearFormAcademica (datosEstudios)
        boton=false;
    } else {
        miContenedor3.innerHTML="";
        boton=true
    }    
});

/////FORMACION LABORAL
const datosLaborales =` [
    {
      "lugar": "Arowwai Industries",
      "año": "2020-presente",
      "tarea": "Provides direction for applications in development. Researches and develops new ways to improve development process."
    },
    {
      "lugar": "Timmerman Industries",
      "año": "2018-2020",
      "tarea": "Developed, installed, and configured internal applications, as well as new application releases into test and production environments."
    },
    {
      "lugar": "Studio Shodwe",
      "año": "2017-2018",
      "tarea": "Developed, installed, and configured internal applications, as well as new application releases into test and production environments."
    }
  ]`
  
let btnMostrar2 = document.getElementById("btnMostrar2");
let miContenedor4 = document.getElementById("contenedor4");

function crearFormLaboral(string) {
    let datos = JSON.parse(string);
    console.log(datos);
    for (let item of datos) {
        console.log(item)
        miContenedor4.innerHTML +=
        `
        <li> <strong> Lugar: ${item.lugar}</strong>
        <p> <strong> Año: </strong> ${item.año} </p>
        <p> <strong> Tarea: </strong> ${item.tarea} </p></li>    
        `
    }

}
let boton2 =true;
btnMostrar2.addEventListener("click", function() {
    if (boton2){
        crearFormLaboral (datosLaborales)
        boton2=false;
    } else {
        miContenedor4.innerHTML="";
        boton2=true
    }    
});
