// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btn");

    btn.addEventListener("click", function() {
        const mensaje = document.getElementById("mensaje");
        mensaje.textContent = "Las tecnologías emergentes como IA y Big Data están revolucionando el campo de la Ingeniería de Sistemas.";
    });
});
