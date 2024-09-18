document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('emailInput');
    const submitButton = document.getElementById('submitButton');
    const uidDisplay = document.getElementById('uidDisplay');
    
    emailInput.addEventListener('input', () => {
        const email = emailInput.value;
        const isValid = /^[\w.-]+@(connect\.hku\.hk|hku\.hk)$/.test(email);
        
        if (isValid) {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            submitButton.disabled = false;
        } else {
            emailInput.classList.remove('valid');
            emailInput.classList.add('invalid');
            submitButton.disabled = true;
        }
    });

    document.getElementById('emailForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const email = emailInput.value;
        const uid = email.split('@')[0];
        uidDisplay.textContent = `UID: ${uid}`;
    });
});