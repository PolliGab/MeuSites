document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const darkToggle = document.getElementById('darkModeToggle');
  const animElements = document.querySelectorAll('.apresentacao__conteudo, .apresentacao__imagem');

  // Aplica o tema salvo no localStorage (modo claro como padrão)
  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark-mode');
      if (darkToggle) darkToggle.textContent = '☀️';
    } else {
      root.classList.remove('dark-mode');
      if (darkToggle) darkToggle.textContent = '🌙';
    }
  }

  // Carrega o tema salvo
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  // Alterna entre claro e escuro
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark-mode');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Validação do formulário de contato
  if (form) {
    form.addEventListener('submit', e => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        e.preventDefault();
        return;
      }

      if (!emailPattern.test(email)) {
        alert('Digite um e-mail válido.');
        e.preventDefault();
        return;
      }

      alert('Mensagem enviada com sucesso!');
    });
  }

  // Animações ao rolar a página
  function checkAndShow() {
    animElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', checkAndShow);
  window.addEventListener('load', checkAndShow);
});
