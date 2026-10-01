import type {ReactNode} from 'react';
import CookieConsent from '@site/src/components/CookieConsent';

export default function Root({children}: {children: ReactNode}): ReactNode {
  return (
    <>
      {children}
      <CookieConsent />
    </>
  );
}
