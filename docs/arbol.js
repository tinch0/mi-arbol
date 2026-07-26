const contenedor = document.getElementById("arbol");


function buscarPersona(id){

    return personas.find(
        p => p.id === id
    );

}


function crearTarjeta(persona){

    let div=document.createElement("div");

    div.className="persona";

    div.innerHTML=`

    <h3>${persona.nombre}</h3>

    <p>${persona.relacion || ""}</p>

    ${persona.nacimiento ?
    `<p>📅 ${persona.nacimiento}</p>` : ""}

    ${persona.lugar ?
    `<p>📍 ${persona.lugar}</p>` : ""}

    ${persona.rama ?
    `<p>🌳 Rama: ${persona.rama}</p>` : ""}

    `;


    div.onclick=function(){

        mostrarFicha(persona);

    };


    return div;

}



function crearGeneracion(ids,titulo){

    let bloque=document.createElement("section");

    bloque.className="generacion";


    let h=document.createElement("h2");

    h.textContent=titulo;

    bloque.appendChild(h);



    let fila=document.createElement("div");

    fila.className="ramas";


    ids.forEach(id=>{

        let persona=buscarPersona(id);

        if(persona){

            fila.appendChild(
                crearTarjeta(persona)
            );

        }

    });


    bloque.appendChild(fila);


    return bloque;

}



function construirArbol(){

    let raiz=buscarPersona(1);


    contenedor.appendChild(
        crearGeneracion(
            [raiz.id],
            "Generación actual"
        )
    );


    contenedor.appendChild(
        crearGeneracion(
            [
                raiz.padre,
                raiz.madre
            ],
            "Padres"
        )
    );


    let padre=buscarPersona(raiz.padre);
    let madre=buscarPersona(raiz.madre);


    contenedor.appendChild(
        crearGeneracion(
            [
                padre.padre,
                padre.madre,
                madre.padre,
                madre.madre
            ],
            "Abuelos"
        )
    );


}


construirArbol();