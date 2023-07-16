const carrito = document.querySelector('.main-carrito-compras');

const menuopcion = document.querySelector('.menu-opcion');

const main_opciones = document.querySelector('.main-opciones-lista')
const cardscontainer = document.querySelector('.Cards');


menuopcion.addEventListener('click',toggleMenuOpciones);

console.log(main_opciones.classList[1]);

function toggleMenuOpciones(){
    main_opciones.classList.toggle('inactive');
    // if(!main_opciones.classList[1]){
    //     main_opciones.classList.toggle('inactive'); 
    // }

    
}



//RUTINA PARA LA CREACION DE ARTICULOS

//creacion de articulos en el main
//creamos un arreglo para ir almacenando los distintos productos
const productlist = [];

//despues para añadir los articulos al arreglo, con la funcion push añadimos los distintos objetos en este caso serian los articulos

productlist.push({
    name: 'hamburguesa bacon',
    price: '90.00',
    imagen: 'https://www.folhadealphaville.com.br/images/articles/3963/b2ap3_medium_bullguer-lanca-red-neck-bacon-duplamente-defumado-geek-publicitario.jpg'
});

productlist.push({
    name: 'hamburguesa BBQ',
    price: '120.00',
    image: 'https://tse3.mm.bing.net/th?id=OIP.E_wlXSgmQr7P-1yztndGGQHaE8&pid=Api&P=0&h=180'
});


productlist.push({
    name:'hamburguesa guacamole',
    price: '190',
    image: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/13d252b964447e64a64e17a6f33c069a.jpg'
});


window.onload = renderProducts(productlist);

function renderProducts(product){
    //producto es la variable de referencia la cual representa el arreglo la cual servira como indice
    for(product of productlist){
        //una vez comienza a correr la funcion se tiene que comenzar a asignar los valores que tendra cada variable
        //dependiendo el tipo de etiqueta se crea una constante para el tipo variable

        //HAY QUE TENER EN CUENTA QUE AQUI ES DONDE SE ESTRUCTURA EL CONTENDOR CON LA INFORMACION QUE LE VAYAMOS A AÑADIR
        //AQUI SE VA ESTRUCTURAR UNA TARJETA DE UN ARTICULO PARA LA PANTALLA INICIAL 
        //POR LO QUE CUALQUIER ETIQUETA SE TIENE QUE DECLARAR Y PONER NOMBRE


        //primero se declara el contenedor que contendra la informacion de la tarjeta
        const productcard = document.createElement('div')
        //metodo para ponerle el nombre
        productcard.classList.add('product-card')

        //constante de la creacion de la imagen
        const productimg = document.createElement('img')
        //metodo para ponerle nombre
        productimg.classList.add('src', product.image)
  
        //contenedor de otro contendor el cual contendra la informacion del producto
        const productinfo = document.createElement('div')
        //nombre de la clase
        productinfo.classList.add('productinfo')

        //contenedor de div
        const divinfo = document.createElement('div')
        //nombre de clase
        divinfo.classList.add('divinfo');
        
        //constante para el precio
        const productprice = document.createElement('p')
        //nombre del parrafo
        productprice.classList.add('parrafo-precio')
        //metodo para añadirle el precio de la variable
        productprice.innerText= '$' + product.precio;

        //constante para el nombre del articulo
        const productname = document.createElement('p');
        //metodo para ponerle nombre
        productname.classList.add('parrafo-nombre');
        //metodo para ponerle el nombre de la variable
        productname.innerText = product.name;


        //con el metodo append asignamos como hijos a la etiqueta padre
        productinfo.append(productprice, productname);

        //contendor figure
        const productfigure = document.createElement('figure')
        //nombre de figure
        productfigure.classList.add = 'figure'

        //añadir imagen
        productimgcard = document.createElement('img')
        //metodo para poner la ruta de la imagen
        productimgcard.src = './assets/bt_add_to_cart.svg';

        //metodo para meter a lo hijos a los padres
        cardscontainer.appendChild(productcard);
        
             
        productcard.appendChild(productinfo);

        productfigure.appendChild(productimgcard);
        productcard.appendChild(productimg);
        productinfo.appendChild(divinfo);
        productinfo.appendChild(productfigure);

        

        //NOTA AQUI SOLO SE DECLARAN E INICIALIZAN LAS VARIABLES QUE NO SE INICIALIZAN EN EL HTML

        // <!--0 <div class="product-card">
        // <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
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