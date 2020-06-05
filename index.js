function getRandomPosition(element) {
    var x = window.innerHeight-50;
    var y = window.innerWidth-50;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
  }

  function removeTransition(e) {
    // if(e.propertyName !== 'transform') return //skip if not a prop name
    e.target.classList.remove('playing');
    e.target.classList.remove('fade-out');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);    
    if(!audio) return; // invalid key is played

    var coords = getRandomPosition(key);
    // const note = document.querySelector(`.sound[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    key.style.top = coords[0] + 'px';
    key.style.left = coords[1] + 'px';

    audio.currentTime = 0; // rewind to start, allows key replay
    audio.play();
    key.classList.add('fade-out');
  }


  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('animationend', removeTransition));
  window.addEventListener('keydown', playSound);
