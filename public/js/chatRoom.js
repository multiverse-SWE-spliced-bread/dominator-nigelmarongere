const button = document.getElementById('send-btn');
const msg = document.getElementById('msg');
const addMsg = (ev) => {
    const newMsg = document.createElement('p');
    newMsg.innerHTML = msg.value;
    const section = document.getElementById('chat');
    section.appendChild(newMsg);
    msg.value = '';
}
button.addEventListener('click', addMsg);