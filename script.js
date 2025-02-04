let currentAudio = null; // Armazena a referência do áudio atual

function playSound(animalSound) {
    // Para o áudio atual, se houver
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reseta para o início
    }

    // Cria e toca o novo áudio
    currentAudio = new Audio(`audio/${animalSound}`);
    currentAudio.play();
}

window.onload = function () {
    // Embaralha os cards na página
    function shuffleSections() {
        const main = document.querySelector('main');
        const sections = Array.from(main.querySelectorAll('section'));

        // Algoritmo de Fisher-Yates para embaralhar
        for (let i = sections.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sections[i], sections[j]] = [sections[j], sections[i]];
        }

        // Reorganiza as sections no DOM
        sections.forEach(section => main.appendChild(section));
    }
    // Gere numero aleatorio que define o wallpaper

    const randomWallpaper = Math.floor(Math.random() * 9);
    document.body.style.backgroundImage = `url('imgs/backGround/${randomWallpaper}.jpg')`;

    // Inicializa o embaralhamento ao carregar a página
    shuffleSections();

    // Adiciona eventos de clique nas imagens
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.addEventListener("click", function () {
            const videoBanner = document.getElementById("videoBanner");
            const animalVideo = document.getElementById("animalVideo");
            const videoSource = animalVideo.querySelector("source");

            // Configura o vídeo com base no atributo alt da imagem
            videoSource.src = `videos/${this.alt.toLowerCase()}.mp4`;

            // Carrega e exibe o vídeo
            animalVideo.load();
            videoBanner.classList.remove("hidden");
        });
    });

    // Fecha o banner de vídeo ao clicar no botão
    document.getElementById("closeBanner").addEventListener("click", function () {
        const videoBanner = document.getElementById("videoBanner");
        const animalVideo = document.getElementById("animalVideo");

        videoBanner.classList.add("hidden");
        animalVideo.pause();
        animalVideo.currentTime = 0;
    });
};
    // login provisorio
    document.addEventListener("DOMContentLoaded", function() {
        const loginForm = document.getElementById("loginForm");
    
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
    
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
    
            if (username === "admin" && password === "admin") {
                alert("Login bem-sucedido!");
                document.getElementById("loginPopup").classList.add("hidden");
                document.body.classList.remove("blurred"); // Remove o efeito de blur (caso exista)
            } else {
                alert("Usuário ou senha incorretos!");
            }
            
        });
    });
    
    



