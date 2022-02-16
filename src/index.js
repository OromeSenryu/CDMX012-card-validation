import validator from './validator.js';
      const validateCard = document.getElementById("validateCard")
      const cardNumber = document.getElementById("inputCardNumber")
       
      
      validateCard.addEventListener("click", function(){
        const isValid = validator.isValid(cardNumber.value)
        let maskNumber = validator.maskify(cardNumber.value)
        let validateAlert = document.querySelector('#validateText');
     

        if(isValid){
          console.log("La tarjeta " + maskNumber + " es válida")
          validateAlert.innerHTML = "La tarjeta " + maskNumber + " es válida"
          validateAlert.classList.add("valid");
        } else {
          console.log("La tarjeta " + maskNumber + " es inválida")
          validateAlert.innerHTML = "La tarjeta " + maskNumber + " es inválida"
          validateAlert.classList.add("invalid");
        }
        
      
      })
