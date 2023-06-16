// *********************************Arreglos*************************

// var arr =[5,4,3,2,1]

// console.log(arr);

// console.log(arr[0],arr[4],);

// arr.reverse

// console.log(arr);

// arr = arr.map(function(elem){
//     elem *= elem;
//     return elem
// });

// console.log(arr);

// arr = arr.map( Math.sqrt);
// console.log(arr);


// arr= arr.join("|");

// console.log(arr);


// arr = arr.split("|")
// console.log(arr);

// // arr= arr.push("6");
// // console.log(arr);


// console.log(arr.toString());

// var elimine = arr.pop();
// console.log(arr, elimine);

// arr.splice( 1, 1, "10", "20");
// console.log(arr);

// arr = arr.splice(0,2)
// console.log(arr);


// *********************************Arreglos*************************
 
// var arr =[

//      true, 
//      {
//         nombre: "sayra",
//         apellidos : "Herrera"
//      },
//      function(){
//         console.log("Estoy viviendo en un arreglo");
//      },
//      function(persona){
//         console.log(persona.nombre + " " + persona.apellido);
//      },
//      ["Fernando", "Carlos", "Sayra", "Bruno",
       
//      [
//          "Juan",
//          "Pedro",
//         "otro"]
//     ]
// ]
// console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);

// arr[2]();
// arr[3](arr[1]);

// console.log(arr[4][3][1  ]);

// *********************************Arreglos parte 2*************************

// function miFuntion(){
//     console.log(arguments);
// }

// miFuntion();

// *********************************sobreCarga*************************

// function crearProducto(nombre, precio){
//     nombre = nombre || "sin nombre"
//     precio = precio || 0;

//     console.log("Producto :", nombre, "precio", precio);

// }

// function crearProducto100(nombre){
//     crearProducto(nombre, 100);
// }

// function crearProductoCamisa(precio){
//     crearProducto("camisa", precio)
// }


// crearProducto("lapiz");
// crearProducto100("Corrector");

// crearProductoCamisa(100)

// *********************************Polimotfismo*************************

// function determinaDato(){
//     if(a === undefined){
//         console.log("A es undefine.....no se que");
//     }

//     if(typeof a=== "number"){
//         console.log("A es un numero y puedo hacer operaciones");
//     }
//     if(typeof a=== "string"){
//         console.log("A es un texto  y puedo hacer operaciones con texto");
//     }

//     if(typeof a=== "object"){
//         console.log("A es un obejto  y puedo hacer operaciones con objeto");

//         if(a instanceof Number){
//             console.log("Es un objeto ");
//         }
//     }


// }


// var b = new Number(3);

// console.log(b);

// determinaDato()

// *********************************Cuidado con las funciones y sus contextos*************************

// function crearFunciones(){
//     var arr = [];
//     var numero = 1;

//     for(var numero =1 ; numero <=3; numero ++){
//         arr.push(
//             (function(numero){
//                 return function(){
//                     console.log(numero)
//                 } 
//             })(numero))
//     }

//  return arr;

// }   

// var funciones = crearFunciones   ();

// funciones[0]();
// funciones[1]();
// funciones[2]();

// *********************************Objetos number*************************

var a = 10.45222;

console.log(a.toFixed(5));

a= a.toString();
console.log(a);
console.log(a.toPrecision(2));

a = 10;
a *= 100000000000;
console.log(a);

var b = new Number("20");

console.log(b);
console.log(b.valueOf());




