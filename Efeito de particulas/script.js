var particlesContainer = document.getElementById('particles-Container');
var numberOfParticles = 100;

for (var i = 0; i < numberOfParticles; i++) {
    var particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 2 + 's';
    particlesContainer.appendChild(particle);
}