let body = document.querySelector("body")
let pessoa = document.querySelector(".imagem-pessoa")

function mudarVisual(cor, imagem) {
    pessoa.classList.add("troca-efeito")
    body.style.background = cor

    setTimeout(() => {
        pessoa.src = imagem
        pessoa.classList.remove("troca-efeito")
    }, 500);

}
