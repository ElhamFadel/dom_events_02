// Here you can access the colors variable
// have fun

const butt = document.querySelector("body > div > div > div.control > button");
const targt = document.querySelector("#pallete");
const inpt = document.querySelector("#color");
butt.addEventListener('click',change);

inpt.addEventListener('input',change);

function change(e){

    if(e.type=="click"){
    let numRand =Math.floor( Math.random()*(colors.length));
    targt.style.backgroundColor = colors[numRand];
    inpt.value=colors[numRand];
   
    
    }else{
        var RegExp = /^#[0-9A-F]{6||3}$/i; //مش مفهومة منيح بس بحثت عنها 
        if(RegExp.test(inpt.value)){
        targt.style.backgroundColor =inpt.value  ;
        
    }
    }
    inpt.style.color = inpt.value;

}
