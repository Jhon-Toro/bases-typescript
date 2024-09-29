"use strict";
class Sorteo {
    //La propiedad numero es de tipo T, lo que significa que su tipo puede ser cualquier cosa (número, cadena, objeto, etc.) dependiendo de cómo se instancie la clase.
    // El signo ? indica que esta propiedad es opcional, por lo que puede no estar definida.
    constructor(nombre) {
        this.nombre = nombre;
    }
    // Set modificar el número como corresponda, osea através de la instancia
    // que corresponda y hay que instanciarlo para poder modificarlo
    setNumero(numero) {
        this.numero = numero;
    }
    getNumero() {
        return this.numero;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.numero}`;
    }
}
// Declaramos la variable para utilizar
// Luego el objeto con el génerico "number ya que solo aceptaremos numeros"
// Y colocamos el nombre del jugador que se puso en el constructor de 
// esta manera ("nombre")
let sorteo = new Sorteo('David');
// Seteamos el numero, accedemos desde la instancia que creamos
sorteo.setNumero('A5621LDVX');
console.log(sorteo.getNumero());
// Deja usar sortear ya que es publico
console.log(sorteo.sortear());
