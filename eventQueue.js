function hello(){
    console.log("Hello ! Good Morning !!!");
}

const wait = setTimeout(()=>{
    console.log("I will wait for 5 seconds");
},5000)

function letsPlay(){
    console.log("I play volleyball");
}

hello();
wait;
letsPlay();
