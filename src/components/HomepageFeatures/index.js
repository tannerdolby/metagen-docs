import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <p>
        Quickly generate static and dynamically computed document metadata
      </p>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <p>
        Focus on your site, without having to worry about manually typing out document metadata
      </p>
    ),
  },
  {
    title: 'Powered by a JavaScript Utility',
    description: (
      <p>
        Populate document metadata for pages using familiar JavaScript syntax
      </p>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
