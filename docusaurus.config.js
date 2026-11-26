// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import localSearch from '@easyops-cn/docusaurus-search-local';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fold Craft Launcher',
  tagline: 'Android 上的 Minecraft: Java 版',
  favicon: 'img/favicon.ico',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon-32x32.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {name: 'theme-color', content: '#0a0c12'},
    },
  ],

  // Production URL. If you fork this site, change url/baseUrl accordingly.
  url: 'https://fcl-team.github.io',
  baseUrl: '/',

  organizationName: 'FCL-Team',
  projectName: 'FCL-Team.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-Hans',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
    },
  },

  themes: [
    [
      localSearch,
      {
        hashed: true,
        language: ['zh', 'en'],
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        searchResultLimits: 10,
        searchResultContextMaxLength: 70,
        explicitSearchResultPath: true,
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        searchBarPosition: 'right',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          breadcrumbs: false,
          editUrl: 'https://github.com/FCL-Team/FCL-Team.github.io/tree/main/',
          editLocalizedFiles: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Fold Craft Launcher',
        logo: {
          alt: 'Fold Craft Launcher 标志',
          src: 'img/logo.png',
          height: 32,
        },
        hideOnScroll: true,
        items: [
          {to: '/download', label: '下载', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: '文档',
          },
          {to: '/community', label: '社区', position: 'left'},
          {to: '/about', label: '关于', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [],
          },
          {
            href: 'https://github.com/FCL-Team/FoldCraftLauncher',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Fold Craft Launcher',
          src: 'img/logo.png',
          width: 40,
          height: 40,
        },
        links: [
          {
            title: '产品',
            items: [
              {label: '下载', to: '/download'},
              {label: '文档', to: '/docs/intro'},
              {label: '版本说明', href: 'https://github.com/FCL-Team/FoldCraftLauncher/releases'},
              {label: '源代码', href: 'https://github.com/FCL-Team/FoldCraftLauncher'},
            ],
          },
          {
            title: '社区',
            items: [
              {label: 'Discord', href: 'https://discord.gg/ffhvuXTwyV'},
              {label: 'QQ 群', href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=LwxydGEvBZJnn09sXOjkQo9tuuLcYwx5&authKey=seyY5pPUCIHMWS5FqVryq926T0G2GarSXetpxxV9DJxBVt%2FPcg1vxN%2F%2FXpsCowyk&noverify=0&group_code=762054349'},
              {label: '参与翻译', href: 'https://hosted.weblate.org/projects/foldcraftlauncher/'},
              {label: 'GitHub Issues', href: 'https://github.com/FCL-Team/FoldCraftLauncher/issues'},
            ],
          },
          {
            title: '项目',
            items: [
              {label: '关于 FCL', to: '/about'},
              {label: '用户协议', to: '/eula'},
              {label: 'GPL-3.0 许可证', href: 'https://www.gnu.org/licenses/gpl-3.0.html'},
              {label: '赞助', href: 'https://afdian.com/@tungs'},
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} FCL-Team · Fold Craft Launcher 是基于 GPL-3.0 许可证的自由软件。· 背景图：柠枺`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'kotlin', 'bash', 'json', 'diff'],
      },
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
};

export default config;
