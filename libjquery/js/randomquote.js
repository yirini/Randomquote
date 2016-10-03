var phrases = [
"Love is an attempt to penetrate another being, but it can only be realized if the surrender is mutual.<br /> <i> -Octavio Paz</i>",
 "To fall in love is to create a religion that has a fallible god.<br /> <i>  - Jorge Luis Borges </i>",
"One is loved because one is loved. No reason is needed for loving.<br /> <i>  -  Paulo Coelho </i>",
"You don't have to think about love, you either feel it or you don't.<br /> <i>  -   Laura Esquivel </i>",
"The half-life of love is forever.<br /> <i>  -   Junot Diaz </i>",
"The problem with marriage is that it ends every night after making love, and it must be rebuilt every morning before breakfast.<br /> <i>  - Gabriel García Márquez </i>",

 "Sane love, is not love.<br /> <i>  -   José Martí </i>",
"Nothing good ever comes of love. What comes of love is always something better.<br /> <i>  -  Roberto Bolaño </i>",
"Today is today, and yesterday is gone. There is no doubt.<br /> <i>  -  Pablo Neruda </i>",
"Life itself is a quotation.<br /> <i>  -  Jorge Luis Borges </i>"];

function getRandom() {
  var myPhrase = Math.floor(Math.random() * phrases.length);
  return phrases[myPhrase];
}

// Selecting the Id button
var generateBtn = document.getElementById("generatorBtn");
// Showing phrases
var quoteEspace = document.getElementById("showPhrase");
// Generating phrases
generateBtn.onclick = function() {
  quoteEspace.innerHTML = getRandom();
}

quoteEspace.innerHTML = getRandom();
