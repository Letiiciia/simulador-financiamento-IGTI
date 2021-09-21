let valorInicial = 200000;
let prazoInicial = 20;
let jurosInicial = 0.08;

let valor = (document.getElementById("valor").value = valorInicial);
let prazo = (document.getElementById("prazo").value = prazoInicial);
let juros = (document.getElementById("juros").value = jurosInicial);

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();

  valor = document.getElementById("valor").value;
  prazo = document.getElementById("prazo").value;
  juros = parseFloat(document.getElementById("juros").value);

  let prazoTotalMeses = prazo * 12;
  let jurosAoMes = Math.pow(1 + juros, 1 / 12) - 1;

  addInformacoesTabela(valor, prazoTotalMeses, jurosAoMes);

  let prazoMeses = (document.getElementById("prazoMes").value = prazoTotalMeses);
  let juroMes = (document.getElementById("juroMes").value = jurosAoMes);
  let jurosAcumulados = document.getElementById("jurosAcumulados").value = jurosAcumulado();

  console.log(valor);
  console.log(prazoMeses);
  console.log(juroMes);
  console.log(jurosAcumulados);

  var testeReal = 200000;
  var moeda = testeReal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  console.log(moeda);
});

function addInformacoesTabela(valor, prazoTotalMeses, jurosAoMes) {
  let tbody = document.getElementById("tbody");
  tbody.innerText = "";
  for (let i = 0; i < 5; i++) {
    let tr = tbody.insertRow();

    let td_pretacao = tr.insertCell();
    let td_amortizacao = tr.insertCell();
    let td_juros = tr.insertCell();
    let td_total = tr.insertCell();

    let amortizacao = valor / prazoTotalMeses;
    let juros = (valor - amortizacao * i) * jurosAoMes;

    let amortizacaoCalculo =  (valor / prazoTotalMeses).toFixed(2);
    let jurosCalculo = parseFloat((valor - amortizacao * i) * jurosAoMes).toFixed(2);
    let totalCalculo = parseFloat(amortizacao + juros).toFixed(2);
    
    td_pretacao.innerText = i + 1;
    td_amortizacao.innerText = formatarValor(amortizacaoCalculo);
    td_juros.innerText = formatarValor(jurosCalculo);
    td_total.innerText = formatarValor(totalCalculo);
  }
}

function jurosAcumulado() {
  let prazoTotalMeses = prazo * 12;
  let valor = document.getElementById("valor").value;
  let juroMes = document.getElementById("juroMes").value;
  let amortizacao = (valor / prazoTotalMeses);


  let jurosAcumulado = 0;

  for(let i = 0; i < prazoTotalMeses; i++){
    jurosAcumulado += parseFloat((valor - amortizacao * i) * juroMes);
  }
 
  return formatarValor(jurosAcumulado);
}

function formatarValor (valor) {
  return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(valor);
}