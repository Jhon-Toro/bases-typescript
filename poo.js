"use strict";
class Pelicula {
    // En una clase siempre hay que usar this si queremos usarlas en funciones
    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`);
        console.log(`Actores ${this.actores}`);
        console.log(`Protagonistas ${this.protagonistas}`);
    }
    // Se realiza el constructor
    // Con el concepto digamos de muchas peliculas con este mismo formato
    // Seria como que se puede instanciar muchas peliculas con el mismo formato
    //El constructor se llama cuando se crea una nueva instancia de Pelicula.
    // Toma parámetros para inicializar las propiedades nombre, protagonistas y actores de la instancia.
    constructor(nombre, protagonistas, actores) {
        //Este método utiliza this para acceder a las propiedades de la clase
        // y muestra información sobre la película en la consola.
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}
// Instanciamos la clase como un objeto
const spiderman = new Pelicula('Spiderman', ['Spiderman1', 'VENUM'], ['david']);
const minions = new Pelicula('Minions', ['SNiose', 'Nose'], ['david']);
// Ejecutamos el método
// No es necesario esto
spiderman.proyectarEnCine();
minions.proyectarEnCine();
// Imprimimos la pelicula
// Esto puede ser necesario
console.log(spiderman);
// En Resumen
// Constructor: Se utiliza para inicializar las propiedades de una clase
// cuando se crea una nueva instancia. Permite crear múltiples objetos
// (películas, en este caso) con la misma estructura pero diferentes valores.
// this: Se utiliza para acceder a las propiedades y métodos de la instancia actual de la clase.
