const btn = document.getElementById('theme-btn');
const contactForm = document.getElementById('contact-form');
const responseMsg = document.getElementById('form-response');

btn.addEventListener('click', function() {
    document.body.classList.toggle('theme1');
    
    if (document.body.classList.contains('theme1')) {
        btn.textContent = "Change Background";
    } else {
        btn.textContent = "Change Background";
    }
});

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('user-name').value;
    responseMsg.textContent = "Thank you, " + name + "! Your message was sent.";
    
    contactForm.reset();
});
