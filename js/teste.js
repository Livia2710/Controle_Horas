document.querySelectorAll(".status").forEach(el => {
    const texto = el.textContent.trim();
  
    if (texto === "Pendente") {
      el.classList.add("pendente");
    } else if (texto === "Validado") {
      el.classList.add("validado");
    }
  });