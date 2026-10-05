let imagemAtual = 0;
const slides = document.querySelectorAll('.banner-slide');     
const totalSlides = slides.length;     
const intervaloTempo = 3000; // Tempo de rotação automática (3 segundos)


let cronometro;
function mostrarSlide(indice) {
slides[imagemAtual].classList.remove('ativa');
if (indice >= totalSlides)
{imagemAtual = 0;

} else if (indice < 0) {
    imagemAtual = totalSlides - 1;
} else {  
    imagemAtual = indice;
}

slides[imagemAtual].classList.add('ativa');
}     function mudarSlide(direcao) {
    mostrarSlide(imagemAtual + direcao);
    resetarCronometro();
} 

function iniciarCronometro() {
    
cronometro = setInterval(() => {

mostrarSlide(imagemAtual + 1);}, intervaloTempo);

}

function resetarCronometro() {
clearInterval(cronometro);

iniciarCronometro();
} 

iniciarCronometro(); 