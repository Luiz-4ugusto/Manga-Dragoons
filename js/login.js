const form = document.querySelector(".formLogin");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const alertDiv = document.getElementById("alert"); 

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = emailInput.value;
    const password = passwordInput.value;
    let campos = [];

    if (email === "") {
        campos.push("usuário");
    }
    
    if (password === "") {
        campos.push("senha");
    }

    if (campos.length > 0) {
        
        alertDiv.textContent = "É necessário digitar " + campos.join(", ") + " para prosseguir";
        alertDiv.style.display = "block"; 
    } else {
        alertDiv.style.display = "none"; 
        window.location.href = "index.HTML";
    }
});


document.querySelector(".button").addEventListener("click", function() {
    alertDiv.style.display = "none";
});
