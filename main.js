const jugador={
    nombre: "Player",
    vida: 5000,
    daño: 100
};

const rival={
    nombre: "Bot",
    vida: 5000,
    daño: 100
};

function dañoDado(){
    let random = Math.floor(Math.random()*8);
    let multiplicador = [0, 1, 2, 3, 4, 5, 6, 7];
    let golpe = multiplicador[random];
    return golpe;
}

// dado();

let transformacion = 0;
let transformacionRival = 0;

function combate(){
    while((jugador.vida > 0) && (rival.vida > 0)){

        let golpeJugador = dañoDado();
        if(golpeJugador === 7){
            transformacion += 1;
            console.log(`Acumulador: ${transformacion}`);
            if(transformacion === 3){
                alert("Evoluciooooooón");
                rival.vida = 0;
                break;
            }
        }
        else{
            let dañoFinalJugador = jugador.daño * golpeJugador;
            rival.vida -= dañoFinalJugador;
            console.log(`Jugador hace ${dañoFinalJugador} de daño. Vida del rival: ${rival.vida}`);
        }
        if (rival.vida <= 0) break;

        let golpeRival = dañoDado();
        if(golpeRival === 7){
            transformacionRival += 1;
            console.log(`Acumulador Rival: ${transformacionRival}`);
            if(transformacionRival === 3){
                alert("Evoluciooooooon");
                jugador.vida = 0;
                break;
            }
        }
        else{
            let dañoFinalRival = rival.daño * golpeRival;
            jugador.vida -= dañoFinalRival;
            console.log(`Rival hace ${dañoFinalRival} de daño. Vida del Jugador: ${jugador.vida}`);
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