"use strict";
// Se puede hacer objetos de manera normal como en JS
let programador = {
    nombre: 'David',
    tecnologias: ['React', 'Angular', 'JAVA'],
    estudia: true
};
// y cambiar su estado
programador = {
    nombre: 'Daviddd',
    tecnologias: ['JS'],
    estudia: true
};
console.log(programador);
// Y UTILIZAR EL TIPADO EN LOS OBJETOS
let programador2 = {
    nombre: 'David',
    tecnologias: ['React', 'Angular', 'JAVA'],
    estudia: true
};
let programador3 = {
    nombre: 'David',
    tecnologias: ['React', 'Angular', 'JAVA'],
    estudia: null
};
