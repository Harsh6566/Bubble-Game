function makebubble(){
    var count = "" ;
    for(let i = 1 ; i <= 70; i++ ){
         var rn = Math.floor(Math.random()*10);
         count += `<div class="bubble">${rn}</div>` ; 
                  
    }
    
    document.querySelector("#pbottom").innerHTML = count ; 
}
makebubble() ; 

var Timer = 60;
function runTimer(){
   var timerint = setInterval(function(){
    if(Timer > 0){
    Timer-- ;
    document.querySelector("#timerval").textContent = Timer ;
    }
    else{
        clearInterval(timerint) ;
        document.querySelector("#pbottom").innerHTML = `<h1>Game Over </h1>` ;
    }
   } , 1000);
}

runTimer() ; 

 var hitrn = 0 ;
function getNewhit(){
     hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn ; 
}

getNewhit() ; 

var score = 0 ;
function increaseScore(){
   score += 10 ; 
   document.querySelector("#scoreval").textContent = score ; 
}
document.querySelector("#pbottom").addEventListener("click" , function(details){
    var clickednum = (Number(details.target.textContent));
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        getNewhit();
    }
})

