
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

function dañoDado(){
    let random = Math.floor(Math.random()*8);
    let multiplicador = [0, 1, 2, 3, 4, 5, 6, 7];
    let golpe = multiplicador[random];
    return golpe;
}

let transformacion = 0;
let transformacionRival = 0;

function combate(){
    let eleccionJugador = prompt("1: Pinguino\n2: Dino\n3: Koala\n4: Babosa\n5: Libélula\n6: Tópo\n7: Quiral\n8: Pepe\n9: Murcielago\n10: Rana");
    let jugador = personajes[eleccionJugador - 1];

    let eleccionMaquina = Math.floor(Math.random()*personajes.length);
    let rival = personajes[eleccionMaquina];
    
    while((jugador.vida > 0) && (rival.vida > 0)){
        let golpeJugador = dañoDado();
        if(golpeJugador === 7){
            transformacion += 1;
            console.log(`Acumulador de ${jugador.nombre}: ${transformacion}`);
            if(transformacion === 3){
                alert("Evoluciooooooón");
                rival.vida = 0;
                console.log(`¡Victoria!`)
                break;
            }
        }
        else{
            let dañoFinalJugador = jugador.daño * golpeJugador;
            rival.vida -= dañoFinalJugador;
            console.log(`${jugador.nombre} hace ${dañoFinalJugador} de daño. Vida del rival: ${rival.vida}`);
        }
        if (rival.vida <= 0) break;

        let golpeRival = dañoDado();
        if(golpeRival === 7){
            transformacionRival += 1;
            console.log(`Acumulador de ${rival.nombre}: ${transformacionRival}`);
            if(transformacionRival === 3){
                alert("Evoluciooooooon");
                jugador.vida = 0;
                console.log(`¡Derrota!`)
                break;
            }
        }
        else{
            let dañoFinalRival = rival.daño * golpeRival;
            jugador.vida -= dañoFinalRival;
            console.log(`${rival.nombre} hace ${dañoFinalRival} de daño. Vida del Jugador: ${jugador.vida}`);
        }
    }
    if(rival.vida <= 0){
        alert("Victoria");
    }
    else if(jugador.vida <= 0){
            alert("Perdiste");
        }
}

combate();