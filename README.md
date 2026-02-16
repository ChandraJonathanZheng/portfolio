# 🧧 Chinese New Year Red Envelope (紅包) Web Interface

A beautiful, responsive web interface for sharing Chinese New Year blessings through red envelopes.

## Features

✨ **Fully Responsive Design** - Works perfectly on mobile browsers (LINE, WhatsApp, Instagram, etc.)
🎨 **Animated Red Envelope** - Interactive envelope with smooth animations
💌 **Customizable Messages** - Easy JSON-based message management
🎉 **Festive Confetti** - Celebration effects when opening envelopes
📱 **Mobile Optimized** - Tested for small screens and touch devices
🌐 **No Database Required** - Simple JSON file for message storage

## Quick Start

### Using Python (Recommended for testing)
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Using ngrok for Public Sharing
```bash
# Start your local server first, then:
ngrok http 8000
```

Share the resulting URL on LINE, WhatsApp, Instagram, etc.!

## Customizing Messages

Edit `messages.json` to add your own messages:

```json
{
  "messages": [
    {
      "message": "Your blessing text here",
      "subject": "Name or recipient",
      "image": "URL to red envelope image"
    }
  ]
}
```

Just keep adding more messages to reach 100+!

## Signature
Made with ❤️ by **Chandra and Linlin**

新年快樂！龍年大吉！🧧
