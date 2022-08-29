let side1=11;
let side2=10;
let side3=12;

if(side1===side2){
    if(side2===side3){
        console.log("It is equilateral triangle");
    }else{
        console.log("It is isoceles triangle");
    }
}else if (side2===side3||side1===side3){
    console.log("It is isoceles triangle");
}else {
    console.log("It is scalar triangle");
}