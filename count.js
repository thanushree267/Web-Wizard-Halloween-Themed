function updateCountdown() {
  const now = new Date();
  const halloween = new Date(now.getFullYear(), 9, 31); // October 31st

  // If Halloween has already passed this year, set for next year
  if (now > halloween) {
    halloween.setFullYear(halloween.getFullYear() + 1);
  }

  const timeDifference = halloween - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days + 'd';
  document.getElementById('hours').textContent = hours + 'h';
  document.getElementById('minutes').textContent = minutes + 'm';
  document.getElementById('seconds').textContent = seconds + 's';
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately
updateCountdown();