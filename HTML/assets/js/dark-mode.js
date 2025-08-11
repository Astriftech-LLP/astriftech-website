(function(){
  var body = document.body;
  var toggle = document.getElementById('themeToggle');
  var stored = localStorage.getItem('astriftech-theme');
  if (stored === 'dark') {
    body.classList.add('theme-dark');
  }
  function updateIcon(){
    if(!toggle) return;
    // Show a neutral Adjust icon in dark mode, and a Moon in light mode
    var html = body.classList.contains('theme-dark')
      ? '<i class="fas fa-adjust"></i>'
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
