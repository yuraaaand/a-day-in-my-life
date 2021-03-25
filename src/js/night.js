function into_handwriting(id) {
    var input_id=document.getElementById(id);
    input_id.style= "font-family: duos-brush, sans-serif; font-weight:300; font-size: 4rem; letter-spacing: -.1rem; padding-top: 1rem; border-bottom: rgba(255, 255, 255, 0)";
    input_id.style.transition= "ease-out 0.5s all";
    document.getElementById(id+"ins").style = "opacity: 0";

}


// 1944 designers are falling asleep feeling they’re not contributing to worthwhile problems [challenge]
// 3227 designers tonight are reflecting on the environmental impacts of design [issues]
// 3811 designers are reflecting on the growing issue of ethics in design [issues]
function data_impact() {
  nightStr.push("1944 designers are falling asleep feeling they’re not contributing to worthwhile problems.");
  nightStr.push("3227 designers tonight are reflecting on the environmental impacts of design.");
  nightStr.push("3811 designers are reflecting on the growing issue of ethics in design.");
}


function data_raise() {
    let counter1 = 0;
    let res = "";
    for (let i = 0; i < aiga.length; i++) {
        if (aiga[i].city.toLowerCase().includes(citydata) && aiga[i].challenge.includes("I'm not paid what I'm worth")) {
            counter1++;
        }
    }
    var correct = "";
    var name = citydata.split(" ");
    for (let i = 0; i < name.length; i++) {
        correct += name[i].charAt(0).toUpperCase() + name[i].slice(1) + " ";
    }
    correct = correct.slice(0, -1);
    nightStr.push("Most designers are making between $50,000 and $75,000 this year.");
    nightStr.push("233 designers are the top 2% designers who are making more than $200,000 this year.");
    res = counter1.toString() + " designers in " + correct + " worry about not getting paid what they are worth.";
    nightStr.push(res);
    document.getElementById("draise3").innerHTML = counter1.toString() + " designers in " + correct + " worry about not getting paid what they are worth.";
 
}

    

document.getElementById("aboutopen").style.cursor = "pointer";

$(document).ready(function(){
    $("#aboutopen").click(function(){
      $("#placeholder").fadeToggle();
    });
    $("#impact").click(function(){
        $("#circleimpact").fadeIn();
        nightpic = "images/impact.webm";
        nightchoice = "the impact of my project.";
        // setTimeout(function() { 
        //     $("#impact").css({'text-align': 'right'}); }, 1000);
        setTimeout(function() { $("#circleimpact").hide(); }, 1000);
        // $('#raise').attr('disabled', 'disabled');
        $("#pimpact").delay(1000).fadeIn(1000);
        $('#pimpact').trigger('play');
        data_impact();
        $("#dimpact1").delay(4200).fadeIn(1000);
        $("#dimpact2").delay(4700).fadeIn(1000);
        $("#dimpact3").delay(5200).fadeIn(1000);
    });

    $("#raise").click(function(){
        $("#circleraise").fadeIn();
        nightpic = "images/raise.webm";
        nightchoice = "getting a raise.";
        setTimeout(function() { $("#circleraise").hide(); }, 1000);
        $("#praise").delay(1000).fadeIn(1000);
        $('#praise').trigger('play');
        data_raise();
        $("#draise1").delay(4200).fadeIn(1000);
        $("#draise2").delay(4700).fadeIn(1000);
        $("#draise3").delay(5200).fadeIn(1000);

    });
 
  });


  document.getElementById("impact").onclick = function () {

    document.getElementById("impact").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255); line-height: 140%;";
    document.getElementById("raise").style.opacity = "0";
    document.getElementById('raise').onclick = "var e=this;setTimeout(function(){e.disabled=true;},0);return true;";

    document.querySelector(".choice5").style = "top:-1.3rem; left: 23rem";

    
}


document.getElementById("raise").onclick = function () {

    document.getElementById("raise").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255); line-height: 140%";
    document.getElementById('impact').onclick = "var e=this;setTimeout(function(){e.disabled=true;},0);return true;";
    document.getElementById("impact").style.opacity = "0";

    document.querySelector(".choice5").style = "top:-4.7rem; left: 23rem";
    

    
} 

$( "#aboutopen" ).mouseover(function() {
    document.getElementById("border_about").src="../images/circle1.gif";
    document.getElementById("border_about").style = "top: 1rem; right: 2.2rem; height: 3.7rem; width: 8.5rem";

  });

  $( "#aboutopen" ).mouseout(function() {
    document.getElementById("border_about").src="../images/recbox_small.png";
    document.getElementById("border_about").style = "top: 1.2rem; right: 2.2rem; height: 3.7rem; width: 8.4rem";
  });

  $( "#gotooverview" ).mouseover(function() {
    document.getElementById("tooverview").src="../images/circle1.gif";
    document.getElementById("tooverview").style = "top: -0.5rem";

  });

  $( "#gotooverview" ).mouseout(function() {
    document.getElementById("tooverview").src="../images/recbox_next.png";
    document.getElementById("tooverview").style = "top: 0rem";


  });