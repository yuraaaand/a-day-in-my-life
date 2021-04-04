function into_handwriting(id) {
    var input_id=document.getElementById(id);
    input_id.style= "font-family: duos-brush, sans-serif; font-weight:300; font-size: 4rem; letter-spacing: -.1rem; padding-top: 1rem; border-bottom: rgba(255, 255, 255, 0)";
    input_id.style.transition= "ease-out 0.5s all";
    document.getElementById(id+"ins").style = "opacity: 0";

}

// 4617 designers this morning are worried about designers not having a seat at the table [issues]
// _designers with [years of experience] feel they do not really have a voice [issues]
// This morning, _designers are thinking about the growing role of automation in their workplace [issues]
function data_intimidated(){
    let counter1 = 0;
    let counter2 = 0;
    let res = "";
    morningStr.push("4617 designers this morning are worried about designers not having a seat at the table.");
    for (let i = 0; i < aiga.length; i++) {
        if (aiga[i].issues.includes("Automation in the workplace")) {
            counter1++;
        }
    }
    res = "This morning, " + counter1.toString() + " designers are thinking about the growing role of automation in their workplace.";
    morningStr.push(res);
    document.getElementById("dintimidated2").innerHTML = "This morning, " + counter1.toString() + " designers are thinking about the growing role of automation in their workplace.";

    // _designers with [years of experience] are going to work feeling unsure [stability] about their jobs
    if (experience<1) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("Less than 1 year") && aiga[i].issues.includes("seat at the table")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with less than 1 year of experience feel they do not really have a voice.";
        morningStr.push(res);
        document.getElementById("dintimidated3").innerHTML = counter2.toString() + " designers with less than 1 year of experience feel they do not really have a voice.";
    }

    if (1<=experience && experience<5) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("1 - 4 years") && aiga[i].issues.includes("seat at the table")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 1-4 years of experience feel they do not really have a voice.";
        morningStr.push(res);
        document.getElementById("dintimidated3").innerHTML = counter2.toString() + " designers with 1-4 years of experience feel they do not really have a voice.";
    }

    
    if (5<=experience && experience<10) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("5 - 9 years") && aiga[i].issues.includes("seat at the table")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 5-9 years of experience feel they do not really have a voice.";
        morningStr.push(res);
        document.getElementById("dintimidated3").innerHTML = counter2.toString() + " designers with 5-9 years of experience feel they do not really have a voice.";

    }

    if (10<=experience && experience<15) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("10 - 14 years") && aiga[i].issues.includes("seat at the table")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 10-14 years of experience feel they do not really have a voice.";
        morningStr.push(res);
        document.getElementById("dintimidated3").innerHTML = counter2.toString() + " designers with 10-14 years of experience feel they do not really have a voice.";

    }

    if (15<=experience && experience<=20) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("15 - 20 years") && aiga[i].issues.includes("seat at the table")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 15-20 years of experience feel they do not really have a voice.";
        morningStr.push(res);
        document.getElementById("dintimidated3").innerHTML = counter2.toString() + " designers with 15-20 years of experience feel they do not really have a voice.";
    }

    if (experience>20) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("20+ years") && aiga[i].issues.includes("seat at the table")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 20+ years of experience feel they do not really have a voice.";
        morningStr.push(res);
        document.getElementById("dintimidated3").innerHTML = counter2.toString() + " designers with 20+ years of experience feel they do not really have a voice.";
    }

}


// This morning, 3271 designers are thinking about ways to augment their cross-functional and multidisciplinary skills [skills critical future]
// 6332 designers believe that adaptability [skills critical future] is a critical design skill for the future of design
// 4397 designers this morning are feeling valued for their role [skills critical future]
// 4988 designers are thankful that they can exercise autonomy and freedom to make decisions [skills critical future]
    

document.getElementById("aboutopen").style.cursor = "pointer";

$(document).ready(function(){
    $("#aboutopen").click(function(){
      $("#placeholder").fadeToggle();
    });
    $("#intimidated").click(function(){
        $("#circleintimidated").fadeIn();
        setTimeout(function() { $("#circleintimidated").hide(); }, 1000);
        // $('#empowered').attr('disabled', 'disabled');
        $("#pintimidated").delay(1000).fadeIn(1000);
        $('#pintimidated').trigger('play');
        morningpic = "images/intimidated.webm";
        data_intimidated();
        morningchoice = "intimidated";
        $("#dintimidated1").delay(5000).fadeIn(1000);
        $("#dintimidated2").delay(5500).fadeIn(1000);
        $("#dintimidated3").delay(6000).fadeIn(1000);
    });

    $("#empowered").click(function(){
        $("#circleempowered").fadeIn();
        setTimeout(function() { $("#circleempowered").hide(); }, 1000);
        $("#pempowered").delay(1000).fadeIn(1000);
        $('#pempowered').trigger('play');
        morningpic = "images/empowered.webm";
        morningchoice = "empowered";
        $("#dempowered1").delay(5000).fadeIn(1000);
        $("#dempowered2").delay(5500).fadeIn(1000);
        $("#dempowered3").delay(6000).fadeIn(1000);
        $("#dempowered4").delay(6500).fadeIn(1000);

    });
 
  });


  document.getElementById("intimidated").onclick = function () {

    document.getElementById("intimidated").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255)";
    document.getElementById("empowered").style.opacity = "0";
    document.getElementById('empowered').onclick = "var e=this;setTimeout(function(){e.disabled=true;},0);return true;";

    document.querySelector(".choice2").style = "top:0.7rem; left: 2.2rem";

    
}


document.getElementById("empowered").onclick = function () {

    document.getElementById("empowered").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255)";
    document.getElementById('intimidated').onclick = "var e=this;setTimeout(function(){e.disabled=true;},0);return true;";
    document.getElementById("intimidated").style.opacity = "0";

    document.querySelector(".choice2").style = "top:-2.2rem; left: 2.4rem";
    

    
} 

$( "#aboutopen" ).mouseover(function() {
    document.getElementById("border_about").src="../images/circle1.gif";
    document.getElementById("border_about").style = "top: 1rem; right: 2.2rem; height: 3.7rem; width: 8.5rem";

  });

  $( "#aboutopen" ).mouseout(function() {
    document.getElementById("border_about").src="../images/recbox_small.png";
    document.getElementById("border_about").style = "top: 1.2rem; right: 2.2rem; height: 3.7rem; width: 8.4rem";


  });

  $( "#gotomidday" ).mouseover(function() {
    document.getElementById("tomidday").src="../images/circle1.gif";
    document.getElementById("tomidday").style = "top: -0.5rem";

  });

  $( "#gotomidday" ).mouseout(function() {
    document.getElementById("tomidday").src="../images/recbox_next.png";
    document.getElementById("tomidday").style = "top: 0rem";


  });