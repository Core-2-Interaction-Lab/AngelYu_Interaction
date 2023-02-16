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

typeWriter('This page was written with my knowledge of HTML and CSS, using flexbox for different aspect ratios and keep organization of my texts. ')
.then(() => typeWriter("The website is entirely in black and white with a subtle secondary color. My theme is an old school dungeon-crawler game, exploring different rooms that reveal part of the text. "))
.then(() => typeWriter(" My twist is that you will be exploring the text-dungeon in first-person--walking into rooms and interacting with certain objects to reveal the text. There will be dead-ends in the dungeon to help communicate the end of a paragraph, and also a final room or an escape to communicate the end of the text. "))
.then(() => typeWriter("''They could begin to act as they thought best and one might interrupt one’s writing with them that is not really interrupt one’s writing with them but one could come to stop arbitrarily stop at times in one’s writing and so they could be used and you could use them Periods could come to exist in this way and they could come in this way to have a life of their own.''"));
