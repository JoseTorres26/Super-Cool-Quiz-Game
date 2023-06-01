const buttons = document.querySelectorAll('.button');
const startButton = document.getElementById('start')
const page = document.querySelectorAll('.page');
const timer = document.getElementById('timer');
const endButton = document.querySelectorAll('.final');
const wrongAnswer = document.querySelectorAll('.wrong');
const correctAnswer = document.querySelectorAll('.correct');
let timeCount = 60;
let time;

function toggle(sectionId, isVisible) {
  const section = document.getElementById(sectionId);
  section.setAttribute('data-state', isVisible ? 'visible' : 'hidden');
}
// Function to navigate to the next section
function nextQ(current) {
  const currentSection = current.closest('.page');
  const targetSectionIds = current.getAttribute('data-target').split(' ');

  // Hide all sections except the current and target sections
  toggle(currentSection.id, false);

  // Show the target sections
  targetSectionIds.forEach(function (sectionId) {
    toggle(sectionId, true);
  });
}

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    nextQ(button);
  });
});

startButton.addEventListener('click', function() {
  start();
  toggle('intro', false);
});

endButton.forEach(function(button) {
button.addEventListener('click', function() {
  endTimer();
  showResults();
});
});

wrongAnswer.forEach(function(button) {
  button.addEventListener('click', function() {
   timeCount -= 10;
   if (timeCount < 0) {
    timeCount = 0;
  }
   timer.textContent = timeCount;
   const currentButton = button;
   nextQ(currentButton)
  });
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
      } else {
        timer.textContent = timeCount;
      }

    }, 1000);
  };

  function endTimer() {
    clearInterval(time);
    // Store the remaining time in a variable or perform any desired action with it
    const score = timeCount;
    localStorage.setItem("score", score);

  }

  function showResults() {
    const hide = document.querySelectorAll('.page')
    hide.forEach(section => {
      section.setAttribute('data-state', 'hidden');
    });

    const results = document.getElementById('results');
    results.setAttribute('data-state', 'visible');
  }