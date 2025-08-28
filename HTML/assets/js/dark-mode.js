(function(){
  var body = document.body;
  
  // Force dark mode only - no toggle functionality
  body.classList.add('theme-dark');
  localStorage.setItem('astriftech-theme', 'dark');
  
  // No toggle functionality - dark mode is permanent
  // Theme toggle button has been removed from HTML
})();
