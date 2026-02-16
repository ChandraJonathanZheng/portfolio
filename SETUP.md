# 🧧 Quick Setup Guide - Chinese New Year Red Envelope

## What You Have

✅ Complete responsive web interface for Chinese New Year red envelopes
✅ 86+ blessing messages ready to go
✅ Works on all mobile devices and browsers
✅ Easy to customize and extend to 100+ messages

## How to Run Locally

### Option 1: Using Python (Easiest)

```bash
# Navigate to the portfolio directory
cd "/c/Users/gets_/OneDrive/Goons/Projects/portfolio/CNY Cards/portfolio"

# Run Python's built-in server
python -m http.server 8000

# Open in browser: http://localhost:8000
```

### Option 2: Using the Shell Script

```bash
bash run-local-server.sh
```

## How to Deploy with ngrok

1. **Start the local server** (see above)

2. **Install ngrok** from https://ngrok.com/download

3. **In another terminal, expose your server:**
   ```bash
   ngrok http 8000
   ```

4. **Copy the URL** - You'll see something like:
   ```
   https://xxxx-xx-xxx-xxx.ngrok.io
   ```

5. **Share it!** Post the link on:
   - 📱 LINE
   - 💬 WhatsApp
   - 📸 Instagram
   - 💻 Facebook
   - Any messaging app with a browser

## How to Add More Messages

Edit `messages.json` and add more blessing objects:

```json
{
  "message": "Your blessing here",
  "subject": "Recipient name",
  "image": "https://image-url-here.jpg"
}
```

**Tips:**
- Use `https://` URLs for images
- You can use placeholder services like:
  - `https://via.placeholder.com/400x500/dc143c/FFD700?text=紅包`
  - `https://picsum.photos/400/500`
  - Upload to Imgur, CloudFlare Images, etc.

## Features Overview

### 🎨 Design
- Animated gradient background with red/gold colors
- Interactive 3D envelope with shine effect
- Responsive card design for all screen sizes
- Festive confetti animation on open

### 📱 Mobile Optimized
- Tested on iPhone, Android
- Works in LINE, WhatsApp, Instagram browsers
- Touch-friendly buttons
- Proper viewport scaling

### ✨ Interactive
- Click to open envelope
- Displays personalized message and recipient
- "Next" button to cycle through messages
- Smooth animations and transitions

### 🔧 Easy to Customize
- Just edit `messages.json` for content
- CSS in `styles.css` for colors/styling
- HTML in `index.html` for structure
- JavaScript in `script.js` for behavior

## File Structure

```
portfolio/
├── index.html           # Main interface
├── styles.css          # Responsive styling
├── script.js           # Interactive features
├── messages.json       # Your blessing messages (EDIT THIS!)
├── run-local-server.sh # Start local server
├── README.md           # Full documentation
└── SETUP.md           # This file
```

## Customization Ideas

### Change the greeting text
Edit the buttons and heading in `index.html`

### Change colors
Modify gradient values in `.background` class in `styles.css`
```css
background: linear-gradient(135deg, #8B0000 0%, #dc143c 25%, ...);
```

### Add custom images
Replace placeholder URLs in `messages.json` with your own red envelope designs

### Change animation speed
Adjust `animation` duration in `styles.css` (currently 15s for gradient)

## Troubleshooting

### Port 8000 already in use?
```bash
# Use a different port
python -m http.server 8001
# Then open: http://localhost:8001
```

### Messages not showing?
- Check `messages.json` syntax (use JSONLint.com)
- Open browser console (F12) to see errors
- Make sure file is in same directory as `index.html`

### Images not loading?
- Use `https://` URLs (not `http://`)
- Check URL is publicly accessible
- Try a different image service

### Styles not applying?
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Clear browser cache
- Check file is accessed via http:// (not file://)

## Pro Tips

1. **Keep it under 100 messages** for best performance on mobile
2. **Use short, meaningful messages** for better display on small screens
3. **Test on your phone** before sharing links
4. **Add emojis** to messages for more festive feel
5. **Update messages.json** anytime to add more blessings

## Ready to Deploy?

Your site is ready to go live! Just:

1. Host the files on any web server
2. Or use ngrok for quick sharing (free for testing)
3. Or deploy to Netlify/Vercel/GitHub Pages for free

## Contact & Credits

Made with ❤️ by **Chandra and Linlin**

新年快樂！龍年大吉！🧧

---

Questions? Check README.md for more details!
