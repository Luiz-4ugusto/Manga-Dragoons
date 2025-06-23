const produtos = [
    { inputId: 'number1', 
    precoId: 'btn-minus1', 
    btnPlusId: 'btn-plus1', 
    parcialId: 'valor-parcial1', 
    preco: 22.90 },

    { inputId: 'number2', 
    precoId: 'btn-minus2', 
    btnPlusId: 'btn-plus2', 
    parcialId: 'valor-parcial2', 
    preco: 34.99 },
    
    { inputId: 'number3', 
    precoId: 'btn-minus3', 
    btnPlusId: 'btn-plus3', 
    parcialId: 'valor-parcial3', 
    preco: 23.99 },
];

const totalDisplay = document.querySelector(".valor h2");
const inputCep = document.querySelector("input[placeholder='Inserir seu CEP']");
const inputCupom = document.querySelector("input[placeholder='Inserir um cupom']");

let totalProdutos = 0;
let valorFrete = 0;
let desconto = 0;
let freteGratis = false;

const cepsPermitidos = ["8878000", "88495000", "88490000"]; 

function calcularTotalGeral() {
    let totalGeral = totalProdutos;
    
    if (freteGratis) {
        totalGeral += 0; 
    } else {
        totalGeral += valorFrete;
    }
    
    totalGeral -= desconto; 
    totalDisplay.textContent = `R$${totalGeral.toFixed(2)}`;
}


function atualizarTotalProdutos() {
    totalProdutos = 0;
    produtos.forEach(produto => {
        const quantidade = parseInt(document.getElementById(produto.inputId).value);
        totalProdutos += quantidade * produto.preco;
    });
}

function calcularFrete() {
    const cep = inputCep.value.slice(); 

    if (cepsPermitidos.includes(cep)) {
        valorFrete = 15.00;
    } else {
        valorFrete = 0;
    }
}

function aplicarCupom() {
    const cupom = inputCupom.value.toLowerCase();
    if (cupom === "dragons") {
        desconto = totalProdutos * 0.10;
        freteGratis = false;
    } else if (cupom === "fretegratis") {
        desconto = 0;
        freteGratis = true;
    } else {
        desconto = 0;
        freteGratis = false;
    }
}

produtos.forEach(produto => {
    const inputElement = document.getElementById(produto.inputId);
    const btnMinus = document.getElementById(produto.precoId);
    const btnPlus = document.getElementById(produto.btnPlusId);
    const valorParcial = document.getElementById(produto.parcialId);

    function atualizarValorParcial() {
        const quantidade = parseInt(inputElement.value);
        const valorTotal = (quantidade * produto.preco).toFixed(2);
        valorParcial.textContent = `Valor Parcial: R$${valorTotal}`;
        atualizarTotalProdutos();
        calcularTotalGeral();
    }

    btnPlus.addEventListener('click', function() {
        inputElement.value = parseInt(inputElement.value) + 1;
        atualizarValorParcial();
    });
    
    btnMinus.addEventListener('click', function() {
        if (parseInt(inputElement.value) > 1) {
            inputElement.value = parseInt(inputElement.value) - 1;
            atualizarValorParcial();
        }
    });
    
    atualizarValorParcial();
});

inputCep.addEventListener("input", function() {
    calcularFrete();
    calcularTotalGeral();
});

inputCupom.addEventListener("input", function() {
    aplicarCupom();
    calcularTotalGeral();
});


calcularTotalGeral();
