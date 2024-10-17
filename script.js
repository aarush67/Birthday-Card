document.querySelector('.open-card').addEventListener('click', function() {
    document.querySelector('.card').style.transform = 'rotateY(180deg)';
    launchConfetti();
    playSound();
});

document.querySelector('.close-card').addEventListener('click', function() {
    document.querySelector('.card').style.transform = 'rotateY(0deg)';
    stopConfetti();
    stopSound();
});

// Confetti generator with better random spread
function launchConfetti() {
    let confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';  // Clear any existing confetti

    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.top = `${Math.random() * 100}%`;
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiPiece.style.width = `${Math.random() * 10 + 5}px`;
        confettiPiece.style.height = `${Math.random() * 10 + 5}px`;
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 3}s`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confettiPiece);
    }
}

function stopConfetti() {
    document.getElementById('confetti').innerHTML = '';
}

// Play sound
function playSound() {
    document.getElementById('birthday-sound').play();
}

// Stop sound
function stopSound() {
    let audio = document.getElementById('birthday-sound');
    audio.pause();
    audio.currentTime = 0;
}
