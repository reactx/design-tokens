module.exports = {
  presets: [
    {
      name: '@storybook/addon-docs/preset',
      options: {
        configureJSX: true,
        exclude: /^@babel/,
      },
    },
  ],
  stories: ['../src/**/*.stories.(jsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-docs/register',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    // '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-toolbars',
    // 'storybook-addon-pseudo-states',
    '@storybook/addon-controls',
  ],
  logLevel: 'debug',
};
