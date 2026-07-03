function openPrivacy() {
  openLegalModal('privacy');
}

function openCookie() {
  openLegalModal('cookie');
}

function openAccessibility() {
    openLegalModal('accessibility');
}

function openLegalModal(type) {
  const modal = document.getElementById('legalModal');
  const privacy = document.getElementById('legal-privacy');
  const cookie = document.getElementById('legal-cookie');
  const accessibility = document.getElementById('legal-accessibility');

  if (!modal) return;

  if (privacy) {
    privacy.style.display = (type === 'privacy') ? 'block' : 'none';
  }

  if (cookie) {
    cookie.style.display = (type === 'cookie') ? 'block' : 'none';
  }

  if (accessibility) {
    accessibility.style.display = (type === 'accessibility') ? 'block' : 'none';
  }

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  modal.focus();
}

function closeLegalModal() {
  const modal = document.getElementById('legalModal');
  if (!modal) return;

  modal.style.display = 'none';
  document.body.style.overflow = '';
}
