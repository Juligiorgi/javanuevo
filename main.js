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

//lista de productos
const productos =[
  {id:1, nombre: "protenpolvo", precio: 20.000},
  {id:2, nombre: "colageno", precio: 15.000},
  {id:3, nombre: "barraproteica", precio: 800},
];
productos.forEach((producto) =>{
  console.log(producto);
});
 
let item= document.createElement("ul");
 item.classList.add("items");
 item.innerHTML += `<li class="prod-item">${productos[0]}</li>`;
 item.innerHTML += `<li class="prod-item">${productos[1]}</li>`;
 item.innerHTML += `<li class="prod-item">${productos[2]}</li>`;

contenido.append(item)

//funcion opciones
let lista = document.createElement("ul");
lista.classList.add("lista");
lista.innerText = "<li>Nuevo cliente</li>";
lista.innerHTML += "<li>Comprar productos</li>";
lista.innerHTML += "<li>Visita al local</li>";
lista.innerHTML += "<li>Desubscripcion</li>";
lista.innerHTML += "<li>Salir</li>";

console.log(lista);

 


