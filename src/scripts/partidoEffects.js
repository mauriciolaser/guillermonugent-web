/**
 * sectionEffects.js
 * Animated colored watermarks, adorno animation, and share button.
 * Import from any section component and call init/cleanup via useEffect.
 */

import logoSrc from '../assets/images/home/logo.webp';

const WATERMARK_COUNT = 5;
const COLORS = ['#D40E0B', '#FAD50B', '#D40E0B', '#FAD50B', '#D40E0B'];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

/* ── Adorno animation (always active) ── */

function initAdornoAnimation(adornoEl) {
  const base = 'translateX(-50%)';

  const keyframes = [
    {
      transform: `${base} scale(1) rotate(0deg)`,
      filter: 'drop-shadow(0 2px 8px rgba(212,14,11,0.15))',
    },
    {
      transform: `${base} scale(1.1) rotate(5deg)`,
      filter: 'drop-shadow(0 6px 20px rgba(212,14,11,0.3))',
      offset: 0.25,
    },
    {
      transform: `${base} scale(1.05) rotate(-3deg)`,
      filter: 'drop-shadow(0 4px 14px rgba(212,14,11,0.22))',
      offset: 0.5,
    },
    {
      transform: `${base} scale(1.12) rotate(4deg)`,
      filter: 'drop-shadow(0 5px 18px rgba(212,14,11,0.28))',
      offset: 0.75,
    },
    {
      transform: `${base} scale(1) rotate(0deg)`,
      filter: 'drop-shadow(0 2px 8px rgba(212,14,11,0.15))',
    },
  ];

  const anim = adornoEl.animate(keyframes, {
    duration: 6000,
    iterations: Infinity,
    easing: 'ease-in-out',
    fill: 'both',
  });

  return () => {
    anim.cancel();
    adornoEl.style.transform = base;
    adornoEl.style.filter = '';
  };
}

/* ── Colored watermarks ── */

function createWatermark(container, index) {
  const img = document.createElement('img');
  img.src = logoSrc;
  img.alt = '';
  img.setAttribute('aria-hidden', 'true');

  const size = randomBetween(120, 280);
  const startX = randomBetween(-5, 85);
  const startY = randomBetween(5, 75);
  const rotation = randomBetween(-25, 25);
  const duration = randomBetween(18, 32);
  const delay = randomBetween(0, 8);

  Object.assign(img.style, {
    position: 'absolute',
    width: `${size}px`,
    height: 'auto',
    left: `${startX}%`,
    top: `${startY}%`,
    opacity: '0',
    pointerEvents: 'none',
    userSelect: 'none',
    zIndex: '0',
    filter: 'none',
    mixBlendMode: 'multiply',
    transform: `rotate(${rotation}deg)`,
  });

  // Tint via CSS filter to approximate the brand color
  if (COLORS[index] === '#FAD50B') {
    img.style.filter = 'sepia(1) saturate(3) hue-rotate(10deg) brightness(1.1)';
  } else {
    img.style.filter = 'sepia(1) saturate(4) hue-rotate(-30deg) brightness(0.75)';
  }

  const keyframes = [
    {
      opacity: 0,
      transform: `rotate(${rotation}deg) translate(0, 0) scale(0.9)`,
    },
    {
      opacity: 0.09,
      transform: `rotate(${rotation + 4}deg) translate(${randomBetween(-30, 30)}px, ${randomBetween(-20, 20)}px) scale(1)`,
      offset: 0.25,
    },
    {
      opacity: 0.07,
      transform: `rotate(${rotation - 3}deg) translate(${randomBetween(-40, 40)}px, ${randomBetween(-30, 30)}px) scale(1.05)`,
      offset: 0.5,
    },
    {
      opacity: 0.09,
      transform: `rotate(${rotation + 2}deg) translate(${randomBetween(-20, 20)}px, ${randomBetween(-15, 15)}px) scale(0.95)`,
      offset: 0.75,
    },
    {
      opacity: 0,
      transform: `rotate(${rotation}deg) translate(0, 0) scale(0.9)`,
    },
  ];

  container.appendChild(img);

  const anim = img.animate(keyframes, {
    duration: duration * 1000,
    delay: delay * 1000,
    iterations: Infinity,
    easing: 'ease-in-out',
    fill: 'both',
  });

  return { el: img, anim };
}

export function initColoredWatermarks(sectionEl, count = WATERMARK_COUNT) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(createWatermark(sectionEl, i));
  }
  return () => {
    items.forEach(({ el, anim }) => {
      anim.cancel();
      el.remove();
    });
  };
}

/* ── Share button ── */

function initShareButton(buttonEl) {
  const handleClick = async () => {
    const shareData = {
      title: 'Guillermo Nugent — Candidato al Senado',
      text: 'Conoce a Guillermo Nugent, candidato al Senado por el Partido del Buen Gobierno.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        /* user cancelled */
      }
    } else {
      // Fallback: copy link
      try {
        await navigator.clipboard.writeText(window.location.href);
        const original = buttonEl.textContent;
        buttonEl.textContent = '¡ENLACE COPIADO!';
        setTimeout(() => { buttonEl.textContent = original; }, 2000);
      } catch {
        /* ignore */
      }
    }
  };

  buttonEl.addEventListener('click', handleClick);
  return () => buttonEl.removeEventListener('click', handleClick);
}

/* ── Public API ── */

export function initPartidoEffects(sectionEl, adornoEl, shareButtonEl) {
  const cleanups = [];

  if (adornoEl) cleanups.push(initAdornoAnimation(adornoEl));
  if (sectionEl) cleanups.push(initColoredWatermarks(sectionEl));
  if (shareButtonEl) cleanups.push(initShareButton(shareButtonEl));

  return () => cleanups.forEach((fn) => fn());
}
