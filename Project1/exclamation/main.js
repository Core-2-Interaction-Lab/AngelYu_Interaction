function typeWriter(inputString, delay = 40) {
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

typeWriter('Exclamation marks have the same difficulty and also quotation marks, they are unnecessary, they are ugly, they spoil the line of the writing or the printing and anyway what is the use, if you do not know that a question is a question what is the use of its being a question.');

function appendToChat(message) {
  const blockElement = document.createElement('p');
  blockElement.innerText = message;
  const chat = document.querySelector('.chat');

  chat.append(blockElement)
}

setTimeout(() => appendToChat('_You entered the exclamation room!',1000));
setTimeout(() => appendToChat('_You become confused which door to go through.'), 5000);
setTimeout(() => appendToChat('_There is light coming from the quotation room.'), 8000);