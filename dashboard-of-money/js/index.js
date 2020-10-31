// let JSON = require('../../JSON/economia.awesomeapi.com.br.json');
let ajax = new XMLHttpRequest()

// Marcando elementos HTML
const mainDisplay = document.querySelector('.list')

// console.log(USD.bid, USDT.bid, CAD.bid, AUD.bid, EUR.bid, GBP.bid)

// ajax.open("GET", "../JSON/economia.awesomeapi.com.br.json");
// ajax.responseType = "json";

// // ajax.send()
// ajax.addEventListener("readystatechange", function() {
//    if (ajax.readyState === 4 && ajax.status == 200 || 306) {

//       var JSON = ajax.response;

//       var USD = JSON.USD;
//       var USDT = JSON.USDT;
//       var CAD = JSON.CAD;
//       var AUD = JSON.AUD;
//       var EUR = JSON.EUR;
//       var GBP = JSON.GBP;
//       var ARS = JSON.ARS;
//       var JPY = JSON.JPY;
//       var CHF = JSON.CHF;
//       var CNY = JSON.CNY;
//       var BTC = JSON.BTC;
//       var ETH = JSON.ETH;

//       // console.log(CAD);

//       let arr = [USD, USDT, CAD, AUD, EUR, GBP, ARS, JPY, CHF, CNY, BTC, ETH];
//       for (let i = 0; i < arr.length; i++) {
//          mainDisplay.innerHTML += `
//             <div class="border" id="${i}">
//             ${arr[i].name}: <span>R$ ${Number(arr[i].bid).toFixed(2).replace(".", ",")}<span> </div><br>`
//       }

//    } else {
//       alert('deu ruim!')
//    }
// })

// Alternativo para teste