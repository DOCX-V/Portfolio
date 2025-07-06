// Smooth scroll for "Shop Now" button
document.querySelector('.cta-btn').addEventListener('click', () => {
  document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
});

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

function openLoginModal() {
  const loginModal = document.getElementById('loginModal');
  loginModal.style.display = 'flex';
  showLogin();  // Show login form by default
}

function closeLoginModal() {
  const loginModal = document.getElementById('loginModal');
  loginModal.style.display = 'none';
}

// Show Login Form
function showLogin() {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('forgotPasswordForm').classList.add('hidden');
}

// Show Signup Form
function showSignup() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('signupForm').classList.remove('hidden');
  document.getElementById('forgotPasswordForm').classList.add('hidden');
}

// Show Forgot Password Form
function showForgotPassword() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('forgotPasswordForm').classList.remove('hidden');
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
  const loginModal = document.getElementById('loginModal');
  if (event.target === loginModal) {
      loginModal.style.display = 'none';
  }
};
