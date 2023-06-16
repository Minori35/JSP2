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

function crearProducto(nombre, precio){
    nombre = nombre || "sin nombre"
    precio = precio || 0;

    console.log("Producto :", nombre, "precio", precio);

}

function crearProducto100(nombre){
    crearProducto(nombre, 100);
}

function crearProductoCamisa(precio){
    crearProducto("camisa", precio)
}


crearProducto("lapiz");
crearProducto100("Corrector");

crearProductoCamisa(100)