document.addEventListener("DOMContentLoaded", () => {
    const particleContainer = document.querySelector('.particle-container');

    function generateParticles() {
        for (let i = 0; i < 40; i++) { // Generate 40 particles
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Random size and position
            const size = Math.random() * 12 + 6; // 6px to 18px
            const posX = Math.random() * 100; // Horizontal position (0 to 100vw)
            const posY = Math.random() * 100; // Vertical position (0 to 100vh)
            const duration = Math.random() * 7 + 4; // 4s to 11s duration

            // Random vibrant color
            const hue = Math.floor(Math.random() * 360);
            particle.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}vw`;
            particle.style.top = `${posY}vh`;
            particle.style.animationDuration = `${duration}s`;

            // Append the particle
            particleContainer.appendChild(particle);
        }
    }

    generateParticles(); // Generate particles on page load
});