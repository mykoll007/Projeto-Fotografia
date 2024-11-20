//Armazenando todas variaveis para a troca de cor

let botaoOff = document.getElementById('toggle-of');
let body = document.querySelector('body');
let paragrafos = document.querySelectorAll('p');
let buttons = document.querySelectorAll('button');
let footer = document.getElementById('footer-port');
let linkedin = document.getElementById('linked');
let whatsapp = document.getElementById('whatsapp');
let instagram = document.getElementById('insta');

botaoOff.addEventListener('click', function () {
    // Verificar se já está no tema claro ou escuro para evitar mudanças repetidas
    if (botaoOff.src.includes("toggle_of.png")) {
        // Alterar para o tema claro (se ainda não estiver no tema claro)
        if (body.style.backgroundColor !== "white") {
            botaoOff.src = "/assets/imgs/toggle_on.png";
            body.style.backgroundColor = "white";

            paragrafos.forEach(function (paragrafo) {
                paragrafo.style.color = "black";
            });

            buttons.forEach(function (button) {
                button.style.backgroundColor = "black";
                button.style.color = "white";
            });

            footer.style.backgroundColor = "white";

            // Alterar fundo de #footer-port para transparente no tema claro
            const footerPort = document.getElementById('footer-port');
            footerPort.style.backgroundColor = "transparent";  // fundo transparente

            linkedin.src = "/assets/imgs/Linkedin dark.png";
            whatsapp.src = "/assets/imgs/Whatsapp dark.png";
            instagram.src = "/assets/imgs/Instagram dark.png";

            // Alterar fundo das partículas
            const particles = document.getElementById('particles-js');
            particles.classList.remove('dark');
            particles.classList.add('light');

            // Alterar partículas para tema claro com velocidade reduzida
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 50,
                        "density": { "enable": true, "value_area": 600 }
                    },
                    "color": { "value": "#000000" },
                    "shape": {
                        "type": "circle",
                        "stroke": { "width": 0, "color": "#000000" },
                        "polygon": { "nb_sides": 5 }
                    },
                    "opacity": { "value": 0.5, "random": false },
                    "size": { "value": 3, "random": true },
                    "line_linked": { "enable": true, "distance": 150, "color": "#000000" },
                    "move": { "enable": true, "speed": 1 } // Velocidade reduzida
                }
            });
        }
    } else {
        // Alterar para o tema escuro (se ainda não estiver no tema escuro)
        if (body.style.backgroundColor !== "black") {
            botaoOff.src = "/assets/imgs/toggle_of.png";
            body.style.backgroundColor = "black";

            paragrafos.forEach(function (paragrafo) {
                paragrafo.style.color = "white";
            });

            buttons.forEach(function (button) {
                button.style.backgroundColor = "white";
                button.style.color = "black";
            });

            footer.style.backgroundColor = "black";

            // Alterar fundo de #footer-port para transparente no tema escuro
            const footerPort = document.getElementById('footer-port');
            footerPort.style.backgroundColor = "transparent";  // fundo transparente

            linkedin.src = "/assets/imgs/LinkedIn.png";
            whatsapp.src = "/assets/imgs/Whatsapp.png";
            instagram.src = "/assets/imgs/Instagram.png";

            // Alterar fundo das partículas
            const particles = document.getElementById('particles-js');
            particles.classList.remove('light');
            particles.classList.add('dark');

            // Alterar partículas para tema escuro com velocidade reduzida
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 50,
                        "density": { "enable": true, "value_area": 600 }
                    },
                    "color": { "value": "#ffffff" },
                    "shape": {
                        "type": "circle",
                        "stroke": { "width": 0, "color": "#000000" },
                        "polygon": { "nb_sides": 5 }
                    },
                    "opacity": { "value": 0.5, "random": false },
                    "size": { "value": 3, "random": true },
                    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff" },
                    "move": { "enable": true, "speed": 1 } // Velocidade reduzida
                }
            });
        }
    }
});











