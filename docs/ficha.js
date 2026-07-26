function mostrarFicha(persona){

const ventana = document.getElementById("ficha");


ventana.innerHTML = `

<button onclick="cerrarFicha()">
❌ Cerrar
</button>


<h2>${persona.nombre}</h2>


${persona.relacion ?
`
<p>
<b>Relación:</b> ${persona.relacion}
</p>
`
:
""}


${persona.rama ?
`
<p>
<b>Rama familiar:</b> ${persona.rama}
</p>
`
:
""}


${persona.ramas ?
`
<p>
<b>Líneas familiares:</b>
</p>

<ul>
${persona.ramas.map(rama => 
`<li>${rama}</li>`
).join("")}
</ul>
`
:
""}


${persona.nacimiento ?
`
<p>
<b>Nacimiento:</b> ${persona.nacimiento}
</p>
`
:
""}


${persona.lugar ?
`
<p>
<b>Lugar:</b> ${persona.lugar}
</p>
`
:
""}


${persona.nacionalidad ?
`
<p>
<b>Nacionalidad:</b> ${persona.nacionalidad}
</p>
`
:
""}


${persona.idiomas ?
`
<p>
<b>Idiomas:</b>
${persona.idiomas.join(", ")}
</p>
`
:
""}


${persona.migracion ?
`
<p>
<b>Migración:</b>
${persona.migracion}
</p>
`
:
""}


<hr>


<h3>Relaciones familiares</h3>


${persona.padre ?
`
<p>
<b>Padre:</b>
${buscarNombre(persona.padre)}
</p>
`
:
""}


${persona.madre ?
`
<p>
<b>Madre:</b>
${buscarNombre(persona.madre)}
</p>
`
:
""}


`;

}



function buscarNombre(id){

const familiar = personas.find(
persona => persona.id === id
);


return familiar ?
familiar.nombre :
"Pendiente";

}



function cerrarFicha(){

document.getElementById("ficha").innerHTML =

`
<h2>Seleccioná una persona</h2>
`;

}