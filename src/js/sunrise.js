function into_handwriting(id) {
    // document.getElementById(id).style.color= "lightblue";
    var input_id=document.getElementById(id);
    input_id.style= "font-family: duos-brush, sans-serif; font-weight:300; font-size: 4rem; letter-spacing: -.1rem; padding-top: 1rem; border-bottom: rgba(255, 255, 255, 0)";
    input_id.style.transition= "ease-out 0.5s all";
    // alert("asdf" + ins_id);
    document.getElementById(id+"ins").style = "opacity: 0";
    // document.getElementById(id).style.transition= "font-size ease-in 0.3s 0.1s";
    // document.getElementById(id).style.transition= "border-bottom 1s ease 0.1s";
    // transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];

}


// var aboutopen = document.getElementById("aboutopen");

document.getElementById("aboutopen").style.cursor = "pointer";
// $("aboutopen").click(function(){
//     $("aboutpage").fadeToggle();
// })
$(document).ready(function(){
    $("#aboutopen").click(function(){
      $("#placeholder").fadeToggle();
    });
    $("#nextplace").click(function(){
        $("#circlenextplace").fadeIn();
            setTimeout(function() { $("#circlenextplace").hide(); }, 1000);
        });
    $("#lifehere").click(function(){
        $("#circlelifehere").fadeIn();
            setTimeout(function() { $("#circlelifehere").hide(); }, 1000);
        });
  });


  document.getElementById("nextplace").onclick = function () {

    document.getElementById("nextplace").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255)"
    

    document.getElementById("lifehere").style.opacity = "0";

    
}


document.getElementById("lifehere").onclick = function () {

    document.getElementById("lifehere").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255)"
    

    document.getElementById("nextplace").style.opacity = "0";

    
}