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
}

typeWriter('There are two different way of thinking about colons and semicolons you can think of them as commas and as such they are purely servile or you can think of them as periods and then using them can make you feel adventurous I can see that one might feel about them as periods but I myself never have, I began unfortunately to feel them as a comma and commas are servile they have no life of their own they are dependent upon use and convenience and they are put there just for practical purposes.')
.then(() => typeWriter("Semi-colons and colons had for me from the first completely this character the character that a comma has and not the character that a period has and therefore and definitely I have never used them. But now dimly and definitely I do see that they might well possibly they might have in them something of the character of the period and so it might have been an adventure to use them. I really do not think so. I think however lively they are or disguised they are they are definitely more comma than period and so really I cannot regret not having used them."))
.then(() => typeWriter("They are more powerful more imposing more pretentious than a comma but they are a comma all the same. They really have within them deeply within them fundamentally within them the comma nature. And now what does a comma do and what has it to do and why do I feel as I do about them. "));