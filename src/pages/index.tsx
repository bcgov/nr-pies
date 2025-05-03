import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading
          as="h1"
          className="hero__title"
        >
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Explore PIES - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFooter() {
  return (
    <div className="acknowledgement">
      <div className="container">
        <p className="row">
          The B.C. Public Service acknowledges the territories of First Nations
          around B.C. and is grateful to carry out our work on these lands. We
          acknowledge the rights, interests, priorities, and concerns of all
          Indigenous Peoples - First Nations, Métis, and Inuit - respecting and
          acknowledging their distinct cultures, histories, rights, laws, and
          governments.
        </p>
      </div>
    </div>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomepageFooter />
    </Layout>
  );
}
