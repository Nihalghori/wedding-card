// Get elements
const countdownEl = document.getElementById('countdown');
const headingEl = document.getElementById('heading');
const weddingTextEl = document.getElementById('wedding-text');
const weddingImageEl = document.getElementById('wedding-image');
const music = document.getElementById('wedding-music');

// Countdown from 3
let countdownValue = 3;
countdownEl.textContent = countdownValue;
music.play();

const countdownInterval = setInterval(() => {
    countdownValue--;
    countdownEl.textContent = countdownValue;

    if (countdownValue < 0) {
        clearInterval(countdownInterval);
        countdownEl.style.display = 'none';
        headingEl.classList.remove('hidden');
        headingEl.style.opacity = '1';

        setTimeout(() => {
            headingEl.classList.add('hidden');

            // Show wedding text
            weddingTextEl.classList.remove('hidden');
            weddingTextEl.style.opacity = '1';

            // Show wedding image
            setTimeout(() => {
                weddingImageEl.classList.remove('hidden');
                requestAnimationFrame(() => {
                    weddingImageEl.classList.add('show');
                });
            }, 1000); // Adjust the timing
        }, 2000);
    }
}, 1000);
