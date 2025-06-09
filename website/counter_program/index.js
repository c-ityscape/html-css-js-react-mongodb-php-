const decrementBtn= document.getElementById("decrementBtn");
const incrementBtn= document.getElementById("incrementBtn");
const resetBtn= document.getElementById("resetBtn");
const countLabel= document.getElementById("countLabel");

let count =0;

incrementBtn.onclick=function(){
   count++;
   countLabel.textContent=count;

}
decrementBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}