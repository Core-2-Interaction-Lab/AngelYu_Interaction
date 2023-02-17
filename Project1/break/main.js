function typeWriter(inputString, delay = 30) {
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

typeWriter('I have had a long and complicated life with all these. ')
.then(() => typeWriter("Let us begin with these I use the least first and these are colons and semi-colons, one might add to these commas."))
.then(() => typeWriter("When I first began writing, I felt that writing should go on, I still do feel that it should go on but when I first began writing I was completely possessed by the necessity that writing should go on and on and if writing should go on what had colons and commas to do with it, what had periods to do with it what had small letters and capitals to do with it to do with writing going on which was at that time the most profound need I had in connection with writing. What had colons and semi-colons to do with it what had commas to do with it what had periods to do with it."));