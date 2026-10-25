/**
 * Harshith - Portfolio Vanilla JavaScript
 * Lightweight, dependency-free interactive logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Set Current Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 3. Theme Toggle (Dark / Light)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  // Check saved preference or default to dark
  const savedTheme = localStorage.getItem('harshith-theme') || 'dark';
  if (savedTheme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    if (themeIcon) themeIcon.setAttribute('data-lucide', 'moon');
  } else {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    if (themeIcon) themeIcon.setAttribute('data-lucide', 'sun');
  }
  if (window.lucide) window.lucide.createIcons();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('harshith-theme', 'dark');
        if (themeIcon) themeIcon.setAttribute('data-lucide', 'sun');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        localStorage.setItem('harshith-theme', 'light');
        if (themeIcon) themeIcon.setAttribute('data-lucide', 'moon');
      }
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // 4. Mobile Menu Drawer
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      if (menuIcon) {
        menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        if (window.lucide) window.lucide.createIcons();
      }
    });

    // Close menu when clicking any nav link
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (menuIcon) {
          menuIcon.setAttribute('data-lucide', 'menu');
          if (window.lucide) window.lucide.createIcons();
        }
      });
    });
  }

  // 5. Active Navigation Link Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

  // 6. Resume Button Handler
  // Harshith can configure their external resume URL below (e.g. Google Drive or PDF link)
  const RESUME_URL = ''; // Add your resume link here: e.g. "https://drive.google.com/..."

  const resumeBtn = document.getElementById('resume-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      if (RESUME_URL && RESUME_URL.trim() !== '') {
        window.open(RESUME_URL, '_blank');
      } else {
        alert(
          'Resume configuration: To configure your resume, open script.js and update RESUME_URL with your Google Drive or PDF link, or contact Harshith directly at h9056450@gmail.com!'
        );
      }
    });
  }

  // 7. Contact Form Validation & Real Email Client Launch
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      let hasErrors = false;

      // Validation
      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const subjectError = document.getElementById('subject-error');
      const messageError = document.getElementById('message-error');

      if (!name) {
        nameError.textContent = 'Please enter your name.';
        hasErrors = true;
      } else {
        nameError.textContent = '';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        hasErrors = true;
      } else {
        emailError.textContent = '';
      }

      if (!subject) {
        subjectError.textContent = 'Please enter a subject.';
        hasErrors = true;
      } else {
        subjectError.textContent = '';
      }

      if (!message || message.length < 10) {
        messageError.textContent = 'Please write at least 10 characters.';
        hasErrors = true;
      } else {
        messageError.textContent = '';
      }

      if (hasErrors) return;

      // Build email body and open default mail client
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ASubject: ${encodeURIComponent(
        subject
      )}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

      const mailtoUrl = `mailto:h9056450@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;

      window.location.href = mailtoUrl;
    });
  }
});
