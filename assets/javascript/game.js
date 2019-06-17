$(document).ready(function() {
//random number function for number user needs to match//
    var Random=Math.floor(Math.random()*(120-19+1))+19;
    $("#randomnumber").text(Random);
//random number per crystal//
    var crystal1= Math.floor(Math.random()*11+1)
    var crystal2= Math.floor(Math.random()*11+1)
    var crystal3= Math.floor(Math.random()*11+1)
    var crystal4= Math.floor(Math.random()*11+1)
//tally vars//
    var usernumber= 0; 
    var wins= 0;
    var losses = 0;
//what shows in html//
    $("#winstracker").text(wins);
    $("#losstracker").text(losses);
//wins & loss function//
    function win(){
          wins++; 
          $("#winstracker").text(wins);
        }
     function lose(){
              losses++;
              $("#losstracker").text(losses);
            }
//crystal function//      
            $("#crystal1").on ("click", function(){
                usernumber = usernumber + crystal1;
                $("#usernumber").text(usernumber); 
                
                    if (usernumber == Random){
                      win();
                      reset();
                    }
                    else if ( usernumber > Random){
                      lose();
                      reset();

                    }   
              })  
              $("#crystal2").on ("click", function(){
                usernumber = usernumber + crystal2;
                $("#usernumber").text(usernumber); 
                
                    if (usernumber == Random){
                      win();
                      reset();
                    }
                    else if ( usernumber > Random){
                      lose();
                      reset();
                    }   
              }) 
              $("#crystal3").on ("click", function(){
                usernumber = usernumber + crystal3;
                $("#usernumber").text(usernumber); 
                
                    if (usernumber == Random){
                      win();
                      reset();
                    }
                    else if ( usernumber > Random){
                      lose();
                      reset();
                    }   
              })  
              $("#crystal4").on ("click", function(){
                usernumber = usernumber + crystal4;
                $("#usernumber").text(usernumber); 
                
                    if (usernumber == Random){
                      win();
                      reset();
                    }
                    else if ( usernumber > Random){
                      lose();
                      reset();
                    }   
              }) ;   
//reset function//
              function reset(){
                Random=Math.floor(Math.random()*(120-19+1)+19);
                $('#randomnumber').text(Random);
                usernumber = 0;
                $("#usernumber").text(usernumber);
                crystal1= Math.floor(Math.random()*11+1);
                crystal2= Math.floor(Math.random()*11+1);
                crystal3= Math.floor(Math.random()*11+1);
                crystal4= Math.floor(Math.random()*11+1);
                } 
});