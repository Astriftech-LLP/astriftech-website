(function(){
  var body = document.body;
  var toggle = document.getElementById('themeToggle');
  var stored = localStorage.getItem('astriftech-theme');
  
  // Set dark mode as default: if no preference stored OR explicitly set to dark
  if (stored === null || stored === 'dark') {
    body.classList.add('theme-dark');
    // If no preference stored, set dark as the initial preference
    if (stored === null) {
      localStorage.setItem('astriftech-theme', 'dark');
    }
  }
  
  function updateIcon(){
    if(!toggle) return;
    // Show a Sun icon in dark mode (to switch to light), and a Moon in light mode (to switch to dark)
    var html = body.classList.contains('theme-dark')
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
    toggle.innerHTML = html;
  }
  updateIcon();
  if (toggle) {
    toggle.addEventListener('click', function(){
      body.classList.toggle('theme-dark');
      localStorage.setItem('astriftech-theme', body.classList.contains('theme-dark') ? 'dark' : 'light');
      updateIcon();
    });
  }
})();
