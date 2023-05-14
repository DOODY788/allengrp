const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const callvoice = get('.call');
const callvideo = get('.videocall');
let users = false;
let error = false;
let info = false;

// const BOT_MSGS = [
//   "No one is online",

// ];
const BOT_MSGS = {
  'ishmitdp': 'hate speech1',
  'harshaldp': 'hate speech 2',
  'ishmitdp': 'hate speech 3',
  'advaitdp': 'hate speech 4',
  'ishmitdp': 'hate speech 5',
}
const REELS = [
  ['ishmitdp','reel1'],['shradhadp','reel2'],['omdp','reel3'],['ketkidp','reel4'],['samikshadp','reel5'],

  ['omdp','reel6'],['pranalidp','reel'],['advaitdp','reel8'],['ishmitdp','reel10'],['advaitdp','reel9'],

  ['nikhildp','reel12'],['shrishdp','reel11'],['veddp','reel15'],['pranalidp','reel20'],['shradhadp','reel14'],

  ['advaitdp','reel13'],['bhumidp','reel16'],['omkardp','reel17'],['harshaldp','reel18'],['bhaktidp','reel19'],

  ['ishmitdp','reel21'],['nachiketdp','reel30'],['nachiketdp','reel22'],['nachiketdp','reel24'],['pranalidp','reel25'],

  ['aayushidp','reel26'],['aayushidp','reel27'],['siddeshdp','reel'],['shradhadp','reel18'],['sarthakdp','reel29'],

  ['hardikdp','reel8'],['aayushidp','reel10'],['sohumdp','reel30'],['ketkidp','reel20'],['veddp','reel15'],


]

// Icons made by Freepik from www.flaticon.com
var BOT_IMG = null;
const PERSON_IMG = "../assets/users/aayushdp.jpg";
const BOT_NAME = "BOT";
const PERSON_NAME = "Sajad";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  //   botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(../assets/users/${img}.jpg)"></div>

      <div class="msg-bubble">
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const msgText = [];
  const userid = [];
  let i = 0;
  for (const [key, value] of Object.entries(BOT_MSGS)) {

    msgText.push(value);
    userid.push(key);
    // const delay = msgText.split(" ").length * 10;

  }

  setTimeout(() => {
    setInterval(() => {
      appendMessage(BOT_NAME, userid[i += 1], "left", msgText[i += 1]);
      console.log(msgText[i]);
      console.log(userid, msgText)
    }, 500)
  }, 1000)



}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function loadusers() {
  if (!users) {
    var x = document.createElement('iframe');
    x.width = '100%';
    x.height = '75%';
    x.id = 'users';
    x.src = '../SpecialCase/users.html';
    document.body.appendChild(x);
    x.style.position = 'absolute';
    x.style.top = '65px'
    x.style.left = 0
    x.style.border = '1px solid rgb(80,80,80)';
    users = true;
    msgerChat.style.opacity = '0.5';
  }

}
msgerChat.onclick = () => {
  reset();

}

callvoice.onclick = () => {
  loaderror();
}

function loaderror() {
  var x = document.querySelector('.callerror');
  x.style.top = '25%';
  error = true;
  msgerChat.style.opacity = '0.5';
}
function reset() {
  if (error) {
    document.querySelector('.callerror').style.top = '-25rem';
    error = false;
  }
  else if (users) {
    document.querySelector('#users').remove();
    users = false;
  }
  else if (info) {
    document.querySelector('.infotab').style.top = '-25rem'
    info = false;

  }
  msgerChat.style.opacity = '1';
}
function openinfo() {
  document.querySelector('.infotab').style.top = '25%';
  info = true;
  msgerChat.style.opacity = '0.5';
}
// botResponse()
function likemsg(elem) {
  var likedom = document.createElement('div');
  likedom.innerHTML = '❤️';
  likedom.setAttribute('class', 'likedom');
  elem.appendChild(likedom);
  console.log(this);
}
async function loadreels() {
  for(let i=0;i<REELS.length;i++){
    let reel = REELS[i];
    const msgHTML = `
    <div class="msg left-msg reelmsg" onclick="openreel(this)" id='${i}'>
      <div class="msg-img" style="background-image: url(../assets/users/${reel[0]}.jpg)"></div>
  
      <div class="msg-reel">
        <div class="msg-text">
        <video id="video${i}" class='reel' src="../assets/reels/${reel[1]}.mp4" playsinline loop>
        </div>
      </div
    </div>
    `;
    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
  }

}
loadreels().then(loadhatespeech('veddp','mcsala'));

function loadhatespeech(img,text){
  const msgHTML = `
    <div class="msg left-msg" >
      <div class="msg-img" style="background-image: url(../assets/users/${img}.jpg)"></div>

      <div class="msg-bubble">
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}
function openreel(x){
  console.log(x)
  x.setAttribute('class','fullreel')
  x.scrollIntoView();

  let item = document.getElementById("video"+x.id);
  item.play();
  let timerID;
  let counter = 0;

  let pressHoldEvent = new CustomEvent("pressHold");

  // Increase or decreae value to adjust how long
  // one should keep pressing down before the pressHold
  // event fires
  let pressHoldDuration = 20;

  // Listening for the mouse and touch events    
  item.addEventListener("mousedown", pressingDown, false);
  item.addEventListener("mouseup", notPressingDown, false);
  item.addEventListener("mouseleave", notPressingDown, false);

  item.addEventListener("touchstart", pressingDown, false);
  item.addEventListener("touchend", notPressingDown, false);

  // Listening for our custom pressHold event
  item.addEventListener("pressHold", doSomething, false);

  function pressingDown(e) {
    // Start the timer
    requestAnimationFrame(timer);

    e.preventDefault();

    console.log("Pressing!");
  }

  function notPressingDown(e) {
    // Stop the timer
    cancelAnimationFrame(timerID);
    counter = 0;

    item.play();
  }

  //
  // Runs at 60fps when you are pressing down
  //
  function timer() {
    console.log("Timer tick!");

    if (counter < pressHoldDuration) {
      timerID = requestAnimationFrame(timer);
      counter++;
    } else {
      console.log("Press threshold reached!");
      item.dispatchEvent(pressHoldEvent);
    }
  }

  function doSomething(e) {
    item.pause();
  }
  var back = document.createElement('button');
  back.innerHTML = 'Back';
  x.appendChild(back);
  back.onclick = ()=>{
    x.setAttribute('class','msg');
    x.classList.add('left-msg');
    x.classList.add('reelmsg');

  }
  back.setAttribute('class','back defbtn');
} 