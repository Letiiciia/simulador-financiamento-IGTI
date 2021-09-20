


btn.addEventListener("Click", function(e) {
  e.preventDefault();
  const valor = document.getElementById("valor");
  const prazo = document.getElementById("prazo");
  const juros = document.getElementById("juros");
  
  const prazoMeses = document.getElementById("prazoMes");
  const juroMes = document.getElementById("juroMes");
  const jurosAcumulados = document.getElementById("jurosAcumulados");
  
  const btn = document.getElementById("btn");
  const valueValor = valor.value;
  

  console.log(valueValor);
})
