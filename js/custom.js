
var modal = document.getElementById('a_log');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$(document).ready(function () {
  $("#datepicker").datepicker()
});



let intervalId = 0;
const $scrollButton = document.querySelector('.scroll');

function scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
}

function scrollToTop() {
    intervalId = setInterval(scrollStep, 16.66);
}
$scrollButton.addEventListener('click', scrollToTop);

//thumbnail uzsidaro atsidaro
var $toggletext= $( ".toggletext" );
$( "#thumbnailbutton" ).on( "click", function() {
  $toggletext.stop().slideToggle( 500 );
});
var $toggletext1= $( ".toggletext1" );
$( "#thumbnailbutton1" ).on( "click", function() {
  $toggletext1.stop().slideToggle( 500 );
});
var $toggletext2= $( ".toggletext2" );
$( "#thumbnailbutton2" ).on( "click", function() {
  $toggletext2.stop().slideToggle( 500 );
});
var $toggletext3= $( ".toggletext3" );
$( "#thumbnailbutton3" ).on( "click", function() {
  $toggletext3.stop().slideToggle( 500 );
});
var $toggletext4= $( ".toggletext4" );
$( "#thumbnailbutton4" ).on( "click", function() {
  $toggletext4.stop().slideToggle( 500 );
});
var $toggletext5= $( ".toggletext5" );
$( "#thumbnailbutton5" ).on( "click", function() {
  $toggletext5.stop().slideToggle( 500 );
});



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
