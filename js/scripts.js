// business logic
/**
 * Converts a mass from pounds to ounces
 * @param {Number} poundNum The amount in pounds
 * @returns {Number} The converted amount in ounces
 */
function convertPoundtoOunce (poundNum) {
  return (poundNum * 16);
}

/**
 * Converts a mass from ounces to pounds
 * @param {Number} ounceNum The amount in ounces
 * @returns {Number} The amount in pounds
 */
function convertOuncetoPound (ounceNum) {
  return (ounceNum / 16);
}

/**
 * Converts a mass from ounces to grams
 * @param {Number} ounceNum The amount in ounces
 * @returns {Number} The amount in grams
 */
function convertOunceToGram(ounceNum) {
  return (ounceNum * 28.3495);
}

/**
 * Converts a mass from grams to ounces
 * @param {Number} gramNum The amount in grams
 * @returns {Number} The amount in ounces
 */
function convertGramToOunce(gramNum) {
  return (gramNum / 28.3495);
}

/** Runs conversion to gram and places value in gram field */
function executeConversionToGram() {
  const pounds = parseFloat(document.getElementById("pound-field").value);
  let ounces = parseFloat(document.getElementById("ounce-field").value);
  ounces += convertPoundtoOunce(pounds);
  const grams = convertOunceToGram(ounces);
  document.getElementById("gram-field").value = grams.toFixed(3);
}

/** Runs conversion to pound/ounce and places values in pound and ounce fields */
function executeConversionToPound() {
  const grams = parseFloat(document.getElementById("gram-field").value);
  let ounces = convertGramToOunce(grams);
  let pounds = convertOuncetoPound(ounces);
  [pounds, ounces] = pounds.toString().split('.');
  ounces = convertPoundtoOunce(parseFloat("0." + ounces));
  document.getElementById("pound-field").value = pounds;
  document.getElementById("ounce-field").value = ounces.toFixed(3);
}

/** Clears all fields on page */
function clearAll() {
  document.getElementById("pound-field").value = '0';
  document.getElementById("ounce-field").value = '0';
  document.getElementById("gram-field").value = '0';
}
