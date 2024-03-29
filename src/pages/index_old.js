import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import CallToAction from '../components/CallToAction';
import SocialProof from '../components/SocialProof';
import Testimonial from '../components/Testimonial';
import UseCases from '../components/UseCase';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container"> 
        <h1 className="hero__title">{'Make sense of shaking'}</h1>
        <p className="hero__subtitle">{'Grillo converts vibrations into critical information that helps you make decisions.'}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="#">
            Get Started
          </Link>
        </div>
        <img src={require('../../static/img/dashboard.png').default} alt='mySvgImage' />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <SocialProof />
        <HomepageFeatures />
        <Testimonial />
        <UseCases />
        <CallToAction />
      </main>
    </Layout>
  );
}
