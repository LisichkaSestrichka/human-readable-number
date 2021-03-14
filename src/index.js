module.exports = function toReadable (number) {
  let numb = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let twoNumb = ['', '', '', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  if (number >= 0 && number < 20){
    return numb[number];
  }
  if (number == 30 || number == 40 || number == 50 || number == 60 || number == 70 || number == 80 || number == 90);
    return twoNumb[number];
}
