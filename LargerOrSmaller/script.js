var num1 = window.prompt("Enter the first number");
var num2 = window.prompt("Enter the second number");
if(num1 > num2){
    document.write("The "+num1+" is larger than "+num2);
}else if(num2 > num1){
    document.write("The "+num2+" is larger than "+num1);
}else if(num1 === num2){
    document.write("Both numbers are equal!");
}
