import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Metagen Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageInfo() {
  return (
    <div className="banner-center">
        <p>
          eleventy-plugin-metagen is a meta tag generator for sites 
          built with <a href="https://11ty.dev">Eleventy</a>. Generate meta tags for <a href="https://ogp.me/">Open Graph</a> and <a href="https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup">Twitter</a> along with some other useful tags. All of the tags necessary for a baseline social share functionality 
          are included with this plugin along with additional tags for more custom use cases.
        </p>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation site for eleventy-plugin-metagen">
      <HomepageHeader />
      <main>
        <HomepageInfo className="banner-center" />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
