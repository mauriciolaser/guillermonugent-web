import { useEffect } from 'react';

const GA_ID = import.meta.env.VITE_GA_ID;

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_ID) return;

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
