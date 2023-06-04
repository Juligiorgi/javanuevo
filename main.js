console.log(document.body);
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

//funcion opciones
let lista = document.getElementsByClassName("lista");
console.log(lista[0].innerHTML);
console.log(lista[1].innerHTML);
console.log(lista[2].innerHTML);
console.log(lista[3].innerHTML);
console.log(lista[4].innerHTML);

//lista de productos
const productos =[
  {id:1, nombre: "Proteina en polvo", precio: 20.000},
  {id:2, nombre: "Colageno", precio: 15.000},
  {id:3, nombre: "Barra proteica", precio: 800},
];

const contenido = document.getElementById('contenido')
productos.forEach((producto) =>{
  console.log(producto);
  
let item= document.createElement("ul");
 item.classList.add("items");
  item.innerHTML += `<li class="prod-item">${producto.nombre}</li>`;
 contenido.appendChild(item)

});
 
let boton = document.getElementById("butmain")
boton.onclick = () => {console.log("Enviar")}
boton.onmouseup = () => {console.log("Down")}

const formulario2= document.getElementById("formulario2");
 formulario2.addEventListener("submit", cliente);

function cliente(e){
  e.preventDefault();
  const nombre= document.getElementById("nombre").value;
  const apellido = document.getElementById("Apellido").value;
  const email = document.getElementById("Email").value;
  const telefono= document.getElementById("Telefono").value;
  console.log(cliente);
  
  
  let usuario ={
    nombre: nombre,
    apellido: apellido,
    email: email,
    telefono: telefono,
};
localStorage.setItem("usuario", JSON.stringify(usuario));
}


 


