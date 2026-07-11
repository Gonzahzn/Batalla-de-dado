
let personajes = [
    {id:1, nombre:"Pinguino", vida:5000, daño:100, imagen: "Imagenes/p1.png"},
    {id:2, nombre:"Dino", vida:5000, daño:100, imagen: "Imagenes/p2.png"}, 
    {id:3, nombre:"Koala", vida:5000, daño:100, imagen: "Imagenes/p3.png"},
    {id:4, nombre:"Babosa", vida:5000, daño:100, imagen: "Imagenes/p4.png"},
    {id:5, nombre:"Libélula", vida:5000, daño:100, imagen: "Imagenes/p5.png"},
    {id:6, nombre:"Tópo", vida:5000, daño:100, imagen: "Imagenes/p6.png"},
    {id:7, nombre:"Quiral", vida:5000, daño:100, imagen: "Imagenes/p7.png"},
    {id:8, nombre:"Pepe", vida:5000, daño:100, imagen: "Imagenes/p8.png"}, 
    {id:9, nombre:"Murcielago", vida:5000, daño:100, imagen: "Imagenes/p9.png"},
    {id:10, nombre:"Rana", vida:5000, daño:100, imagen: "Imagenes/p10.png"}
    ];

let jugador;
let rival;

function dañoDado(){
    let random = Math.floor(Math.random()*8);
    let multiplicador = [0, 1, 2, 3, 4, 5, 6, 7];
    let golpe = multiplicador[random];
    return golpe;
}

let transformacion = 0;
let transformacionRival = 0;

function iniciarBatalla(){
    let eleccionMaquina = Math.floor(Math.random()*personajes.length);
    rival = personajes[eleccionMaquina];

    document.querySelector(".statsJugador").innerText = `${jugador.nombre}   vida: ${jugador.vida}`;
    document.querySelector(".statsRival").innerText = `${rival.nombre}  vida: ${rival.vida}`;

    document.getElementById("img-pj-jugador").src = jugador.imagen;
    document.getElementById("img-pj-rival").src = rival.imagen;

    document.getElementById("pantalla-seleccion").style.display = "none";
    document.getElementById("pantalla-combate").style.display = "block";
}

function eleccionDePjs(personajes){
    let btnP1 = document.getElementById("boton-p1");
    let btnP2 = document.getElementById("boton-p2");
    let btnP3 = document.getElementById("boton-p3");
    let btnP4 = document.getElementById("boton-p4");
    let btnP5 = document.getElementById("boton-p5");
    let btnP6 = document.getElementById("boton-p6");
    let btnP7 = document.getElementById("boton-p7");
    let btnP8 = document.getElementById("boton-p8");
    let btnP9 = document.getElementById("boton-p9");
    let btnP10 = document.getElementById("boton-p10");

    btnP1.addEventListener("click", (e) =>{
        jugador = personajes[0];
        iniciarBatalla();
    })
    btnP2.addEventListener("click", (e) =>{
        jugador = personajes[1];
        iniciarBatalla();
    })
    btnP3.addEventListener("click", (e) =>{
        jugador = personajes[2];
        iniciarBatalla();
    })
    btnP4.addEventListener("click", (e) =>{
        jugador = personajes[3];
        iniciarBatalla();
    })
    btnP5.addEventListener("click", (e) =>{
        jugador = personajes[4];
        iniciarBatalla();
    })
    btnP6.addEventListener("click", (e) =>{
        jugador = personajes[5];
        iniciarBatalla();
    })
    btnP7.addEventListener("click", (e) =>{
        jugador = personajes[6];
        iniciarBatalla();
    })
    btnP8.addEventListener("click", (e) =>{
        jugador = personajes[7];
        iniciarBatalla();
    })
    btnP9.addEventListener("click", (e) =>{
        jugador = personajes[8];
        iniciarBatalla();
    })
    btnP10.addEventListener("click", (e) =>{
        jugador = personajes[9];
        iniciarBatalla();
    })
}
// dasadadasasad
function turnoMaquina(tirarDado, reiniciar){
    if(jugador.vida <= 0) return;

    let golpeRival = dañoDado();
    if(golpeRival === 7){
        transformacionRival += 1;
        document.querySelector(".acumRival").innerText = `${transformacionRival}`;
        console.log(`Acumulador de ${rival.nombre}: ${transformacionRival}`);
        if(transformacionRival === 3){
            alert("Evoluciooooooon");
            jugador.vida = 0;
            console.log(`¡Derrota!`);
            document.querySelector(".statsJugador").innerText = `${jugador.nombre}   vida: ${jugador.vida}`;
            tirarDado.style.display = "none";
            reiniciar.style.display = "block";
            return;
        }
    }
    else{
        let dañoFinalRival = rival.daño * golpeRival;
        jugador.vida -= dañoFinalRival;
        console.log(`${rival.nombre} hace ${dañoFinalRival} de daño. Vida del Jugador: ${jugador.vida}`);
        document.querySelector(".statsJugador").innerText = `${jugador.nombre}   vida: ${jugador.vida}`;
    }
    if(jugador.vida <= 0){
        alert("Perdiste");
        tirarDado.style.display = "none";
        reiniciar.style.display = "block";
        return;
    }
    tirarDado.disabled = false;
}




function combate(){
    let reiniciar = document.getElementById("volver_a_jugar")
    reiniciar.style.display = "none";
    let tirarDado = document.getElementById("dado");

    tirarDado.addEventListener("click", (e) =>{
    tirarDado.disabled = true;

    let golpeJugador = dañoDado();
    if(golpeJugador === 7){
        transformacion += 1;
        document.querySelector(".acumJugador").innerText = `${transformacion}`;
        console.log(`Acumulador de ${jugador.nombre}: ${transformacion}`);
        if(transformacion === 3){
            alert("Evoluciooooooón");
            rival.vida = 0;
            document.querySelector(".statsRival").innerText = `${rival.nombre}  vida: ${rival.vida}`;
            console.log(`¡Victoria!`)
            tirarDado.style.display = "none";
            reiniciar.style.display = "block";
            return;
        }
    }
    else{
        let dañoFinalJugador = jugador.daño * golpeJugador;
        rival.vida -= dañoFinalJugador;
        console.log(`${jugador.nombre} hace ${dañoFinalJugador} de daño. Vida del rival: ${rival.vida}`);
        document.querySelector(".statsRival").innerText = `${rival.nombre}  vida: ${rival.vida}`;
    }
    if(rival.vida <= 0){
        alert("Victoria");
        tirarDado.style.display = "none";
        reiniciar.style.display = "block";
        return;
    }
    setTimeout(() =>{
        turnoMaquina(tirarDado, reiniciar);
    }, 1500);
    });

    reiniciar.addEventListener("click", (e) =>{
        jugador.vida = 5000;
        rival.vida = 5000;
        transformacion = 0;
        transformacionRival = 0;
        tirarDado.style.display = "block";
        reiniciar.style.display = "none";

        document.querySelector(".acumJugador").innerText = 0;
        document.querySelector(".acumRival").innerText = 0;

        document.getElementById("pantalla-seleccion").style.display = "block";
        document.getElementById("pantalla-combate").style.display = "none";
    }) 
}

document.getElementById("pantalla-combate").style.display = "none";

eleccionDePjs(personajes);
combate();