$( "#aboutopen" ).mouseover(function() {
    document.getElementById("border_about").src="../images/circle1.gif";
    document.getElementById("border_about").style = "top: 1rem; right: 2.2rem; height: 3.7rem; width: 8.5rem";

  });

  $( "#aboutopen" ).mouseout(function() {
    document.getElementById("border_about").src="../images/recbox_small.png";
    document.getElementById("border_about").style = "top: 1.2rem; right: 2.2rem; height: 3.7rem; width: 8.4rem";


  });


  $( "#restartopen" ).mouseover(function() {
    document.getElementById("border_restart").src="../images/circle1.gif";
    document.getElementById("border_restart").style = "top: -1rem; right: -0.4rem; height: 3.7rem; width: 8.5rem";

  });

  $( "#restartopen" ).mouseout(function() {
    document.getElementById("border_restart").src="../images/recbox_small.png";
    document.getElementById("border_restart").style = "top: -0.8rem; right: -0.4rem; height: 3.7rem; width: 8.4rem";


  });



  $("#1st").mouseover(function() {
    $('#dawnvid').trigger('play');
    document.getElementById("dawnvid").style = "opacity:1";
    document.getElementById("change1").style = "opacity:1";
  });


  $("#1st").mouseout(function() {
    document.getElementById("dawnvid").style = "opacity:0";
    document.getElementById("change1").style = "opacity:0";
  });




  $("#2nd").mouseover(function() {
    $('#sunrisevid').trigger('play');
    document.getElementById("sunrisevid").style = "opacity:1";
    document.getElementById("change2").style = "opacity:1";
  });


  $("#2nd").mouseout(function() {
    document.getElementById("sunrisevid").style = "opacity:0";
    document.getElementById("change2").style = "opacity:0";
  });


  
  $("#3rd").mouseover(function() {
    $('#morningvid').trigger('play');
    document.getElementById("morningvid").style = "opacity:1";
    document.getElementById("change3").style = "opacity:1";
  });


  $("#3rd").mouseout(function() {
    document.getElementById("morningvid").style = "opacity:0";
    document.getElementById("change3").style = "opacity:0";
  });


  $("#4th").mouseover(function() {
    $('#middayvid').trigger('play');
    document.getElementById("middayvid").style = "opacity:1";
    document.getElementById("change4").style = "opacity:1";
  });


  $("#4th").mouseout(function() {
    document.getElementById("middayvid").style = "opacity:0";
    document.getElementById("change4").style = "opacity:0";
  });


  $("#5th").mouseover(function() {
    $('#sunsetvid').trigger('play');
    document.getElementById("sunsetvid").style = "opacity:1";
    document.getElementById("change5").style = "opacity:1";
  });


  $("#5th").mouseout(function() {
    document.getElementById("sunsetvid").style = "opacity:0";
    document.getElementById("change5").style = "opacity:0";
  });



  $("#6th").mouseover(function() {
    $('#nightvid').trigger('play');
    document.getElementById("nightvid").style = "opacity:1";
    document.getElementById("change6").style = "opacity:1";
  });


  $("#6th").mouseout(function() {
    document.getElementById("nightvid").style = "opacity:0";
    document.getElementById("change6").style = "opacity:0";
  });




  $(document).ready(function(){
    $("#aboutopen").click(function(){
      $("#placeholder").fadeToggle();
    });
    retrieveData();
 
  });


  function retrieveData() {
    var correct = "";
    var name = citydata.split(" ");
    for (let i = 0; i < name.length; i++) {
        correct += name[i].charAt(0).toUpperCase() + name[i].slice(1) + " ";
    }
    correct = correct.slice(0, -1);

    document.getElementById("intro").innerHTML = "My name is " + myname + ". I’m currently living my " + age.toString() +" year old life. I have "+ experience.toString() +" years of expereince in design. My main priority right now is " + choice + ".";


    document.getElementById("q1").innerHTML = "Here I am now, opening my curtains to see the daybreak in " + correct + ".";
    document.getElementById("dawnvid").src = dawnpic;

    document.getElementById("q2").innerHTML = "On my way to work, I take in the people, buildings, and scenery around me. I'm thinking about " + sunrisechoice;
    document.getElementById("data2").style = "font-family: simplon-mono, sans-serif; font-weight: 400";
    document.getElementById("data2").innerHTML = sunriseStr[0] + "<br><br>" + sunriseStr[1] + "<br><br>" + sunriseStr[2];
    document.getElementById("sunrisevid").src = sunrisepic;

    document.getElementById("q3").innerHTML = "This morning, I've just been assigned to a new project. I'm feeling " + morningchoice + " being the only designer on the team.";
    document.getElementById("data3").style = "font-family: simplon-mono, sans-serif; font-weight: 400";
    if (morningchoice == "intimidated") {
        document.getElementById("data3").innerHTML = morningStr[0] + "<br><br>" + morningStr[1] + "<br><br>" + morningStr[2];
    }
    document.getElementById("morningvid").src = morningpic;

    document.getElementById("q4").innerHTML = "I have a cool idea for my project - but it requires some new skills. During our lunch break, my coworkers and I look for " + middaychoice;
    document.getElementById("data4").style = "font-family: simplon-mono, sans-serif; font-weight: 400";
    document.getElementById("data4").innerHTML = middayStr[0] + "<br><br>" + middayStr[1] + "<br><br>" + middayStr[2];
    document.getElementById("middayvid").src = middaypic;


    document.getElementById("q5").innerHTML = "Before I head out, a coworker stops me. He asks me to join him on a new project. It will pay will but it will require me to work overtime. I get ready to " + sunsetchoice;
    document.getElementById("data5").style = "font-family: simplon-mono, sans-serif; font-weight: 400";
    if (morningchoice == "work late.") {
        document.getElementById("data5").innerHTML = sunsetStr[0] + "<br><br>" + sunsetStr[1] + "<br><br>" + sunsetStr[2];
    }
    document.getElementById("sunsetvid").src = sunsetpic;


    document.getElementById("q6").innerHTML = "At night, I go to sleep thinking about whats to come. I dream about " + nightchoice;
    document.getElementById("data6").style = "font-family: simplon-mono, sans-serif; font-weight: 400";
    document.getElementById("data6").innerHTML = nightStr[0] + "<br><br>" + nightStr[1] + "<br><br>" + nightStr[2];
    document.getElementById("nightvid").src = nightpic;


  }

