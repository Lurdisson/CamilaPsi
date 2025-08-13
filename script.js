// Animação ao rolar a página
document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// Formulário simples
document.getElementById("contatoForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  e.target.reset();
});
