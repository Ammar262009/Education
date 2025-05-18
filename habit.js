function updateHabitProgress() {
  const checkboxes = document.querySelectorAll('.habit');
  const total = checkboxes.length;
  const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
  const percent = Math.round((checked / total) * 100);

  document.getElementById('habit-progress').style.width = percent + '%';
}

document.addEventListener('change', function (e) {
  if (e.target.classList.contains('habit')) {
    updateHabitProgress();
  }
});

// Navigation functions
function showHabitPage() {
  document.getElementById('habit-page').style.display = 'block';
  document.getElementById('quiz-container').style.display = 'none';
}

function goToQuizPage() {
  document.getElementById('habit-page').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
}
