var firebaseConfig = {
    apiKey: "AIzaSyBlb923abuJkVoQ-MJMSkvScjoWcrCXEVo",
    authDomain: "a-day-in-my-life-73a84.firebaseapp.com",
    projectId: "a-day-in-my-life-73a84",
    storageBucket: "a-day-in-my-life-73a84.appspot.com",
    messagingSenderId: "452729601909",
    appId: "1:452729601909:web:0123833e2b9571fb951d3c",
    measurementId: "G-S8DSM9KBRF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var database = firebase.database();
  var ref = database.ref("info");
  console.log(firebase);





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

// function setupFirebase() {



//   var firebaseConfig = {
//     apiKey: "AIzaSyBlb923abuJkVoQ-MJMSkvScjoWcrCXEVo",
//     authDomain: "a-day-in-my-life-73a84.firebaseapp.com",
//     projectId: "a-day-in-my-life-73a84",
//     storageBucket: "a-day-in-my-life-73a84.appspot.com",
//     messagingSenderId: "452729601909",
//     appId: "1:452729601909:web:0123833e2b9571fb951d3c",
//     measurementId: "G-S8DSM9KBRF"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

//   var database = firebase.database();
//   var ref = database.ref("age");
// }



function no_auto_complete() {
    if (navigator.userAgent.toLowerCase().indexOf('chrome')>=0) {
        setTimeout(function(){document.querySelectorAll('input').autocomplete='off';},1);
    }
}



// document.getElementById("testbtn").onclick = function () {
//     window.scrollBy({
//         top: 100,
//         left: 100,
//         behavior: 'smooth'
//       });
// }


var choice;

function writeData () {

    var namedata = document.getElementById("name").value.toLowerCase();
    var agedata = parseInt(document.getElementById("yo").value);
    var experiencedata = parseInt(document.getElementById("yr").value);
    var citydata = document.getElementById("city").value.toLowerCase();
    var data = {
        name: namedata,
        age: agedata,
        experience: experiencedata,
        priority: choice,
        city: citydata
    }
  
    ref.push(data);


}
    
  
    
    
   
$(document).ready(function() {
    // setupFirebase();
    no_auto_complete();
    $('input,textarea').typeWatch({
        captureLength: 0,
        wait: 1000,
        callback: function(value) {
            // alert('TypeWatch callback: (' + this.type + ') ' + value);
            // $( ".output" ).append('TypeWatch callback: (' + this.type + ') ' + value);
            // document.getElementById("name").style.color="lightblue";
            // console.log('TypeWatch callback: (' + (this.type || this.nodeName) + ') ' + value);
            into_handwriting(this.id);
            if (this.id=="city") {
                $("#p14").delay(1700).fadeIn(1000);
                $("#p13").delay(1000).fadeIn(1000);
                $("#d1").delay(1000).fadeIn(1000);

                $("#p12").delay(3000).fadeIn(1000);
                $("#p11").delay(6500).fadeIn(1000);

                writeData();
                
            }

        }
    });
});

// var aboutopen = document.getElementById("aboutopen");

document.getElementById("aboutopen").style.cursor = "pointer";
// $("aboutopen").click(function(){
//     $("aboutpage").fadeToggle();
// })
$(document).ready(function(){
    $("#aboutopen").click(function(){
      $("#placeholder").fadeToggle();
    });
    $("#work").click(function(){
          $("#circlework").fadeIn();
            setTimeout(function() { $("#circlework").hide(); }, 1000);
        });
    $("#family").click(function(){
        $("#circlefamily").fadeIn();
            setTimeout(function() { $("#circlefamily").hide(); }, 1000);
        });
    $("#pet").click(function(){
        $("#circlepet").fadeIn();
            setTimeout(function() { $("#circlepet").hide(); }, 1000);
        });
    $("#travel").click(function(){
        $("#circletravel").fadeIn();
            setTimeout(function() { $("#circletravel").hide(); }, 1000);
        });
    $("#downtime").click(function(){
        $("#circledowntime").fadeIn();
            setTimeout(function() { $("#circledowntime").hide(); }, 1000);
        });

  });



    
document.getElementById("work").onclick = function () {
    // document.getElementById("circlework").style.display = "inline";
    // document.getElementById("circlework").style.visibility = "visible";
    // document.getElementById("circlework").style.opacity = "1";
    // document.getElementById("circlework").style.transition = "opacity ease-out 0.3s";
    choice = "work";
    
    document.getElementById("work").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -.1rem; color: rgba(255,255,255)"
    document.getElementById("family").style.opacity = "0";
    document.getElementById("family").disabled=true;

    document.getElementById("pet").style.opacity = "0";
    document.getElementById("pet").disabled=true;

    document.getElementById("travel").style.opacity = "0";
    document.getElementById("travel").disabled=true;

    document.getElementById("downtime").style.opacity = "0";
    document.getElementById("downtime").disabled=true;

    document.querySelector(".priority").style = "top: -1rem";

    
}


document.getElementById("family").onclick = function () {
    // document.getElementById("circlework").style.display = "inline";
    // document.getElementById("circlefamily").style.visibility = "visible";
    // document.getElementById("circlefamily").style.opacity = "1";
    // document.getElementById("circlefamily").style.transition = "opacity ease-out 0.3s";
    choice = "family";

    document.getElementById("family").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -0.1rem; color: rgba(255,255,255)"
    document.getElementById("work").style.opacity = "0";
    document.getElementById("work").disabled=true;

    document.getElementById("pet").style.opacity = "0";
    document.getElementById("pet").disabled=true;

    document.getElementById("travel").style.opacity = "0";
    document.getElementById("travel").disabled=true;

    document.getElementById("downtime").style.opacity = "0";
    document.getElementById("downtime").disabled=true;

    document.querySelector(".priority").style = "top: -7rem";
}

document.getElementById("pet").onclick = function () {
    // document.getElementById("circlework").style.display = "inline";
    // document.getElementById("circlepet").style.visibility = "visible";
    // document.getElementById("circlepet").style.opacity = "1";
    // document.getElementById("circlepet").style.transition = "opacity ease-out 0.3s";

    choice = "pet";

    document.getElementById("pet").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -0.1rem; color: rgba(255,255,255)"
    document.getElementById("work").style.opacity = "0";
    document.getElementById("work").disabled=true;

    document.getElementById("family").style.opacity = "0";
    document.getElementById("family").disabled=true;

    document.getElementById("travel").style.opacity = "0";
    document.getElementById("travel").disabled=true;

    document.getElementById("downtime").style.opacity = "0";
    document.getElementById("downtime").disabled=true;

    document.querySelector(".priority").style = "top: -6rem";
}

document.getElementById("travel").onclick = function () {
    // document.getElementById("circlework").style.display = "inline";
    // document.getElementById("circletravel").style.visibility = "visible";
    // document.getElementById("circletravel").style.opacity = "1";
    // document.getElementById("circletravel").style.transition = "opacity ease-out 0.3s";
    choice = "travel";

    document.getElementById("travel").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -0.1rem; color: rgba(255,255,255)"
    document.getElementById("work").style.opacity = "0";
    document.getElementById("work").disabled=true;

    document.getElementById("family").style.opacity = "0";
    document.getElementById("family").disabled=true;

    document.getElementById("pet").style.opacity = "0";
    document.getElementById("pet").disabled=true;

    document.getElementById("downtime").style.opacity = "0";
    document.getElementById("downtime").disabled=true;

    document.querySelector(".priority").style = "top: -8rem";
}

document.getElementById("downtime").onclick = function () {
    // document.getElementById("circlework").style.display = "inline";
    // document.getElementById("circledowntime").style.visibility = "visible";
    // document.getElementById("circledowntime").style.opacity = "1";
    // document.getElementById("circledowntime").style.transition = "opacity ease-out 0.3s";
    choice = "downtime";

    document.getElementById("downtime").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -0.1rem; color: rgba(255,255,255)"
    document.getElementById("work").style.opacity = "0";
    document.getElementById("work").disabled=true;

    document.getElementById("family").style.opacity = "0";
    document.getElementById("family").disabled=true;

    document.getElementById("pet").style.opacity = "0";
    document.getElementById("pet").disabled=true;

    document.getElementById("travel").style.opacity = "0";
    document.getElementById("travel").disabled=true;

    document.querySelector(".priority").style = "top: -10.5rem; left: 46.5rem";
}