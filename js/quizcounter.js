$(document).ready(function() { /* code here */

  let dager = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
  let maaneder = ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'];
let countDownDate;
let date1 = new Date("Aug 22, 2019 18:00:00");
let date2 = new Date("Sep 05, 2019 18:00:00");
let date3 = new Date("Sep 19, 2019 18:00:00");
let date4 = new Date("Oct 03, 2019 18:00:00");
let date5 = new Date("Oct 17, 2019 18:00:00");
let date6 = new Date("Oct 31, 2019 18:00:00");
let date7 = new Date("Nov 14, 2019 18:00:00");
let today = new Date();
let now1 = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds());
let quizTab = [date1, date2, date3, date4, date5, date6, date7];
countDownDate = date1;
let quizerIgjen = 0;
let passertequizer = 0;
let countIndex = 0;
for(let i = 0; i<quizTab.length;i++){
  if(quizTab[i].getTime() <= now1.getTime()){
    countDownDate = quizTab[i+1];
    passertequizer++;
    countIndex = i+1;
} else{
  quizerIgjen++;
}
}
if(quizerIgjen > 0){
let x = setInterval(function() {
  let paagar;
  if(passertequizer>0){
  paagar = quizTab[countIndex-1];
} else{
  paagar = countDownDate;
}
let now = new Date().getTime();
let distance = countDownDate - now;
if(distance<=-21600000){
  location.reload();
}
if(distance<=0){
  countDownDate = quizTab[countIndex+1];
}

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

if(quizerIgjen !== 0){
document.getElementById("days").innerHTML = days +" <small>dager</small>";
document.getElementById("hours").innerHTML = hours + " <small>timer</small> ";
document.getElementById("minutes").innerHTML = minutes + " <small>minutter</small> ";
document.getElementById("seconds").innerHTML = seconds + " <small>sekunder</small> ";
document.getElementById("quizdate").innerHTML = dager[countDownDate.getDay()]+ " " + countDownDate.getDate() + ". " + maaneder[countDownDate.getMonth()];
if(quizerIgjen > 1){
  document.getElementById("quizleft").innerHTML = "Det er " + quizerIgjen + " quizer igjen dette semesteret";
}else{
  document.getElementById("quizleft").innerHTML = "Dette er semesterets siste quiz";
}
if(paagar.getTime()-now<=0 && paagar.getTime()-now >= -21600000){
 document.getElementById("quiznow").innerHTML = "Hva gjør du her? Det er quiz akkurat NÅ!";
}}}, 1000);}

 else{
document.getElementById("days").innerHTML = "X" +" <small>dager</small>";
document.getElementById("hours").innerHTML = "X"+ " <small>timer</small> ";
document.getElementById("minutes").innerHTML = "X" + " <small>minutter</small> ";
document.getElementById("seconds").innerHTML = "X" + " <small>sekunder</small> ";
document.getElementById("quizdate").innerHTML = "Det er ikke flere quizer dette semesteret :(";
document.getElementById("quizleft").innerHTML = "Siden blir oppdatert så fort Kronbar publiserer datoene for neste semester";

}
//Kommende quizer
if(quizerIgjen>0){
var leggTil1 = document.createDocumentFragment();
var newPassert = document.createElement('div');
newPassert.id = 'kommende';
newPassert.className += 'kommende';
newPassert.className += ' midt';
leggTil1.appendChild(newPassert);
document.getElementById('appendDates').appendChild(leggTil1);

let forste1 = true;
var leggTil = document.createDocumentFragment();

for(var i=passertequizer; i < quizTab.length; i++){
   var newDiv = document.createElement('p');
   newDiv.id = 'quiz'+i;
   newDiv.className = 'pforquiz';
   if(forste1){
     newDiv.className += ' phead';
     newDiv.innerHTML = "Kommende Quizer: "
     forste1 = false;
     i--;
   } else{
   newDiv.innerHTML = dager[quizTab[i].getDay()] + " " + quizTab[i].getDate() + ". " + maaneder[quizTab[i].getMonth()];
 }
   leggTil.appendChild(newDiv);
}
document.getElementById('kommende').appendChild(leggTil);
}

//Passerte quizer
if(passertequizer>0){
var leggTil1 = document.createDocumentFragment();
var newPassert = document.createElement('div');
newPassert.id = 'passert';
newPassert.className += 'passert';
newPassert.className += ' midt';
leggTil1.appendChild(newPassert);
document.getElementById('appendDates').appendChild(leggTil1);
let forste = true;
for(var i=0; i < passertequizer; i++){
   var newDiv = document.createElement('p');
   newDiv.id = 'quiz'+i;
   newDiv.className = 'pforquiz';

   if(forste){
     newDiv.className += ' phead';
     newDiv.innerHTML = "Passerte  Quizer: "
     forste = false;
     i--;
   } else{
     newDiv.className += ' strike';
   newDiv.innerHTML = dager[quizTab[i].getDay()] + " " + quizTab[i].getDate() + ". " + maaneder[quizTab[i].getMonth()];
   }
   leggTil.appendChild(newDiv);
}
document.getElementById('passert').appendChild(leggTil);
}
});
// Document on load.
