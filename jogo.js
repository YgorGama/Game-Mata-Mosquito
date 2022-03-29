let largura;
let altura;
let vidas = 1;
let time = 10;
let criarMosquitoTempo;

let nivel = location.search;
nivel = nivel.replace('?','')

if(nivel === 'normal'){
    criarMosquitoTempo = 1500;
}else if(nivel === 'dificil'){
    criarMosquitoTempo = 1000;
}else if(nivel === 'chuck_norris'){
    criarMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo(){
    altura = innerHeight;
    largura = innerWidth;
};

ajustaTamanhoPalcoJogo();

//console.log(altura, largura);

function posicaoRandomica(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()      
        if(vidas > 3){
            location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src = 'img/coracao_vazio.png';
            vidas++;
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) -90;
    let posicaoY = Math.floor(Math.random() * altura) -90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    let mosquito = document.createElement('img');
    mosquito.src = 'img/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX +'px';
    mosquito.style.top = posicaoY+'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito'
    mosquito.onclick = function (){
        this.remove()
    }

    document.body.appendChild(mosquito);
};

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0:
            return 'mosquito1';
        case 1: 
            return 'mosquito2';
        case 2: 
            return 'mosquito3'   
    }
};

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2);
    
    switch(classe){
        case 0:
            return 'ladoA';
        case 1: 
            return 'ladoB'; 
    }
}

let cronometro = setInterval(function(){
    if(time <= 0){
        clearInterval(criaMosca)
        clearInterval(cronometro);
        location.href = "vitoria.html";
    }else{
        time -= 1;
        document.getElementById('cronometro').innerHTML = time
    }
},1000)