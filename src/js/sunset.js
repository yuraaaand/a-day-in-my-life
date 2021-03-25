function into_handwriting(id) {
    var input_id=document.getElementById(id);
    input_id.style= "font-family: duos-brush, sans-serif; font-weight:300; font-size: 4rem; letter-spacing: -.1rem; padding-top: 1rem; border-bottom: rgba(255, 255, 255, 0)";
    input_id.style.transition= "ease-out 0.5s all";
    document.getElementById(id+"ins").style = "opacity: 0";

}

// 8081 designers are prioritizing work [priority] this evening
// _designer with [years of experience] are choosing work[priority] over anything else today
// _designers in [city] are prioritizing work[priority] tonight
function data_worklate(){
    let counter1 = 0;
    let counter2 = 0;
    let res="";
    sunsetStr.push("8081 designers are prioritizing work this evening.");
    for (let i = 0; i < aiga.length; i++) {
        if (aiga[i].city.toLowerCase().includes(citydata) && aiga[i].priority.includes("Work")) {
            counter1++;
        }
    }
    var correct = "";
    var name = citydata.split(" ");
    for (let i = 0; i < name.length; i++) {
        correct += name[i].charAt(0).toUpperCase() + name[i].slice(1) + " ";
    }
    correct = correct.slice(0, -1);
    res = counter1.toString() + " designers in " + correct + " are choosing work over anything else today.";
    sunsetStr.push(res);
    document.getElementById("dworklate2").innerHTML = counter1.toString() + " designers in " + correct + " are choosing work over anything else today.";

    // console.log(counter1);
    
    // _designers who have [years of experience] on the job feel they are learning something everyday [learning opp]
    if (experience<1) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("Less than 1 year") && aiga[i].priority.includes("Work")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers who have less than 1 year of experience are choosing work over anything else today.";
        sunsetStr.push(res);
        document.getElementById("dworklate3").innerHTML = counter2.toString() + " designers who have less than 1 year of experience are choosing work over anything else today.";
    }

    if (1<=experience && experience<5) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("1 - 4 years") && aiga[i].priority.includes("Work")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers who have 1-4 years of experience are choosing work over anything else today.";
        sunsetStr.push(res);
        document.getElementById("dworklate3").innerHTML = counter2.toString() + " designers who have 1-4 years of experience are choosing work over anything else today.";
    }

    
    if (5<=experience && experience<10) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("5 - 9 years") && aiga[i].priority.includes("Work")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers who have 5-9 years of experience are choosing work over anything else today.";
        sunsetStr.push(res);
        document.getElementById("dworklate3").innerHTML = counter2.toString() + " designers who have 5-9 years of experience are choosing work over anything else today.";

    }

    if (10<=experience && experience<15) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("10 - 14 years") && aiga[i].priority.includes("Work")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers who have 10-14 years of experience are choosing work over anything else today.";
        sunsetStr.push(res);
        document.getElementById("dworklate3").innerHTML = counter2.toString() + " designers who have 10-14 years of experience are choosing work over anything else today.";

    }

    if (15<=experience && experience<=20) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("15 - 20 years") && aiga[i].priority.includes("Work")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers who have 15-20 years of experience are choosing work over anything else today.";
        sunsetStr.push(res);
        document.getElementById("dworklate3").innerHTML = counter2.toString() + " designers who have 15-20 years of experience are choosing work over anything else today.";
    }

    if (experience>20) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("20+ years") && aiga[i].priority.includes("Work")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers who have 20+ years of experience are choosing work over anything else today.";
        sunsetStr.push(res);
        document.getElementById("dworklate3").innerHTML = counter2.toString() + " designers who have 20+ years of experience are choosing work over anything else today.";
    }

}

// 2836 designers are thinking about utilizing their fitness and wellness benefits [benefits] this evening
// 426 designers are thankful for the childcare benefits[benefits] and looking forward to get back home
// There are 3565 designers who are enjoying their paid parental leave [benefits] tonight

    

document.getElementById("aboutopen").style.cursor = "pointer";

$(document).ready(function(){
    $("#aboutopen").click(function(){
      $("#placeholder").fadeToggle();
    });
    $("#worklate").click(function(){
        sunsetpic = "images/worklate.webm";
        $("#circleworklate").fadeIn();
        setTimeout(function() { $("#circleworklate").hide(); }, 1000);
        $("#pworklate").delay(1000).fadeIn(1000);
        $('#pworklate').trigger('play');
        sunsetchoice = "work late."
        data_worklate();
        $("#dworklate1").delay(4200).fadeIn(1000);
        $("#dworklate2").delay(4700).fadeIn(1000);
        $("#dworklate3").delay(5200).fadeIn(1000);
    });

    $("#headhome").click(function(){
        sunsetpic = "images/headhome.webm";
        $("#circleheadhome").fadeIn();
        setTimeout(function() { $("#circleheadhome").hide(); }, 1000);
        $("#pheadhome").delay(1000).fadeIn(1000);
        $('#pheadhome').trigger('play');
        sunsetchoice = "head home."
        // data_headhome();
        $("#dheadhome1").delay(4200).fadeIn(1000);
        $("#dheadhome2").delay(4700).fadeIn(1000);
        $("#dheadhome3").delay(5200).fadeIn(1000);

    });
 
  });


  document.getElementById("worklate").onclick = function () {

    document.getElementById("worklate").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255)";
    document.getElementById("headhome").style.opacity = "0";
    document.getElementById('headhome').onclick = "var e=this;setTimeout(function(){e.disabled=true;},0);return true;";

    document.querySelector(".choice4").style = "top:.8rem; left: 23rem";

    
}


document.getElementById("headhome").onclick = function () {

    document.getElementById("headhome").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255)";
    document.getElementById('worklate').onclick = "var e=this;setTimeout(function(){e.disabled=true;},0);return true;";
    document.getElementById("worklate").style.opacity = "0";

    document.querySelector(".choice4").style = "top:-1.8rem; left: 23rem";
    

    
} 

$( "#aboutopen" ).mouseover(function() {
    document.getElementById("border_about").src="../images/circle1.gif";
    document.getElementById("border_about").style = "top: 1rem; right: 2.2rem; height: 3.7rem; width: 8.5rem";

  });

  $( "#aboutopen" ).mouseout(function() {
    document.getElementById("border_about").src="../images/recbox_small.png";
    document.getElementById("border_about").style = "top: 1.2rem; right: 2.2rem; height: 3.7rem; width: 8.4rem";


  });

  $( "#gotonight" ).mouseover(function() {
    document.getElementById("tonight").src="../images/circle1.gif";
    document.getElementById("tonight").style = "top: -0.5rem";

  });

  $( "#gotonight" ).mouseout(function() {
    document.getElementById("tonight").src="../images/recbox_next.png";
    document.getElementById("tonight").style = "top: 0rem";


  });