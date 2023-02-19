function appendToChat(message) {
  const blockElement = document.createElement('p');
  blockElement.innerText = message;
  const chat = document.querySelector('.chat');

  chat.append(blockElement)
}

setTimeout(() => appendToChat('_Welcome back to the Great Hall!', 1000));
setTimeout(() => appendToChat('_The Banquet Hall is now open.', 2000));