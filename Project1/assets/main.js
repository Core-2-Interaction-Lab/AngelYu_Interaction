function appendToChat(message) {
  const blockElement = document.createElement('p');
  blockElement.innerText = message;
  const chat = document.querySelector('.chat');

  chat.append(blockElement)
}

let added = false;

function togglePre() {
  const doors = document.querySelectorAll("#door, #door2");
  doors.forEach(door => door.classList.toggle("visible"));

  if(added) {
    return;
  }

  added = true;
  
  setTimeout(() => appendToChat('_You revealed the question and period door!',0));
  setTimeout(() => appendToChat('_The question door is slightly opened.'), 2000);
}

// scrollToBottom = element => element.scrollTo({top: element.scrollHeight, behavior:'smooth'})
// scrollToBottom( document.getElementById('chat') );
