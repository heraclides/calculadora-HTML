let currentinput="";
let operador="";
let firstOperand="";

function anexaNum(num) {
    currentinput += num;

    document.getElementById('display').value=currentinput;
}

function setOperador(op){
    if (currentinput === "")return;
    if (firstOperand != "") {
        calcular();
    } 

    firstOperand = currentinput;
    operador = op;
    currentinput = "";
}

function calcular(){
    if (firstOperand === "" || currentinput === "")return;
    let result;
    const a = parseFloat(firstOperand);
    const b = parseFloat(currentinput);
    switch (operador){
        case '+':
            result = a+b;
            break
        
        case '-':
            result = a-b
            break
        
        case '*':
            result = a*b
            break
            
        case '/':
            result = a/b 
            break
            
          default:
            return;  
    }

    document.getElementById('display').value=result;

        firstOperand = result;
        currentinput = "";
        operador = "";
}

function clearDisplay(){
    currentinput = "";
    operador = "";
    firstOperand = "";

    document.getElementById('display').value="";

}
