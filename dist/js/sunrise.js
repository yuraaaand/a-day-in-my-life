function into_handwriting(id) {
    var input_id=document.getElementById(id);
    input_id.style= "font-family: duos-brush, sans-serif; font-weight:300; font-size: 4rem; letter-spacing: -.1rem; padding-top: 1rem; border-bottom: rgba(255, 255, 255, 0)";
    input_id.style.transition= "ease-out 0.5s all";
    document.getElementById(id+"ins").style = "opacity: 0";

}

// 2026 designers are waking up still feeling a little concerned [stability] about their jobs
// _designers who prioritize [priorities] are not at all thrilled to be going into work, but they do anyway [satisfaction]
// _designers with [years of experience] are going to work feeling unsure [stability] about their jobs
function data_nextPlace(){
    let counter1 = 0;
    let counter2 = 0;
    let res = "";
    sunriseStr.push("2026 designers are waking up still feeling a little concerned about their jobs.");
    if (choice=="work") {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].priority.includes("Work") && aiga[i].satisfaction.includes("but I deal")) {
                counter1++;
            }
        }
        res = counter1.toString() + " designers who prioritize work are not at all thrilled to be going into work, but they do anyway.";
        sunriseStr.push(res);
        document.getElementById("dnextplace2").innerHTML = counter1.toString() + " designers who prioritize work are not at all thrilled to be going into work, but they do anyway.";

    } 
    if (choice=="family") {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].priority.includes("Family") && aiga[i].satisfaction.includes("but I deal")) {
                counter1++;
            }
        }
        res = counter1.toString() + " designers who prioritize family are not at all thrilled to be going into work, but they do anyway.";
        sunriseStr.push(res);
        document.getElementById("dnextplace2").innerHTML = counter1.toString() + " designers who prioritize family and friends are not at all thrilled to be going into work, but they do anyway.";

    }
    if (choice=="pet") {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].priority.includes("Pets") && aiga[i].satisfaction.includes("but I deal")) {
                counter1++;
            }
        }
        res = counter1.toString() + " designers who prioritize pets are not at all thrilled to be going into work, but they do anyway.";
        sunriseStr.push(res);
        document.getElementById("dnextplace2").innerHTML = counter1.toString() + " designers who prioritize pets are not at all thrilled to be going into work, but they do anyway.";

    }
    if (choice=="travel") {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].priority.includes("Travel") && aiga[i].satisfaction.includes("but I deal")) {
                counter1++;
            }
        }
        res = counter1.toString() + " designers who prioritize travel are not at all thrilled to be going into work, but they do anyway.";
        sunriseStr.push(res);
        document.getElementById("dnextplace2").innerHTML = counter1.toString() + " designers who prioritize travel are not at all thrilled to be going into work, but they do anyway.";

    }
    if (choice=="downtime") {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].priority.includes("Downtime") && aiga[i].satisfaction.includes("but I deal")) {
                counter1++;
            }
        }
        res = counter1.toString() + " designers who prioritize downtime are not at all thrilled to be going into work, but they do anyway.";
        sunriseStr.push(res);
        document.getElementById("dnextplace2").innerHTML = counter1.toString() + " designers who prioritize downtime are not at all thrilled to be going into work, but they do anyway.";

    }
    // console.log(counter1);
    // _designers with [years of experience] are going to work feeling unsure [stability] about their jobs
    if (experience<1) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("Less than 1 year") && (aiga[i].stability.includes("little concerned") || aiga[i].stability.includes("Not sure"))) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with less than 1 year of experience are going to work feeling unsure about their jobs.";
        sunriseStr.push(res);
        document.getElementById("dnextplace3").innerHTML = counter2.toString() + " designers with less than 1 year of experience are going to work feeling unsure about their jobs.";
    }

    if (1<=experience && experience<5) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("1 - 4 years") && (aiga[i].stability.includes("little concerned") || aiga[i].stability.includes("Not sure"))) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 1-4 years of experience are going to work feeling unsure about their jobs.";
        sunriseStr.push(res);
        document.getElementById("dnextplace3").innerHTML = counter2.toString() + " designers with 1-4 years of experience are going to work feeling unsure about their jobs.";
    }

    
    if (5<=experience && experience<10) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("5 - 9 years") && (aiga[i].stability.includes("little concerned") || aiga[i].stability.includes("Not sure"))) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 5-9 years of experience are going to work feeling unsure about their jobs.";
        sunriseStr.push(res);
        document.getElementById("dnextplace3").innerHTML = counter2.toString() + " designers with 5-9 years of experience are going to work feeling unsure about their jobs.";

    }

    if (10<=experience && experience<15) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("10 - 14 years") && (aiga[i].stability.includes("little concerned") || aiga[i].stability.includes("Not sure"))) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 10-14 years of experience are going to work feeling unsure about their jobs.";
        sunriseStr.push(res);
        document.getElementById("dnextplace3").innerHTML = counter2.toString() + " designers with 10-14 years of experience are going to work feeling unsure about their jobs.";

    }

    if (15<=experience && experience<=20) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("15 - 20 years") && (aiga[i].stability.includes("little concerned") || aiga[i].stability.includes("Not sure"))) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 15-20 years of experience are going to work feeling unsure about their jobs.";
        sunriseStr.push(res);
        document.getElementById("dnextplace3").innerHTML = counter2.toString() + " designers with 15-20 years of experience are going to work feeling unsure about their jobs.";
    }

    if (experience>20) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("20+ years") && (aiga[i].stability.includes("little concerned") || aiga[i].stability.includes("Not sure"))) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 20+ years of experience are going to work feeling unsure about their jobs.";
        sunriseStr.push(res);
        document.getElementById("dnextplace3").innerHTML = counter2.toString() + " designers with 20+ years of experience are going to work feeling unsure about their jobs.";
    }

}


// 5308 designers are on their way to work, feeling fairly stable [stability]
// In [city], _designers are pretty happy [satisfaction] to be going into work
// _designers with [years of experience] are waking to a feeling of stability [stability] about their jobs
function data_lifeHere(){
    let counter1 = 0;
    let counter2 = 0;
    let res="";
    sunriseStr.push("5308 designers are on their way to work, feeling fairly stable.");
    for (let i = 0; i < aiga.length; i++) {
        if (aiga[i].city.toLowerCase().includes(citydata) && (aiga[i].satisfaction.includes("Happy but there's") || aiga[i].satisfaction.includes("Extremely satisfied"))) {
            counter1++;
        }
    }
    var correct = "";
    var name = citydata.split(" ");
    for (let i = 0; i < name.length; i++) {
        correct += name[i].charAt(0).toUpperCase() + name[i].slice(1) + " ";
    }
    correct = correct.slice(0, -1);
    console.log(correct);
    res = "In " + correct + ", " + counter1.toString() + " designers are pretty happy to be going into work.";
    sunriseStr.push(res);
    document.getElementById("dlifehere2").innerHTML = "In " + correct + ", " + counter1.toString() + " designers are pretty happy to be going into work.";

    if (experience<1) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("Less than 1 year") && (aiga[i].satisfaction.includes("Fairly stable") || aiga[i].satisfaction.includes("Rock solid"))) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with less than 1 year of experience are waking to a feeling of stability about their jobs.";
        sunriseStr.push(res);
        document.getElementById("dlifehere3").innerHTML = counter2.toString() + " designers with less than 1 year of experience are waking to a feeling of stability about their jobs.";
    }

    if (1<=experience && experience<5) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("1 - 4 years") && (aiga[i].stability.includes("little concerned") || aiga[i].stability.includes("Not sure"))) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 1-4 years of experience are waking to a feeling of stability about their jobs.";
        sunriseStr.push(res);
        document.getElementById("dlifehere3").innerHTML = counter2.toString() + " designers with 1-4 years of experience are waking to a feeling of stability about their jobs.";
    }

    
    if (5<=experience && experience<10) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("5 - 9 years") && (aiga[i].stability.includes("little concerned") || aiga[i].stability.includes("Not sure"))) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 5-9 years of experience are waking to a feeling of stability about their jobs.";
        sunriseStr.push(res);
        document.getElementById("dlifehere3").innerHTML = counter2.toString() + " designers with 5-9 years of experience are waking to a feeling of stability about their jobs.";

    }

    if (10<=experience && experience<15) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("10 - 14 years") && (aiga[i].stability.includes("little concerned") || aiga[i].stability.includes("Not sure"))) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 10-14 years of experience are waking to a feeling of stability about their jobs.";
        sunriseStr.push(res);
        document.getElementById("dlifehere3").innerHTML = counter2.toString() + " designers with 10-14 years of experience are waking to a feeling of stability about their jobs.";

    }

    if (15<=experience && experience<=20) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("15 - 20 years") && (aiga[i].stability.includes("little concerned") || aiga[i].stability.includes("Not sure"))) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 15-20 years of experience are waking to a feeling of stability about their jobs.";
        sunriseStr.push(res);
        document.getElementById("dlifehere3").innerHTML = counter2.toString() + " designers with 15-20 years of experience are waking to a feeling of stability about their jobs.";
    }

    if (experience>20) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("20+ years") && (aiga[i].stability.includes("little concerned") || aiga[i].stability.includes("Not sure"))) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 20+ years of experience are waking to a feeling of stability about their jobs.";
        sunriseStr.push(res);
        document.getElementById("dlifehere3").innerHTML = counter2.toString() + " designers with 20+ years of experience are waking to a feeling of stability about their jobs.";
    }


}

document.getElementById("aboutopen").style.cursor = "pointer";

$(document).ready(function(){
    $("#aboutopen").click(function(){
      $("#placeholder").fadeToggle();
    });
    $("#nextplace").click(function(){
        sunrisepic = "images/next_place.webm";
        $("#circlenextplace").fadeIn();
        setTimeout(function() { $("#circlenextplace").hide(); }, 1000);
        // $('#lifehere').attr('disabled', 'disabled');
        $("#pnextplace").delay(1000).fadeIn(1000);
        $('#pnextplace').trigger('play');
        sunrisechoice = "the next place I want to live.";
        data_nextPlace();
        $("#dnextplace1").delay(4200).fadeIn(1000);
        $("#dnextplace2").delay(4700).fadeIn(1000);
        $("#dnextplace3").delay(5200).fadeIn(1000);
    });

    $("#lifehere").click(function(){
        sunrisepic = "images/life_here.webm";
        $("#circlelifehere").fadeIn();
        setTimeout(function() { $("#circlelifehere").hide(); }, 1000);
        $("#plifehere").delay(1000).fadeIn(1000);
        $('#plifehere').trigger('play');
        sunrisechoice = "the life I want to build here.";
        data_lifeHere();
        $("#dlifehere1").delay(4200).fadeIn(1000);
        $("#dlifehere2").delay(4700).fadeIn(1000);
        $("#dlifehere3").delay(5200).fadeIn(1000);
    });
 
  });


  document.getElementById("nextplace").onclick = function () {

    document.getElementById("nextplace").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255)";
    document.getElementById("lifehere").style.opacity = "0";
    document.getElementById('lifehere').onclick = "var e=this;setTimeout(function(){e.disabled=true;},0);return true;";


    
}


document.getElementById("lifehere").onclick = function () {

    document.getElementById("lifehere").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255)";
    document.getElementById('nextplace').onclick = "var e=this;setTimeout(function(){e.disabled=true;},0);return true;";
    document.getElementById("nextplace").style.opacity = "0";

    document.querySelector(".choice1").style = "top:4rem";
    

    
} 

$( "#aboutopen" ).mouseover(function() {
    document.getElementById("border_about").src="../images/circle1.gif";
    document.getElementById("border_about").style = "top: 1rem; right: 2.2rem; height: 3.7rem; width: 8.5rem";

  });

  $( "#aboutopen" ).mouseout(function() {
    document.getElementById("border_about").src="../images/recbox_small.png";
    document.getElementById("border_about").style = "top: 1.2rem; right: 2.2rem; height: 3.7rem; width: 8.4rem";


  });

  $( "#gotomorning" ).mouseover(function() {
    document.getElementById("tomorning").src="../images/circle1.gif";
    document.getElementById("tomorning").style = "top: -0.5rem";

  });

  $( "#gotomorning" ).mouseout(function() {
    document.getElementById("tomorning").src="../images/recbox_next.png";
    document.getElementById("tomorning").style = "top: 0rem";


  });