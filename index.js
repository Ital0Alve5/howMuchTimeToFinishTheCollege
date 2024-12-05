const endDate = new Date("2025-12-19");

const timer = document.querySelector(".timer");

const startTimer = () => {
  const currentDate = new Date();
  const diffInMillis = endDate - currentDate;
  const diffInSeconds = Math.floor(diffInMillis / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);

  const hours = diffInHours;
  const minutes = diffInMinutes % 60;
  const seconds = diffInSeconds % 60;

  timer.innerText = `${hours} ${hours === 1 ? "hora" : "horas"}, ${minutes} ${
    minutes === 1 ? "minuto" : "minutos"
  } e ${seconds} ${seconds === 1 ? "segundo" : "segundos"}`;
};

setInterval(startTimer, 1000);
