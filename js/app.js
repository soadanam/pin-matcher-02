console.log('from js file!');
// Generating Pin

function pinChecker(){
    const pin = Math.round(Math.random()*10000);
    //console.log(pin);
    const fourDigitPin = pin + '';
    if(fourDigitPin.length == 4){
        document.getElementById('display-pin').value = fourDigitPin;
    }
    else{
        console.log('Hi', pin);
        pinChecker();
    };
};

document.getElementById('generate-pin').addEventListener('click', function(){
    pinChecker();
});


//Getting key pad value
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const oldValue = calcInput.value;
        calcInput.value = number;
        const newNumber = oldValue + number;
        calcInput.value = newNumber;
    };
});


//Submitting pin  and show correct or not.
function pinSubmission(){
    const displayPin = document.getElementById('display-pin').value;
    const calcInput = document.getElementById('typed-number').value;

    const success = document.getElementById('right');
    const failed = document.getElementById('wrong');

    if(displayPin == calcInput){
      success.style.display = 'block';
      failed.style.display = 'none';
    }
    else{
       failed.style.display = 'block';
       success.style.display = 'none';
    };
};
