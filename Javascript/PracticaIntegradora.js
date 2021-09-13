/* ------------------ Ejercicio 1 -------------------
Crear una función constructora la cual vamos a llamar Computadora, deberá tener las siguientes propiedades:
ram:string
cpu:string
disco:string
monitor:string
gpu:boolean
 */

/**
 * Represents a Computer.
 * @constructor
 * @param {String} ram - .
 * @param {String} cpu - .
 * @param {String} disco - .
 * @param {String} monitor - .
 * @param {Boolean} gpu - .
 */
function Computer(ram, cpu, disco, monitor, gpu){
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
}

console.log()
console.log()
console.log("------------------ Ejercicio 2 -------------------")

/* ------------------ Ejercicio 2 -------------------
 Crear 5 computadoras distintas y guardarlas (Array) de manera que 
 luego podamos consultar cuántas computadoras tenemos y poder 
 mostrarlas por consola. Además queremos ver el detalle de cada computadora por consola.
 */

let computers = [];
computers.push(new Computer("ram1","cpu1","disco1","monitor1", true));
computers.push(new Computer("ram2","cpu2","disco2","monitor2", true));
computers.push(new Computer("ram3","cpu3","disco3","monitor3", true));
computers.push(new Computer("ram4","cpu4","disco4","monitor4", false));
computers.push(new Computer("ram5","cpu5","disco5","monitor5", false));

console.log(computers.length);

function showComputers(computers){
    computers.forEach(computer =>{
        console.log(computer);
    })
}

showComputers(computers);

console.log();

console.log()
console.log()
console.log("------------------ Ejercicio 3 -------------------")

/* ------------------ Ejercicio 3 -------------------
Crear un nuevo Array a partir del primero, donde vamos a guardar solamente las computadoras con gpu.
 */

let computersWithGpu = computers.filter(computer => computer.gpu);

showComputers(computersWithGpu)

console.log()
console.log()
console.log("------------------ Ejercicio 4 -------------------")

/* ------------------ Ejercicio 4 -------------------
Crear una función que calcule cuántos litros de nafta gasta un auto 
que consume 2 litros cada 100km, ingresando por parámetro la cantidad de 
kilómetros del recorrido a realizar. Luego crear una función que, a partir de 
ese dato, devuelva cuánto significa eso en pesos ingresando por parámetro el precio del litro de nafta.

    100Km ----- 2 Liters
    k Km  ----- x Liters
*/

function fuelConsumation(kilometers){
    return ((2*kilometers)/100);
}

function fuelCost(pricePerLiter, kilometers){
    let cost = fuelConsumation(kilometers)*pricePerLiter;
    return ("The fuel cost for the trip is $" + cost);
}

// Response should be $550
console.log(fuelCost(110,250))

console.log()
console.log()
console.log("------------------ Ejercicio 5 -------------------")

/* ------------------ Ejercicio 5 -------------------
Crear un array que contenga números del 1 al 10. 
Retornar un nuevo array que contenga todos los números multiplicados por dos
*/

const numbers = [1,2,3,4,5,6,7,8,9,10];

function getDoubles(){
    return numbers.map((num) => {
        return num * 2
    });
}

console.log(getDoubles())

console.log()
console.log()
console.log("------------------ Ejercicio 6 -------------------")

/* ------------------ Ejercicio 6 -------------------
Del array que devuelve el ejercicio número 5, filtrar los que sean mayores a 5
*/

function getBiggersThanFive(){
    return getDoubles().filter(num  => num > 5)
}

console.log(getBiggersThanFive())

console.log()
console.log()
console.log("------------------ Ejercicio 7 -------------------")

/* ------------------ Ejercicio 7 ------------------- 
Del array que devuelve el ejercicio 6, buscar el primero que sea mayor a 10
*/

function getFirstBiggerThanTen(){
    return getDoubles().find(num => num > 10);
}

console.log(getFirstBiggerThanTen())

console.log()
console.log()
console.log("------------------ Ejercicio 8 -------------------")

/* ------------------ Ejercicio 8 ------------------- 
Dado el siguiente array filtremos a los pokemones con poder menor a 10.
let pokemones = [ { nombre: 'pikachu', poder: 12 }, { nombre: 'bulbasaur', poder: 6 }, 
{ nombre: charizard, poder: 19 }, { nombre: squirtle, poder: 3 }, { nombre: 'mnewto', poder: 6 }, ]
*/

let pokemones = [ 
    { nombre: 'pikachu', poder: 12 }, 
    { nombre: 'bulbasaur', poder: 6 }, 
    { nombre: 'charizard', poder: 19 }, 
    { nombre: 'squirtle', poder: 3 }, 
    { nombre: 'mnewto', poder: 6 }, 
]


function getPokemonsWithPowerMinusTen(){
    return pokemones.filter( pokemon => pokemon.poder < 10)
}

console.log(getPokemonsWithPowerMinusTen())