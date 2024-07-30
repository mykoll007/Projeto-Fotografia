
let buttonGerais = document.querySelectorAll("#button-list button");

let buttonHelena = document.getElementById("button1");
let buttonFelipe = document.getElementById("button2");
let buttonCidinha = document.getElementById("button3");
let buttonMaria = document.getElementById("button4");
let buttonLaura = document.getElementById("button5");



let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");

// Primeiro botão #1
buttonHelena.addEventListener('click', function (){
    img1.src="/assets/imgs/aniversario1.jpeg";
    img2.src="/assets/imgs/aniversario2.jpeg";
    img3.src="/assets/imgs/aniversario3.jpeg";
    img4.src="/assets/imgs/aniversario4.jpeg";
    img5.src="/assets/imgs/aniversario5.jpeg";
    img6.src="/assets/imgs/aniversario6.jpeg";

    // Loop para aplicar estilo a todos os botões
    buttonGerais.forEach(function(button){
        button.style.backgroundColor = "black"
    })

    buttonHelena.style.backgroundColor = "pink";
    buttonHelena.style.border = "2px solid";
})


// Segundo botão #2
buttonFelipe.addEventListener('click', function (){



    img1.src="/assets/imgs/felipe1.jpeg";
    img2.src="/assets/imgs/felipe2.jpeg";
    img3.src="/assets/imgs/felipe3.jpeg";
    img4.src="/assets/imgs/felipe4.jpeg";
    img5.src="/assets/imgs/felipe5.jpeg";
    img6.src="/assets/imgs/felipe6.jpeg";


    // Loop para aplicar estilo a todos os botões
    buttonGerais.forEach(function(button){
        button.style.backgroundColor = "black"
    })

    buttonFelipe.style.backgroundColor = "blue";
    buttonFelipe.style.border = "2px solid";
})

// Terceiro botão #3
buttonCidinha.addEventListener('click', function (){
    img1.src="/assets/imgs/cida1.jpeg";
    img2.src="/assets/imgs/cida2.jpeg";
    img3.src="/assets/imgs/cida3.jpeg";
    img4.src="/assets/imgs/cida4.jpeg";
    img5.src="/assets/imgs/cida5.jpeg";
    img6.src="/assets/imgs/cida6.jpeg";

    // Loop para aplicar estilo a todos os botões
    buttonGerais.forEach(function(button){
        button.style.backgroundColor = "black"
    })

    buttonCidinha.style.backgroundColor = "hotpink";
    buttonCidinha.style.border = "2px solid";
})

// Quarto botão #4
buttonMaria.addEventListener('click', function (){
    img1.src="/assets/imgs/maria1.jpeg";
    img2.src="/assets/imgs/maria2.jpeg";
    img3.src="/assets/imgs/maria3.jpeg";
    img4.src="/assets/imgs/maria4.jpeg";
    img5.src="/assets/imgs/maria5.jpeg";
    img6.src="/assets/imgs/maria6.jpeg";

    // Loop para aplicar estilo a todos os botões
    buttonGerais.forEach(function(button){
        button.style.backgroundColor = "black"
    })

    buttonMaria.style.backgroundColor = "deeppink";
    buttonMaria.style.border = "2px solid";
})



// Quinto botão #5
buttonLaura.addEventListener('click', function (){
    img1.src="/assets/imgs/laura1.jpeg";
    img2.src="/assets/imgs/laura2.jpeg";
    img3.src="/assets/imgs/laura3.jpeg";
    img4.src="/assets/imgs/laura4.jpeg";
    img5.src="/assets/imgs/laura5.jpeg";
    img6.src="/assets/imgs/laura6.jpeg";

    // Loop para aplicar estilo a todos os botões
    buttonGerais.forEach(function(button){
        button.style.backgroundColor = "black"
    })

    buttonLaura.style.backgroundColor = "red";
    buttonLaura.style.border = "2px solid";
})
