
let personajes = [
    {id:1, nombre:"Pinguino", vida:5000, daño:100},
    {id:2, nombre:"Dino", vida:5000, daño:100}, 
    {id:3, nombre:"Koala", vida:5000, daño:100},
    {id:4, nombre:"Babosa", vida:5000, daño:100},
    {id:5, nombre:"Libélula", vida:5000, daño:100},
    {id:6, nombre:"Tópo", vida:5000, daño:100},
    {id:7, nombre:"Quiral", vida:5000, daño:100},
    {id:8, nombre:"Pepe", vida:5000, daño:100}, 
    {id:9, nombre:"Murcielago", vida:5000, daño:100},
    {id:10, nombre:"Rana", vida:5000, daño:100}
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

function eleccionDePjs(personajes){
    let eleccionJugador = prompt("1: Pinguino\n2: Dino\n3: Koala\n4: Babosa\n5: Libélula\n6: Tópo\n7: Quiral\n8: Pepe\n9: Murcielago\n10: Rana");
    jugador = personajes[eleccionJugador - 1];

    let eleccionMaquina = Math.floor(Math.random()*personajes.length);
    rival = personajes[eleccionMaquina];
    document.querySelector(".statsJugador").innerText = `${jugador.nombre}   vida: ${jugador.vida}`;
    document.querySelector(".statsRival").innerText = `${rival.nombre}  vida: ${rival.vida}`;
}

function combate(){

    // sadsasadasfsaf
    let tirarDado = document.getElementById("dado");
    tirarDado.addEventListener("click", (e) =>{
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
            tirarDado.disabled = true;
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
        tirarDado.disabled = true;
        return;
    }

    let golpeRival = dañoDado();
    if(golpeRival === 7){
        transformacionRival += 1;
        console.log(`Acumulador de ${rival.nombre}: ${transformacionRival}`);
        document.querySelector(".acumRival").innerText = `${transformacionRival}`;
        if(transformacionRival === 3){
            alert("Evoluciooooooon");
            jugador.vida = 0;
            console.log(`¡Derrota!`)
            document.querySelector(".statsJugador").innerText = `${jugador.nombre}   vida: ${jugador.vida}`
            tirarDado.disabled = true;
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
        tirarDado.disabled = true;
        return;
    }
    }) 
}

eleccionDePjs(personajes);
combate();