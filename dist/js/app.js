import barba from '@barba/core';
import barbaCss from '@barba/css';

// tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body');

var choice;
var aiga;
var myname;
var age;
var experience;
var citydata;
// gloabl hook

barba.hooks.before((data)=> {
    const background = data.current.container.dataset.background;
    body.style.setProperty('background', background);
})

barba.init({
    sync: true,
    views: [
    {
        namespace: "home",
        beforeEnter({next}){
            let script = document.createElement('script');
            script.src = "js/home.js";
            next.container.appendChild(script);

        }
    },
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
    },
    {
        namespace: "morning",
        beforeEnter({next}){
            let script = document.createElement('script');
            script.src = "js/morning.js";
            next.container.appendChild(script);
        }
    },
    {
        namespace: "midday",
        beforeEnter({next}){
            let script = document.createElement('script');
            script.src = "js/midday.js";
            next.container.appendChild(script);
        }
    },
    {
        namespace: "sunset",
        beforeEnter({next}){
            let script = document.createElement('script');
            script.src = "js/sunset.js";
            next.container.appendChild(script);
        }
    },
    {
        namespace: "night",
        beforeEnter({next}){
            let script = document.createElement('script');
            script.src = "js/night.js";
            next.container.appendChild(script);
        }
    },
    {
        namespace: "gallery",
        beforeEnter({next}){
            let script = document.createElement('script');
            script.src = "js/gallery.js";
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
                namespace: ['home','dawn', 'sunrise','morning','midday','sunset','night', 'gallery']
            },
            leave() {},
            enter() {}
        }
    ]
});


   
