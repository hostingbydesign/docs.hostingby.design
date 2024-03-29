/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'HostingByDesign Docs',
  tagline: 'Make the best of your service',
  url: 'https://docs.hostingby.design',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'hostingbydesign', // Usually your GitHub org/user name.
  projectName: 'docs.hostingby.design', // Usually your repo name.
  trailingSlash: false,
  staticDirectories: ['public', 'static'],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: 'HostingByDesign',
      logo: {
        alt: 'HostingByDesign Logo',
        src: 'img/logo-bare.png',
      },
      items: [
        // {to: '/', activeBasePath: '/', label: 'Docs', position: 'left',},
        {href: 'https://hostingby.design', label: 'Home', position: 'right'},
        {href: 'https://my.hostingby.design/', label: 'Client Area', position: 'right'},
        {href: 'https://my.hostingby.design/serverstatus.php', label: 'Server Status', position: 'right'},
        {href: 'https://discord.gg/StaAybe3rm', label: 'Discord', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HNielsen Technologies ApS.`,
      
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
