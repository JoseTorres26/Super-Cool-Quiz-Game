function displayScores() {
    const scoresList = document.getElementById('scores');
    
    // Retrieve scores from localStorage
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    
    // Clear previous content
    scoresList.innerHTML = '';
  
    // Create a list element for each score
    scores.forEach(function(score) {
      const listItem = document.createElement('li');
      listItem.textContent = `${score.name}: ${score.score}`;
      scoresList.appendChild(listItem);
    });
  }

  displayScores();