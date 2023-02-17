function typeWriter(inputString, delay = 40) {
  // split the string into an array of chars
  const letters = inputString.split('');
  
  // grab a reference to the target element
  const scrollbox = document.getElementById('typewriter-box'); 
  
  // create a new <p> to hold the entry
  const blockElement = document.createElement('p');

  let i = 0, length = letters.length;
	
  while(letters.length)
  {
  	// create a new <span>
    const span = document.createElement('span');
    
    // remove the first letter in the array, put in in the <span>
    span.innerText = letters.shift();
    
    // set up the styles for the <span>
    span.classList.add('typewriter-letter');
    span.style.setProperty('--pos', ++i);
    span.style.setProperty('--delay', delay);
    
    // append the <span> to the <p>
    blockElement.append(span);
  }
  
  // apppend the <p> to the target element
  scrollbox.append(blockElement);
  
  // Create a new promise that accepts when all the letters have been shown
  return new Promise(accept => setTimeout(accept, delay * length));
}

typeWriter('So there are the uninteresting things in punctuation uninteresting in a way that is perfectly obvious, and so we do not have to go any farther into that. There are besides dashes and dots, and these might be interesting spaces might be interesting. They might if one felt that way about them.');