$(document).ready(function(){
    $(".win_image").hide();
   var count = 0;
  $("td").click(function(){
  
  
    count = count +1;

   if( count %2  == 0){
    $(this).css("background","red").unbind('click');
	play();
    $(this).attr("role","player2");
   
   }
   else{
   
    $(this).css("background","blue").unbind('click');
		play();
 		$(this).attr("role","player1");
   }

var one = $(".one").attr("role");
var two = $(".two").attr("role");
var three = $(".three").attr("role");
var four = $(".four").attr("role");
var five = $(".five").attr("role");
var six = $(".six").attr("role");
var seven = $(".seven").attr("role");
var eight = $("#onenine").attr("role");

var nine = $(".nine").attr("role");
 //console.log(eight);

if( one != null && two !=null && three != null){
      //onsole.log( one + "--"+two+ three);
     if ( one == two && two == three){

            if( one === 'player1'){
             $("td").css("background","blue").unbind('click');
             $(".win_image").show();
			  play2();
            }
            else{
            $("td").css("background","red").unbind('click');;
               $(".win_image").text("Player2 won").show();
			    play2();

            }
           
     }
     
}

if( four != null && five !=null && six != null){
       //nsole.log( one + "--"+two+ three);
     if ( four == five && four == six){

            if( four === 'player1'){
             $("td").css("background","blue").unbind('click');;
              $(".win_image").show();
			   play2();
            }
            else{
            $("td").css("background","red").unbind('click');;
               $(".win_image").text("Player2 won").show();
			    play2();
            }
           
     }
     
}

if( seven != null && eight !=null && nine != null){
      //onsole.log( seven + "--"+eight+ nine);
     if ( seven == eight && seven == nine){

            if( seven === 'player1'){
             $("td").css("background","blue").unbind('click');;
                  $(".win_image").show();
				   play2();

            }
            else{
            $("td").css("background","red").unbind('click');;
               $(".win_image").text("Player2 Won").show();
			    play2();
            }
           
     }
     
}

if( one != null && four !=null && seven != null){
       //nsole.log( one + "--"+two+ three);
     if ( one == four && four == seven){

            if( one === 'player1'){
             $("td").css("background","blue").unbind('click');;
                  $(".win_image").show();
				   play2();
            }
            else{
            $("td").css("background","red").unbind('click');;
               $(".win_image").text("Player2 won").show();
			    play2();
            }
           
     }
     
}

 if( two != null && five !=null && eight != null){
      //onsole.log( one + "--"+two+ three);
     if ( two == five && five == eight){

            if( two === 'player1'){
             $("td").css("background","blue").unbind('click');;
                  $(".win_image").show();
				   play2();
            }
            else{
            $("td").css("background","red").unbind('click');;
               $(".win_image").text("Player2 won").show();
			    play2();
            }
           
     }
     
}

if( three != null && six !=null && nine != null){
     //console.log( one + "--"+two+ three);
     if ( three == six && six == nine){

            if( three === 'player1'){
             $("td").css("background","blue").unbind('click');;
                  $(".win_image").show();
				   play2();
            }
            else{
            $("td").css("background","red").unbind('click');;
               $(".win_image").text("Player2 won").show();
			    play2();
            }
           
     }
     
}

if( one != null && five !=null && nine != null){
       //nsole.log( one + "--"+two+ three);
     if ( one == five && five == nine){

            if( one === 'player1'){
             $("td").css("background","blue").unbind('click');
                  $(".win_image").show();
				  play2();
            }
            else{
            $("td").css("background","red").unbind('click');;
               $(".win_image").text("Player2 won").show();
			    play2();
            }
           
     }
     
}

 if( three != null && five !=null && seven != null){
      //onsole.log( one + "--"+two+ seven);
     if ( three == five && five == seven){

            if( three === 'player1'){
             $("td").css("background","blue").unbind('click');;
                  $(".win_image").show();
				   play2();
            }
            else{
            $("td").css("background","red").unbind('click');;
               $(".win_image").text("Player2 won").show();
			    play2();
            }
           
     }
     
}

if( one != null && two != null && three != null && four != null && five != null && six != null && seven != null && eight != null && nine != null){
    $("td").unbind('click');
     $(".win_image").text("Draw").css("padding-left","76px").show();
	  play2();
}


          
});
function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }
	  function play2() {
        var audio = document.getElementById("audio2");
        audio.play();
      }
 
});