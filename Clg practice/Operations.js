var a  = document.getElementById("Num1");
var b  = document.getElementById("Num2");
var c  = document.getElementById("Ans1");
var d  = document.getElementById("Ans2");
var e = document.getElementById("Ans3");
var f = document.getElementById("Ans4");
function Add(){
    c.innerHTML = (Number(a.value) + Number(b.value));
}
function Subtraction(){
    
    d.innerHTML = (a.value - b.value);
}
function Multiply(){
    
    e.innerHTML = (a.value * b.value);

}
function Division(){
    
    f.innerHTML = (a.value / b.value);
}