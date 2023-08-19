const carrito = document.querySelector('.main-carrito-compras');
const menuopcion = document.querySelector('.menu-opcion');
const main_opciones = document.querySelector('.main-opciones-lista')
const cardscontainer = document.querySelector('.cards');
const btncarritoproducts = document.querySelector('.carrito-compras'); 
const contadorproductos = document.querySelector('.compras-contador-productos');
const cuadro_carrito = document.querySelector('.main-carrito-lista');
const divcarritocuadro = document.querySelector('.carrito-lista-products');
const tachacarrito = document.querySelector('.carrito-lista-tacha');
const contadorcarrito = document.querySelector('.compras-contador-productos');
const modalCarritoNav = document.querySelector('.nav-container-modal');
const tachadetalles = document.querySelector('.descripcion-cabecera-tacha');
const modaldetalles = document.querySelector('.modal-producto-detalle');
const productodetalles = document.querySelector('.main-producto-detalles');
//importante recordar que existe el asincronismo. Por que habra funciones o eventos que se tienen que ejecutar o mandar llamar en lugares especificos para que los valores o propiedades no generan problemas.




//RUTINA PARA LA CREACION DE ARTICULOS

//creacion de articulos en el main
//creamos un arreglo para ir almacenando los distintos productos
const productlist = [];

//despues para añadir los articulos al arreglo, con la funcion push añadimos los distintos objetos en este caso serian los articulos

productlist.push({
    name: 'HAMBURGUESA BACON',
    price: '90.00',
    image: 'https://www.folhadealphaville.com.br/images/articles/3963/b2ap3_medium_bullguer-lanca-red-neck-bacon-duplamente-defumado-geek-publicitario.jpg',
    detail: 'Una hamburguesa con carne de res, lechuga, tomate, cebolla, pan blando, pepinillos'
});

productlist.push({
    name: 'HAMBURGUESA BBQ',
    price: '120.00',
    image: 'https://tse3.mm.bing.net/th?id=OIP.E_wlXSgmQr7P-1yztndGGQHaE8&pid=Api&P=0&h=180',
    detail: 'Una hamburguesa con carne de res, lechuga, tomate, cebolla, pan blando, pepinillos'
});


productlist.push({
    name:'HAMBURGUESA GUACAMOLE',
    price: '190',
    image: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/13d252b964447e64a64e17a6f33c069a.jpg',
    detail: 'Una hamburguesa con carne de res, lechuga, tomate, cebolla, pan blando, pepinillos'
});
productlist.push({
    name:'HAMBURGUESA GUACAMOLE',
    price: '190',
    image: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/13d252b964447e64a64e17a6f33c069a.jpg',
    detail: 'Una hamburguesa con carne de res, lechuga, tomate, cebolla, pan blando, pepinillos'
});


//La funcion la ponemos despues para que no haya problemas con la renderizacion de las cosas
window.onload = renderProducts(productlist);
//funcion para las opciones de la lista, para dispositivos mobiles
menuopcion.addEventListener('click',toggleMenuOpciones);

//abrir el menu del carrito
btncarritoproducts.addEventListener('click', togglemenucarrito);

tachacarrito.addEventListener('click', togglemenucarrito);

modalCarritoNav.addEventListener('click', togglemodalcarrito);

tachadetalles.addEventListener('click', closeDetailProduct);

modaldetalles.addEventListener('click', closeDetailProduct);



function togglemodalcarrito(){
    cuadro_carrito.classList.toggle('inactive');
    modalCarritoNav.classList.toggle('inactive');
}
// //funcion para cerrar el cuadro del carrito de compras
// tachacarrito.addEventListener('click', tachacarritofun);

function toggleMenuOpciones(){
    main_opciones.classList.toggle('inactive');
    // if(!main_opciones.classList[1]){
    //     main_opciones.classList.toggle('inactive'); 
    // }
}
function togglemenucarrito(){
    cuadro_carrito.classList.toggle('inactive');
    modalCarritoNav.classList.toggle('inactive');
}

//funcion para mostrar los detalles de un producto
function closeDetailProduct(){
    productodetalles.classList.add('inactive');
}

//funcion para abrir los detalles de un producto
function openDetailProduct(){
    productodetalles.classList.remove('inactive');
    main_opciones.classList.add('inactive');
}




function renderProducts(product){
    //producto es la variable de referencia la cual representa el arreglo la cual servira como indice
    for(product of productlist){
        //una vez comienza a correr la funcion se tiene que comenzar a asignar los valores que tendra cada variable
        //dependiendo el tipo de etiqueta se crea una constante para el tipo variable

        //HAY QUE TENER EN CUENTA QUE AQUI ES DONDE SE ESTRUCTURA EL CONTENDOR CON LA INFORMACION QUE LE VAYAMOS A AÑADIR
        //AQUI SE VA ESTRUCTURAR UNA TARJETA DE UN ARTICULO PARA LA PANTALLA INICIAL 
        //POR LO QUE CUALQUIER ETIQUETA SE TIENE QUE DECLARAR Y PONER NOMBRE
        
        
        //INICIALIZAMOS Y DECLARAMOS LAS CONSTANTES DE LAS ETIQUETAS
        
        
        //primero se declara el contenedor que contendra la informacion de la tarjeta
        const productcard = document.createElement('div')
        //metodo para ponerle el nombre
        productcard.classList.add('product-card')
        
        //constante de la creacion de la imagen
        const productimg = document.createElement('img')
        //metodo para ponerle nombre
        productimg.src = product.image;
        productimg.addEventListener('click', openDetailProduct);
  
        //contenedor de otro contendor el cual contendra la informacion del producto
        const productinfo = document.createElement('div')
        //nombre de la clase
        productinfo.classList.add('productinfo')
        
        //contenedor de div
        const divinfo = document.createElement('div')
        //nombre de clase
        divinfo.classList.add('divinfo');
        
        //constante para el nombre del articulo
        const productname = document.createElement('p');
        //metodo para ponerle nombre
        productname.classList.add('parrafo-nombre');
        //metodo para ponerle el nombre de la variable
        productname.innerText = product.name;
        
        //constante para el precio
        const productprice = document.createElement('p')
        //nombre del parrafo
        productprice.classList.add('parrafo-precio')
        //metodo para añadirle el precio de la variable
        productprice.innerText= '$' + product.price;
        
        
        //contendor figure
        const productfigure = document.createElement('figure')
        //nombre de figure
        productfigure.classList.add = 'figure'
        
        
        
        //añadir imagen
        productimgcard = document.createElement('img')
        //asignamos un nombre de a la etiqueta
        productimgcard.classList.add('figure-img-carrito');
        //metodo para poner la ruta de la imagen
        productimgcard.src = './assets/bt_add_to_cart.svg';

        //evento para contar la cantidad de productos del carrito    
        productimgcard.addEventListener('click', nuevoproducto);

        //resolver con metodo de filtro para encontrar los productos que se hayan seleccionado
        function nuevoproducto(){
            if(contadorcarrito.innerHTML < 999){
                let contadorgeneral = contadorcarrito.innerHTML;
                contadorgeneral++;
                contadorcarrito.innerText = contadorgeneral;
            }
            else{
                alert('Has llegado al limite de productos, no puedes agregar mas productos');
            }
        }
    

        //ASIGNAMOS LA JERARQUIA DE LAS ETIQUETAS CONTENEDORAS
        
        
        //metodo para meter a lo hijos a los padres
        //1
        cardscontainer.appendChild(productcard);
        //2
        productcard.appendChild(productimg);
        //3     
        productcard.appendChild(productinfo);
        //4
        productinfo.appendChild(divinfo);
        //5
        divinfo.appendChild(productname);
        //6
        divinfo.appendChild(productprice);
        //7
        productinfo.appendChild(productfigure);
        //8
        productfigure.appendChild(productimgcard);
        
        //NOTA AQUI SOLO SE DECLARAN E INICIALIZAN LAS VARIABLES QUE NO SE INICIALIZAN EN EL HTML
        //1
        // <!--0 <div class="product-card">
        //2
        // <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        //
        // <div class="product-info">
        //   <div>
        //     <p>$120,00</p>
        //     <p>Bike</p>
        //   </div>
        //   <figure>
        //     <img src="./icons/bt_add_to_cart.svg" alt="">
        //   </figure>
        // </div>
        // </div> -->

        //para identificar y tener un contador de cada producto que se vaya añadiendo al carrito 
        //comparamos si las imagenes son iguales se aumenta el contador para esto hacemos una condicional
        //que compare si las imagenes son iguales con su valor, hay que usar la funcion con parametros.

        
        
        
        
        
        
    }
}


// //cantidad de productos de añadidos
// console.log(productlist.length)


    