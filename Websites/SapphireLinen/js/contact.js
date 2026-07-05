const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const feedback = document.getElementById('feedback');


    name.style.border = "";
    email.style.border = "";
    message.style.border = "";
    feedback.textContent = "";

    if (!name.value) {
        name.style.border = "2px solid red";
        name.focus();
        feedback.textContent = "Name is required.";
        feedback.className = "alert alert-danger mt-3";
        return;
    }

    if (!email.value) {
        email.style.border = "2px solid red";
        email.focus();
        feedback.textContent = "Email is required.";
        feedback.className = "alert alert-danger mt-3";
        return;
    }

    if (!message.value) {
        message.style.border = "2px solid red";
        message.focus();
        feedback.textContent = "Message is required.";
        feedback.className = "alert alert-danger mt-3";
        return;
    }

    feedback.textContent = "Message sent successfully!";
    feedback.className = "alert alert-success mt-3";

    alert(`Thank you for your message, ${name.value}! We will get back to you at ${email.value}.`);

    contactForm.reset();
});