import barba from '@barba/core';
import barbaCss from '@barba/css';

// tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body');

// window.scroll({
//   top: 0;
//   left: 1000;
//   behavior: 'smooth';
// })




// gloabl hook

barba.hooks.before((data)=> {
    const background = data.current.container.dataset.background;
    body.style.setProperty('background', background);
    console.log(background)
})

barba.init({
    sync: true,
    views: [
    {
        namespace: "dawn",
        beforeEnter({next}){
            let script = document.createElement('script');
            script.src = "js/dawn.js";
            next.container.appendChild(script);

        }
    },
    {
        namespace: "sunrise",
        beforeEnter({next}){
            let script = document.createElement('script');
            script.src = "js/sunrise.js";
            next.container.appendChild(script);
        }




    }

    ],
    transitions: [
        {   
            name: "home",
            beforeOnce(){},
            once() {},
            afterOnce() {}
        }, {
            // name: 'dawn',
            to: {
                namespace: ['home','dawn', 'sunrise','morning','midday','sunset','night']
            },
            leave() {},
            enter() {}
        }
    ]
});




// // document.getElementById("testbtn").onclick = function () {
// //     window.scrollBy({
// //         top: 100,
// //         left: 100,
// //         behavior: 'smooth'
// //       });
// // }


// // $(document).ready(function() {
// //     $('html, body, *').mousewheel(function(e, delta) {
// //     this.scrollLeft -= (500*delta);
// //     e.preventDefault();
// //     });
// // });


// // document.getElementById("one").addEventListener("wheel", toAge);

// // function toAge() {
// //     var elemnt = document.getElementById("two");
// //     elemnt.scrollIntoView();
// //     // elemnt.scrollIntoView({
// //     //     behavior: 'smooth'
// //     // });
// //     window.scrollBy({ 
// //         top: 0, // could be negative value
// //         left: 1000, 
// //         // behavior: 'smooth' 
// //       });
// // }

// // function zoom(event) {
// //     event.preventDefault();
  
// //     scale += event.deltaY * -0.01;
  
// //     // Restrict scale
// //     scale = Math.min(Math.max(.125, scale), 4);
  
// //     // Apply scale transform
// //     el.style.transform = `scale(${scale})`;
// //   }
  
// //   let scale = 1;
// //   const el = document.querySelector('div');
// //   el.onwheel = zoom;



// // function toAge(event) {
// //     event.preventDefault();
// //     this.scrollTop -= (500*event.deltaY);

// // }

// // const el = documnet.querySelector('*');
// // el.onwheel = toAge;





// // aboutopen.onclick = function () {
// //     document.getElementById("aboutpage").fadeIn(500);

// //     // document.getElementById("aboutpage").style.visibility = "visible";
// //     // document.getElementById("placeholder").style.opacity = "1";
// //     // document.getElementById("placeholder").style.transition = "opacity ease-out 0.5s";
// //     // aboutopen.id = "aboutclose";
// // }


// // var aboutclose = document.getElementById("aboutclose");

// // aboutclose.style.cursor = "pointer";
// // aboutclose.onclick = function () {
// //     document.getElementById("placeholder").style.opacity = "0";
// //     document.getElementById("placeholder").style.transition = "opacity ease-in 0.5s";
// //     document.getElementById("aboutpage").style.visibility = "hidden";

// //     // aboutclose.id = "aboutopen";
// // }

// body.onwheel = showdY(event);

// function showdY(event) {
//     var y = event.deltaY;
//     alert(y);
// }


// /////////sunrise


// // document.getElementById("nextplace").onclick = function () {
// //     // document.getElementById("circlework").style.display = "inline";
// //     // document.getElementById("circlefamily").style.visibility = "visible";
// //     // document.getElementById("circlefamily").style.opacity = "1";
// //     // document.getElementById("circlefamily").style.transition = "opacity ease-out 0.3s";
// //     document.getElementById("nextplace").style = "font-family: duos-brush, sans-serif; font-weight: 300; font-size: 4rem; letter-spacing: -0.1rem; color: rgba(255,255,255)"
// //     document.getElementById("livehere").style.opacity = "0";

// //     document.querySelector(".choice1").style = "top: -7rem";
// // }


   
