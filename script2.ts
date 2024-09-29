// USANDO | PARA TIPAR LO QUE QUERAMOS, EVITAR USAR ANY
let disney:string | number | boolean;

// LO TOMA COMO UN STRING
disney = 'Star wars y marvel'
console.log(disney)

// SE CAMBIA SU ESTADO A NUMBER, YA QUE TOMA EL TIPADO NUMBER
disney = 1500000000
console.log(disney)

// SE CAMBIA SU ESTADO A BOOLEAN, LO TOMA COMO BOLEANO YA QUE TAMBIÉN LO TENGO TIPADO
disney = true;
console.log(disney)

// EVITAR USAR ANY