// Google


function myFunction() {
    alert("Page is loaded");
  }

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-55536999-1');

(function () {
var scriptProto = 'https:' == document.location.protocol ? 'https://' : 'http://';
var script = document.createElement('script');
script.type = 'text/javascript';
script.async = true;
script.src = scriptProto+'js.cdn.yieldkit.com/v1/js?api_key=a00e838a1e05dea97a5b0b17f02168e6&site_id=54e8bb60e4b01069e25e5ee8';
(document.getElementsByTagName('head')[0] || document.body).appendChild(script);
})();

// Generieren
function checksum(inp){var i=1;var cs=0;for (var j=0;j<inp.length;j++) {switch (i) {case 1:cs += inp.substring(j,j+1)*7;i++;break;case 2:cs += inp.substring(j,j+1)*3;i++;break;case 3:cs += inp.substring(j,j+1)*1;i = 1;break;}}cs = cs % 10;return cs;}
function TwoDig(inp){return ((inp<10)?'0':'')+inp;}
function randd(contr,slice){var xND = '';if (slice == 0) {xND += TwoDig(Math.floor(Math.random()*100));xND += '' + TwoDig(Math.floor(Math.random()*13));xND += '' + TwoDig(Math.floor(Math.random()*32));} else {}contr.value = xND;}
function rand(contr,count){contr.value = '';for (var i=1;i<=count;i++) {contr.value += Math.floor(Math.random()*10);}}
function check(){var xp1 = document.pa.p1.value;var xp2 = document.pa.p2.value;var xp3 = document.pa.p3.value;var xp4 = document.pa.p4.value;var xp5 = document.pa.p5.value;document.pa.ewk.value = xp1.substring(0,4);document.pa.lfd.value = xp1.substring(4,9);document.pa.nat.value = xp2;document.pa.geb.value = xp3.substring(0,6);document.pa.abl.value = xp4.substring(0,6);if ((xp1.length==10) && (xp2.length==1) && (xp3.length==7) && (xp4.length==7) && (xp5.length==1)) {var xc1 = checksum(xp1.substring(0,xp1.length-1));var xc3 = checksum(xp3.substring(0,xp3.length-1));var xc4 = checksum(xp4.substring(0,xp4.length-1));var xca = checksum(xp1+xp3+xp4);if ((xc1 == xp1.substring(xp1.length-1,xp1.length)) && (xc3 == xp3.substring(xp3.length-1,xp3.length)) && (xc4 == xp4.substring(xp4.length-1,xp4.length)) && (xca == xp5)) { alert('Die Ausweisnummer ist gültig!');} else {alert('Die Ausweisnummer ist nicht gültig!');}} else {alert('Es ist ein Fehler aufgetreten!');}}
function generate(){var ewk = document.pa.ewk.value;var lfd = document.pa.lfd.value;var nat = document.pa.nat.value;var geb = document.pa.geb.value;var abl = document.pa.abl.value;if ((ewk.length==4) && (lfd.length==5) && (nat.length==1) && (geb.length==6) && (abl.length==6)) {var xp1 = ewk+lfd+checksum(ewk+lfd);var xp2 = nat;var xp3 = geb + checksum(geb);var xp4 = abl + checksum(abl);var xp5 = checksum(xp1+xp3+xp4);document.pa.p1.value = xp1;document.pa.p2.value = xp2;document.pa.p3.value = xp3;document.pa.p4.value = xp4;document.pa.p5.value = xp5;} else {alert('Es ist ein Fehler aufgetreten!');}}
function clearInp(){with (document.pa) {p1.value = '';p2.value = 'D';p3.value = '';p4.value = '';p5.value = '';ewk.value = '';lfd.value = '';nat.value = 'D';geb.value = '';abl.value = '';}}
function getDOM(year,month) {if (month==2) { if (year % 4 == 0) { return Math.floor(Math.random()*29)+1; } else { return Math.floor(Math.random()*28)+1; } }if (month % 2 == 1) { return Math.floor(Math.random()*31)+1; } else { return Math.floor(Math.random()*30)+1; }}
function RandDOB(contr){var xCD = new Date();var xCY = xCD.getYear();var xCM = xCD.getMonth();var xCD = xCD.getDate();var xYrs = prompt('Gebe ein Alter ein:','18');if (xYrs == null) { return false; }var xNY = xCY - xYrs;var xCDT = new Date(xNY,xCM,xCD,0,0,0);var xNM = Math.floor(Math.random()*12)+1;var xND = getDOM(xNY,xNM);var xNDT = new Date(xNY,xNM-1,xND,0,0,0);if (xNDT>xCDT) { xNY--; }xNY = xNY % 100;contr.value = ((xNY<10)?'0':'')+xNY+((xNM<10)?'0':'')+xNM+((xND<10)?'0':'')+xND; var fory = 0; var form = 0; var ford = 0; if (xNY < 10){fory = 200;} else {fory = 19;} if (xNM < 10){form = 0;} else {form = "";} if (xND < 10){ford = 0;} else {ford = "";} document.getElementById('gebdatlabel').innerHTML = ("Geburtsdatum: " + ford + xND + "." + form + xNM + "." + fory + xNY)}


function RandDOE(contr) {
  var xCD = new Date();
  var xCY = xCD.getYear();
  var xCM = xCD.getMonth();
  var xCD = xCD.getDate();
  var xYrs = prompt('Ablaufdatum:','2024');
  if(xYrs == null)
    return
      false;
  var xNY = xCY + eval(xYrs);
  var xCDT = new Date(xNY,xCM,xCD,0,0,0);
  var xNM = Math.floor(Math.random()*12)+1;
  var xND = getDOM(xNY,xNM);
  var xNDT = new Date(xNY,xNM-1,xND,0,0,0);
  if(xNDT<xCDT)
    xNY++;
  xNY = xNY % 100;
  contr.value = ((xNY<10)?'0':'')+xNY+((xNM<10)?'0':'')+xNM+((xND<10)?'0':'')+xND;
}

function generateDirect() {
  with(document.pa){
    p1.value='0448270256';
    p3.value='9406085';
    p4.value='4412164';
    p5.value='4';
  }
}
