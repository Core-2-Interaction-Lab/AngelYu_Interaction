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

typeWriter('When I was writing those long sentences of The Making of Americans, verbs active present verbs with long dependent adverbial clauses became a passion with me. I have told you that I recognize verbs and adverbs aided by prepositions and conjunctions with pronouns as possessing the whole of the active life of writing. ')
.then(() => typeWriter("Complications make eventually for simplicity and therefore I have always liked dependent adverbial clauses. I have like dependent adverbial clauses because of their variety of dependence and independence. You can see how loving the intensity of complication of these things that commas would be degrading. Why if you want the pleasure of concentrating on the final simplicity of excessive complication would you want any artificial aid to bring about that simplicity. Do you see now why I feel about that simplicity. Do you see now why I feel about the comma as I did and as I do."))
.then(() => typeWriter("Think about anything you really like to do and you will see what I mean. "))
.then(() => typeWriter("When it gets really difficult you want to disentangle rather than to cut the knot, at least of anybody feels who is working with any thread, so anybody feels who is working with any tool so anybody feels who is writing any sentence or reading it after it has been written. And what does a comma do, a comma does nothing but make easy a thing that if you like it enough is easy enough without the comma. A long complicated sentence should force itself upon you, make you know yourself knowing it and the comma, well at the most a comma is a poor period that lets you stop and take a breath but if you want to take a breath you ought to know yourself that you want to take a breath. It is not like stopping altogether has something to do with going on, but taking a breath well you are always taking a breath and why emphasize one breath rather than another breath. Anyway that is the way I felt about it and I felt that about it very very strongly. And so I almost never used a comma. The longer, the more complicated the sentence the greater the number of the same kinds of words I had following one after another, the more the very more I had of them the more I felt the passionate need of their taking care of themselves by themselves and not helping them, and thereby enfeebling them by putting in a comma."))
.then(() => typeWriter("So that is the way I felt about punctuation in prose, in poetry it is a little different but more so and later I will go into that. But that is the way I felt about punctuation in prose."));