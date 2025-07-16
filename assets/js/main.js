// Simple mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('header');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add active class to current navigation item
  const currentPath = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});