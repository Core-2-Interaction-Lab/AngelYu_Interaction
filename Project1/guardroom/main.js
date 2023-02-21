function typeWriter(inputString, delay = 30) {
  const letters = inputString.split('');
  
  const scrollbox = document.getElementById('typewriter-box'); 
  
  const blockElement = document.createElement('p');

  let i = 0, length = letters.length;
	
  while(letters.length)
  {
    const span = document.createElement('span');
    
    span.innerText = letters.shift();
    
    span.classList.add('typewriter-letter');
    span.style.setProperty('--pos', ++i);
    span.style.setProperty('--delay', delay);
    
    blockElement.append(span);
  }
  
  scrollbox.append(blockElement);
  
  return new Promise(accept => setTimeout(accept, delay * length));
}

typeWriter('So there are the uninteresting things in punctuation uninteresting in a way that is perfectly obvious, and so we do not have to go any farther into that. There are besides dashes and dots, and these might be interesting spaces might be interesting. They might if one felt that way about them.');

function appendToChat(message) {
  const blockElement = document.createElement('p');
  blockElement.innerText = message;
  const chat = document.querySelector('.chat');

  chat.append(blockElement)
}

setTimeout(() => appendToChat('_You entered the guardroom!',1000));
setTimeout(() => appendToChat('_The door behind you locks.'), 5000);