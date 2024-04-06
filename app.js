const buttons = document.querySelector('.buttons');
const display = document.getElementById('display');
// let our caluculator value be first_val and sec_val

let first_val = "0";
let sec_val = "0";
let operator_val ="";

buttons.addEventListener('click', function(e){
    let display_val = e.target.innerText;
    // clearing the first zero
    if(display.innerText == 0){
        display.innerText = "";
    }

    // to clear the first value when the second value is inputed
    if(operator_val != "" && display.innerText == first_val){
        display.innerText = "";
    }

    // calling the isNumber function
    if(isNumber(display_val)){
        display.innerText = display.innerText + e.target.innerText;
    }
    // switch statement to handle the oparators
    switch(display_val){
        case "AC":
            clear();
        break;
        case "+":
            case "-":
                case "/":
                    case "*":
                        case "%":
            set1stVal();
            setOpVal(display_val);
        break;
        case "=":
            evalation()
        break;
        default:
        break;
    }
})

// function to check if value is a number
function isNumber(n){
    let return_value = false;
    // to remove multiple dot
    let dot = display.innerText.indexOf('.');

    if(!isNaN(Number(n)) || n == "."){
        return_value = true;
    }
    if(dot >= 0 && n == "."){
        return_value = false;
    }
    return return_value;
}

// function to clear calculator value
function clear(){
    display.innerText = "0";
}
// function to set first val
function set1stVal(){
    first_val = display.innerText;
}
// function to set operator value
function setOpVal(opt){
    operator_val = opt;
}
// function to evaluate our values
function evalation(){
    sec_val = display.innerText;
    let solve = first_val + operator_val + sec_val;
    display.innerText = eval(solve);
}