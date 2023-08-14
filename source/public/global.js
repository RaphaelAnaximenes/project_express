document.addEventListener('DOMContentLoaded', () => {
    const helloElement = document.getElementById('hello');
    const messages = [
        'Olá, eu sou...',   // Portuguese
        'Hello, I am...',   // English
        'Hola, soy...',      // Spanish
        'こんにちは私は...'        // Japanese
    ];
    let currentIndex = 0;

    function rotateGreeting() {
        currentIndex = (currentIndex + 1) % messages.length;
        helloElement.style.animation = 'eraseAnimation 3s steps(30, end) 0s 1 normal forwards';
    }

    helloElement.addEventListener('animationend', () => {
        helloElement.innerText = messages[currentIndex];
        helloElement.style.animation = 'typeAnimation 3s steps(30, end) 0s infinite';
    });

    setInterval(() => {
        rotateGreeting();
    }, 6000);

    // Initial rotation
    rotateGreeting();
});

// Initialize Bootstrap tooltips
const collapseStudying = new bootstrap.Collapse(document.getElementById('collapseStudying'), {
    toggle: false // Disable toggling on clicking
});

const collapseUsedTo = new bootstrap.Collapse(document.getElementById('collapseUsedTo'), {
    toggle: false // Disable toggling on clicking
});

// Handle button clicks to open/close collapses
document.querySelector('[data-bs-target="#collapseStudying"]').addEventListener('click', () => {
    if (collapseUsedTo._isShown) {
        collapseUsedTo.hide();
    }
});

document.querySelector('[data-bs-target="#collapseUsedTo"]').addEventListener('click', () => {
    if (collapseStudying._isShown) {
        collapseStudying.hide();
    }
});