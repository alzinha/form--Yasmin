const cardholder = document.getElementById("cardholder-name");
const cardNumber = document.getElementById(" card-number");
const expiry = Array.from(document.querySelector("expiry"));
const cvc = document.getElemetById("cvc");
const submit = document.getElementById("submit");
const nameOnCard= document.querySelector("cardholder-display");
const mumOncard = document.queySelector("card-number-display");
const exMM = document.querySelector ("expiry-month-diplay");
const expYY =document.querySelector("expiry-year-display");
const cvcDisplay=document.querySelector(".cvc-display");
constthankyou = document.getElementById("thank-you-header");
const thankYouSection = document.getElementById("thank-you");
const continueBtn = document.getElementById ("continue");
const form = document.getElemetById("myForm");
const expiryErrorMsg =document.getElementById("expiry-error");



function inputName() { 
    nameOnCard.innnerHTML=cardholder.value;
    thankYou.innerHTML = `Thank You $ {cardholder.value}`;   
    if (nameOnCard.innerHTML == "") {  

    nameOnCard.innerHtML = cardholder.placeholder;
    }
}
function inputCardNum() {
    let CardNumberInput = cardholder.value;
    //Do not allow users to write invalidcharacters
    let formattedCardNumber =replace (/[^/d]/g, "");
    formattedCardNumber = formattedCardNuber.substring(0,16);
    //Split the cardnumber is groupsof 4
    let cardNumberSections =formattedcardNumber.match(/d{1,4}/g );
    if (cardNumberSections!== null){  
        formattedCardNumber =CardNumberSections.join("");
    }
    //If the formattedCardNumber is different to what is shown,change t
    if(cardNumberInput !== formattedCardNumber ){  
          cardNumber.value =formattedCardNumber;
    }
    num0nCard.innerHTML = cardNumber.value;
    if (cardNumber.value ===""){ 
        num0nCard.innerHTML = cardNumber.placeholder;
    }
}
 

  function inputMM(){
    let formattedMM = expiry [0].value;
    formattedMM = formattedMM.substring (0, 2);
    expiry[0].value = formattedMM;
    if (expiry[0].value ===""){ 
        expMM.innerHTML = "00";
    } else { 
        expMM.innerHTML= expiry[0].value;

    }
  }

  function inputYY() {
     let formattedYY = expiry[1].value;
     formattedYY =substring (0 ,4);
     expiry [1].value = formattedYY;
     if (expiry[1].value ==="") {
        expYY.innerHTML ="000";
    
     }

  }
   function inputCvc(){
    cvc.value = formatedCvc = cvc.value;
    if(cvc.value ==="") {
    cvcDisplay.innerHTML = "000"; 
    } else { 
        cvcDisplay.innerHTML = cvc.value;
    } 
}
   function massValidate(){ 
    function validateName()
     let carholderExp = /^[A-Z a-z]+$/;
     let errorMsg = document.getElementById("errorMsg");
    if (cardholder.value.match (cardholderExp)) { 
        errorMsg.textConted = "";
    } else {
        errorMsg.innerHTML= "Please enter cardholder name";
    }
 }
 function validateCard(){
    let cardNumerror = document.getElementById ("card-num=error");
    if (cardNumError.value.lenght > 0 && cardNumber.value.lrght < 16) {
        cardNumError.innerHTML = "wrong format";
    } else if (cardNumber.value == ""){   
        cardNumError.innerHTML = "Can't be blank!";
        } else{ 
            cardNumError.innerhtmL = "";
        }
   }
function validateExpiry() {
      

     let expMonth = /^(0[0-9]|1[1-2]){2}$/;
     let expYear = /^[0-9] [0-2]{4}$/ ;
   
     if (expiry[0].value.match(expMonth)) {
        expiryErrorMsg.innerHTML.HTML ="";
     } else if (
       expiry[0].value.match (expMonth) &&
       expiry[1].value.match(expYear)
      ) { 
        expiryErrorMsg.innerHTML.HTML = "";
      } else if(expiry[0] == "") {
        expiryErrorMsg.innerHTML = "Can't be blank!";
      } else {
        expiryErrorMsg.innerHTML ="Wrong format!"
      } 
  }

function validateCvc() {
    let cvcErrorMsg = document.getElementById("error-cvc");
    let cvcExp = /^[0-9]{3}$/;
    if (cvc.value === ""){    
        cvcErrorMsg.innerHTML = "Can't be blank";
} else if (cvc.value.match (cvcExp)) {
    cvcErrorMsg.innerHTML = "";
}else {
    cvcErrorMsg.innerHTML ="Wrong format";

   }
}
validateCard();
validateName();
validateExpiry();
validateCvc();
 if(
    nameOnCard.innerHTML == cardholder.placeholder||
    numOnCard.innerHTML == cardNumber.placeholder ||
    expMM.innerHTML =="00" ||
    expYY.innerHTML =="0000"||
    cvcDisplay.innerHTML == "000"||
    (cardholder.value.leght > 0 && cardNumber.value.lrght <16)
  ) {   
 return false ;
    } else {
    return true;
  }
   //Submit Button

    
    submit.adddListener ("click" ,function () {
        vent.preventDefault ();
        thankYouSection.classList.add("hidden");
        form.classList.remove("hidden");
        nameOnCard.innerHTML = cardholder.placeholder;
        numnCard.innerHTML =cardholder.placeholder;
        expMM.innerHTML ="00";
        expYY.innerHTML ="000";
        cvcDisplay.innerHTML ="000";
        cardholder.value = "";
        cardNumber.value = "";
        expiry[0].value = "";
        expiry[1].value ="";
        cvc.value ="";
        cvc.value ="";
        expiryErrorMsg.innerHTML = "";
    }
    )
       