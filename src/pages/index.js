// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

// import Heading from '@theme/Heading';
// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHeader from "../components/homepage/header";
import HomepageFeatures from "../components/homepage/features";
// import HomepageQuickInstall from "../components/homepage/quick-install";
// import HomepageContribute from "../components/homepage/contribute";
import { features, features_horizontal } from "../data/features-list";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - The web flat design framework`}
      description="Modern flat design framework for the web — inspired by Duolingo design system."
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures items={features} /> */}
        <h2 style={{
          margin: "0 auto",
          textAlign: "center",
          fontSize: "40px",       // increases font size
          padding: "10px 0"       // adds top & bottom padding
        }}>What to expect when you work with me</h2>
        <HomepageFeatures items={features_horizontal} isSmall={true} />
        {/* <HomepageQuickInstall /> */}
        {/* <HomepageContribute /> */}
      </main>
    </Layout>
  );
}
