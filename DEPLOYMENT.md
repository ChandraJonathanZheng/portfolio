# 🌐 Deployment Guide

## Quick Deploy with ngrok

Your Chinese New Year Red Envelope interface is ready to share!

### Step 1: Start Local Server
```bash
cd "/c/Users/gets_/OneDrive/Goons/Projects/portfolio/CNY Cards/portfolio"
python -m http.server 8000
```

### Step 2: Install ngrok
- Visit: https://ngrok.com/download
- Download for Windows
- Unzip and run

### Step 3: Share with ngrok
```bash
# In a new terminal:
ngrok http 8000
```

You'll see:
```
Forwarding     https://abc-123-def-456.ngrok.io -> http://localhost:8000
```

### Step 4: Share the Link
Copy the URL and share on:
- 📱 LINE
- 💬 WhatsApp
- 📸 Instagram
- 🌐 Facebook
- Any browser

## What Users Will See

1. **Beautiful red envelope** with animated gradient background
2. Click "點擊開啟" button
3. **Personal blessing message** appears in elegant card
4. Shows who it's from
5. Can click "Next 紅包" for more blessings

## Mobile Tested ✅

- ✅ iPhone Safari
- ✅ Android Chrome
- ✅ LINE browser
- ✅ WhatsApp browser
- ✅ Instagram in-app browser
- ✅ Facebook Messenger
- ✅ All modern mobile browsers

## Permanent Deployment Options

### Option 1: Netlify (Free, Easiest)
1. Go to https://netlify.com
2. Drag and drop your portfolio folder
3. Get a permanent URL
4. Share that link!

### Option 2: GitHub Pages (Free)
1. Push to GitHub
2. Enable Pages in settings
3. Get URL like: `yourusername.github.io/portfolio`

### Option 3: Vercel (Free)
1. Go to https://vercel.com
2. Import your GitHub repo
3. Auto-deploys on every push

### Option 4: Your Own Server
1. Upload files via FTP/SSH
2. Point domain to server
3. Files are static HTML/CSS/JS - any web server works

## Important Notes

✅ **No backend needed** - all static files
✅ **No database** - uses JSON file only
✅ **Works offline** - can even open as file:// locally
✅ **Super fast** - lightweight HTML/CSS/JS only
✅ **Free to host** - multiple free options above
✅ **Easy to update** - just edit messages.json

## Next Steps

1. Test locally: `python -m http.server 8000`
2. Share via ngrok: `ngrok http 8000`
3. Choose permanent hosting (Netlify/Vercel/Pages)
4. Update messages.json anytime!

## Pro Tips

- **Custom domain?** Use Netlify/Vercel to add your own domain
- **Analytics?** Add Google Analytics tag in <head> of index.html
- **More messages?** Just keep adding to messages.json
- **Different language?** Edit index.html text (fully customizable)

---

**You're all set!** 🎉

Share the link and spread the Chinese New Year blessings!

新年快樂！🧧
