const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const sndbtn = get('.send')
const callvoice = get('.call');
const callvideo = get('.videocall');
let users = false;
let error = false;
let info = false;
// const BOT_MSGS = [
//   "No one is online",

// ];
const Hatesppech = [
  ['user!!', 'hate speech1'],
  ['user!!', 'hate speech2'],
  ['user!!', 'hate speech3'],
  ['user!!', 'hate speech4'],
  ['user!!', 'hate speech5'],
  ['user!!', 'hate speech6'],
  ['user!!', 'hate speech7'],
  ['user!!', 'hate speech8'],
  ['user!!', 'hate speech9'],
]
const REELS = [
  ['ishmitdp', 'reel0'], ['aadeshdp', 'reel2'], ['omdp', 'reel3'], ['ketkidp', 'reel4'], ['samikshadp', 'reel5'],

  ['omdp', 'reel6'], ['pranalidp', 'reel'], ['advaitdp', 'reel8']


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
  document.querySelector('.send').style.display = 'none';
  //   botResponse();
});

sndbtn.addEventListener('click', event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";
  document.querySelector('.send').style.display = 'none';
  //   botResponse();
})

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(../assets/users/aayushdp.jpg)"></div>

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
  for (let i = 0; i < REELS.length; i++) {
    let reel = REELS[i];
    const msgHTML = `
    <div class="msg left-msg reelmsg" onclick='openreel(this)'  id='${i}'>
      <div class="msg-img" style="background-image: url(../assets/users/${reel[0]}.jpg)"></div>
  
      <div class="msg-reel">
        <div class="msg-text">
        <img id="video${i}" class='reel' src="../assets/img/${reel[1]}.jpg" playsinline loop>
        </div>
      </div
    </div>
    `;
    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
  }

}
loadreels().then(loadhatespeech());

function loadhatespeech() {
  for (let i = 0; i <= Hatesppech.length; i++) {
    var content = Hatesppech[i];
    const msgHTML = `
    <div class="msg left-msg hatespeech id="hatespeech${i}">
      <div class="msg-img" style="background-image: url(../assets/users/.jpg)"></div>

      <div class="msg-bubble">
        <div class="msg-text" ondblclick="likemsg(this)">${content[1]}</div>
      </div>
    </div>
  `;
    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
  }

}
function openreel(x) {
  alert('something went wrong');
}
function togglesend(x) {
  if (x.value != '') {
    document.querySelector('.send').style.display = 'block';
  }
  else {
    document.querySelector('.send').style.display = 'none';
  }
}
function opencamera(){
  let mediadevice = navigator.mediaDevices;
  mediadevice.getUserMedia({video:true,audio:true})
}
function openimage(){
  alert('error :(');
}