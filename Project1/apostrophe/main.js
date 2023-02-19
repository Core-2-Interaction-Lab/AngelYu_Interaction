
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

typeWriter('One other little punctuation mark one can have feelings about and that is the apostrophe for possession. Well feel as you like about that, I can see and I do see that for many that for some the possessive case apostrophe has a gentle tender insinuation that makes it very difficult to definitely decide to do without it. One does do without it, I do, I mostly always do, but I cannot deny that from time to time I feel myself having regrets and from time to time I put it in to make the possessive case.')
.then(() => typeWriter("I absolutely do not like it and leaving it out I feel no regret, there it is unnecessary and not ornamental but inside a word and its s well perhaps, perhaps it does appeal by its weakness to your weakness. At least at any rate from time to time I do find myself letting it alone if it has come in and sometimes it has come in. I cannot positively deny but that I do from time to time let it come in. "));


function appendToChat(message) {
  const blockElement = document.createElement('p');
  blockElement.innerText = message;
  const chat = document.querySelector('.chat');

  chat.append(blockElement)
}

setTimeout(() => appendToChat('_You entered the apostrophe room!',1000));
setTimeout(() => appendToChat('_This room is a dead end!'), 3000);
