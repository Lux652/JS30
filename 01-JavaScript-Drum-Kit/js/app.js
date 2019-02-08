document.addEventListener("DOMContentLoaded", () => {

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //preskoči ak nije transform
    this.classList.remove('playing');
  }

  function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //zaustavlja funkciju
    audio.currentTime = 0; //vraća na početak audio
    audio.play();
    key.classList.add("playing");
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  window.addEventListener("keydown", playSound );
});
