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

typeWriter('The same thing is true of a quotation. When I first began writing I found it simply impossible to use question marks and quotation marks and exclamation points and now anybody sees it that way. Perhaps some day they will see it some other way but not at any rate anybody can and does see it that way.');
