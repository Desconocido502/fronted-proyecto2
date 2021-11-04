const monster = document.getElementById('monster');
const inputNombre = document.getElementById('input-nombre');
const inputGenero = document.getElementById('input-genero');
const inputUserName = document.getElementById('input-username');
const inputemail = document.getElementById('input-email');
const inputClave = document.getElementById('input-clave');
const body = document.querySelector('body');
const anchoMitad = window.innerWidth / 2;
const altoMitad = window.innerHeight / 2;
let seguirPunteroMouse = true;

body.addEventListener('mousemove', (m) => {
    if (seguirPunteroMouse) {
        if (m.clientX < anchoMitad && m.clientY < altoMitad) {
            monster.src = "img/idle/2.png";
        } else if (m.clientX < anchoMitad && m.clientY > altoMitad) {
            monster.src = "img/idle/3.png";
        } else if (m.clientX > anchoMitad && m.clientY < altoMitad) {
            monster.src = "img/idle/5.png";
        } else {
            monster.src = "img/idle/4.png";
        }
    }
})

inputNombre.addEventListener('focus',()=>{
    seguirPunteroMouse = false;
})

inputNombre.addEventListener('blur',()=>{
    seguirPunteroMouse = true;
})

inputNombre.addEventListener('keyup',()=>{
    let nombre = inputNombre.value.length;
    if(nombre >= 0 && nombre<=5){
        monster.src = 'img/read/1.png';
    }else if(nombre >= 6 && nombre<=14){
        monster.src = 'img/read/2.png';
    }else if(nombre >= 15 && nombre<=20){
        monster.src = 'img/read/3.png';
    }else{
        monster.src = 'img/read/4.png';
    }
})

inputGenero.addEventListener('focus',()=>{
    seguirPunteroMouse = false;
})

inputGenero.addEventListener('blur',()=>{
    seguirPunteroMouse = true;
})

inputGenero.addEventListener('keyup',()=>{
    let genero = inputGenero.value.length;
    if(genero >= 0 && genero<=5){
        monster.src = 'img/read/1.png';
    }else if(genero >= 6 && genero<=14){
        monster.src = 'img/read/2.png';
    }else if(genero >= 15 && genero<=20){
        monster.src = 'img/read/3.png';
    }else{
        monster.src = 'img/read/4.png';
    }
})

inputUserName.addEventListener('focus',()=>{
    seguirPunteroMouse = false;
})

inputUserName.addEventListener('blur',()=>{
    seguirPunteroMouse = true;
})

inputUserName.addEventListener('keyup',()=>{
    let username = inputUserName.value.length;
    if(username >= 0 && username<=5){
        monster.src = 'img/read/1.png';
    }else if(username >= 6 && username<=14){
        monster.src = 'img/read/2.png';
    }else if(username >= 15 && username<=20){
        monster.src = 'img/read/3.png';
    }else{
        monster.src = 'img/read/4.png';
    }
})

inputemail.addEventListener('focus',()=>{
    seguirPunteroMouse = false;
})

inputemail.addEventListener('blur',()=>{
    seguirPunteroMouse = true;
})

inputemail.addEventListener('keyup',()=>{
    let email = inputemail.value.length;
    if(email >= 0 && email<=5){
        monster.src = 'img/read/1.png';
    }else if(email >= 6 && email<=14){
        monster.src = 'img/read/2.png';
    }else if(email >= 15 && email<=20){
        monster.src = 'img/read/3.png';
    }else{
        monster.src = 'img/read/4.png';
    }
})

inputClave.addEventListener('focus',()=>{
    seguirPunteroMouse = false;
    let cont = 1;
    const cubrirOjo = setInterval(() => {
        monster.src = 'img/cover/'+cont+'.png';
        if(cont < 8){
            cont++;
        }else{
            clearInterval(cubrirOjo);
        }
    }, 60);
})

inputClave.addEventListener('blur',()=>{
    seguirPunteroMouse = true;
    let cont = 7;
    const descubrirOjo = setInterval(() => {
        monster.src = 'img/cover/'+cont+'.png';
        if(cont > 1){
            cont--;
        }else{
            clearInterval(descubrirOjo);
        }
    }, 60);
})

