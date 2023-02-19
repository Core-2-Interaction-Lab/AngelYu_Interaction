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
typeWriterWithDoors('I have refused them so often and left the out so much and did without them so continually that I have come finally to be indifferent to them. I do not now care whether you put them in or not but for a long time I felt very definitely about them and would have nothing to do with them.')
.then(() => typeWriterWithDoors("As I say commas are servile and they have no life of their own, and their use is not a use, it is a way of replacing one’s own interest and I do decidedly like to like my own interest my own interest in what I am doing. A comma by helping you along holding your coat for you and putting on your shoes keeps you from living your life as actively as you should lead it and to me for many years and I still do feel that way about it only now I do not pay as much attention to them, the use of them was positively degrading. Let me tell you what I feel and what I mean and what I felt and what I meant."));


function appendToChat(message) {
  const blockElement = document.createElement('p');
  blockElement.innerText = message;
  const chat = document.querySelector('.chat');

  chat.append(blockElement)
}

setTimeout(() => appendToChat('_You entered the comma room!',1000));
setTimeout(() => appendToChat('_A door appears!'), 6000);