const precoUnitarioElement = document.querySelector('h3[data-preco]');
const precoUnitario = parseFloat(precoUnitarioElement.getAttribute('data-preco'));

const btnMinus = document.getElementById('btn-minus');
const btnPlus = document.getElementById('btn-plus');
const inputNumber = document.getElementById('number');
const valorParcial = document.getElementById('valor-parcial');


function atualizarValorParcial() {
  const quantidade = parseInt(inputNumber.value);
  const valorTotal = (quantidade * precoUnitario).toFixed(2);
  valorParcial.textContent = `Valor Parcial: R$${valorTotal}`;
}

btnPlus.addEventListener('click', function() {
  inputNumber.value = parseInt(inputNumber.value) + 1;
  atualizarValorParcial();
});

btnMinus.addEventListener('click', function() {
  if (parseInt(inputNumber.value) > 1) {
    inputNumber.value = parseInt(inputNumber.value) - 1;
    atualizarValorParcial();
  }
});


atualizarValorParcial();
