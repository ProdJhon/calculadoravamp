

function soma(n1, n2, result){

    result = n1 + n2;

    return result;

}

function mult(n1, n2, result){

    result = n1 * n2;

    return result;
}

function div(n1, n2, result){

    result = n1 / n2;

    return result;

}

function sub(n1, n2, result){

    result = n1 - n2;

    return result;
}

function quest(op){
if(op == 1){
    console.log(soma(num1, num2));
}else if(op == 2){
    console.log(mult(num1, num2));
}else if(op == 3){
    console.log(div(num1, num2));
}else if(op == 4){
    console.log(sub(num1, num2))
}
}


//Transforma numero string em numero real
console.log(Number('7'));

let num1 = 10;
let num2 = 10;

quest(2);