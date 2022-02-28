//use let instead of var

//using var --> never use var
function print(){
    for(var i = 1;i <= 5;i++){
        console.log(i); //inside loop
    }

    console.log(i);//outside loop
}

print();

//using let -> it works as expected
function print1(){
    for(let i = 1;i <= 5;i++){
        console.log(i); //inside loop
    }

    console.log(i);//outside loop
}

print1();