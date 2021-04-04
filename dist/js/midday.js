function into_handwriting(id) {
    var input_id=document.getElementById(id);
    input_id.style= "font-family: duos-brush, sans-serif; font-weight:300; font-size: 4rem; letter-spacing: -.1rem; padding-top: 1rem; border-bottom: rgba(255, 255, 255, 0)";
    input_id.style.transition= "ease-out 0.5s all";
    document.getElementById(id+"ins").style = "opacity: 0";

}

// 2929 designers might use this time to increase their skill sets [learning opp]
// _designers who have [years of experience] on the job feel they are learning something everyday [learning opp]
// _designers who prioritize [priority] are learning something on the job [learning opp]
function data_tutorials(){
    let counter1 = 0;
    let counter2 = 0;
    let res="";
    middayStr.push("2929 designers might use this time to increase their skill sets.");
    if (choice=="work") {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].priority.includes("Work") && aiga[i].learning.includes("Learning some new skills")) {
                counter1++;
            }
        }
        res = counter1.toString() + " designers who prioritize work are learning something on the job.";
        middayStr.push(res);
        document.getElementById("dtutorials2").innerHTML = counter1.toString() + " designers who prioritize work are learning something on the job.";

    } 
    if (choice=="family") {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].priority.includes("Family") && aiga[i].learning.includes("Learning some new skills")) {
                counter1++;
            }
        }
        res = counter1.toString() + " designers who prioritize family and friends are learning something on the job.";
        middayStr.push(res);
        document.getElementById("dtutorials2").innerHTML = counter1.toString() + " designers who prioritize family and friends are learning something on the job.";

    }
    if (choice=="pet") {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].priority.includes("Pets") && aiga[i].learning.includes("Learning some new skills")) {
                counter1++;
            }
        }
        res = counter1.toString() + " designers who prioritize pets are learning something on the job.";
        middayStr.push(res);
        document.getElementById("dtutorials2").innerHTML = counter1.toString() + " designers who prioritize pets are learning something on the job.";

    }
    if (choice=="travel") {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].priority.includes("Travel") && aiga[i].learning.includes("Learning some new skills")) {
                counter1++;
            }
        }
        res = counter1.toString() + " designers who prioritize travel are learning something on the job.";
        middayStr.push(res);
        document.getElementById("dtutorials2").innerHTML = counter1.toString() + " designers who prioritize travel are learning something on the job.";

    }
    if (choice=="downtime") {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].priority.includes("Downtime") && aiga[i].learning.includes("Learning some new skills")) {
                counter1++;
            }
        }
        res = counter1.toString() + " designers who prioritize downtime are learning something on the job.";
        middayStr.push(res);
        document.getElementById("dtutorials2").innerHTML = counter1.toString() + " designers who prioritize downtime are learning something on the job.";
    }
    // console.log(counter1);
    
    // _designers who have [years of experience] on the job feel they are learning something everyday [learning opp]
    if (experience<1) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("Less than 1 year") && aiga[i].learning.includes("Learning and increasing my skill set every day")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers who have less than 1 year of experience feel they are learning something everyday.";
        middayStr.push(res);
        document.getElementById("dtutorials3").innerHTML = counter2.toString() + " designers who have less than 1 year of experience feel they are learning something everyday.";
    }

    if (1<=experience && experience<5) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("1 - 4 years") && aiga[i].learning.includes("Learning and increasing my skill set every day")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers who have 1-4 years of experience feel they are learning something everyday.";
        middayStr.push(res);
        document.getElementById("dtutorials3").innerHTML = counter2.toString() + " designers who have 1-4 years of experience feel they are learning something everyday.";
    }

    
    if (5<=experience && experience<10) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("5 - 9 years") && aiga[i].learning.includes("Learning and increasing my skill set every day")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers who have 5-9 years of experience feel they are learning something everyday.";
        middayStr.push(res);
        document.getElementById("dtutorials3").innerHTML = counter2.toString() + " designers who have 5-9 years of experience feel they are learning something everyday.";

    }

    if (10<=experience && experience<15) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("10 - 14 years") && aiga[i].learning.includes("Learning and increasing my skill set every day")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers who have 10-14 years of experience feel they are learning something everyday.";
        middayStr.push(res);
        document.getElementById("dtutorials3").innerHTML = counter2.toString() + " designers who have 10-14 years of experience feel they are learning something everyday.";

    }

    if (15<=experience && experience<=20) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("15 - 20 years") && aiga[i].learning.includes("Learning and increasing my skill set every day")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers who have 15-20 years of experience feel they are learning something everyday.";
        middayStr.push(res);
        document.getElementById("dtutorials3").innerHTML = counter2.toString() + " designers who have 15-20 years of experience feel they are learning something everyday.";
    }

    if (experience>20) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("20+ years") && aiga[i].learning.includes("Learning and increasing my skill set every day")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers who have 20+ years of experience feel they are learning something everyday.";
        middayStr.push(res);
        document.getElementById("dtutorials3").innerHTML = counter2.toString() + " designers who have 20+ years of experience feel they are learning something everyday.";
    }

}

// 1376 designers today feel they are learning very little [learning opp] today
// _designers in [city] are feeling they don't have the opportunity to learn new skills [challenge]
// designers with [years of experience] feel that they don't have much room to grow [challenge] (there's not much room to grow in my role)
function data_freelancers(){
    let counter1 = 0;
    let counter2 = 0;
    res="";
    middayStr.push("1376 designers today feel they are learning very little today.");
    for (let i = 0; i < aiga.length; i++) {
        if (aiga[i].city.toLowerCase().includes(citydata) && aiga[i].challenge.includes("don't have the opportunity to learn new skill")) {
            counter1++;
        }
    }
    var correct = "";
    var name = citydata.split(" ");
    for (let i = 0; i < name.length; i++) {
        correct += name[i].charAt(0).toUpperCase() + name[i].slice(1) + " ";
    }
    correct = correct.slice(0, -1);
    res = counter1.toString() + " designers in " + correct + " are feeling they don't have the opportunity to learn new skills.";
    middayStr.push(res);
    document.getElementById("dfreelancers2").innerHTML = counter1.toString() + " designers in " + correct + " are feeling they don't have the opportunity to learn new skills.";

    if (experience<1) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("Less than 1 year") && aiga[i].challenge.includes("not much room to grow")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with less than 1 year of experience feel that they don't have much room to grow.";
        middayStr.push(res);
        document.getElementById("dfreelancers3").innerHTML = counter2.toString() + " designers with less than 1 year of experience feel that they don't have much room to grow.";
    }

    if (1<=experience && experience<5) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("1 - 4 years") && aiga[i].challenge.includes("not much room to grow")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 1-4 years of experience feel that they don't have much room to grow.";
        middayStr.push(res);
        document.getElementById("dfreelancers3").innerHTML = counter2.toString() + " designers with 1-4 years of experience feel that they don't have much room to grow.";
    }

    
    if (5<=experience && experience<10) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("5 - 9 years") && aiga[i].challenge.includes("not much room to grow")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 5-9 years of experience feel that they don't have much room to grow.";
        middayStr.push(res);
        document.getElementById("dfreelancers3").innerHTML = counter2.toString() + " designers with 5-9 years of experience feel that they don't have much room to grow.";

    }

    if (10<=experience && experience<15) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("10 - 14 years") && aiga[i].challenge.includes("not much room to grow")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 10-14 years of experience feel that they don't have much room to grow.";
        middayStr.push(res);
        document.getElementById("dfreelancers3").innerHTML = counter2.toString() + " designers with 10-14 years of experience feel that they don't have much room to grow.";

    }

    if (15<=experience && experience<=20) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("15 - 20 years") && aiga[i].challenge.includes("not much room to grow")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 15-20 years of experience feel that they don't have much room to grow.";
        middayStr.push(res);
        document.getElementById("dfreelancers3").innerHTML = counter2.toString() + " designers with 15-20 years of experience feel that they don't have much room to grow.";
    }

    if (experience>20) {
        for (let i = 0; i < aiga.length; i++) {
            if (aiga[i].years_experience.includes("20+ years") && aiga[i].challenge.includes("not much room to grow")) {
                counter2++;
            }
        }
        res = counter2.toString() + " designers with 20+ years of experience feel that they don't have much room to grow.";
        middayStr.push(res);
        document.getElementById("dfreelancers3").innerHTML = counter2.toString() + " designers with 20+ years of experience feel that they don't have much room to grow.";
    }


}
    

document.getElementById("aboutopen").style.cursor = "pointer";

$(document).ready(function(){
    $("#aboutopen").click(function(){
      $("#placeholder").fadeToggle();
    });
    $("#tutorials").click(function(){
        middaypic = "images/tutorials.webm";
        $("#circletutorials").fadeIn();
        setTimeout(function() { $("#circletutorials").hide(); }, 1000);
        middaychoice = "tutorials.";
        $("#ptutorials").delay(1000).fadeIn(1000);
        $('#ptutorials').trigger('play');
        data_tutorials();
        $("#dtutorials1").delay(5000).fadeIn(1000);
        $("#dtutorials2").delay(5500).fadeIn(1000);
        $("#dtutorials3").delay(6000).fadeIn(1000);
    });

    $("#freelancers").click(function(){
        middaypic = "images/freelancers.webm";
        $("#circlefreelancers").fadeIn();
        setTimeout(function() { $("#circlefreelancers").hide(); }, 1000);
        middaychoice = "freelancers.";
        $("#pfreelancers").delay(1000).fadeIn(1000);
        $('#pfreelancers').trigger('play');
        data_freelancers();
        $("#dfreelancers1").delay(5000).fadeIn(1000);
        $("#dfreelancers2").delay(5500).fadeIn(1000);
        $("#dfreelancers3").delay(6000).fadeIn(1000);
        // $("#dfreelancers4").delay(7500).fadeIn(1000);

    });
 
  });


  document.getElementById("tutorials").onclick = function () {

    document.getElementById("tutorials").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255)";
    document.getElementById("freelancers").style.opacity = "0";
    document.getElementById('freelancers').onclick = "var e=this;setTimeout(function(){e.disabled=true;},0);return true;";

    document.querySelector(".choice3").style = "top:5.8rem; left: 51.5rem";

    
}


document.getElementById("freelancers").onclick = function () {

    document.getElementById("freelancers").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255)";
    document.getElementById('tutorials').onclick = "var e=this;setTimeout(function(){e.disabled=true;},0);return true;";
    document.getElementById("tutorials").style.opacity = "0";

    document.querySelector(".choice3").style = "top:3rem; left: 51.5rem";
    

    
} 

$( "#aboutopen" ).mouseover(function() {
    document.getElementById("border_about").src="../images/circle1.gif";
    document.getElementById("border_about").style = "top: 1rem; right: 2.2rem; height: 3.7rem; width: 8.5rem";

  });

  $( "#aboutopen" ).mouseout(function() {
    document.getElementById("border_about").src="../images/recbox_small.png";
    document.getElementById("border_about").style = "top: 1.2rem; right: 2.2rem; height: 3.7rem; width: 8.4rem";


  });

  $( "#gotosunset" ).mouseover(function() {
    document.getElementById("tosunset").src="../images/circle1.gif";
    document.getElementById("tosunset").style = "top: -0.5rem";

  });

  $( "#gotosunset" ).mouseout(function() {
    document.getElementById("tosunset").src="../images/recbox_next.png";
    document.getElementById("tosunset").style = "top: 0rem";


  });