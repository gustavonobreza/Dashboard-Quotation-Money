async function getContent() {
  try {
     const response = await fetch("https://economia.awesomeapi.com.br/json/all")
     // console.log(response);
     const datas = await response.json()
     show(datas)


  } catch (error) {
     console.error('Deu ruim mano!', error)
  }
}
getContent()

function show(JSON_T) {
  const listDisplay = document.querySelector('.list');

  var USD = JSON_T.USD;
  var USDT = JSON_T.USDT;
  var CAD = JSON_T.CAD;
  var AUD = JSON_T.AUD;
  var EUR = JSON_T.EUR;
  var GBP = JSON_T.GBP;
  var ARS = JSON_T.ARS;
  var JPY = JSON_T.JPY;
  var CHF = JSON_T.CHF;
  var CNY = JSON_T.CNY;
  var BTC = JSON_T.BTC;
  var ETH = JSON_T.ETH;

  // console.log(CAD);
  function numberToReal(numero) {
     var numero = numero.toFixed(2).split('.');
     numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
     return numero.join(',');
  }

  let arrTp = [USD, USDT, CAD, AUD, EUR, GBP, ARS, CHF, JPY, BTC, ETH];
  for (var i = 0; i < arrTp.length; i++) {
     let FormattedMoney = numberToReal(Number(arrTp[i].bid));
     listDisplay.innerHTML += `
<div class="border" id="${i}">
${arrTp[i].name}: <span>${FormattedMoney}<span> </div><br>
  `
  
  }
  
}