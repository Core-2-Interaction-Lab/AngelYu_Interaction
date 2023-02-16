function togglePre() {
    const doors = document.querySelectorAll("#door, #door2");
    doors.forEach(door => door.classList.toggle("hidden"));
  }
  

  scrollToBottom = element => element.scrollTo({top: element.scrollHeight, behavior:'smooth'})
  scrollToBottom( document.getElementById('chat') );