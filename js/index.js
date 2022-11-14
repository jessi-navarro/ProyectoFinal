//Los 3 contenedores de categorías
let contenedorPlantas = document.getElementById ("contenedorPlantas");
let contenedorCocina = document.getElementById ("contenedorCocina");
let contenedorHogar = document.getElementById ("contenedorHogar");


//Constructor de productos
class Producto{
    constructor (info){
        this.id = info.id;
        this.nombre = info.nombre;
        this.precio = info.precio;
        this.foto = info.foto;
    }
}


//Arrays por categorías
let listadoPlantas = [];
let listadoCocina = [];
let listadoHogar = [];


//Productos plantas
listadoPlantas.push (new Producto ({id: 1, nombre: "Malvón", precio: 900, foto:"./imgs-prods/plantas/Malvon.jpg"}));
listadoPlantas.push (new Producto ({id: 2, nombre: "Petunia", precio: 250, foto:"./imgs-prods/plantas/Petunia.jpg"}));
listadoPlantas.push (new Producto  ({id: 3, nombre: "Rayito de Sol", precio: 750, foto:"./imgs-prods/plantas/Rayito-de-sol.jpeg"}));
listadoPlantas.push (new Producto  ({id: 4, nombre: "Violeta Africana", precio: 950, foto: "./imgs-prods/plantas/Violeta-africana.jpeg"}));



listadoPlantas.forEach ((producto) => {
    let productoRenderizado = document.createElement ("div")
    productoRenderizado.innerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <img src=${producto.foto} class="card-img-top" alt="Imagen producto">
            <a id=${producto.id} class="btn btn-primary">Agregar al carrito</a>
            <p class="card-text"><b>Precio: $${producto.precio}</b></p>
            <h4 class="card-title">${producto.nombre}</h4>
        </div>
    </div>
    `
    contenedorPlantas.append (productoRenderizado);
    let boton = document.getElementById (producto.id);
    boton.addEventListener ("click", () => comprarProducto(producto));
    boton.addEventListener ("click", () => {
        localStorage.setItem ("carrito", JSON.stringify(carrito)),
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado al carrito!',
            showConfirmButton: false,
            timer: 1500
        })
        }
        );
});

    

//Productos cocina
listadoCocina.push (new Producto ({id: 5, nombre: "Dispenser 4 L.", precio: 5400, foto: "./imgs-prods/cocina/Dispenser.jpg"}));
listadoCocina.push (new Producto ({id: 6, nombre: "Copa Hurricane", precio: 4300, foto: "./imgs-prods/cocina/Hurricane.png"}));
listadoCocina.push (new Producto ({id: 7, nombre: "Taza Té Mozart", precio: 6300, foto: "./imgs-prods/cocina/Mozart-Te.png"}));
listadoCocina.push (new Producto ({id: 8, nombre: "Secaplatos Bacha", precio: 9600, foto: "./imgs-prods/cocina/Secaplatos-sobre-bacha.jpeg"}));



listadoCocina.forEach ((producto) => {
    let productoRenderizado = document.createElement ("div")
    productoRenderizado.innerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <img src=${producto.foto} class="card-img-top" alt="Imagen producto">
            <a id=${producto.id} class="btn btn-primary">Agregar al carrito</a>
            <p class="card-text"><b>Precio: $${producto.precio}</b></p>
            <h4 class="card-title">${producto.nombre}</h4>
        </div>
    </div>
    `
    contenedorCocina.append (productoRenderizado);
    let boton = document.getElementById (producto.id);
    boton.addEventListener ("click", () => comprarProducto(producto));
    boton.addEventListener ("click", () => {
        localStorage.setItem ("carrito", JSON.stringify(carrito)),
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado al carrito!',
            showConfirmButton: false,
            timer: 1500
        })
        }
        );
});

    

//Productos hogar
listadoHogar.push (new Producto ({id: 9, nombre: "Manta Elena", precio: 4500, foto: "./imgs-prods/hogar/Manta-Elena.jpg"}));
listadoHogar.push (new Producto ({id: 10, nombre: "Almohadón terciopelo", precio: 2400, foto: "./imgs-prods/hogar/Almohadon-terciopelo.jpg"}));
listadoHogar.push (new Producto  ({id:11, nombre: "Reloj Lexie", precio: 3900, foto: "./imgs-prods/hogar/Reloj-Lexie.jpg"}));
listadoHogar.push (new Producto  ({id: 12, nombre: "Espejo Nube", precio: 6300, foto: "./imgs-prods/hogar/Espejo-nube.jpg"}));



listadoHogar.forEach ((producto) => {
    let productoRenderizado = document.createElement ("div")
    productoRenderizado.innerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <img src=${producto.foto} class="card-img-top" alt="Imagen producto">
            <a id=${producto.id} class="btn btn-primary">Agregar al carrito</a>
            <p class="card-text"><b>Precio: $${producto.precio}</b></p>
            <h4 class="card-title">${producto.nombre}</h4>
        </div>
    </div>
    `
    contenedorHogar.append (productoRenderizado);
    let boton = document.getElementById (producto.id);
    boton.addEventListener ("click", () => comprarProducto(producto));
    boton.addEventListener ("click", () => {
        localStorage.setItem ("carrito", JSON.stringify(carrito)),
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado al carrito!',
            showConfirmButton: false,
            timer: 1500
        })
        }
        );
});



//Carrito
let carrito = [];

let comprarProducto = (producto) => {
    let productoExiste = carrito.find (item => item.id === producto.id);
    if (productoExiste === undefined){
            carrito.push ({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen,
                cantidad: 1
            })
        }else{
            productoExiste.precio = productoExiste.precio + producto.precio;
            productoExiste.cantidad++;
        }
        
    };


    
//Carrito Renderizado
let botonCarrito = document.getElementById ("botonCarrito");
let contenedorCarrito = document.getElementById ("contenedorCarrito");

botonCarrito.addEventListener ("click", () => {
    carrito.length === 0 && Swal.fire('El carrito está vacío.');

    JSON.parse (localStorage.getItem("carrito"));
    localStorage.setItem ("carrito", JSON.stringify (carrito));

    carrito.forEach ((producto) => {
        let carritoRenderizado = document.createElement ("div");
        carritoRenderizado.innerHTML = `
        <center><div class="carritoRenderizado"> 
        <h5>Producto: ${producto.nombre}</h5>
        <br>
        <h6>Precio: $${producto.precio}</h6>
        <br>
        </div></center>
    `
    
    contenedorCarrito.append (carritoRenderizado); 
    });
});



//Guardar carrito
const guardarCarrito = () => {
    carrito.length = 0;
    let storage = JSON.parse(localStorage.getItem("carrito"));
    if(storage !== null){
        carrito = storage;
    }
}

guardarCarrito ();



//Finalizar compra
let traerCarrito = document.getElementById ("carritoRenderizado");

let botonFinalizar = document.getElementById ("botonFinalizar");

botonFinalizar.addEventListener ("click", () =>{
    carrito.length === 0 && Swal.fire('El carrito está vacío.');
    carrito.length !== 0 && Swal.fire({
            title: 'Gracias por tu compra!',
            text: 'Nos vamos a estar contactando con vos para coordinar la entrega.',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/3394/3394009.png',
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Custom image',
            })
        localStorage.clear();
        carrito = []; 
        traerCarrito.innerHTML = "";
        });


    

//FETCH

const textoPlantas = document.getElementById ("textoPlantas");

fetch("./data.json")
    .then (response => response.json ())
    .then (data => {
        data.forEach (item =>{
            const p = document.createElement ("p");
            p.innerHTML = `
            <h3><center>${item.subtitulo}</center></h3>
            <p><center>${item.texto}</center></p>
            <hr>
            `;

        textoPlantas.append (p);
    });

});


