// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Handle Login
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate successful login
  if (username && password) {
    showToast('Logged In Successfully!');
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
  }
}

// Show Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Handle Register
function handleRegister(event) {
  event.preventDefault();
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  alert('Registered successfully');
  showLogin();
}

// Show Register Form
function showRegister() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
}

// Show Login Form
function showLogin() {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

// Meal Suggestion
function getMealSuggestion() {
  document.getElementById('ai-meal-suggestion').innerText = 'AI suggests: Grilled chicken and vegetables for lunch.';
}

// Workout Recommendation
function getWorkoutRecommendation() {
  document.getElementById('ai-workout-recommendation').innerText = 'AI suggests: 30 minutes of cardio workout.';
}

// Log Meal
function logMeal(event) {
  event.preventDefault();
  const mealName = document.getElementById('meal-name').value;
  const mealCalories = document.getElementById('meal-calories').value;

  const mealLog = document.getElementById('meal-log');
  mealLog.innerHTML += `<p>${mealName} - ${mealCalories} calories</p>`;
}

// Log Progress
function logProgress(event) {
  event.preventDefault();
  const weight = document.getElementById('weight-log').value;

  const progressData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Weight',
      data: [weight, weight - 2, weight - 3, weight - 4],
      borderColor: '#42a5f5',
      fill: false,
    }]
  };

  const ctx = document.getElementById('progressChart').getContext('2d');
  new Chart(ctx, { type: 'line', data: progressData });
}

// Generate Daily Tip
function generateDailyTip() {
  const tips = ['Stay hydrated!', 'Don’t skip breakfast!', 'Keep your posture right while working!', 'Take breaks every hour!'];
  document.getElementById('daily-tip').innerText = tips[Math.floor(Math.random() * tips.length)];
}

// Motivation
let motivationalQuotes = ["Keep pushing!", "Stay strong!", "You can do it!"];
function rotateQuote() {
  let currentQuote = document.getElementById('motivational-quote');
  currentQuote.innerText = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

// Show Floating Window
function showFloatingWindow() {
  document.getElementById('floating-window').style.display = 'block';
}

// Close Floating Window
function closeFloatingWindow() {
  document.getElementById('floating-window').style.display = 'none';
}

// Update Profile (example)
function updateProfile() {
  alert('Profile updated!');
}
