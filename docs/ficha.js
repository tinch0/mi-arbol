function mostrarFicha(persona){

const ventana=document.getElementById("ficha");


ventana.innerHTML=`

<button onclick="cerrarFicha()">
❌ Cerrar
</button>

<h2>${persona.nombre}</h2>


<p>
<b>Rama:</b> ${persona.rama || "Sin definir"}
</p>


${persona.relacion ?
`<p><b>Relación:</b> ${persona.relacion}</p>`
:""}


${persona.nacimiento ?
`<p><b>Nacimiento:</b> ${persona.nacimiento}</p>`
:""}


${persona.lugar ?
`<p><b>Lugar:</b> ${persona.lugar}</p>`
:""}


${persona.idiomas ?
`
<p>
<b>Idiomas:</b>
${persona.idiomas.join(", ")}
</p>
`
:""}


${persona.migracion ?
`
<p>
<b>Migración:</b>
${persona.migracion}
</p>
`
:""}

`;

}


function cerrarFicha(){

document.getElementById("ficha").innerHTML=
"<h2>Seleccioná una persona</h2>";

}