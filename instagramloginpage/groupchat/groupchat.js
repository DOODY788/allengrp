const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const callvoice = get('.call');
const callvideo = get('.videocall');
let users = false;
let error = false;
let info = false;

const BOT_MSGS = [
  "No one is online",

];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
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
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
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
function reset(){
  if (error) {
    document.querySelector('.callerror').style.top = '-25rem';
    error = false;
  }
  else if (users) {
    document.querySelector('#users').remove();
    users = false;
  }
  else if(info){
    document.querySelector('.infotab').style.top = '-25rem'
    info = false;

  }
  msgerChat.style.opacity = '1';
}
function openinfo(){
  document.querySelector('.infotab').style.top = '25%';
  info= true;
  msgerChat.style.opacity = '0.5';
}