const butt = document.querySelector("body > div > div > div.control > button");
const pallete = document.querySelector("#pallete");
const inpt_color = document.querySelector("#color");
butt.addEventListener('click',change);
inpt_color.addEventListener('input',change);
function change(e){
    if(e.type=="click"){
    let numRand =Math.floor( Math.random()*(colors.length));
    pallete.style.backgroundColor = colors[numRand];
    inpt_color.value=colors[numRand];
    }else{
        var RegExp = /^#[0-9A-F]{6||3}$/i; //مش مفهومة منيح بس بحثت عنها 
        if(RegExp.test(inpt_color.value)){
            pallete.style.backgroundColor =inpt_color.value  ;
    }}
    inpt_color.style.color = inpt_color.value;
}
///change color
let nIntervId;
const crazy = document.querySelector("#crazy");
function changeColor() {
    if (nIntervId) {
      clearInterval(nIntervId);
    }
    nIntervId = setInterval(()=>{
        let numRand =Math.floor( Math.random()*(colors.length));
    crazy.style.backgroundColor = colors[numRand];
    crazy.textContent=colors[numRand];
    }, 50);
  }
 crazy.addEventListener("click",changeColor);
 crazy.addEventListener("dblclick",stopTextColor);
 function stopTextColor() {
    clearInterval(nIntervId);
    let color =  crazy.textContent;
   pallete.style.backgroundColor = color;
    inpt_color.value=color;
    crazy.textContent="Play";
}