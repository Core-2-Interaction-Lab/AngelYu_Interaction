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

typeWriter('So that is the way I felt about punctuation in prose, in poetry it is a little different but more so and later I will go into that. But that is the way I felt about punctuation in prose.')

