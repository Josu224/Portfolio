let tilt = document.querySelectorAll(".rounded");
VanillaTilt.init(tilt, {
  max: 3,
  speed: 500,
  scale: 1.05,
  glare: true,
  "max-glare": 0.3,
});

document.getElementById("year").textContent = new Date().getFullYear();

    // Form submission handler
    document.getElementById('projectInquiryForm')?.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const budget = this.querySelector('select').value;
      const message = this.querySelector('textarea').value;

      // Create WhatsApp message
      const whatsappMessage = `*New Project Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Budget Range:* ${budget}%0A*Project Details:* ${message}`;

      // Redirect to WhatsApp with pre-filled message
      window.open(`https://wa.me/2347066745706?text=${whatsappMessage}`, '_blank');

      // Show success message
      alert('Redirecting to WhatsApp... Please send the pre-filled message to start the conversation!');

      // Reset form
      this.reset();
    });

   
   
    document.getElementById("year").textContent = new Date().getFullYear();

    // Form submission handler
    document.getElementById('projectInquiryForm')?.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const budget = this.querySelector('select').value;
      const message = this.querySelector('textarea').value;

      // Create WhatsApp message
      const whatsappMessage = `*New Business Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Budget Range:* ${budget}%0A*Business Needs:* ${message}`;

      // Redirect to WhatsApp with pre-filled message
      window.open(`https://wa.me/2347066745706?text=${whatsappMessage}`, '_blank');

      // Show success message
      alert('Redirecting to WhatsApp... Please send the pre-filled message to start the conversation!');

      // Reset form
      this.reset();
    });

    // FAQ Accordion Functionality with ARIA support
    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = button.nextElementSibling;
        const icon = button.querySelector('i');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        // Update ARIA attributes
        button.setAttribute('aria-expanded', !isExpanded);

        // Toggle active class
        faqItem.classList.toggle('active');

        // Toggle icon
        if (faqItem.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
          icon.style.transform = 'rotate(180deg)';
        } else {
          answer.style.maxHeight = '0';
          icon.style.transform = 'rotate(0deg)';
        }

        // Close other FAQ items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
          if (otherItem !== faqItem && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherButton = otherItem.querySelector('.faq-question');
            const otherIcon = otherItem.querySelector('.faq-question i');

            otherButton.setAttribute('aria-expanded', 'false');
            otherAnswer.style.maxHeight = '0';
            otherIcon.style.transform = 'rotate(0deg)';
          }
        });
      });
    });

    // Mobile sticky CTA visibility
    window.addEventListener('scroll', function () {
      const mobileStickyCTA = document.querySelector('.mobile-sticky-cta');
      if (window.innerWidth <= 768) {
        if (window.scrollY > 300) {
          mobileStickyCTA.style.transform = 'translateY(0)';
          mobileStickyCTA.style.opacity = '1';
        } else {
          mobileStickyCTA.style.transform = 'translateY(100%)';
          mobileStickyCTA.style.opacity = '0';
        }
      }
    });

    // Add CSS for new elements
    const style = document.createElement('style');
    style.textContent = `
      /* ==================== */
      /* ADDED: Accessibility & UX CSS */
      /* ==================== */
      
      /* Mobile-First Sticky CTA Bar */
      .mobile-sticky-cta {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        padding: 10px;
        display: flex;
        justify-content: space-around;
        box-shadow: 0 -2px 20px rgba(0,0,0,0.1);
        z-index: 1000;
        transform: translateY(100%);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }
      
      @media (min-width: 769px) {
        .mobile-sticky-cta {
          display: none;
        }
      }
      
      .sticky-whatsapp-btn, .sticky-quote-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: #333;
        font-size: 12px;
        padding: 8px 12px;
        border-radius: 8px;
        transition: all 0.2s ease;
      }
      
      .sticky-whatsapp-btn {
        background: #25D366;
        color: white;
      }
      
      .sticky-quote-btn {
        background: #36d1dc;
        color: white;
      }
      
      .sticky-whatsapp-btn i, .sticky-quote-btn i {
        font-size: 20px;
        margin-bottom: 4px;
      }
      
      /* Repeating CTA Section */
      .repeating-cta {
        background: linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%);
        padding: 30px 0;
        margin: 40px 0;
      }
      
      .cta-buttons-compact {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
      }
      
      .cta-buttons-compact .cta-btn {
        min-width: 200px;
        text-align: center;
      }
      
      /* Visual hierarchy improvements */
      .cta-btn[role="button"]:focus {
        outline: 3px solid #5b86e5;
        outline-offset: 2px;
      }
      
      /* Visually hidden for screen readers */
      .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      /* Enhanced focus states for accessibility */
      button:focus, 
      a:focus, 
      input:focus, 
      select:focus, 
      textarea:focus {
        outline: 2px solid #5b86e5;
        outline-offset: 2px;
      }
      
      /* Improved FAQ accessibility */
      .faq-question {
        width: 100%;
        text-align: left;
        cursor: pointer;
      }
      
      .faq-question:focus {
        background-color: rgba(54, 209, 220, 0.1);
      }
    `;
    document.head.appendChild(style);