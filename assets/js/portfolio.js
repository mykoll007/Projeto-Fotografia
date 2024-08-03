//Armazenando todas variaveis para a troca de cor

let botaoOff = document.getElementById('toggle-of');
let body = document.querySelector('body');
let paragrafos = document.querySelectorAll('p');
let buttons = document.querySelectorAll('button');
let footer = document.getElementById('footer-port');
let linkedin = document.getElementById('linked');
let whatsapp = document.getElementById('whatsapp');
let instagram = document.getElementById('insta');

botaoOff.addEventListener('click', function(){

    // O include verifica se contém
    if(botaoOff.src.includes("toggle_of.png")){
            //Trocando o botão
    botaoOff.src = "/assets/imgs/toggle_on.png";
        //Mudando a cor do body
        body.style.backgroundColor = "white";

        //Pegando todos os p com o forEach
        paragrafos.forEach(function(paragrafo){
            paragrafo.style.color = "black";
        })
    
        //Pegando todos os botões com o forEach
        buttons.forEach(function(button){
            button.style.backgroundColor = "black";
            button.style.color = "white";
        })
    
        //Trocando o footer
        footer.style.backgroundColor = "white";
    
        //Trocando os icones
        linkedin.src = "/assets/imgs/Linkedin dark.png";
        whatsapp.src = "/assets/imgs/Whatsapp dark.png";
        instagram.src = "/assets/imgs/Instagram dark.png";
    } else {

         //Trocando o botão
        botaoOff.src = "/assets/imgs/toggle_of.png";
        //Mudando a cor do body
        body.style.backgroundColor = "black";

        //Pegando todos os p com o forEach
        paragrafos.forEach(function(paragrafo){
        paragrafo.style.color = "white";
        })

        //Pegando todos os botões com o forEach
        buttons.forEach(function(button){
        button.style.backgroundColor = "white";
        button.style.color = "black";
        })

        //Trocando o footer
        footer.style.backgroundColor = "black";

        //Trocando os icones
        linkedin.src = "/assets/imgs/LinkedIn.png";
        whatsapp.src = "/assets/imgs/Whatsapp.png";
        instagram.src = "/assets/imgs/Instagram.png";
    }})





