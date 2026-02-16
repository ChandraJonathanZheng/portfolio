let currentMessageIndex = 0;
let messages = [];

// Load messages from JSON
async function loadMessages() {
    try {
        const response = await fetch('messages.json');
        const data = await response.json();
        messages = data.messages || [];

        if (messages.length === 0) {
            console.warn('No messages found in messages.json');
            messages = [{
                message: '新年快樂！祝你事業順利，身體健康！',
                subject: 'Friend',
                image: 'https://via.placeholder.com/400x500/dc143c/ffffff?text=紅包'
            }];
        }
    } catch (error) {
        console.error('Error loading messages:', error);
        messages = [{
            message: '新年快樂！祝你事業順利，身體健康！',
            subject: 'Friend',
            image: 'https://via.placeholder.com/400x500/dc143c/ffffff?text=紅包'
        }];
    }
}

// Display current message
function displayMessage(index) {
    if (messages.length === 0) return;

    const message = messages[index % messages.length];
    document.getElementById('card-subject').textContent = message.subject || 'Friend';
    document.getElementById('card-message').textContent = message.message || '恭喜發財！';

    // Update envelope image
    const envelopeImg = document.getElementById('envelope-image');
    if (message.image) {
        envelopeImg.src = message.image;
        envelopeImg.alt = message.subject || 'Red Envelope';
    }
}

// Open envelope
document.getElementById('open-btn').addEventListener('click', () => {
    const envelope = document.getElementById('envelope');
    const openBtn = document.getElementById('open-btn');
    const container = document.querySelector('.container');

    // Add opening animation to envelope
    envelope.classList.add('opening');
    openBtn.style.pointerEvents = 'none';
    openBtn.style.opacity = '0.5';

    // Show modal after envelope animation starts
    setTimeout(() => {
        document.getElementById('modal').classList.remove('hidden');
        displayMessage(currentMessageIndex);

        // Trigger confetti
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createConfetti(), i * 40);
        }
    }, 400);
});

// Close modal
document.getElementById('close-btn').addEventListener('click', () => {
    const envelope = document.getElementById('envelope');
    const openBtn = document.getElementById('open-btn');

    document.getElementById('modal').classList.add('hidden');

    // Reset envelope animation
    setTimeout(() => {
        envelope.classList.remove('opening');
        openBtn.style.pointerEvents = 'auto';
        openBtn.style.opacity = '1';
    }, 300);
});

// Next message
document.getElementById('next-btn').addEventListener('click', () => {
    currentMessageIndex++;
    displayMessage(currentMessageIndex);
});

// Close modal when clicking outside
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) {
        document.getElementById('modal').classList.add('hidden');
    }
});

// Initialize
loadMessages();

// Add some festive animations
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = ['#FFD700', '#dc143c', '#FFA500'][Math.floor(Math.random() * 3)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '999';

    document.body.appendChild(confetti);

    let top = -10;
    const animationInterval = setInterval(() => {
        top += 3;
        confetti.style.top = top + 'px';
        confetti.style.opacity = Math.max(0, 1 - top / window.innerHeight);

        if (top > window.innerHeight) {
            clearInterval(animationInterval);
            confetti.remove();
        }
    }, 30);
}

