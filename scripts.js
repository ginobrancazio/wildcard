// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all FAQ items
    faqItems.forEach((faqItem) => {
      faqItem.classList.remove('active');
    });

    // Toggle current item
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Here you would typically send the data to a server
  // For now, we'll just show an alert
  console.log('Form submitted:', { name, email, message });

  alert(
    'Thank you for your message! We\'ll get back to you as soon as possible.'
  );

  // Reset form
  contactForm.reset();
});

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.style.boxShadow = 'none';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }

  lastScroll = currentScroll;
});
