'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    uswds: any;
  }
}

export default function USWDSScript() {
  useEffect(() => {
    // Load USWDS JavaScript after component mounts (client-side only)
    const loadUSWDS = async () => {
      try {
        // Load init script first
        const initScript = document.createElement('script');
        initScript.src = 'https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/js/uswds-init.min.js';
        document.head.appendChild(initScript);

        // Wait for init script to load
        await new Promise((resolve, reject) => {
          initScript.onload = resolve;
          initScript.onerror = reject;
        });

        // Load main script
        const mainScript = document.createElement('script');
        mainScript.src = 'https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/js/uswds.min.js';
        document.head.appendChild(mainScript);

        // Wait for main script and initialize
        await new Promise((resolve, reject) => {
          mainScript.onload = () => {
            // Initialize USWDS components
            setTimeout(() => {
              if (window.uswds) {
                window.uswds.init();
              }
              resolve(true);
            }, 100);
          };
          mainScript.onerror = reject;
        });

      } catch (error) {
        console.error('Failed to load USWDS scripts:', error);
      }
    };

    loadUSWDS();
  }, []);

  return null; // This component doesn't render anything
}