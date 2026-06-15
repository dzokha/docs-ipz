import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IPZ Digital Solutions',
  tagline: 'Chuyển hóa dữ liệu thành giá trị',
  favicon: 'img/ipz.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.ipz.vn',
  baseUrl: '/',

  organizationName: 'dzokha',
  projectName: 'docs-ipz',

  onBrokenLinks: 'warn', // Thay vì 'throw'
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/dzokha/docs-ipz/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/dzokha/docs-ipz/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Cấu trúc plugins đúng: là một mảng nằm ngoài presets và ở mức root
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cybersecurity',
        path: 'cybersecurity',
        routeBasePath: 'cybersecurity',
        sidebarPath: './sidebarsCyber.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'bioinformatics',
        path: 'bioinformatics',
        routeBasePath: 'bioinformatics',
        sidebarPath: './sidebarsBio.ts',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IPZ Docs',
      logo: {
        alt: 'IPZ Digital Logo',
        src: 'img/ipz.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Tài nguyên Mở', // Thể hiện tinh thần chia sẻ với cộng đồng
          position: 'left',
          items: [
            { label: 'tcpfeature', to: '/software/python' },
            { label: 'ids-ac', to: '/software/github' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Giải pháp & Nghiên cứu', // Vừa học thuật vừa mang tính ứng dụng
          position: 'left',
          items: [
            { label: 'An ninh mạng Chuyên sâu', to: '/cyberintro' },
            { label: 'Giải pháp Sở hữu Trí tuệ', to: '/ip/intro' },
            { label: 'Chiến lược Thương hiệu Số', to: '/brand/intro' },
            { label: 'Công nghệ Tin sinh học', to: '/bio/intro' },
          ],
        },
        {
          type: 'dropdown', // Biến Blog thành nơi phân loại bài viết công bố
          label: 'Công bố & Ấn phẩm', 
          position: 'left',
          items: [
            { label: 'Tất cả Ấn phẩm', to: '/blog' },
            { label: 'Báo cáo An ninh mạng', to: '/blog/tags/cybersecurity' },
            { label: 'Chiến lược Thương hiệu', to: '/blog/tags/brand' },
            { label: 'Phân tích Sáng chế & IP', to: '/blog/tags/patent' },
            { label: 'Nghiên cứu Tin sinh học', to: '/blog/tags/bioinformatics' },
            
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Tài nguyên Mở', to: '/docs/intro' },
            { label: 'Giải pháp & Nghiên cứu', to: '/blog' },
            { label: 'Công bố & Ấn phẩm', to: '/blog' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Facebook', href: 'https://facebook.com/ipz.vn' },
            { label: 'Youtube', href: 'https://youtube.com/@ipz-vn' },
            { label: 'Website', href: 'https://ipz.vn' },
          ],
        },
        {
          title: 'Liên hệ',
          items: [
            { label: 'IPZ Digital Solutions', href: 'https://ipz.vn' },
            { label: 'Cái Nước, Cà Mau, Việt Nam', href: 'https://maps.app.goo.gl/kKMTGoRxBH1CLGbz9' },
            { label: 'Email: info@ipz.vn', href: 'mailto:info@ipz.vn' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IPZ Digital Solutions.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;