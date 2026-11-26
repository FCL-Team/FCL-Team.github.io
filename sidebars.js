// @ts-check

/**
 * Stable `key` values are used by the i18n system, so sidebar labels can be
 * translated without breaking when a doc title changes.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    {type: 'doc', id: 'intro', key: 'intro'},
    {
      type: 'category',
      key: 'account',
      label: '账户',
      collapsed: false,
      items: [{type: 'doc', id: 'account', key: 'account'}],
    },
    {
      type: 'category',
      key: 'customization',
      label: '自定义',
      collapsed: false,
      items: [{type: 'doc', id: 'controller-upload', key: 'controller-upload'}],
    },
    {
      type: 'category',
      key: 'development',
      label: '开发',
      collapsed: false,
      items: [
        {type: 'doc', id: 'building', key: 'building'},
        {type: 'doc', id: 'contributing', key: 'contributing'},
      ],
    },
  ],
};

export default sidebars;
