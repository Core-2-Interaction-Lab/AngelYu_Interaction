function typeWriterWithDoors(inputString, delay = 20) {
  const letters = inputString.split('');
  
  const scrollbox = document.getElementById('typewriter-box'); 
  
  const blockElement = document.createElement('p');

  let i = 0, length = letters.length;
	
  while(letters.length)
  {
    const span = document.createElement('span');
    
    span.innerText = letters.shift();
    
    span.classList.add('typewriter-letter');
    span.style.setProperty('--pos', ++i);
    span.style.setProperty('--delay', delay);
    
    blockElement.append(span);
  }
  
  scrollbox.append(blockElement);
  
  return new Promise(accept => setTimeout(() => {
    const doors = document.getElementById('doors');
    doors.style.display = 'block';
    accept();
  }, delay * length));
}

typeWriterWithDoors('What had periods to do with it. Inevitably no matter how completely I had to have writing go on, physically one had to again and again stop sometime and if one had to again and again stop sometime and if one had to again and again stop some time then periods had to exist. Beside I had always like the look of periods and I liked what they did. Stopping sometime did not really keep one from going on, it was nothing that interfered, it was only something that happened, and as it happened as a perfectly natural happening, I did not believe in periods and I used them. I really never stopped using them.')
.then(() => typeWriterWithDoors("Beside that periods might later come to have a life of their own to commence breaking up things in arbitrary ways, that has happened lately with me in a poem I have written called Winning His Way, later I will read you a little of it. By the time I had written this poem about three years ago periods had come to have for me completely a life of their own. They could begin to act as they thought best and one might interrupt one’s writing with them that is not really interrupt one’s writing with them but one could come to stop arbitrarily stop at times in one’s writing and so they could be used and you could use them Periods could come to exist in this way and they could come in this way to have a life of their own. They did not serve you in any servile way as commas and colons and semi-colons do. Yes you do feel what I mean."))
.then(() => typeWriterWithDoors("Periods have a life of their own a necessity of their own a feeling of their own a time of their own. And that feeling that life that necessity that time can express itself in an infinite variety that is the reason that I have always remained true to periods so much so that as I say recently I have felt that one could need them more than one had ever needed them."));


function appendToChat(message) {
  const blockElement = document.createElement('p');
  blockElement.innerText = message;
  const chat = document.querySelector('.chat');

  chat.append(blockElement)
}

setTimeout(() => appendToChat('_You entered the period room!',1000));
setTimeout(() => appendToChat('_The text is fast!'), 4000);
setTimeout(() => appendToChat('_Doors appear at the end of the room!'), 12000);
setTimeout(() => appendToChat('_You notice a lot of run-ons.'), 20000);