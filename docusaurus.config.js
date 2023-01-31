/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'HostingByDesign Docs',
  tagline: 'Make the best of your seedbox',
  url: 'https://docs.hostingby.design',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'hostingbydesign', // Usually your GitHub org/user name.
  projectName: 'docs.hostingby.design', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'HostingByDesign Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/', activeBasePath: '/', label: 'Docs', position: 'left',},
        {href: 'https://hostingby.design', label: 'Home', position: 'right'},
        {href: 'https://panel.hostingby.design/clientarea.php', label: 'Client Area', position: 'right'},
        {href: 'https://panel.hostingby.design/serverstatus.php', label: 'Server Status', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HNielsen Networks.`,
      
    },
  },
  themes: [
        [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: "/",
        language: "en",
        docsDir: "docs",
      }),
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/hostingbydesign/docs.hostingby.design/tree/master',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
