const validator = {
  isValid:function(n) {
    console.log(n)
  let digits = n.toString().split("").map(Number);

  // Procedimiento si es un número par
   if(digits.length % 2 === 0) {
    digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 2 : digit); 
   }
   else {
    digits = digits.map((digit, idx) => idx % 2 === 1 ? digit * 2 : digit);
   } 

  // Reducir números de dos dígitos
   digits = digits.map(digit => digit > 9 ? digit - 9 : digit);

  // Sumar los dígitos
   let sum = digits.reduce((acc, digit) => acc += digit, 0);

   sum = sum % 10

   return sum === 0
},

maskify:function(inputCardNumber) {
    if (inputCardNumber.length < 4) return inputCardNumber;
    const lastFourNum = inputCardNumber.substr(-4);
    const firstCharacter = inputCardNumber.substr(0, 1);
    const maskingCharacters = inputCardNumber.substr(1, inputCardNumber.length - 5).replace(/./g, '#');
    const maskingFirst = firstCharacter.replace(/./g, '#');
    return maskingFirst + maskingCharacters + lastFourNum;
}


}

export default validator;
