(function(){
  var body = document.body;
  var toggle = document.getElementById('themeToggle');
  var stored = localStorage.getItem('astriftech-theme');
  if (stored === 'dark') {
    body.classList.add('theme-dark');
  }
  function updateIcon(){
    if(!toggle) return;
    toggle.innerHTML = body.classList.contains('theme-dark') ? '<i class="far fa-sun"></i>' : '<i class="far fa-moon"></i>';
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
