setTimeout(() => {
  function typeWriterWithDoors(inputString, delay = 40) {
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

  typeWriterWithDoors('When it gets really difficult you want to disentangle rather than to cut the knot, at least of anybody feels who is working with any thread, so anybody feels who is working with any tool so anybody feels who is writing any sentence or reading it after it has been written. And what does a comma do, a comma does nothing but make easy a thing that if you like it enough is easy enough without the comma.')
  .then(() => typeWriterWithDoors("A long complicated sentence should force itself upon you, make you know yourself knowing it and the comma, well at the most a comma is a poor period that lets you stop and take a breath but if you want to take a breath you ought to know yourself that you want to take a breath. It is not like stopping altogether has something to do with going on, but taking a breath well you are always taking a breath and why emphasize one breath rather than another breath."))
  .then(() => typeWriterWithDoors("Anyway that is the way I felt about it and I felt that about it very very strongly. And so I almost never used a comma. The longer, the more complicated the sentence the greater the number of the same kinds of words I had following one after another, the more the very more I had of them the more I felt the passionate need of their taking care of themselves by themselves and not helping them, and thereby enfeebling them by putting in a comma."));
}, 8000); 

function appendToChat(message) {
  const blockElement = document.createElement('p');
  blockElement.innerText = message;
  const chat = document.querySelector('.chat');

  chat.append(blockElement)
}

setTimeout(() => appendToChat('_You entered the Throne room!',1000));
setTimeout(() => appendToChat('_The author is talking!'), 8000);
setTimeout(() => appendToChat('_A door appears!'), 25000);