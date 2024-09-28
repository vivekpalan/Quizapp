const marks=document.querySelector('.marks');
const randomNumber= document.querySelectorAll('.random-num');
const submit=document.querySelector('.submit');
const input=document.querySelector('#result');
const resultText=document.querySelector('.result-text');
const operatorSpan= document.querySelector('.operator')


submit.addEventListener('click',()=>{
    if(input.value==''){
        alert('Please Enter the value');
    }
    else{

        const val1=Number(randomNumber[0].innerHTML);
        const val2=Number(randomNumber[1].innerHTML);
        let operator= operatorSpan.innerHTML;             
        
        let correctResult;
        if(operator=='addition'){
            correctResult = val1 + val2;
        }
        else if(operator=='subtraction'){
            correctResult = val1 - val2;    
        }
        else if(operator=='multiply'){    
            correctResult = val1 * val2;
        }
        else if(operator=='division'){  
            correctResult = Math.round(val1 / val2);
        }
        else{
            alert('Invalid operator');
        }

        const userResult=Number(input.value);
        let score=Number(marks.innerHTML);
    
        if(userResult===correctResult){
            // console.log('The answer is correct');
            input.value='';
            score+=1;
            marks.innerHTML=`${score}`;
            resultText.innerHTML='Right';
            resultText.style.color='darkgreen';
        }
        else{
            // console.log('The answer is wrong')
            input.value='';
            score-=1;
            marks.innerHTML=`${score}`;
            resultText.innerHTML='Wrong';
            resultText.style.color='red';
        }
    
        randomNumber[0].innerHTML= Math.floor(Math.random()*10);
        randomNumber[1].innerHTML= Math.floor(Math.random()*10);
        operatorSpan.innerHTML = randomOperation();
        // console.log(randomOperation())
        // if(randomOperation=='+'){
        //     operatorSpan.innerHTML= 'addition';
        // }
        // else if(randomOperation=='-'){
        //     operatorSpan.innerHTML='subtraction'
        // }
        // else if(randomOperation=='*'){
        //     operatorSpan.innerHTML='multiply'
        // }
        // else if(randomOperation=='/'){
        //     operatorSpan.innerHTML='division'
        // }
        // else{

        // }
        // console.log(resultText,score,val1,val2,correctResult)
    }
    
})

function randomOperation(){

    // const r= Math.floor(Math.random()*10);
    const operationArr= ['addition','subtraction','multiply','division'];


    // This function takes two numbers as range for generating a random number, which is obtained by multiplying the difference of two numbers with the random number and adding it to minimum range value.
    const index = random(0,4);
    function random(a,b){
        const indexValue = Math.floor(Math.random()*(b-a))+a;
        return indexValue;
    }

    // console.log(index)
    // console.log(operationArr[index]);

    return operationArr[index];
}

// console.log(randomOperation());



