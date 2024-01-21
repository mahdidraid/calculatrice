const buttonsE1 = document.querySelectorAll('button');
const inptval = document.getElementById("res");

for (let i = 0; i < buttonsE1.length; i++) {
    buttonsE1[i].addEventListener('click', () => {
        //console.log(buttonsE1[i].textContent);
       const buttonValue = buttonsE1[i].textContent;
       if(buttonValue === "C")
       {
        clearResult()
       }else if(buttonValue === "=")
       {
            calculateResult()
       }else {
            appendvalue(buttonValue)
       }
    });
}

function clearResult()
{
    inptval.value= " ";
}

function calculateResult()
{
 inptval.value=eval(inptval.value)
}

function appendvalue(buttonValue)
{
    inptval.value += buttonValue
}