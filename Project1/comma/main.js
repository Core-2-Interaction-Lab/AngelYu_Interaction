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

typeWriter('What does a comma do.')
.then(() => typeWriter("I have refused them so often and left the out so much and did without them so continually that I have come finally to be indifferent to them. I do not now care whether you put them in or not but for a long time I felt very definitely about them and would have nothing to do with them."))
.then(() => typeWriter("As I say commas are servile and they have no life of their own, and their use is not a use, it is a way of replacing one’s own interest and I do decidedly like to like my own interest my own interest in what I am doing. A comma by helping you along holding your coat for you and putting on your shoes keeps you from living your life as actively as you should lead it and to me for many years and I still do feel that way about it only now I do not pay as much attention to them, the use of them was positively degrading. Let me tell you what I feel and what I mean and what I felt and what I meant."));