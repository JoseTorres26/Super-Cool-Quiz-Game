const button = document.querySelectorAll('.button');
const results = document.getElementById('results');
const restart = document.getElementById('restart');

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



