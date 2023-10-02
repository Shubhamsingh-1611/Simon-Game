let gameSeq=[];
let userSeq=[];
let started= false;
let level=0;
let h2=document.querySelector("h2");
let btns =["yellow","red","green","blue"];
let highscore=0;

document.addEventListener("keypress", function() {
   if(started==false) {
    console.log("game stated");
   } started=true;

   levelUp();
});

function gameFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function () {
    btn.classList.remove("flash");
    }, 250 );
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
     btn.classList.remove("userflash");
     }, 250 );
 }
 
function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx= Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randonBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
  
    gameFlash(randonBtn);
    console.log(gameSeq);
    if(level>highscore) {
        highscore=level;
    }
    let h3 =document.querySelector('h3').innerText=`High Score:${highscore}`;
   
}


function btnPress() {
    let btn=this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn) {
    btn.addEventListener("click",btnPress);
}
function checkAns(idx) {
    if(gameSeq[idx]===userSeq[idx]){
         if(userSeq.length==gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML=`Game over! Your Score was<b>${level}</b><br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
    
}
function reset() {
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}