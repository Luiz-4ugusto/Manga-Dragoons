const form = document.querySelector(".formLogin");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameInput = document.getElementById("name");
const cpfInput = document.getElementById("cpf");
const loginInput = document.getElementById("login");
const dateInput = document.getElementById("date");
const alertDiv = document.getElementById("alert");
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = emailInput.value;
    const password = passwordInput.value;
    const name = nameInput.value;
    const cpf = cpfInput.value;
    const login = loginInput.value;
    const date = dateInput.value;
    
    let campos = [];

    if (email === "") campos.push("E-mail");
    if (password === "") campos.push("Senha");
    if (name === "") campos.push("Nome");
    if (cpf === "") campos.push("CPF");
    if (login === "") campos.push("Login");
    if (date === "") campos.push("Data de Nascimento");

    if (campos.length > 0) {
        alertDiv.textContent = "É necessário digitar: " + campos.join(", ") + " para prosseguir";
        alertDiv.style.display = "block"; 
    } else {
        alertDiv.style.display = "none"; 
        window.location.href = "index.HTML"; 
    }
});

document.querySelector(".button").addEventListener("click", function() {
    alertDiv.style.display = "none";
});
