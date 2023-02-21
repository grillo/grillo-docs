import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Sensor',
    Svg: require('@site/static/img/whatisgrillo1.svg').default,
    description: (
      <>
        Use Grillo Sensor to monitor ground motion. The sensor simply connects to Grillo Console and monitors all seismic motion at the site.
      </>
    ),
  },
  {
    title: 'Processing',
    Svg: require('@site/static/img/whatisgrillo2.svg').default,
    description: (
      <>
        Use Grillo Console to process your data streams. Set up simple or complex routines and choose your desired outputs and alerts that help you to make critical decisions.
      </>
    ),
  },
  {
    title: 'Alerts/Notifications',
    Svg: require('@site/static/img/whatisgrillo3.svg').default,
    description: (
      <>
        Get fast alerts from Grillo Console to your Twitter or E-mail.
      </>
    ),
  },
];

const PicturePanel = [
  {
    title: 'Sensor',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur. Eu porttitor adipiscing proin condimentum ut pharetra egestas nunc.
      </>
    ),
  },
  {
    title: 'Processing',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur. Eu porttitor adipiscing proin condimentum ut pharetra egestas nunc.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}