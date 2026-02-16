let currentMessageIndex = 0;
let messages = [];
let isOpenAnimating = false;
let personalizedRecipient = '';

function escapeHtml(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function normalizeMessageText(rawMessage) {
    let text = (rawMessage || '')
        .replace(/\\n/g, '\n')
        .replace(/\r\n?/g, '\n')
        .trim();

    // Auto-create paragraph spacing for long one-line messages.
    if (!text.includes('\n')) {
        const sentences = text.split(/(?<=[.!?。！？])\s+/u).filter(Boolean);
        if (sentences.length >= 3) {
            const paragraphGroups = [];
            for (let i = 0; i < sentences.length; i += 2) {
                paragraphGroups.push(sentences.slice(i, i + 2).join(' '));
            }
            text = paragraphGroups.join('\n\n');
        }
    }

    return text;
}

function getQueryPersonalization() {
    const params = new URLSearchParams(window.location.search);
    const to = (params.get('to') || '').trim();
    const id = (params.get('id') || '').trim();
    const message = (params.get('message') || '').trim();

    if (!id && !message) return null;

    return { to, id, message };
}

function getMessageById(data, id) {
    if (!id) return null;

    // Preferred: dedicated map for personalized share links.
    if (data && data.personalized && typeof data.personalized === 'object') {
        const mapped = data.personalized[id];
        if (mapped && typeof mapped === 'object') {
            return mapped;
        }
    }

    // Backward-compatible: allow id inside regular messages array.
    const list = data && Array.isArray(data.messages) ? data.messages : [];
    return list.find((item) => item && item.id === id) || null;
}

// Load messages from JSON
async function loadMessages() {
    const personalized = getQueryPersonalization();

    try {
        const response = await fetch('messages.json');
        const data = await response.json();

        if (personalized && personalized.id) {
            const selectedMessage = getMessageById(data, personalized.id);

            if (selectedMessage) {
                const recipientName = (selectedMessage.subject || personalized.to || '').trim();
                personalizedRecipient = recipientName;
                messages = [{
                    ...selectedMessage,
                    subject: recipientName || 'Friend'
                }];
                document.getElementById('next-btn').style.display = 'none';
                document.getElementById('open-btn').textContent = recipientName
                    ? `點擊開啟 ${recipientName} 的紅包`
                    : '點擊開啟紅包';
                return;
            }
            console.warn(`Message id "${personalized.id}" not found in messages.json`);
        }

        if (personalized && personalized.message) {
            const recipientName = (personalized.to || '').trim();
            personalizedRecipient = recipientName;
            messages = [{
                subject: recipientName || 'Friend',
                message: personalized.message
            }];
            document.getElementById('next-btn').style.display = 'none';
            document.getElementById('open-btn').textContent = recipientName
                ? `點擊開啟 ${recipientName} 的紅包`
                : '點擊開啟紅包';
            return;
        }

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
    const baseMessage = message.message || '恭喜發財！';
    const startsWithName = personalizedRecipient &&
        baseMessage.toLowerCase().startsWith(personalizedRecipient.toLowerCase());
    const finalMessage = personalizedRecipient && !startsWithName
        ? `${personalizedRecipient}，${baseMessage}`
        : baseMessage;
    const normalizedMessage = normalizeMessageText(finalMessage);
    const paragraphHtml = normalizedMessage
        .split(/\n{2,}/)
        .filter(Boolean)
        .map((paragraph) => (
            `<span class="message-paragraph">${escapeHtml(paragraph).replace(/\n/g, '<br>')}</span>`
        ))
        .join('');

    const messageEl = document.getElementById('card-message');
    messageEl.innerHTML = paragraphHtml || '<span class="message-paragraph">恭喜發財！</span>';
    messageEl.classList.toggle('long-message', normalizedMessage.length > 260);

    // Update envelope image
    const envelopeImg = document.getElementById('envelope-image');
    if (message.image) {
        envelopeImg.src = message.image;
        envelopeImg.alt = message.subject || 'Red Envelope';
    }
}

// Open envelope
function openEnvelope() {
    if (isOpenAnimating) return;

    isOpenAnimating = true;
    const envelope = document.getElementById('envelope');
    const openBtn = document.getElementById('open-btn');

    // Add opening animation to envelope
    envelope.classList.add('opening');
    openBtn.style.pointerEvents = 'none';
    openBtn.style.opacity = '0.5';

    // Show modal when the flap starts opening
    setTimeout(() => {
        envelope.classList.add('is-open');
        document.getElementById('modal').classList.remove('hidden');
        displayMessage(currentMessageIndex);

        // Trigger confetti
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createConfetti(), i * 40);
        }
    }, 550);
}

function closeEnvelope() {
    const envelope = document.getElementById('envelope');
    const openBtn = document.getElementById('open-btn');

    document.getElementById('modal').classList.add('hidden');

    setTimeout(() => {
        envelope.classList.remove('opening', 'is-open');
        openBtn.style.pointerEvents = 'auto';
        openBtn.style.opacity = '1';
        isOpenAnimating = false;
    }, 260);
}

document.getElementById('open-btn').addEventListener('click', openEnvelope);
document.getElementById('envelope').addEventListener('click', openEnvelope);

// Close modal
document.getElementById('close-btn').addEventListener('click', () => {
    closeEnvelope();
});

// Next message
document.getElementById('next-btn').addEventListener('click', () => {
    currentMessageIndex++;
    displayMessage(currentMessageIndex);
});

// Close modal when clicking outside
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) {
        closeEnvelope();
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
