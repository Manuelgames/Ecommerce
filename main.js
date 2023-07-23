const carrito = document.querySelector('.main-carrito-compras');

const menuopcion = document.querySelector('.menu-opcion');

const main_opciones = document.querySelector('.main-opciones-lista')
const cardscontainer = document.querySelector('.cards');

const carritoproducts = document.querySelector('.carrito-compras'); 

const figurecarrito = document.querySelector('.figure-img-carrito');


const contadorproducts = document.querySelector('.compras-contador-productos');
//RUTINA PARA LA CREACION DE ARTICULOS

//creacion de articulos en el main
//creamos un arreglo para ir almacenando los distintos productos
const productlist = [];

//despues para añadir los articulos al arreglo, con la funcion push añadimos los distintos objetos en este caso serian los articulos

productlist.push({
    name: 'HAMBURGUESA BACON',
    price: '90.00',
    image: 'https://www.folhadealphaville.com.br/images/articles/3963/b2ap3_medium_bullguer-lanca-red-neck-bacon-duplamente-defumado-geek-publicitario.jpg'
});

productlist.push({
    name: 'HAMBURGUESA BBQ',
    price: '120.00',
    image: 'https://tse3.mm.bing.net/th?id=OIP.E_wlXSgmQr7P-1yztndGGQHaE8&pid=Api&P=0&h=180'
});


productlist.push({
    name:'HAMBURGUESA GUACAMOLE',
    price: '190',
    image: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/13d252b964447e64a64e17a6f33c069a.jpg'
});

//La funcion la ponemos despues para que no haya problemas con la renderizacion de las cosas
window.onload = renderProducts(productlist);

menuopcion.addEventListener('click',toggleMenuOpciones);
// figurecarrito.addEventListerner('click',togglecarritoCompras);

// console.log(main_opciones.classList[1]);

function toggleMenuOpciones(){
    main_opciones.classList.toggle('inactive');
    // if(!main_opciones.classList[1]){
    //     main_opciones.classList.toggle('inactive'); 
    // }
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
    
    }
}


function togglecarritoCompras(){

}
