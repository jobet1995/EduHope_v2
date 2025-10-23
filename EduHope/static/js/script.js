// Custom JavaScript for EduHope

// Test jQuery availability
document.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery !== 'undefined') {
        console.log('jQuery is loaded and available');
    } else {
        console.log('jQuery is not loaded');
    }
});

// Initialize tooltips if any
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    console.log('Tooltips initialized', tooltipList);
});

// Accessibility enhancement for dropdowns
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        var toggle = dropdown.querySelector('.dropdown-toggle');
        var menu = dropdown.querySelector('.dropdown-menu');
        
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                var isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', !isExpanded);
                menu.classList.toggle('show');
            }
        });
    });
});

// Fade-in animation on scroll for program cards
document.addEventListener('DOMContentLoaded', function() {
    // Check if elements are in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
            rect.bottom >= 0
        );
    }

    // Show elements that are in viewport
    function showElements() {
        const elements = document.querySelectorAll('.fade-in-element');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Initial check on page load
    showElements();

    // Check on scroll
    window.addEventListener('scroll', showElements);
});

// AJAX Newsletter Subscription
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('newsletterEmail');
            const feedbackDiv = document.getElementById('newsletterFeedback');
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            
            // Get the CSRF token
            const csrfToken = newsletterForm.querySelector('[name=csrfmiddlewaretoken]').value;
            
            // Disable the submit button and show loading state
            submitButton.disabled = true;
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Subscribing...';
            
            // Clear previous feedback
            feedbackDiv.innerHTML = '';

            emailInput.classList.remove('is-invalid');
            
            // Send AJAX request
            fetch(newsletterForm.action, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': csrfToken
                },
                body: new FormData(newsletterForm)
            })
            .then(response => response.json())
            .then(data => {
                // Restore button state
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                
                // Display feedback
                if (data.status === 'success') {
                    feedbackDiv.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                        ${data.message}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
                    // Reset form
                    newsletterForm.reset();
                } else {
                    feedbackDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        ${data.message || '❗Please fill out all required fields before submitting.'}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
                }
            })
            .catch(error => {
                // Restore button state
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                console.error(error);
                
                // Display error message
                feedbackDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    ⚠️ Oops! Something went wrong. Please try again later.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            });
        });
    }
});

// AJAX Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const feedbackDiv = document.getElementById('contactFeedback');
            const submitButton = contactForm.querySelector('button[type="submit"]');
            
            // Get the CSRF token
            const csrfToken = contactForm.querySelector('[name=csrfmiddlewaretoken]').value;
            
            // Disable the submit button and show loading state
            submitButton.disabled = true;
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
            
            // Clear previous feedback
            feedbackDiv.innerHTML = '';
            
            // Send AJAX request
            fetch('/contact/', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': csrfToken
                },
                body: new FormData(contactForm)
            })
            .then(response => response.json())
            .then(data => {
                // Restore button state
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                
                // Display feedback
                if (data.status === 'success') {
                    feedbackDiv.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                        ${data.message}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
                    // Reset form
                    contactForm.reset();
                } else {
                    feedbackDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        ${data.message || '❗Please fill out all required fields before submitting.'}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
                }
            })
            .catch(error => {
                // Restore button state
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                console.error(error);
                
                // Display error message
                feedbackDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    ⚠️ Oops! Something went wrong. Please try again later.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            });
        });
    }
});

// AJAX Donation Form
document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donationForm');
    if (donationForm) {
        // Show/hide other amount field
        const otherAmountRadio = document.getElementById('amountOther');
        const otherAmountContainer = document.getElementById('otherAmountContainer');
        
        if (otherAmountRadio) {
            otherAmountRadio.addEventListener('change', function() {
                otherAmountContainer.style.display = this.checked ? 'block' : 'none';
            });
        }
        
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const feedbackDiv = document.getElementById('donationFeedback');
            const submitButton = donationForm.querySelector('button[type="submit"]');
            
            // Get the CSRF token
            const csrfToken = donationForm.querySelector('[name=csrfmiddlewaretoken]').value;
            
            // Validate amount
            const amount = donationForm.querySelector('input[name="amount"]:checked').value;
            if (amount === 'other') {
                const otherAmount = document.getElementById('otherAmount').value;
                if (!otherAmount || otherAmount <= 0) {
                    feedbackDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Please enter a valid donation amount.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
                    return;
                }
            }
            
            // Disable the submit button and show loading state
            submitButton.disabled = true;
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...';
            
            // Clear previous feedback
            feedbackDiv.innerHTML = '';
            
            // Send AJAX request
            fetch('/donate/', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': csrfToken
                },
                body: new FormData(donationForm)
            })
            .then(response => response.json())
            .then(data => {
                // Restore button state
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                
                // Display feedback
                if (data.status === 'success') {
                    feedbackDiv.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                        ${data.message}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
                    // Reset form
                    donationForm.reset();
                    // Hide other amount container if visible
                    if (otherAmountContainer) {
                        otherAmountContainer.style.display = 'none';
                    }
                } else {
                    feedbackDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        ${data.message || '❗Please fill out all required fields before submitting.'}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
                }
            })
            .catch(error => {
                // Restore button state
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                console.log(error);
                
                // Display error message
                feedbackDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    ⚠️ Oops! Something went wrong. Please try again later.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            });
        });
    }
});

// Enhanced Count-up animation for statistics
document.addEventListener('DOMContentLoaded', function() {
    // Check if elements are in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
            rect.bottom >= 0
        );
    }
    
    // Animate count-up numbers with easing
    function animateCountUp(element) {
        const target = +element.getAttribute('data-target');
        const speed = element.getAttribute('data-speed') || 20;
        const count = +element.innerText.replace(/,/g, '');
        
        // Calculate increment based on target for smoother animation
        const increment = target / (speed * 2);
        
        if (count < target) {
            element.innerText = Math.ceil(count + increment).toLocaleString();
            setTimeout(() => animateCountUp(element), 20);
        } else {
            element.innerText = target.toLocaleString();
        }
    }
    
    // Start count-up animation when elements are in viewport
    function startCountUp() {
        const countUpElements = document.querySelectorAll('.count-up');
        countUpElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('counted')) {
                element.classList.add('counted');
                animateCountUp(element);
            }
        });
    }
    
    // Initial check on page load
    startCountUp();
    
    // Check on scroll
    window.addEventListener('scroll', startCountUp);
});