const card = document.querySelector(".card");
const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    card.classList.toggle("ativo");
});