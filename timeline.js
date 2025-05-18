const lessons = [
  { id: 1, title: "Intro to HTML", time: "9:00 AM", video: "https://www.youtube.com/embed/pQN-pnXPaVg" },
  { id: 2, title: "CSS Basics", time: "10:30 AM", video: "https://www.youtube.com/embed/1PnVor36_40" },
  { id: 3, title: "JavaScript DOM", time: "12:00 PM", video: "https://www.youtube.com/embed/0ik6X4DJKCc" },
  { id: 4, title: "Responsive Design", time: "2:00 PM", video: "https://www.youtube.com/embed/srvUrASNj0s" },
  { id: 5, title: "Flexbox & Grid", time: "3:30 PM", video: "https://www.youtube.com/embed/JJSoEo8JSnc" }
];


const timeline = document.getElementById('timeline');

function renderTimeline() {
  timeline.innerHTML = lessons.map(lesson => `
    <li class="timeline-item" draggable="true" data-id="${lesson.id}">
      <h4>${lesson.title}</h4>
      <span>${lesson.time}</span>
    </li>
  `).join('');

  enableDragAndDrop();
  enableLessonClick();
}


function enableDragAndDrop() {
  let draggedItem = null;

  const items = document.querySelectorAll('.timeline-item');

  items.forEach(item => {
    item.addEventListener('dragstart', e => {
      draggedItem = item;
      item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
      draggedItem = null;
      items.forEach(el => el.classList.remove('dragging'));
    });

    item.addEventListener('dragover', e => {
      e.preventDefault();
      const bounding = item.getBoundingClientRect();
      const offset = bounding.y + (bounding.height / 2);
      const parent = item.parentNode;
      if (e.clientY - offset > 0) {
        parent.insertBefore(draggedItem, item.nextSibling);
      } else {
        parent.insertBefore(draggedItem, item);
      }
    });
  });
}

function enableLessonClick() {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const lessonId = parseInt(item.getAttribute('data-id'));
      const lesson = lessons.find(l => l.id === lessonId);

      const playerContainer = document.getElementById("video-player-container");
      const youtubePlayer = document.getElementById("youtube-player");

      if (lesson && lesson.video) {
        youtubePlayer.src = lesson.video + "?autoplay=1";
        playerContainer.style.display = "block";
      }
    });
  });
}


renderTimeline();
