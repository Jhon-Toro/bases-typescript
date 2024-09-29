// Se puede hacer objetos de manera normal como en JS
let programador = {
    nombre: 'David',
    tecnologias: ['React', 'Angular', 'JAVA'],
    estudia: true
}

// y cambiar su estado
programador = {
    nombre: 'Daviddd',
    tecnologias: ['JS'],
    estudia: true
}

console.log(programador)

// TIPAR OBJETOS

// TIPAR OBJETO COMO SI FUERA UN INTERFAZ
type Programador2 = {
    nombre: string,
    tecnologias: string[],
    estudia: boolean | null
};

// Y UTILIZAR EL TIPADO EN LOS OBJETOS
let programador2: Programador2 = {
    nombre: 'David',
    tecnologias: ['React', 'Angular', 'JAVA'],
    estudia: true
};

let programador3: Programador2 = {
    nombre: 'David',
    tecnologias: ['React', 'Angular', 'JAVA'],
    estudia: null
};