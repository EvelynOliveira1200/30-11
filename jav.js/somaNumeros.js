

const btn_soma = document.getElementById("calcular");

btn_soma.addEventListener("click", function soma(){
    const numero1 = Number(document.getElementById("num1").value);
    const numero2 = Number(document.getElementById("num2").value);
    const total = document.getElementById("total");

    const somar = numero1 + numero2;

    total. textContent = somar;
})



