/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Seedbox.io Docs',
  tagline: 'Make the best of your seedbox',
  url: 'https://docs.seedbox.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'hnielsen-networks', // Usually your GitHub org/user name.
  projectName: 'seedbox.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Seedbox.io Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/',
          activeBasePath: '/',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HNielsen Networks.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://gitlab.com/hnielsen-networks/docs/seedbox.io/-/tree/master/docs',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
