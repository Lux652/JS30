document.addEventListener("DOMContentLoaded", () => {
  const secondHand = document.querySelector(".second-hand");
  const minHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minutesDegrees = (minutes / 60) * 360 + 90;
    const hoursDegrees = (hours / 12) * 360 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    //u svakom handu ako je 0 sekundi makni transition(none), inace stavi css svojstvo (postize se tak da napišem null)
    [secondHand, minHand, hourHand].forEach(
      el => (el.style.transition = seconds === 0 ? "none" : null)
    );
  }

  setInterval(setDate, 1000);
});
