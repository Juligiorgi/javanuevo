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

//Libreria

Swal.fire('¡Bienvenidos a JGFitness!')

//funcion con lista de productos 

const bienvenidos=document.getElementById("bienvenida");
bienvenida.innerText="Registrate"
const clientes= document.getElementById("cliente");
cliente.innerText="¡Si sos nuevo cliente, 10% de descuento en tu compra!"
const clientenuevo=document.getElementById("nuevosclientes");
clientenuevo.addEventListener("submit", nuevoCliente);

// funcion nuevos clientes 

function nuevoCliente(e) {
  e.preventDefault()
 const nombre=document.getElementById("nombrecliente").value;
 const apellido=document.getElementById("apellidocliente").value;
 const email=document.getElementById("emailcliente").value;
 const telefono=document.getElementById("telefonocliente").value;
 let usuario={
  nombre:nombre,
  apellido:apellido,
  email:email,
  telefono:telefono,
};
localStorage.setItem("usuario", JSON.stringify(usuario));
}

//stock de productos 

let stockProductos =[
  {id:1, nombre:"proteina de frutilla ", precio: 20000, cantidad:1, desc:"proteina de frutilla", img:'./image/14471.8244.jpg'},
  {id:2, nombre:"proteina de vainilla", precio:20000, cantidad:1, desc:"proteina de vainilla", img:'./image/41D4SI8q0mL._SL500_.jpg'},
  {id:3, nombre:"proteina de chocolate", precio:20000, cantidad:1, desc:"proteina de chocolate", img:'./image/diseno-sin-titulo-751-868659d14aed90615916681089293445-640-0.png'},
  {id:4, nombre:"proteina vegetal", precio:25000, cantidad:1, desc:"proteina vegetal sin sabor", img:'./image/41oHSEJWqbL._SL500_.jpg'},
  {id:5, nombre:"colageno de lima", precio: 15000, cantidad:1, desc:"colageno de lima y frutilla", img:'./image/42306-bp37ramp-vital-proteins-vital-proteins-beauty-collagen-271-g-1.jpg'},
  {id:6, nombre:"colageno sinsabor", precio:10000, cantidad:1, desc:"colageno sin sabor", img:'./image/51NMV2lMHQL._SL500_.jpg'},
  {id:7, nombre:"colageno de pomelo", precio:15000, cantidad:1, desc:"colageno de pomelo", img:'./image/colageno-hidrolizado-con-camu-camu-con-aguaje-en-polvo.jpg'},
  {id:8, nombre:"barra proteica cookies and cream", precio:800, cantidad:1, desc:"barra de proteina sabor cookies and cream", img:'./image/tienda_012772_bfc4c728b7d8b2737733e2b84e1e5fd2e809f451_producto_large_90.jpg'},
  {id:9, nombre:"barra proteica frutilla", precio:800, cantidad:1, desc:"barra de proteina sabor frutilla", img:'./image/12116520-8194722276945546.jpg'},
  {id:3, nombre:"barra proteica cookie dough", precio: 800, cantidad:1, desc:"barra de proteina sabor cookies dough", img:'./image/IMG_8511.jpg'},
];
  
let item= document.createElement("ul");
 item.classList.add("items");
 item.innerHTML += `<li class="prod-item">${stockProductos[0]}</li>`;
 item.innerHTML += `<li class="prod-item">${stockProductos[1]}</li>`;
 item.innerHTML += `<li class="prod-item">${stockProductos[2]}</li>`;


 //Placeholder json
 fetch("./data.json")
 .then(response =>response.json())
 .then((data)=>console.log(data))
 
 
 //funcion comprar productos

 const contenedorProductos = document.getElementById('contenedor-productos')
 
 const contenedorCarrito = document.getElementById('contenedor-carrito')
 
 const botonVaciar = document.getElementById('vaciar-carrito')

 const sumadorCarrito = document.getElementById('sumadorCarrito')

 const precioTotal = document.getElementById('precioTotal')

let carrito = [];

carrito.length === 0 && console.log("El carrito esta vacio");


//Guardado en el local storage 

document.addEventListener('DOMContentLoaded' , () =>{
   if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualCarrito()
  }
})
// productos cargador 
botonVaciar.addEventListener('click', () =>{
   carrito.length = 0
   actualCarrito()
})

 stockProductos.forEach((producto) => {
  const div =document.createElement('div')
  div.classList.add('producto')
  div.innerHTML = `
  <img src=${producto.img} alt="">
  <h4>${producto.nombre}</h4>
  <p>${producto.desc}</p>
  <p class="precioProducto">Precio:$ ${producto.precio}</p>
  <button id="agregar${producto.id}" class="boton-agregar">Agregar<i class fas-fa-shopping-cart</i></button>
  `
  contenedorProductos.appendChild(div)
  
  const boton = document.getElementById(`agregar${producto.id}`)

  boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
  })
 })


// agregar al carrito


 const agregarAlCarrito = (productosId) => {
   const existe = carrito.some(prod => prod.id === productosId)

   if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === productosId){
        prod.cantidad ++
      }
    })
   }else{
  const item = stockProductos.find((prod) => prod.id === productosId)
  carrito.push(item)
  console.log(carrito);
  }
  actualCarrito()
 }



// eliminar del carrito


const eliminarDelCarrito = (productosId) => {
  const item = carrito.find((prod) => prod.id === productosId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  actualCarrito()
}

//Contenido del carrito


 const actualCarrito = () =>{
 contenedorCarrito.innerHTML = ""

  carrito.forEach((prod)=> {
    const div = document.createElement('div')
    div.className =('productoEnElCarrito')
    div.innerHTML = `
    <p<${prod.nombre}</p>
    <p>Precio: ${prod.precio}</p>
    <p>Cantidad : <span id="cantidad"> ${prod.cantidad}</span></p>
    <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"> <i class="bi bi-cart-fill"></i></button>
    `
    contenedorCarrito.appendChild(div)
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
  })
    contenedorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc,prod) => acc + prod.precio, 0)

 }


 



