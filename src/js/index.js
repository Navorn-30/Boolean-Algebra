"use strict";
let textOp = document.querySelector("#textOp");
let changeOp1 = document.querySelector("#changeOp1");
let opA = document.querySelector("#opA");
let symbolOp = document.querySelector("#symbolOp");
let opB = document.querySelector("#opB");
let changeOp2 = document.querySelector("#changeOp2");
let showResult = document.querySelector("#showResult");
let submit = document.querySelector("#run");
let block = document.querySelector("#block")
let operator = [
    "&&",
    "||",
    "!",
]
let index = 0;
let valueA = true;
let valueB = false;
opA.innerHTML = valueA;
opB.innerHTML = valueB;
let check1 = true;
let check2 = false;

// console.log(opA);

opA.addEventListener("click", function () {
    check1 = !check1;
    if(check1) {
        opA.innerHTML = valueA;
    } else {
        opA.innerHTML = !valueA;
    }
})
opB.addEventListener("click", function() {
    check2 = !check2;
    if(check2){
        opB.innerHTML = valueB;
        // console.log(opB);
    } else {
        opB.innerHTML = !valueB;
    }
})
symbolOp.addEventListener("click", function () {
    index++;
    if(index >= operator.length) {
        index = 0;
    }
    symbolOp.innerHTML = operator[index];
    changeOp1.innerHTML = operator[index];
    changeOp2.innerHTML = operator[index];
    if(operator[index] === "!") {
        block.style.color = "#cbd5e1"; 
        opB.style.color = "#cbd5e1"; 
    } else {
        block.style.color = "black";
        opB.style.color = "#e53e3e";
    }
})
let getResult;
submit.addEventListener("click", function() {
    if(operator[index] === "&&") {
        getResult = opA && opB;
        showResult.innerHTML = getResult.innerHTML
    } else if(operator[index] === "||"){
        getResult = opA || opB;
        showResult.innerHTML = getResult.innerHTML
    } else if(operator[index] === "!") {
        valueA = opA.innerHTML === "true"; 
        getResult = !valueA;
        showResult.innerHTML = getResult;

        
    }
})
