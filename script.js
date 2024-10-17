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

// Confetti generator
function launchConfetti() {
    let confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDelay = `${Math.random() * 5}s`;
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
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
