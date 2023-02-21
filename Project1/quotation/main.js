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

typeWriter('The same thing is true of a quotation. When I first began writing I found it simply impossible to use question marks and quotation marks and exclamation points and now anybody sees it that way. Perhaps some day they will see it some other way but not at any rate anybody can and does see it that way.');

function appendToChat(message) {
  const blockElement = document.createElement('p');
  blockElement.innerText = message;
  const chat = document.querySelector('.chat');

  chat.append(blockElement)
}

setTimeout(() => appendToChat('_You entered the quotation room!',1000));
setTimeout(() => appendToChat('_This room is a dead end.'), 3000);
