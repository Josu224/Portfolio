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

    // Enhanced brochure download functionality
document.getElementById('downloadBrochure').addEventListener('click', function(e) {
    const filePath = './assets/brochure/service-brochure.pdf';
    
    // Check if file exists (basic check)
    fetch(filePath, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                // File exists, let the download proceed naturally
                console.log('Brochure downloaded successfully');
                
                // Optional: Track download with analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'brochure_download', {
                        'event_category': 'engagement',
                        'event_label': 'service_brochure'
                    });
                }
                
                // Show success toast
                showToast('Brochure download started! Check your downloads folder.');
            } else {
                // File doesn't exist, show helpful message
                e.preventDefault();
                showToast('Brochure is being updated. Please contact me directly for details.', 'warning');
            }
        })
        .catch(() => {
            // Network error or file doesn't exist
            e.preventDefault();
            showToast('Download temporarily unavailable. Chat on WhatsApp for immediate assistance.', 'warning');
            
            // Offer alternative
            setTimeout(() => {
                if (confirm('Brochure download not ready. Would you like to chat on WhatsApp for immediate information?')) {
                    window.open('https://wa.me/2347066745706', '_blank');
                }
            }, 1000);
        });
});

// Toast notification function
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'warning' ? '#f59e0b' : '#10b981'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}


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
      window.open(`https://wa.me/2347066745706?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');

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

    // Brochure download handler
    document.querySelectorAll('#downloadBrochure, #downloadBrochure2').forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Website Service Brochure download will be available soon! In the meantime, please contact me directly for detailed package information.');
      });
    });

    // Add CSS for monetization features
    const style = document.createElement('style');
    style.textContent = `
      /* ==================== */
      /* ADDED: Monetization CSS */
      /* ==================== */
      
      .monetization-section {
        background: #f8fafc;
        padding: 80px 0;
        position: relative;
        overflow: hidden;
      }
      
      .monetization-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #36d1dc, #5b86e5);
      }
      
      .package-comparison {
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .package-tiers {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-bottom: 50px;
      }
      
      .package-tier {
        background: white;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        border: 2px solid #e2e8f0;
        transition: all 0.3s ease;
        position: relative;
      }
      
      .package-tier:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.12);
        border-color: #36d1dc;
      }
      
      .package-tier.featured {
        border-color: #5b86e5;
        background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
        transform: scale(1.05);
      }
      
      .package-tier.featured:hover {
        transform: scale(1.05) translateY(-5px);
      }
      
      .tier-badge {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        background: #5b86e5;
        color: white;
        padding: 6px 20px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(91, 134, 229, 0.3);
      }
      
      .tier-header {
        text-align: center;
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 2px solid #f1f5f9;
      }
      
      .tier-header h3 {
        font-size: 1.8rem;
        color: #1e293b;
        margin-bottom: 10px;
      }
      
      .tier-price {
        font-size: 2.5rem;
        font-weight: bold;
        color: #36d1dc;
        margin: 15px 0;
      }
      
      .tier-description {
        color: #64748b;
        font-size: 0.95rem;
      }
      
      .tier-features {
        margin-bottom: 25px;
      }
      
      .tier-features h4 {
        color: #1e293b;
        margin-bottom: 15px;
        font-size: 1.1rem;
      }
      
      .tier-features ul {
        list-style: none;
        padding: 0;
      }
      
      .tier-features li {
        padding: 8px 0;
        color: #475569;
        display: flex;
        align-items: flex-start;
      }
      
      .tier-features li i {
        color: #10b981;
        margin-right: 10px;
        margin-top: 4px;
        flex-shrink: 0;
      }
      
      .tier-best-for {
        background: #f1f5f9;
        padding: 15px;
        border-radius: 10px;
        margin-bottom: 25px;
      }
      
      .tier-best-for h5 {
        color: #1e293b;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .tier-best-for p {
        color: #64748b;
        font-size: 0.9rem;
        margin: 0;
      }
      
      .tier-cta {
        text-align: center;
      }
      
      .package-notes {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 50px;
      }
      
      .package-note {
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        display: flex;
        gap: 20px;
        align-items: flex-start;
        transition: all 0.3s ease;
      }
      
      .package-note:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
      }
      
      .package-note i {
        font-size: 2rem;
        color: #36d1dc;
        flex-shrink: 0;
        margin-top: 5px;
      }
      
      .package-note h4 {
        color: #1e293b;
        margin-bottom: 8px;
        font-size: 1.2rem;
      }
      
      .package-note p {
        color: #64748b;
        margin-bottom: 15px;
      }
      
      .download-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #10b981;
        color: white;
        padding: 10px 20px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s ease;
      }
      
      .download-btn:hover {
        background: #0da271;
        transform: translateY(-2px);
      }
      
      /* Template Section */
      .template-section {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 80px 0;
      }
      
      .template-wrapper {
        max-width: 1000px;
        margin: 0 auto;
      }
      
      .template-content h2 {
        color: white;
        font-size: 2.5rem;
        margin-bottom: 15px;
      }
      
      .template-subtitle {
        font-size: 1.2rem;
        opacity: 0.9;
        margin-bottom: 40px;
      }
      
      .template-features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
        margin-bottom: 40px;
      }
      
      .template-feature {
        text-align: center;
        padding: 20px;
        background: rgba(255,255,255,0.1);
        border-radius: 12px;
        backdrop-filter: blur(10px);
      }
      
      .template-feature i {
        font-size: 2.5rem;
        margin-bottom: 15px;
        color: #fff;
      }
      
      .template-feature h4 {
        font-size: 1.2rem;
        margin-bottom: 8px;
        color: white;
      }
      
      .template-feature p {
        opacity: 0.8;
        font-size: 0.9rem;
        margin: 0;
      }
      
      .template-coming-soon {
        background: rgba(255,255,255,0.15);
        padding: 25px;
        border-radius: 12px;
        text-align: center;
        backdrop-filter: blur(10px);
      }
      
      .template-coming-soon p {
        margin-bottom: 20px;
        font-size: 1.1rem;
      }
      
      .template-coming-soon .cta-btn--primary {
        background: white;
        color: #667eea;
        border: none;
      }
      
      .template-coming-soon .cta-btn--primary:hover {
        background: #f8fafc;
        transform: translateY(-2px);
      }
      
      /* Update existing CTA buttons */
      .about-wrapper__cta {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
      }
      
      .cta-btn--secondary {
        background: #94a3b8;
        color: white;
        border: none;
      }
      
      .cta-btn--secondary:hover {
        background: #64748b;
      }
      
      /* Mobile adjustments */
      @media (max-width: 768px) {
        .package-tiers {
          grid-template-columns: 1fr;
        }
        
        .package-tier.featured {
          transform: none;
        }
        
        .package-tier.featured:hover {
          transform: translateY(-5px);
        }
        
        .package-notes {
          grid-template-columns: 1fr;
        }
        
        .template-features {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .about-wrapper__cta {
          flex-direction: column;
        }
      }
      
      @media (max-width: 480px) {
        .template-features {
          grid-template-columns: 1fr;
        }
        
        .contact-options {
          flex-direction: column;
        }
        
        .contact-option {
          margin-bottom: 20px;
        }
      }
    `;
    document.head.appendChild(style);

    // Enhanced Brochure Download Functionality
document.addEventListener('DOMContentLoaded', function() {
    const brochureButtons = document.querySelectorAll('#downloadBrochure, #downloadBrochure2');
    
    brochureButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add loading animation
            this.classList.add('downloading');
            
            // Create a temporary anchor for download
            const link = document.createElement('a');
            link.href = this.href;
            link.download = this.getAttribute('download') || 'Joseph_Yilkudi_Web_Development_Services.pdf';
            link.target = '_blank';
            
            // Simulate click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Track download in Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'brochure_download', {
                    'event_category': 'engagement',
                    'event_label': 'service_brochure',
                    'value': 1
                });
            }
            
            // Show success message
            setTimeout(() => {
                this.classList.remove('downloading');
                
                // Optional: Show a subtle notification
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #10b981;
                    color: white;
                    padding: 12px 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    z-index: 10000;
                    animation: slideIn 0.3s ease;
                `;
                notification.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <i class="fa-solid fa-check-circle"></i>
                        <span>Brochure download started!</span>
                    </div>
                `;
                document.body.appendChild(notification);
                
                // Remove notification after 3 seconds
                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease forwards';
                    setTimeout(() => notification.remove(), 300);
                }, 3000);
            }, 1000);
            
            // Prevent default behavior (we're handling it manually)
            e.preventDefault();
        });
        
        // Add mouseenter effect
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('downloading')) {
                this.style.transform = 'translateY(-3px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('downloading')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Check if brochure file exists
    fetch('./assets/brochure.pdf', { method: 'HEAD' })
        .then(response => {
            if (!response.ok) {
                console.warn('Brochure file not found at ./assets/brochure.pdf');
                // Optionally show a message to admin/developer
            } else {
                console.log('Brochure file found and ready for download');
            }
        })
        .catch(error => {
            console.error('Error checking brochure file:', error);
        });
});

// Add slide animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);