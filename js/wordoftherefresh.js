$(document).ready(function() {
  let fineQuotes = [
  "Noe kontroversielt utsagn, men Quizmaster har ikke alltid rett",
  "Hansa er overvurdert",
  "Er det egentlig verdt 1 time kø for quiz?",
  "10 slurker på hjerter!",
  "Magnus må drikke, shalalalala",
  "Uno er det beste kortspillet, don't @ me",
  "Let's get this bread",
  "Det fineste med å studere i Bergen er at de fleste bergensere reiser bort for å studere i andre byer",
  "Noen som blir med på Silent etterpå eller?",
  "To crispy chicken og en dobbel cheeseburger, takk!",
  "Husk å drikk vann! Så lenge det er blandet med minst 20%.",
  "Drikk 10 slurker",
  "Husk å ta med kortstokk!",
  "Husk en kortstokk så tiden i kø går fortere!"
];

let randomItem = fineQuotes[Math.floor(Math.random()*fineQuotes.length)];

document.getElementById('enEllerAnnenTekst').innerHTML = randomItem;
});
