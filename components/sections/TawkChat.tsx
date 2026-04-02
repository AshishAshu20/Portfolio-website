'use client';

import { useEffect } from 'react';

export default function TawkChat() {
  useEffect(() => {
    // Prevent multiple script injections
    if (document.getElementById('tawk-script')) return;

    const script = document.createElement('script');
    script.id = 'tawk-script';
    script.src = 'https://embed.tawk.to/69ce6481ced0971c348cb297/1jl73h6va';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('tawk-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
}