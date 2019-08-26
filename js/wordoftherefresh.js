$(document).ready(function() {
  let fineQuotes = [
  "Noe kontroversielt utsagn, men Quizmaster har ikke alltid rett",
  "Hansa er overvurdert",
  "Magnus må drikke, shalalalala",
  "Let's get this bread",
  "Det fineste med å studere i Bergen er at de fleste bergensere reiser bort for å studere i andre byer",
  "Noen som blir med på Silent etterpå eller?",
  "To crispy chicken og en dobbel cheeseburger, takk!",
  "Husk en kortstokk så tiden i kø går fortere!",
  "Gründer-idè: Fastfood-restaurant rett utforbi Kronbar",
  "Det eneste Kronbar mangler er en avtale med Pizzabakeren for salg av mat",
  "Håper at folk faktisk leser disse, det tok meg en god halvtime å skrive koden for disse teite tekstene",
  "Noen som joiner kø 17:45 eller? Orker ikke sitte på scenen igjen"

];

let randomItem = fineQuotes[Math.floor(Math.random()*fineQuotes.length)];

document.getElementById('enEllerAnnenTekst').innerHTML = randomItem;
});
