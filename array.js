const imagenesProductos = [
    "https://http2.mlstatic.com/D_NQ_NP_2X_619126-MLA50232132766_062022-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_847906-MLA49763193559_042022-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_991401-MLA31351342525_072019-O.webp"
];
const nombreProductos = ["tv", "celular", "pc"];

imagenesProductos.push("https://http2.mlstatic.com/D_NQ_NP_700097-MLA49753219457_042022-O.webp");
nombreProductos.push("Bufanda ");
imagenesProductos.push("https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/10/starbucks-scaled.jpg?fit=2560%2C1650&quality=50&strip=all&ssl=1");
nombreProductos.push("Frappuccino");

/**
 * Agrega productos a la app y en caso de no recibir nada 
 * notifica el error
 */
function agregarProducto() {
    let imgProducto = document.querySelector("#entrada-url").value;
    let tipoProducto = document.querySelector("#entrada-tipo-producto").value;
    if (imgProducto && tipoProducto) {
        console.log(imgProducto, tipoProducto);
        imagenesProductos.push(imgProducto);
        nombreProductos.push(tipoProducto);
        generarPagina();
    } else {
        alert("Error! - Agregue link de la imagen y el tipo de producto");
    }
}

/**
 * Genera el contenido para productos de la pagina
 */
function generarPagina() {
    document.querySelector("#contenedor").innerHTML = ``;
    for (let i = 0; i < imagenesProductos.length; i++) {
        document.querySelector("#contenedor").innerHTML += `
            <div style="margin:20px;" id="contenedor-producto${i}">        
              <h3 >producto ${nombreProductos[i]}</h3>
            </div>
        `;
        agregarImagen(i);

    }
}
 
/**
 * Agrega la imagen en el contenedor correspondiente
 * @param {Number} i posicion correspondiente del contenedor
 * para la imagen
 */
function agregarImagen(i) {
    document.querySelector(`#contenedor-producto${i}`).innerHTML += `
        <img  height="250px" width="auto" src="${imagenesProductos[i]}" alt"img_${i}}">
    `;
}

generarPagina();