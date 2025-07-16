import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Permitting Interoperability Exchange Specification',
  tagline: 'An easy-as-pie way to exchange standardized permitting information. 🥧',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://bcgov.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL || '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bcgov', // Usually your GitHub org/user name.
  projectName: 'nr-pies', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  future: {
    /**
     * Opt-in to all of the @docusaurus/faster stack introduced in 3.6
     * @see https://docusaurus.io/blog/releases/3.6#adoption-strategy
     */
    experimental_faster: true,
    /**
     * Opt-in to all incoming feature flags that will appear in Docusaurus 4.
     * @see https://docusaurus.io/blog/releases/3.8#future-flags
     */
    v4: true
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        enableHighlight: true
      }
    ],
    '@docusaurus/theme-mermaid'
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/bcgov/nr-pies/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          tags: 'tags.yaml',
          onInlineTags: 'throw'
        },
        // To enable the blog, remove the blog: false line and uncomment below
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: 'https://github.com/bcgov/nr-pies/tree/main/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn'
        // },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  markdown: {
    mermaid: true
  },

  themeConfig: {
    // Replace with your project's social card
    image: 'img/BCID_H_rgb_pos.png',
    announcementBar: {
      id: 'announcement',
      content: 'The PIES specification is still baking... 🥧',
      backgroundColor: '#FEF1D8',
      textColor: '#000000',
      isCloseable: true
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true
      }
    },
    navbar: {
      hideOnScroll: true,
      title: 'NR-PIES',
      logo: {
        alt: 'Government of B.C.',
        src: 'img/BCID_H_rgb_pos.png',
        srcDark: 'img/BCID_H_rgb_rev.png'
      },
      items: [
        // TODO: Uncomment this when we do our first version release
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'left',
        //   // dropdownItemsAfter: [{ to: "/versions", label: "All versions" }],
        //   dropdownActiveClassDisabled: true
        // },
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'right',
          label: 'Docs'
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'right',
        //   label: 'Tutorial'
        // },
        // { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/bcgov/nr-pies',
          position: 'right',
          className: 'header-github-logo',
          'aria-label': 'GitHub Repo'
        }
      ]
    },
    footer: {
      logo: {
        alt: 'Creative Commons Attribution 4.0 International License',
        src: 'img/cc-by.png',
        href: 'https://creativecommons.org/licenses/by/4.0/',
        target: '_blank',
        width: 80,
        height: 15,
        className: 'footer-logo-license'
      },
      links: [
        {
          label: 'Home',
          href: 'https://www2.gov.bc.ca/gov/content/home'
        },
        {
          label: 'About gov.bc.ca',
          href: 'https://www2.gov.bc.ca/gov/content/about-gov-bc-ca'
        },
        {
          label: 'Disclaimer',
          href: 'https://www2.gov.bc.ca/gov/content/home/disclaimer'
        },
        {
          label: 'Privacy',
          href: 'https://www2.gov.bc.ca/gov/content/home/privacy'
        },
        {
          label: 'Accessibility',
          href: 'https://www2.gov.bc.ca/gov/content/home/accessible-government'
        },
        {
          label: 'Copyright',
          href: 'https://www2.gov.bc.ca/gov/content/home/copyright'
        },
        {
          label: 'Contact us',
          href: 'https://www2.gov.bc.ca/gov/content/home/get-help-with-government-services'
        },
        {
          label: 'Docusaurus',
          to: 'docs/docusaurus/intro'
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Government of British Columbia. Built with Docusaurus.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['mermaid']
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4
    },
    mermaid: {
      theme: { light: 'default', dark: 'dark' }
    }
  } satisfies Preset.ThemeConfig,

  // Allows use of @theme/JSONSchemaEditor or @theme/JSONSchemaViewer
  themes: ['docusaurus-json-schema-plugin']
};

export default config;
