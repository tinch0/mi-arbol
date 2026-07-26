function mostrarFicha(persona){

const ventana=document.getElementById("ficha");


ventana.innerHTML=`

<h2>${persona.nombre}</h2>

<p>
<b>Rama:</b> ${persona.rama || "Sin definir"}
</p>


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