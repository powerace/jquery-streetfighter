$(document).ready(function(){
	$(".ryu").fadeIn("slow");
	$(".ryu").mouseenter(function(){
		$('.ryu-still, .ryu-cool').hide();
		$('.ryu-ready').show();
	})
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    console.log('mousedown');
    $(".ryu-ready, .ryu-cool").hide();
    $('.ryu-throwing').show();
    // play hadouken sound
    playHadouken();
    // animate hadouken to the right of the screen
    $('.hadouken').finish().show()
    .animate(
    	{'left': '300px'},
		  500,
		  function() {
		    $(this).hide();
		    $(this).css('left', '-133px');
		  }
    );
  })
  .mouseup(function() {
    console.log('mouseup');
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}


$(document).keydown(function(event){
	if(event.keyCode == 88){
		$('.ryu-ready, .ryu-still').hide();
		$('.ryu-cool').show()
	}
})
.keyup(function(event){
	if(event.keyCode == 88){
		$('.ryu-still').show();
		$('.ryu-cool').hide();
	}
})



