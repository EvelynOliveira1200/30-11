const btn_Imc = document.getElementById("calcular");

btn_Imc.addEventListener("click", function imc(){
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const total = document.getElementById("total");

    const imc = (peso / (altura*altura)).toFixed(2);

    total. textContent = imc;
})