/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Typing effect
document.addEventListener('DOMContentLoaded', function() {
    const text = "Hi, I'm";
    const typingText = document.querySelector('.typing-text');
    let i = 0;
    let isDeleting = false;
    let isWaiting = false;

    function type() {
        // Check if currently deleting text
        if (isDeleting) {
            typingText.textContent = text.substring(0, i);
            i--;
        } else {
            typingText.textContent = text.substring(0, i);
            i++;
        }

        let typingSpeed = isDeleting ? 100 : 150; // Faster when deleting

        // If completed typing
        if (!isDeleting && i === text.length) {
            isWaiting = true;
            setTimeout(() => {
                isDeleting = true;
                isWaiting = false;
                type();
            }, 2000); // Wait 2 seconds before starting to delete
            return;
        }

        // If completed deleting
        if (isDeleting && i === 0) {
            isDeleting = false;
            isWaiting = true;
            setTimeout(() => {
                isWaiting = false;
                type();
            }, 1000); // Wait 1 second before retyping
            return;
        }

        // If not waiting for timeout, continue typing/deleting
        if (!isWaiting) {
            setTimeout(type, typingSpeed);
        }
    }

    // Start the typing effect
    type();
});