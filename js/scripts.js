// business logic
function convertPoundtoOunce (poundNum) {
  return (poundNum * 16);
}

function convertOuncetoPound (ounceNum) {
  return (ounceNum / 16);
}

function convertOunceToGram(ounceNum) {
  return (ounceNum * 28.3495);
}

function convertGramToOunce(gramNum) {
  return (gramNum / 28.3495);
}

function executeConversionToGram() {
  const pounds = parseFloat(document.getElementById("pound-field").value);
  let ounces = parseFloat(document.getElementById("ounce-field").value);
  ounces += convertPoundtoOunce(pounds);
  const grams = convertOunceToGram(ounces);
  document.getElementById("gram-field").value = grams.toFixed(3);
}

function executeConversionToPound() {
  const grams = parseFloat(document.getElementById("gram-field").value);
  let ounces = convertGramToOunce(grams);
  let pounds = convertOuncetoPound(ounces);
  [pounds, ounces] = pounds.toString().split('.');
  ounces = convertPoundtoOunce(parseFloat("0." + ounces));
  document.getElementById("pound-field").value = pounds;
  document.getElementById("ounce-field").value = ounces.toFixed(3);
}

function clearAll() {
  document.getElementById("pound-field").value = '';
  document.getElementById("ounce-field").value = '';
  document.getElementById("gram-field").value = '';
}