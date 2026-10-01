import {useEffect, useState, type ReactNode} from 'react';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

const STORAGE_KEY = 'cookieConsent';
const INTERCOM_APP_ID = 'hkgzlx5c';

declare global {
  interface Window {
    Intercom?: (command: 'update') => void;
  }
}

function loadIntercom() {
  if (document.getElementById('intercom-script')) return;

  // Intercom Messenger boots itself from window.intercomSettings once the widget script loads
  Object.assign(window, {
    intercomSettings: {api_base: 'https://api-iam.intercom.io', app_id: INTERCOM_APP_ID},
  });
  const script = document.createElement('script');
  script.id = 'intercom-script';
  script.async = true;
  script.src = `https://widget.intercom.io/widget/${INTERCOM_APP_ID}`;
  document.body.appendChild(script);
}

export default function CookieConsent(): ReactNode {
  const [visible, setVisible] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent === 'accepted') {
      loadIntercom();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  // Docusaurus navigates client-side, so Intercom only learns the current page when told
  useEffect(() => {
    window.Intercom?.('update');
  }, [pathname]);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    loadIntercom();
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="region" aria-label="Cookie consent">
      <p className={styles.message}>
        We use cookies to offer support chat on this site.
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.reject} onClick={reject}>
          Reject
        </button>
        <button type="button" className={styles.accept} onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
}
