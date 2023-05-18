//Datos de compradores
class Clientes{
  constructor(nombre,apellido,edad,){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  }
}

const clienteJulieta = new Clientes('Julieta','Diaz','22');
const clienteCamila = new Clientes('Camila','Perez','26');
const clientesJuan = new Clientes('Juan','Perez','18');
const clientesGaston = new Clientes('Gaston','Garcia','22');
const clientesNancy = new Clientes('Nancy','Lopez','38');

const arrayClientes = [];

arrayClientes.push(clienteJulieta);
arrayClientes.push(clienteCamila);
arrayClientes.push(clientesJuan);
arrayClientes.push(clientesGaston);
arrayClientes.push(clientesNancy);

console.log(arrayClientes);

//funcion con lista de productos 

function lista () {
  alert('Bienvenidos a JGFitness');
  let opciones= parseInt(prompt('Ingrese la opcion que necesite: \n 1) Nuevo cliente \n 2) Comprar productos \n 3) Visita al local \n 4) Desubscripcion \n 5)Salir'));
  return opciones;
}

// funcion nuevos clientes 

function nuevoCliente() {
  let nombre = prompt('Ingrese su nombre');
  let apellido = prompt ('Ingrese su apellido');
  let edad = parseInt(prompt('Ingrese su edad'));
  let cliente = new Clientes(nombre, apellido, edad);
  arrayClientes.push(cliente);
  console.log(arrayClientes);
}

//funcion comprar productos 

const productos =[
  {id:1, nombre: "protenpolvo", precio: 20.000},
  {id:2, nombre: "colageno", precio: 15.000},
  {id:3, nombre: "barraproteica", precio: 800},
];
console.log(productos);

//funcion visitar nuestro local 

function visitalocal () {
let nombre = prompt('Ingrese su nombre');
let mensaje = ('Visitenos en Av.Rafael Nuñez 4820 de lunes a viernes de 10:00-21:00hrs');
}
visitalocal();

//funcion desubcripcion

function desubcripcion () {
  let apellido = prompt('Ingrese su apellido');
  let cliente = arrayClientes.find((cliente) => cliente.apellido === apellido);
  let indice = arrayClientes.indexOf(cliente);
  arrayClientes.slice(indice,1);
  console.log(arrayClientes);
}

//funcion de salir

function salir(){
  alert('Gracias por visitar nuestra web, espero que les haya gustado');
}

//ejecucion del programa

let opciones = lista();
switch(opciones){
  case 1:
    nuevoCliente();
    break;
  case 2:
    productos();
    break;
  case 3:
    visitalocal();
    break;
  case 4:
    desubcripcion();
    break;
  case 5:
    salir();
    break;
  default:
    alert('Opcion incorrecta, vuelve a intentarlo');
    break;
}