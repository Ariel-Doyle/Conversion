// business logic
function convertPoundtoOunce (poundNum) {
  return (poundNum * 16);
}

function convertOunceToGram(ounceNum) {
  return (ounceNum * 28.3495);
}

//interface logic

let poundNum = parseInt(window.prompt("Enter how many pounds:"))