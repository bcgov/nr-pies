import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easytouse.svg').default,
    description: (
      <>
        PIES was designed from the ground up to be easily understood and
        installed in your application quickly.
      </>
    )
  },
  {
    title: 'Interoperable',
    Svg: require('@site/static/img/interoperable.svg').default,
    description: (
      <>
        PIES lets you focus on your data. Let your systems communicate to each
        other with ease.
      </>
    )
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/opensource.svg').default,
    description: (
      <>
        Want to improve PIES? We welcome your{' '}
        <a href="https://github.com/bcgov/nr-permit-interoperability-exchange-specification">
          contributions
        </a>
        !
      </>
    )
  }
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg
          className={styles.featureSvg}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
