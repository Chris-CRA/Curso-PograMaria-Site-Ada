document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && subject && message) {
            alert(`Obrigada, ${name}! Sua mensagem foi enviada com sucesso.`);
            form.reset(); 
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});


