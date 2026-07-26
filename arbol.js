const contenedor = document.getElementById("arbol");


function buscar(id){

return personas.find(
persona => persona.id === id
);

}


function crearPersona(persona){

let div=document.createElement("div");

div.className="persona";

div.innerHTML=`

<h3>${persona.nombre}</h3>

<p>${persona.relacion || ""}</p>

${persona.fecha ? 
"<p>Nacimiento: "+persona.fecha+"</p>" : ""}

${persona.lugar ?
"<p>"+persona.lugar+"</p>" : ""}

`;

div.onclick=()=>mostrarDetalle(persona);

return div;

}



function mostrarDetalle(persona){

alert(
persona.nombre+
"\n\n"+
(persona.relacion || "")+
"\n"+
(persona.fecha || "")
);

}



function dibujar(){

let principal=buscar(1);

contenedor.appendChild(
crearPersona(principal)
);


let padres=document.createElement("div");

padres.className="ramas";


let padre=buscar(principal.padre);
let madre=buscar(principal.madre);


padres.appendChild(
crearPersona(padre)
);


padres.appendChild(
crearPersona(madre)
);


contenedor.appendChild(padres);


}



dibujar();