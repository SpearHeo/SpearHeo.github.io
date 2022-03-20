const clockTitle = document.querySelector("h2#js-clock");
  
  function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clockTitle.innerText = `${hour}:${minute}:${second}`;
  
}
getClock();
setInterval(getClock, 1000);