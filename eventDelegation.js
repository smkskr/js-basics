
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');


// event delegation(handling of a work handled by the appropriate element)
document.addEventListener('click',(e) => {
    console.log(e);
    if(e.target.matches('div')){

        //event delegation check
        if(e.target.id == 'child'){
            child.style.backgroundColor = "yellow";
        }
        else if(e.target.id == 'parent'){
            parent.style.backgroundColor = "yellow";
        }
    }
})


