 var score = 0;
    

$(document).ready( function() {
    var final_high= localStorage.getItem('high_score');
    if(final_high==null){
      document.getElementById('highscore').innerHTML=0;
    }
    else{
      document.getElementById('highscore').innerHTML=final_high;
    }

   $(".show1").html($(".show1 .show").sort(function () {
        return Math.random() - 0.5;
    }));
      
    $('.yeti').mousedown(function () {     
        event.target.setAttribute('class','yeti active');
          var p=document.getElementById('yetisound');
            p.currentTime=0;
            p.play();
       
        var myvar = setInterval(endGame, 2000);
    });
         
    $(".penguins").mousedown(function(event) {
      if (!$(this).hasClass('show')) {
        /* already clicked*/
      }
     else{
        clickPenguin(); 
      }
      // add class active
      event.target.setAttribute('class','penguins active');
      });
    
});
   

function clickPenguin(){

    // add one to score
    score+=10;
    var final_high= localStorage.getItem('high_score');

    document.getElementById('gamescore').innerHTML=score;
    var last_high=$("#highscore").text();
    if(score>=parseInt(last_high)){
      localStorage.setItem("high_score",score);
    }else{
      localStorage.setItem("high_score",last_high);
    }
    //put score into box(inner HTML)
    //play sound 
  
     sound();
}

  function sound(){
    
  var s=document.getElementById('jumpsound');
    s.currentTime = 0;
    s.play();
  }

function endGame(){
   

  score = 0;
  document.getElementById('score').innerHTML=score;
  $(".penguins").removeClass("active");
  location.reload();
  
}
      
   
  
          
        //for each penguin div,set class back to"penguin"
          //reset score
        //PUT score into box
        //shuffle penguins


