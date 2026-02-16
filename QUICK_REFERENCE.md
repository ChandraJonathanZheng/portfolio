# ⚡ Quick Reference - Get Started in 30 Seconds

## 🚀 Run Locally (Right Now!)

```bash
cd "/c/Users/gets_/OneDrive/Goons/Projects/portfolio/CNY Cards/portfolio"
python -m http.server 8000
```

Then open: **http://localhost:8000** ✅

## 🌐 Share Globally with ngrok

```bash
ngrok http 8000
```

Copy the URL → Share on LINE, WhatsApp, Instagram → Done! 🎊

## 📝 Customize Messages

Edit `messages.json`:

```json
{
  "message": "新年快樂！祝你... (your message)",
  "subject": "Person's name",
  "image": "https://image-url.jpg"
}
```

Add more to reach 100+! 🧧

## 📁 File Map

| File | Purpose |
|------|---------|
| `index.html` | Main interface |
| `styles.css` | Styling + animations |
| `script.js` | Interactive features |
| `messages.json` | Your messages (EDIT THIS!) |
| `README.md` | Full docs |
| `ANIMATION_GUIDE.md` | Animation details |

## 🎯 Key Features

✨ **3D Envelope Opening** - Click to reveal message
💌 **86+ Messages** - Ready to customize
📱 **Mobile Perfect** - Works on any device/browser
🎊 **Confetti** - Celebration effect
⚡ **Super Fast** - No loading delays
🔐 **No Backend** - Pure frontend (safe, simple)

## 🎨 Quick Customizations

### Change Colors
Edit `styles.css` line 18:
```css
background: linear-gradient(135deg, #8B0000 0%, #dc143c 25%, ...);
```

### Change Button Text
Edit `index.html` line 20:
```html
<button>Your text here</button>
```

### Add/Remove Messages
Edit `messages.json` - just add/delete message objects

## 🚢 Deploy Options

1. **Netlify** - Drag & drop folder → done!
2. **Vercel** - Connect GitHub → auto-deploys
3. **GitHub Pages** - Push to repo → instant
4. **Any web server** - Static files only
5. **ngrok** - Share temporary link

## 📊 Animation Timeline

```
Click! 
  ↓
0ms   - Envelope starts rotating
  ↓
400ms - Modal appears with card
  ↓
600ms - Card flips into view
  ↓
1200ms - All done, ready for next! ✨
```

## ✅ Testing Checklist

- [ ] Test locally: `python -m http.server 8000`
- [ ] Open on phone browser
- [ ] Click envelope - animations smooth?
- [ ] Message displays correctly?
- [ ] Click "Next 紅包" - cycles through messages?
- [ ] Close button works?
- [ ] Ready to share!

## 💬 Commands Cheat Sheet

```bash
# Start server
python -m http.server 8000

# Share globally (needs ngrok)
ngrok http 8000

# View git history
git log --oneline

# See what changed
git status

# Add files
git add .

# Commit
git commit -m "Your message"

# Push to GitHub
git push origin main
```

## 🎯 Next Steps (In Order)

1. ✅ Run locally and test
2. ✅ Customize messages.json
3. ✅ Test on phone
4. ✅ Deploy (ngrok/Netlify/etc)
5. ✅ Share the URL!

## 📱 What Users See

1. Beautiful red envelope 🧧
2. Click to open
3. Envelope rotates away ✨
4. Card flips out with message 💌
5. Confetti falls 🎊
6. Next button cycles messages
7. Close to reset

## 🔧 Browser Support

✅ All modern browsers
✅ All mobile browsers  
✅ LINE, WhatsApp, Instagram browsers
✅ Works on all devices

## 📞 Need Help?

- **Quick start?** → See SETUP.md
- **Animations?** → See ANIMATION_GUIDE.md  
- **Deploying?** → See DEPLOYMENT.md
- **Full info?** → See README.md
- **Features?** → See FEATURES.md

## 🎊 You're All Set!

Everything is ready. Just:
1. Test locally
2. Deploy
3. Share
4. Watch people enjoy! 🎉

---

**Made with ❤️ by Chandra and Linlin**

新年快樂！🧧
