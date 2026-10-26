(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }));
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const message = [
        'Hi LoRiK Craft, I would like to discuss a project.',
        '',
        'Name: ' + data.get('name'),
        'Email: ' + data.get('email'),
        'Service: ' + data.get('service'),
        'Project details: ' + data.get('message')
      ].join('\n');
      const url = 'https://wa.me/19406010924?text=' + encodeURIComponent(message);
      const status = document.getElementById('form-status');
      if (status) status.textContent = 'Opening WhatsApp with your prepared message…';
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }
})();