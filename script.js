// To get random number..................
function getPin(){
    const randomNumber = Math.random() * 10000;
    const pin = (randomNumber + '').split('.')[0];
    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin;
    }
}
// Display generate Button.............
    function generateBtn(){
        const pinInput = document.getElementById('pin-input');
        pinInput.value = getPin();
    }
//To get Calculator.........
 const digitInput = document.getElementById('digit-container');
  digitInput.addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit === 'C'){
          const digitInput = document.getElementById('digit-input');
          digitInput.value = '';
        }
      }
      else{
        const digitInput = document.getElementById('digit-input');
        digitInput.value = digitInput.value + digit;
      }
  })

  function verifyBtn(){
      const pin = document.getElementById('pin-input').value;
      const digitInput = document.getElementById('digit-input').value;
      if (pin === digitInput){
          displayResult('block', 'none');
      }
      else{
          displayResult('none', 'block');
      }
  }
function displayResult(correctStatus, inCorrectStatus){
const correct = document.getElementById("notify-correct");
    correct.style.display = correctStatus;
    const incorrect = document.getElementById("notify-incorrect");
    incorrect.style.display = inCorrectStatus;
}













