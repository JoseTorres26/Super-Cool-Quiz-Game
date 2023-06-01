const button = document.querySelectorAll('.button');
const startButton = document.getElementById('start')
const page = document.querySelectorAll('.page');
const timer = document.getElementById('timer');
let timeCount = 60;
let time;

button.forEach(function(button) {
 button.addEventListener('click', function() {
   const sections = button.getAttribute('data-target').split(' ');

   sections.forEach(function(section) {
     const targetSection = document.getElementById(section);
     const currentState = targetSection.getAttribute('data-state');

     if (currentState === 'hidden') {
       targetSection.setAttribute('data-state', 'visible');
     } else {
       targetSection.setAttribute('data-state', 'hidden');
     }
  });
 });
});

startButton.addEventListener('click', function() {
  start();
});

function start() {
timer.textContent = timeCount;
  startTimer()
}

function startTimer() {
  time = setInterval(function() {
    timeCount--;
    timer.textContent = timeCount;

    if (timeCount <= 0) { 
      clearInterval(time);
        showResults();
      }
    }, 1000);
  };

  function showResults() {
    const hide = document.querySelectorAll('.page')
    hide.forEach(section => {
      section.setAttribute('data-state', 'hidden');
    });

    const results = document.getElementById('results');
    results.setAttribute('data-state', 'visible');
  }