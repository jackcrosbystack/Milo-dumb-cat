//in js we choose stuff like the button

var pics = [
    "dumb-cat/IMG_0662.jpeg", 
    "dumb-cat/IMG_1609.jpeg",
    "dumb-cat/IMG_2728.jpeg",
    "dumb-cat/IMG_3095.jpeg",
    "dumb-cat/IMG_3103.jpeg",
    "dumb-cat/IMG_3643.jpeg",
    "dumb-cat/IMG_3647.jpeg",
    "dumb-cat/IMG_4389.jpeg",
    "dumb-cat/IMG_5419.jpeg",
    "dumb-cat/IMG_5428.jpeg",
    "dumb-cat/IMG_7038.jpeg",
    "dumb-cat/IMG_7659.jpeg",
    "dumb-cat/IMG_8946.jpeg", 
    "dumb-cat/IMG_9012.jpeg",
    "dumb-cat/IMG_9030.jpeg"
];

var btn = document.querySelector("button"); //searchs the HTML doc and looks for 1st instance of button 
var img = document.querySelector("img"); //searchs the HTML doc and looks for 1st instance of img. img tag, name of the tag 
var counter = 1; //start at one because when open the site it starts at 0 already 

btn.addEventListener("click", function(){ //what's inside brackets will run  whenever this button is clicked 
    img.src = pics[counter] //src from img tag from HTML
    counter++;
    if(counter >= pics.length){ //if counter is greater than or equal to the length of the array 
        counter = 0; //reset counter to 0
    }
});

