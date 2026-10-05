document.addEventListener("DOMContentLoaded", function () {

    let imagemAtual = 0;

    const slides = document.querySelectorAll(".banner-slide");
    const botaoAnterior = document.querySelector(".seta.esquerda");
    const botaoProximo = document.querySelector(".seta.direita");

    function mostrarSlide(indice) {

        if (indice >= slides.length) {
            imagemAtual = 0;
        } else if (indice < 0) {
            imagemAtual = slides.length - 1;
        } else {
            imagemAtual = indice;
        }

        slides.forEach(function (slide) {
            slide.classList.remove("ativa");
        });

        slides[imagemAtual].classList.add("ativa");
    }

    botaoAnterior.addEventListener("click", function () {
        mostrarSlide(imagemAtual - 1);
    });

    botaoProximo.addEventListener("click", function () {
        mostrarSlide(imagemAtual + 1);
    });

});