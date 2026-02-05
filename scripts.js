document.addEventListener('DOMContentLoaded', function () {
  /* ----------------------------------
     EmailJS Initialization
  ---------------------------------- */
  if (typeof emailjs !== 'undefined') {
    emailjs.init('wwnZKE_PJtpTh7QKV');
  } else {
    console.error('EmailJS SDK not loaded');
  }

  /* ----------------------------------
     Smooth Scrolling for Anchor Links
  ---------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });

  /* ----------------------------------
     FAQ Accordion
  ---------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach((faq) => faq.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  /* ----------------------------------
     Contact Form (EmailJS)
  ---------------------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoader.style.display = 'inline-block';
      formMessage.style.display = 'none';

      const templateParams = {
        from_name: document.getElementById('name').value.trim(),
        from_email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim(),
        to_email: 'help@tapwildcard.com',
      };

      emailjs
        .send(
          'service_ko8jzfo',
          'template_kwpf9sr',
          templateParams
        )
        .then(() => {
          formMessage.textContent =
            "Thank you for your message! We'll be in touch shortly.";
          formMessage.className = 'form-message success';
          contactForm.reset();
        })
        .catch((error) => {
          console.error('EmailJS error:', error);
          formMessage.textContent =
            'Something went wrong. Please email help@tapwildcard.com directly.';
          formMessage.className = 'form-message error';
        })
        .finally(() => {
          submitBtn.disabled = false;
          btnText.style.display = 'inline-block';
          btnLoader.style.display = 'none';

          setTimeout(() => {
            formMessage.style.display = 'none';
          }, 5000);
        });
    });
  }

  /* ----------------------------------
     Header Scroll Shadow
  ---------------------------------- */
  const header = document.getElementById('header');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 10) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
});
