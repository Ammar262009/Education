const courses = [
  {
    title: "Algebra Basics",
    topic: "math",
    time: 0.5,
    videoUrl: "https://www.youtube.com/embed/HEfHFsfGXjs"
  },
  {
    title: "Calculus Crash Course",
    topic: "math",
    time: 2,
    videoUrl: "https://www.youtube.com/embed/WUvTyaaNkzM"
  },
  {
    title: "Physics Fundamentals",
    topic: "science",
    time: 3.5,
    videoUrl: "https://www.youtube.com/embed/1U5MtVMcT6c"
  },
  {
    title: "Intro to Chemistry",
    topic: "science",
    time: 1.5,
    videoUrl: "https://www.youtube.com/embed/FSyAehMdpyI"
  },
  {
    title: "JavaScript for Beginners",
    topic: "programming",
    time: 1,
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk"
  },
  {
    title: "Advanced Python",
    topic: "programming",
    time: 4,
    videoUrl: "https://www.youtube.com/embed/HGOBQPFzWKo"
  }
];


// function showCourseCatalogPage() {
//   document.getElementById('course-catalog-page').style.display = 'block';
//   document.getElementById('quiz-container').style.display = 'none';
//   document.getElementById('habit-page').style.display = 'none';
//   displayCourses();
// }

function displayCourses() {
  const topicFilter = document.getElementById('topic-filter').value;
  const timeFilter = document.getElementById('time-filter').value;

  const filtered = courses.filter(course => {
    const matchTopic = topicFilter === 'all' || course.topic === topicFilter;
    let matchTime = true;
    if (timeFilter === 'short') matchTime = course.time < 1;
    else if (timeFilter === 'medium') matchTime = course.time >= 1 && course.time <= 3;
    else if (timeFilter === 'long') matchTime = course.time > 3;
    return matchTopic && matchTime;
  });

  const courseList = document.getElementById('course-list');
  courseList.innerHTML = filtered.map((course, index) => `
    <div class="course-card" onclick="playVideo('${course.videoUrl}', '${course.title}')">
      <div class="course-title">${course.title}</div>
      <div class="course-meta">Topic: ${course.topic} | Duration: ${course.time} hour(s)</div>
    </div>
  `).join('');
}

function playVideo(url, title) {
  document.getElementById('course-video').src = url;
  document.getElementById('video-title').textContent = title;
  document.getElementById('video-player').style.display = 'block';
}

function closeVideo() {
  document.getElementById('course-video').src = '';
  document.getElementById('video-player').style.display = 'none';
}


document.getElementById('topic-filter').addEventListener('change', displayCourses);
document.getElementById('time-filter').addEventListener('change', displayCourses);

displayCourses()