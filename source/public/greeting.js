document.addEventListener('DOMContentLoaded', () => {
    const helloElement = document.getElementById('hello');
    const messages = [
        'Olá, eu sou...',   // Portuguese
        'Hello, I am...',   // English
        'Hola, yo soy...',      // Spanish
        'こんにちは私は'
    ];
    let currentIndex = 0;

    function rotateGreeting() {
        currentIndex = (currentIndex + 1) % messages.length;
        helloElement.style.opacity = 0;
        setTimeout(() => {
            helloElement.innerText = messages[currentIndex];
            helloElement.style.opacity = 1;
        }, 3000); // Delay to allow fade out effect
    }

    setInterval(rotateGreeting, 2980);
});