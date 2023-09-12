const img = document.querySelector('img');
const botoes = document.querySelectorAll('button');
let intervalId = null;
let autoAtivo = false;
let cont = 0;
for (let botao of botoes){
    botao.addEventListener("click", () => {
        if (botao.classList.contains("automatico")){
        if (autoAtivo) {
            clearInterval(intervalId);
            autoAtivo = false;
        }else{
            autoAtivo = true;
            intervalId = setInterval(() => {
                if (cont === 0) {
                    img.setAttribute("src", "./img/vermelho.png");
                } else if (cont === 1) {
                    img.setAttribute("src", "./img/amarelo.png");
                } else if (cont === 2) {
                    img.setAttribute("src","./img/verde.png");
                } 
                cont++;
                if(cont === 3) {
                    cont = 0;
                }
            },1000);
        }
    }
    else {
        img.setAttribute("src", `./img/${botao.id}.png`)
    }        
});
}



    
