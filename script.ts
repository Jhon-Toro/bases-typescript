// TODAS LAS VARIABLES LO MEJOR ES TIPARLAS
let estudieHoy: boolean = false;

if (estudieHoy) {
    console.log("Puedo ganar el exámen");
} else{
    console.log("Tengo que estudiar")
}

// hacemos los tipados
let barsa: number | null | undefined = 11;
let madrid: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;

let palabras: string = 'Me emocione al verlo a messi'

// los parametros que se pasan a las funciones hay que tiparlos y también hay que tipar lo que devuelve
// En este caso no devuelve nada entonces se pone void
function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void{
    let motivo: string =  ``;
    if (juegaMessi){
        equipo1 += messi;
        motivo = "Porque juega messi";
    }
    // tambien se puede usar interpolación 
    if (equipo1 > equipo2) console.log(`Gana barsa ${motivo}`);
    if (equipo1 == equipo2) console.log("Empata el barsa");
    if (equipo1 < equipo2) console.log("Pierde");
}

jugar(barsa, madrid, juegaMessi);