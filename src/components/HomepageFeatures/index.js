import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Sensor',
    Svg: require('@site/static/img/whatisgrillo1.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur. Eu porttitor adipiscing proin condimentum ut pharetra egestas nunc.
      </>
    ),
  },
  {
    title: 'Processing',
    Svg: require('@site/static/img/whatisgrillo2.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur. Eu porttitor adipiscing proin condimentum ut pharetra egestas nunc.
      </>
    ),
  },
  {
    title: 'Alerts/Notifications',
    Svg: require('@site/static/img/whatisgrillo3.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur. Eu porttitor adipiscing proin condimentum ut pharetra egestas nunc.
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