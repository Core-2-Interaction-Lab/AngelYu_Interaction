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

typeWriterWithDoors('Of these the one but the first and the most the completely most uninteresting is the question mark. The question mark is alright when it is all alone when it is used as a brand on cattle or when it could be used in decoration but connected with writing it is completely entirely completely uninteresting. It is evident that is you ask a question you ask a question but anybody who can read at all knows when a question is a question as it is written in writing. ')
.then(() => typeWriterWithDoors("Therefore I ask you therefore wherefore should one use the question mark. Beside it does not in its form go with ordinary printing and so it pleases neither the eye nor the ear and it is therefore like a noun, just an unnecessary name of something. "))
.then(() => typeWriterWithDoors("A question is a question, anybody can know that a question is a question and so why add to it the question mark when it is already there when the question is already there in the writing. "))
.then(() => typeWriterWithDoors("Therefore I never could bring myself to use a question mark, I always found it positively revolting, and now very few do use it."));

function appendToChat(message) {
  const blockElement = document.createElement('p');
  blockElement.innerText = message;
  const chat = document.querySelector('.chat');

  chat.append(blockElement)
}

setTimeout(() => appendToChat('_You entered the question room!',1000));
setTimeout(() => appendToChat('_There is a hidden door at the end of the room'), 8000);
setTimeout(() => appendToChat('_You unlocked the exclamation door!'), 9000);