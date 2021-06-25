const socket = io();
let name;
let textarea = document.querySelector("#textarea");
let messageArea = document.querySelector(".message__area");
/*do {
    name = prompt('Please enter your name: ')
} while(!name)*/
name = "User";
textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    sendMessage(e.target.value);
  }
});
function sendMessage(message) {
  let msg = {
    user: name,
    message: message.trim(),
  };
  // Append
  appendMessage(msg, "outgoing");
  textarea.value = "";
  scrollToBottom();

  // Send to server
  socket.emit("message", msg);
}

function appendMessage(msg, type) {
  let mainDiv = document.createElement("div");
  let className = type;
  mainDiv.classList.add(className, "message");

  let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `;
  mainDiv.innerHTML = markup;
  messageArea.appendChild(mainDiv);
}

// Recieve messages
socket.on("message", (msg) => {
  appendMessage(msg, "incoming");
  scrollToBottom();
});

function scrollToBottom() {
  messageArea.scrollTop = messageArea.scrollHeight;
}

const chat_box = document.getElementById("chat-load");
const msg_area = document.getElementById("msg_area");
const text_area = document.getElementById("textarea");

chat_box.addEventListener("mouseover", (e) => {
  msg_area.style.height = "300px";
  text_area.display = none;
});

chat_box.addEventListener("mouseleave", (e) => {
  msg_area.style.height = "0";
  text_area.display = flex;
});
