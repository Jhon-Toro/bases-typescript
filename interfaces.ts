interface Programador {
    nombre: string,
    tecnologias: string[],
    // Requisito de manera opcional ?
    estudia?: boolean | null;
}

let candidato: Programador = {
    nombre: 'David',
    tecnologias: ['React', 'Angular', 'JAVA'],
    estudia: true
}

// y cambiar su estado

// Puede recibir más datos de los que están tipados
// En la interfaz
let candidato2= {
    nombre: 'David',
    tecnologias: ['React', 'Angular', 'JAVA'],
    estudia: null,
    // Acá
    nacimiento: 'Año 2004'
}

// Parametro en la función, candidato pasandole interfaz
function enviarHojaDeVida(candidato : Programador){
    console.log(`Hoja de vida de ${candidato.nombre}`)
    console.log(`Tecnologias: ${candidato.tecnologias}`)
    console.log(`Estudia: ${candidato.estudia}`)
}

// Le mandamos el candidato a evaluar
enviarHojaDeVida(candidato2);