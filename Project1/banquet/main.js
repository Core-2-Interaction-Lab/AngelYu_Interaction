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

typeWriter('Let us begin with these I use the least first and these are colons and semi-colons, one might add to these commas.')
.then(() => typeWriter("When I first began writing, I felt that writing should go on, I still do feel that it should go on but when I first began writing I was completely possessed by the necessity that writing should go on and on and if writing should go on what had colons and commas to do with it, what had periods to do with it what had small letters and capitals to do with it to do with writing going on which was at that time the most profound need I had in connection with writing. What had colons and semi-colons to do with it what had commas to do with it what had periods to do with it."));

function appendToChat(message) {
  const blockElement = document.createElement('p');
  blockElement.innerText = message;
  const chat = document.querySelector('.chat');

  chat.append(blockElement)
}

setTimeout(() => appendToChat('_You entered the Banquet Hall!',1000));
setTimeout(() => appendToChat('_There is another door down the hall.',3000));
setTimeout(() => appendToChat('_You are confused which door to go through.'), 5000);