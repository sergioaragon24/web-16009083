var canvas;
var context;
var posX = 50;
var posY = 50;
var botonag;
var botonbor;
var botonbor2;
var selectagreger;
var selectput;
var aaragrager;
var arrdestino;


function init() {
    /* canvas*/
    canvas = document.getElementById('area-dibujo');
    context = canvas.getContext('2d');
    dibujarCirculo();
    window.addEventListener("keydown", moverImagen, false);

    /* agregar elemento*/
    botonag = document.getElementById('botagre');
    selectagreger = document.getElementById('text1');
    botonag.onclick =  addElement;


    /* Eliminar elemento */
    botonbor2 = document.getElementById('btnMover2');
    selectput = document.getElementById('text1');
    botonbor2.onclick = deleteElement;
    botonbor = document.getElementById('btnConsulta')
    botonbor.onclick = deleteElement1;

    dibujarArreglo(aaragrager, selectagreger);
    dibujarArreglo(arrdestino,selectputo);

}
function addElement(){
   // let valorAgregar = selectput.value;
   let valorAgregar = selectagreger.value;
    if (valorAgregar != "") {
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(valorAgregar) );
        opt.value = valorAgregar;
        selectput.appendChild(opt);
    }
}
function deleteElement(){
    selectagreger.options[selectagreger.selectedIndex] = null;
}
function deleteElement1(){
    selectput.options[selectputo.selectedIndex] = null;
}
function dibujarArreglo(arreglo, select) {
    borrarSelect(select);
    arreglo.forEach(x => {
        let option = document.createElement("option");
        option.text = x;
        select.add(option);
    });
}
function borrarSelect(elemento) {
    while (elemento.options.length > 0) {                
        elemento.remove(0);
    }   
}
function moverDatos() {
    arrdestino.push(aaragrager[selectagreger.selectedIndex]);
    aaragrager.splice(selectagreger.selectedIndex, 1);
    dibujarArreglo(aaragrager, selectagreger);
    dibujarArreglo(arrdestino,selectputo);
}

function dibujarCirculo() {
    context.clearRect(0,0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(posX, posY, 10, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "#ffcc66";
    context.fill();
}
function moverImagen(e) {
    let buffer = 6;
    switch (e.keyCode) {
        case 37 : //izquierdo
            if (posX > 0) {
              posX = posX - buffer;
            }
            break;
            
        case 38 : //arriba
            if(posY > 0){
            posY = posY - buffer;
            }
            break;
        case 39 : //derecho
            if (posX < canvas.width) {
              posX = posX + buffer;
            }
            break;
        case 40 ://abajo
            if (posY < canvas.height) {
                posY = posY + buffer;             
            }
        break;
    }
    dibujarCirculo();
}



document.onload = init();
