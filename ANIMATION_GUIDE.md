# ✨ Animation Guide - 紅包 Envelope Opening

## What Happens When You Click the Envelope?

### 1️⃣ **Envelope Opening (1.2 seconds)**
```
Initial State: Envelope facing you
    ↓
    ↓ (Envelope flap flutters)
    ↓
Click! Button pressed
    ↓
    ↓ Golden back side revealed
    ↓
    ↓ Envelope rotates 90° and slides left
    ↓
Final State: Envelope fades away
```

**Animation Details:**
- Smooth cubic-bezier easing for natural motion
- Envelope rotates on Y-axis (-90°)
- Flap flutters during hover for interactivity
- Back side shows golden gradient (#FFD700 → #FFA500)

### 2️⃣ **Card Flip & Appear (0.8 seconds, starts at 0.4s)**
```
Back of envelope
    ↓
    ↓ Card emerges from behind
    ↓
    ↓ (Rotates 90° → 45° → 0°)
    ↓
    ↓ (Scales up: 0.5 → 1.0)
    ↓
Front of Card: Message fully visible! 🎊
```

**Animation Details:**
- Card starts hidden (rotateY: 90°, rotateX: -15°)
- Flips into view with 3D rotation
- Opacity fades in (0 → 1)
- Card flips in from right side
- Blessing message and recipient name appear

### 3️⃣ **Confetti Celebration (0.3 - 1.5 seconds)**
```
🎊 8 confetti pieces drop from top
    ↓
    ↓ Different colors: gold, red, orange
    ↓
    ↓ Float down slowly
    ↓
Confetti reaches bottom and fades away
```

**Animation Details:**
- 8 confetti pieces triggered
- Staggered timing (40ms apart)
- Random horizontal position
- Gravity effect (3px per frame downward)
- Fade effect as they descend

## Animation Timeline

```
Time    Event                                Duration
0ms     User clicks "點擊開啟"
        ↓ Envelope starts rotating
50ms    Envelope animation in progress
        ↓
200ms   Envelope animation ~70% done
        ↓
400ms   ⚡ Modal appears with card inside
        ↓ Card starts flipping into view      1200ms total from click
        ↓ Confetti starts falling
500ms   Card flip ~50% complete
        ↓ First confetti pieces visible
700ms   Card flip ~80% complete
        ↓
900ms   Card flip complete! ✨
        ↓
1200ms  Last confetti reaches bottom
        ↓ All animations finished
```

## CSS Animations Used

### 1. Envelope Opening
```css
@keyframes envelopeOpen {
    0%:    rotateY(0deg)        - Facing front
    40%:   rotateX(-15deg)      - Tip back slightly
    60%:   rotateY(-25deg)      - Start rotating
    100%:  rotateY(-90deg)      - Fully rotated, fade out
}
Duration: 1.2s
Easing: cubic-bezier(0.68, -0.55, 0.27, 1.55)
Effect: Bouncy, natural motion
```

### 2. Card Flip In
```css
@keyframes cardFlipIn {
    0%:    rotateY(90deg), opacity: 0       - Hidden, facing right
    50%:   rotateY(45deg), opacity: 0.7     - Half visible
    100%:  rotateY(0deg), opacity: 1        - Fully visible
}
Duration: 0.8s
Delay: 0.2s (starts after envelope begins opening)
Easing: cubic-bezier(0.68, -0.55, 0.27, 1.55)
Effect: Card emerges from behind envelope
```

### 3. Card Flip Appear (Modal)
```css
@keyframes cardFlipAppear {
    0%:    translateY(100px), rotateX(-90deg), scaleY(0.5)
           - Below, rotated, compressed
    100%:  translateY(0), rotateX(0deg), scaleY(1)
           - At position, flat, full size
}
Duration: 0.8s
Easing: cubic-bezier(0.68, -0.55, 0.27, 1.55)
Effect: Card rises and expands into view
```

## Technical Details

### 3D Transforms Used
- `transform-style: preserve-3d` - Enable 3D space
- `perspective: 1200px` - Viewing angle depth
- `rotateX()`, `rotateY()` - 3D rotation
- `translateZ()` - 3D depth positioning
- `backface-visibility: hidden` - Hide back of elements

### Key CSS Classes
- `.envelope` - Main rotating envelope
- `.envelope-front` - Red envelope face
- `.envelope-back` - Golden back side
- `.envelope-flap` - Top flap with flutter
- `.card` - Blessing message card
- `.modal-content` - Modal container

### JavaScript Timing
```javascript
Click → envelope.classList.add('opening')
  ↓
400ms delay → modal appears
  ↓
       → card animates (starts after 200ms more)
  ↓
40ms stagger → confetti pieces (8 total)
  ↓
Animations complete → User sees message!
```

## Browser Support

✅ **Fully Supported:**
- Chrome 60+
- Firefox 55+
- Safari 12.1+
- Edge 79+

✅ **Mobile Browsers:**
- iOS Safari (11+)
- Android Chrome
- Samsung Internet

## Performance Notes

- GPU-accelerated animations (uses `transform`)
- 60 FPS on most devices
- Mobile optimized
- Smooth on older devices (falls back gracefully)

## Customizing Animations

### Speed Up/Slow Down Envelope
Edit in `styles.css`:
```css
@keyframes envelopeOpen {
    /* Change 1.2s to desired duration */
    animation: envelopeOpen 0.8s ... /* Faster */
    animation: envelopeOpen 1.5s ... /* Slower */
}
```

### Change Envelope Rotation Angle
```css
100% {
    transform: rotateY(-60deg);  /* Less rotation */
    transform: rotateY(-120deg); /* More rotation */
}
```

### Adjust Card Flip Delay
In `script.js`:
```javascript
setTimeout(() => {
    // Change 400 to different milliseconds
    // Smaller = card appears sooner
    // Larger = card appears later
}, 400);
```

### Change Colors
- **Envelope back:** `.envelope-back` background gradient
- **Flap:** `.envelope-flap` background
- **Confetti:** `createConfetti()` function, color array

---

**Enjoy the spectacular animation!** 🎊✨

新年快樂！🧧
