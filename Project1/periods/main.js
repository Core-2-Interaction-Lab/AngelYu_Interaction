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

typeWriter('What had periods to do with it. Inevitably no matter how completely I had to have writing go on, physically one had to again and again stop sometime and if one had to again and again stop sometime and if one had to again and again stop some time then periods had to exist. Beside I had always like the look of periods and I liked what they did. Stopping sometime did not really keep one from going on, it was nothing that interfered, it was only something that happened, and as it happened as a perfectly natural happening, I did not believe in periods and I used them. I really never stopped using them.')
.then(() => typeWriter("Beside that periods might later come to have a life of their own to commence breaking up things in arbitrary ways, that has happened lately with me in a poem I have written called Winning His Way, later I will read you a little of it. By the time I had written this poem about three years ago periods had come to have for me completely a life of their own. They could begin to act as they thought best and one might interrupt one’s writing with them that is not really interrupt one’s writing with them but one could come to stop arbitrarily stop at times in one’s writing and so they could be used and you could use them Periods could come to exist in this way and they could come in this way to have a life of their own. They did not serve you in any servile way as commas and colons and semi-colons do. Yes you do feel what I mean."))
.then(() => typeWriter("Periods have a life of their own a necessity of their own a feeling of their own a time of their own. And that feeling that life that necessity that time can express itself in an infinite variety that is the reason that I have always remained true to periods so much so that as I say recently I have felt that one could need them more than one had ever needed them."));