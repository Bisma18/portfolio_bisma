/* ===================================================
   FAQ ACCORDION & CLIPBOARD UTILITIES
   =================================================== */

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other FAQ items for a clean accordion
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) {
          otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
      } else {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      }
    });
  });

  // Open first FAQ by default
  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    const firstAnswer = firstItem.querySelector('.faq-answer');
    firstItem.classList.add('active');
    if (firstAnswer) {
      firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 30 + 'px';
    }
  }
}

// Copy to Clipboard Utility
function initClipboard() {
  const copyBtns = document.querySelectorAll('.copy-email-btn, .email-copy-pill');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  let toastTimeout;

  function showToast(message) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;

    toast.classList.add('active');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('active');
    }, 3200);
  }

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const email = btn.getAttribute('data-email') || 'bismahbhat007@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initClipboard();
});
