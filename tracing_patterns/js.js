const OFFSETX = 150;
const OFFSETY = 100;
const SPEED = 5;
const DURATION = 100;


let XFlag = 0;
let YFlag = 0;

let scrollingX = false;
let scrollingY = false;

let startX;
let startY;

/*basically, request the animation frame when the mouse first moves into the scrolling zone.
scroll for like 1-2 seconds, and then check to see if the mouse is still on the border (which is updated whenever the mouse moves)
if it is, reset the timer and keep requesting frames, otherwise, stop.
window.scroll(window.scrollX + SPEED, window.scrollY, "smooth");
window.scroll(window.scrollX - SPEED, window.scrollY, "smooth");
window.scroll(window.scrollX, window.scrollY + SPEED, "smooth");
window.scroll(window.scrollX, window.scrollY - SPEED, "smooth");
 */

document.addEventListener("mousemove", (event=>{

    let body = document.body;
    let html = document.documentElement;
    let documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    
    if (event.clientX >= window.innerWidth - OFFSETX ){
	console.log("scroll right");
	XFlag = 1;
    }
    else if (event.clientX < OFFSETX){
	console.log("scroll left");
	XFlag = -1;
    }
    else{
	console.log("left scrolling area");
	XFlag = 0;
    }

    if (event.clientY >= window.innerHeight - OFFSETY) {

	YFlag = 1;
    }
    else if (event.clientY < OFFSETY){
	console.log("scroll up");
	YFlag = -1;
    }

    else {
	console.log("left scroll area");
	YFlag = 0;
    }

    if (!(scrollingX) && XFlag != 0){
	
	window.scroll(window.scrollX + SPEED * XFlag, window.scrollY);
	scrollingX = true;
    }

    if (!(scrollingY) && YFlag != 0){
	window.scroll(window.scrollX, window.scrollY + SPEED * YFlag);
	scrollingY = true;
    }
}));

document.addEventListener("scroll", (event)=>{
    console.log("scrolled");
    if (YFlag != 0){
	window.scroll(window.scrollX, window.scrollY + SPEED* YFlag);
    }
    else{
	scrollingY = false;
    }
    if (XFlag != 0){
	window.scroll(window.scrollX + SPEED * XFlag, window.scrollY);
    }
    else{
	scrollingX = false;
    }
})

function onFootstepMouseover(event){
    //console.log("moused over" + event.target.innerHTML);
    event.target.style.color = "black";
    event.target.style.textDecoration = "underline";
    event.target.style.fontFamily = "Public Sans, sans-serif";
    event.target.style.zIndex = "3";
    event.target.style.fontWeight="550";
    //event.target.style.backgroundColor="olive";
    event.target.style.textDecorationColor = "black";
    event.target.style.textDecorationStyle = "double";
    event.target.style.padding = "3px";
}

window.addEventListener("load", (event)=>{
    console.log("window loaded");
    let footsteps = document.getElementsByClassName("footsteps");
    for (step in footsteps){
	//console.log(footsteps.item(step);
	footsteps.item(step).addEventListener("mouseenter", onFootstepMouseover);
    }
});
