//Window objects
x = 6;  // global variable created
//<< 6

window.x // same variable can be accessed as a property of the window object
//<< 6

// both variables are exactly the same
window.x === x;
//<< true

//Should not use refering to the global the window object
if (x) { 
    // do something
    }

//If the cod is decided falso, then it will not execute
if (window.x) {
    // do something
    }

//EXAMPLES OF FUNCTIONS OF GLOBAL VARIABLES 
window.parseInt(4.2);
//<< 4

window.isNaN(4.2);
//<< false

//Dialogs
//Prnts into the screen
window.alert('Hello');
//<< undefined

//stops the execution, and shows a confirmation message
window.confirm('Do you wish to continue?');
//<< undefined

//Stops the execution of the program, and ashows the message passed as paramenter
window.prompt('Please enter your name:');

//BROWSER INFORMATION
//Which Browser? 


//This function shows the current version of the browser
window.navigator.userAgent
//<< Current version of the Broser
//Should not be trusted as it can be altered

//Location, Location, Location

//Contains information about the current location of the website
window.location.href 
//<< "https://www.sitepoint.com/premium/books/javascript-novice-to-ninja"


//This can be altered, as seen on the next line
window.location.href = 'https://www.sitepoint.com/javascript/'
//<< "https://www.sitepoint.com/javascript/"

//Shows the protocol
window.location.protocol 
//<< "https:"

//Shows where site is hosted
window.location.host
//<< "www.sitepoint.com"

//Returns the port (returns empty if not specified)
window.location.port
//<< ""

//Returns a query 
window.location.search
//<< "?q=javascript&limit=24&offset=0&page=1&
//content_types[]=All&slugs[]=all&states[]=available&order="

//Returns the origin 
window.location.origin
//<< "https://www.sitepoint.com"

//Can be used to load another source provided by URL
window.location.assign('https://www.sitepoint.com/')

//Returns string containing the whole URL
window.location.toString();
//<< "https://www.sitepoint.com/javascript/"

//BROWSER HISTORY

window.history.length // sHOWS THE size of the browser history

//This can be used to get a specific page, where 0 = first page
window.history.go(1); // goes forward 1 page
window.history.go(0); // reloads the current page
window.history.go(-1); // goes back 1 page

//CONTROLLING WINDOWS 
//window.open() - opens the attribute
//const popup = window.open('https://sitepoint.com','
//SitePoint','width=400,height=400,resizable=yes');

//Close can be used to kill a window
popup.close();

//Moves the window to the axis specified by move to()
window.moveTo(0,0); // will move the window to the top-left corner of the screen

//Resizes windows
window.resizeTo(600,400);

//SCREEN INFORMATION
window.screen.height
//<< 1024

window.screen.width
//<< 1280

//rETURN HEIGHT AND WIDTH WITHOUT GOing throught the browser
window.screen.availWidth
<< 1280

window.screen.availHeight
<< 995

//Finds color depth from the user's monitor
window.screen.colorDepth;
//<< 24

//DOCUMENT OBJECT
//every window contains a window object
//document.write('Hello, world!');
//This would replace the whole document by 'Hello, world'

//This would simply embed the Hello, world inside of the document in the script
<h1>
    <script>document.write("Hello, world!")</script>
</h1>

//COOKIES
//cookies are small documents that can be sent from request to another
//A cookie might look like the following
//"name=Superman; hero=true; city=Metropolis"

//CREATE COOKIES
//dOCUMENT.cookies will not overwrite, it will only append
document.cookie = 'name=Superman';
//<< "name=Superman"
document.cookie = 'hero=true';
//<< "hero=true"

document.cookie = 'city=Metropolis';
//<< "city=Metropolis"

//Changing the cookie values. 
//In order to change the values 
//one has to change the actual values
document.cookie = 'name=Batman'
//<< "name=Batman"
document.cookie = 'city=Gotham'
//<< "city=Gotham"

//READING COOKIES
document.cookie;
//<< "name=Batman; hero=true; city=Gotham"

const cookies = document.cookie.split("; ");
for (crumb of cookies){
    const [key,value] = crumb.split("=");
    console.log(`The value of ${key} is ${value}`);
}
//<< The value of name is Batman
//The value of hero is true
//The value of city is Gotham

//COOkie expery dates
const expiryDate = new Date(); 
const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
expiryDate.setTime(tomorrow);

document.cookie = `name=Batman; expires=${ expiryDate.toUTCString()}`;
//MAX AGE LIMITS THE EXPIRATION DATE ON coolkies
document.cookie = 'name=Batman; max-age=86400' // 86400 secs = 1 day

//Path of domain of cookies 
//Using path=/' one can change the path of the cookie
document.cookie = 'name=Batman; path=/'

//SECURE COOKIES
document.cookie = 'name=Batman; domain=sitepoint.com';
//Secures the cookies is sent through safe HTTP
document.cookie = 'name=Batman; secure';

//DELETING COOKIES
//Just set it to expire sometime in the past
document.cookie = 'name=Batman; expires=Thu, 01 Jan 1970 00:00:01 GMT';

//Timing functions
//TIMEOUT CAN BE USED TO TIME WHEN THE FUNCTION IS GOING TO BE EXECUTED
//accepts a callback function
window.setTimeout( () => alert("Time's Up!"), 3000);
//<< 4


window.clearTimeout(5);
//<< undefined

//SETINTERVAL()

function chant(){ console.log('Beetlejuice'); }

//aTTRIBUTE THE INTERVAL TO A VARIABLE
const summon = window.setInterval(chant,1000);
//wILL SHOW THE MESSAGEbeetlejuice every 1000 milliseconds

//////////////////////////////////////////////////////
//READING 2

//eXAMPLES USING THE LOCALG STORAGE
localStorage.getItem('name'); 
//<< "Walter White"

localStorage.name = 'Heisenberg'; 

console.log(localStorage.name); 
//<< "Heisenberg";

// Operations with the local storage
localStorage.removeItem('name');
delete localStorage.name;
localStorage.clear();

//By using JSON we can virtually add anything to the Local storage
//localStorage.setItem('superman', JSON.stringify(hero);

//GEolocation

//This api can be used to get someon's position, or a device's position
navigator.geolocation.getCurrentPosition(youAreHere);

//The object is passed to youAreHere function
function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`); 
}

//This will call a callback function every time the position is updated
const id = navigator.geolocation.watchPosition(youAreHere);

//Stops the callback from being called
navigator.geolocation.clearWatch(id);

//Web Workers
//allow proccesses to work on the background

//creates a new worked
const worker = new Worker('task.js');

//workers use the concept of messages
// to communicate back and forth between the main script

//post messages will post these between workers
worker.postMessage('Hello');


self.postMessage('Finished');


//Th message can be dealt with through an event listener
worker.addEventListener('message', (event) => {
    console.log(event.data);
}, false);

//A worker canbe stopped with a terminate
worker.terminate();

//closes the method
self.close();

//WEBSOCKETS

//USES https protocols to communicate back and forth
//Websocket allows two way communication with the server


//NOTIFICATIONS

//GETS PERMISSIONS GRANTED BY THE USER
if(window.Notification) {
    Notification.requestPermission();
}

//creates a new notification, as shown below
if(window.Notification) {
    Notification.requestPermission()
    .then((permission) => {
        if(Notification.permission === 'granted') {
        new Notification('Hello JavaScript!');
        }
    });
}

//Produces a hello Javascript

const notification = new Notification('JavaScript: Novice to Ninja',{
    body: 'The new book from SitePoint',
    icon: 'sitepointlogo.png'
});

//closes the notification
notification.close();

notification.addEventListener('click', () => {
    window.open('https://sitepoint.com')
    }, false);

//Multimedia
//Audioclips can be insterted
//<audio src='/song.mp3' controls>
//Your browser does not support the audio element.
//</audio>
//Audoios
//<video src='http://movie.mp4' controls>
//    Your browser does not support the video element.
//</video>
//videos

//references the videl elemnt 
//const video = document.getElementsByTagName('video')[0];

video.play();
video.pause();
video.volume = 0.9;
video.muted = true;
video.currentTime += 10; // jumps forward 10 seconds
video.playbackRate = 8; // fast-forward at 8 times as fast
video.loop = true;
video.duration;
//<< 52.209

//OTHER APIs

//Drawing with canvas
const context = canvasElement.getContext('2d');

context.fillStyle = "#0000cc"; // a blue fill color 
context.strokeStyle = "#ccc"; // a gray stroke color

context.lineWidth = 4;

context.fillRect(10,10,100,50);
context.strokeRect(10,100,100,50);

context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();

context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();


context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);

//Shims and polyfills

//Shim adds adds missing functionality to the browser. 
//polyfill achievers the saome functionality while also using API commands

