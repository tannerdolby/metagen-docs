import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        eleventy-plugin-metagen was created for quickly adding document metadata
        to pages for your 11ty site.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Metagen lets you focus on your 11ty site, without having to worry about missing document metadata.
      </>
    ),
  },
  {
    title: 'Powered by an Eleventy Plugin',
    description: (
      <>
        Quickly define documenta metadata for pages using the familiar 11ty plugin syntax.
      </>
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
