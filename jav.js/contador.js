const incrementar = document.getElementById("increment");
const decrementar = document.getElementById("decrement");
const reset = document.getElementById("reset");
let count = 0;

incrementar.addEventListener("click", function(){
    let valor = document.getElementById("valor");
    count++;
    valor.textContent = count;


})
decrementar.addEventListener("click", function(){
    let valor = document.getElementById("valor");
    count--;
    valor.textContent = count;
    if(count<0){
        count = 0;
    }
    valor.textContent = count;
})

reset.addEventListener("click", function(){
    let valor = document.getElementById("valor");
    count = 0;
    valor.textContent = count;

})