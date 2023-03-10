function typeWriter(inputString, delay = 50) {
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
  
  // append the <p> to the target element
  scrollbox.append(blockElement);
  
  // Create a new promise that accepts when all the letters have been shown; coordinating asynchronous code
  return new Promise(accept => setTimeout(accept, delay * length));
}

typeWriter('The quick brown fox jumps over the lazy dog')
.then(() => typeWriter("Notice how it doesn't screw up when its typing a word thats close to the end of a line?"))
.then(() => typeWriter("Thats because all the words are present, I'm just unhiding each letter with a delay."))
.then(() => typeWriter("I can explain the concept of a Promise object and how I use it to line up the timings."));

