document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
        // Recolhe o menu
        toggleMenu();
    });
});

function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Exibição do Modal
function showModal() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    // Fechar o modal ao clicar no "X"
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fechar o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Adicione esta função para chamar o modal quando o formulário for enviado com sucesso
function onFormSubmit() {
    // Lógica de envio do formulário aqui

    // Exibir o modal de mensagem enviada
    showModal();
}
