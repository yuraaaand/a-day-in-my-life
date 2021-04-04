$( "#aboutopen" ).mouseover(function() {
    // $( this ).fadeOut( 100 );
    // $( this ).fadeIn( 500 );
    document.getElementById("border_about").src="../images/circle1.gif";
    document.getElementById("border_about").style = "top: 1rem; right: 2.2rem; height: 3.7rem; width: 8.5rem";

  });

$("#aboutopen").click(function(){
  $("#placeholder").fadeToggle();
});

$( "#aboutopen" ).mouseout(function() {
// $( this ).fadeOut( 100 );
// $( this ).fadeIn( 500 );
document.getElementById("border_about").src="../images/recbox_small.png";
document.getElementById("border_about").style = "top: 1.2rem; right: 2.2rem; height: 3.7rem; width: 8.4rem";


});


$( "#begin" ).mouseover(function() {
    // $( this ).fadeOut( 100 );
    // $( this ).fadeIn( 500 );
    document.getElementById("nextborder_home").src="../images/circle1.gif";
    document.getElementById("nextborder_home").style="left: -1.3rem; width: 9.5rem";

    // document.getElementById("border_about").style = "top: 1rem; right: 2.2rem; height: 3.7rem; width: 8.5rem";
    // position: absolute;
    // top: 0.4rem;
    // left: -1rem;
    // z-index: -1;
    // width: 9rem;
    // height: 4rem;
  });

$( "#begin" ).mouseout(function() {
// $( this ).fadeOut( 100 );
// $( this ).fadeIn( 500 );
document.getElementById("nextborder_home").src="../images/recbox.png";
document.getElementById("nextborder_home").style="left: -1rem; width: 9rem";

// document.getElementById("border_about").style = "top: 1.2rem; right: 2.2rem; height: 3.7rem; width: 8.4rem";


});
