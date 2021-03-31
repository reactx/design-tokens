import React, { Fragment, useEffect } from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withCssResources } from '@storybook/addon-cssresources';
import '../src/global.scss';
import {
  Global,
  ThemeProvider,
  themes,
  createReset,
  convert,
  styled,
  useTheme,
} from '@storybook/theming';

const ThemeBlock = styled.div(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    right: '50vw',
    width: '50vw',
    height: '100vh',
    bottom: 0,
    overflow: 'auto',
    padding: 10,
  },
  ({ theme }) => ({
    background: theme.background.app,
    color: theme.color.defaultText,
  }),
  ({ side }) =>
    side === 'left'
      ? {
          left: 0,
          right: '50vw',
        }
      : {
          right: 0,
          left: '50vw',
        },
);

const ThemeStack = styled.div(
  {
    padding: 10,
    position: 'relative',
    minHeight: '50vh',
  },
  ({ theme }) => ({
    background: theme.background.app,
    color: theme.color.defaultText,
  }),
);

const ThemeDef = styled.div({
  padding: 10,
});

addDecorator(withA11y);

const ThemedSetRoot = () => {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.background = theme.background.app;
    document.body.style.color = theme.color.defaultText;

    return () => {
      //
    };
  });

  return null;
};

export const decorators = [
  withCssResources,
  (StoryFn, { globals: { theme = 'light' } }) => {
    switch (theme) {
      case 'side-by-side': {
        return (
          <Fragment>
            <ThemeProvider theme={convert(themes.light)}>
              <Global styles={createReset} />
            </ThemeProvider>
            <ThemeProvider theme={convert(themes.light)}>
              <ThemeBlock
                side="left"
                data-side="left"
                className={'reactx-light'}
              >
                <StoryFn />
              </ThemeBlock>
            </ThemeProvider>
            <ThemeProvider theme={convert(themes.dark)}>
              <ThemeBlock
                side="right"
                data-side="right"
                className={'reactx-dark'}
              >
                <StoryFn />
              </ThemeBlock>
            </ThemeProvider>
          </Fragment>
        );
      }
      case 'stacked': {
        return (
          <Fragment>
            <ThemeProvider theme={convert(themes.light)}>
              <Global styles={createReset} />
            </ThemeProvider>
            <ThemeProvider theme={convert(themes.light)}>
              <ThemeStack
                side="left"
                data-side="left"
                className={'reactx-light'}
              >
                <StoryFn />
              </ThemeStack>
            </ThemeProvider>
            <ThemeProvider theme={convert(themes.dark)}>
              <ThemeStack
                side="right"
                data-side="right"
                className={'reactx-dark'}
              >
                <StoryFn />
              </ThemeStack>
            </ThemeProvider>
          </Fragment>
        );
      }
      default: {
        return (
          <ThemeProvider theme={convert(themes[theme])}>
            <Global styles={createReset} />
            <ThemedSetRoot />
            <ThemeDef className={'reactx-' + theme}>
              <StoryFn />
            </ThemeDef>
          </ThemeProvider>
        );
      }
    }
  },
];

export const parameters = {
  exportedParameter: 'exportedParameter',
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  docs: {
    theme: themes.light,
    page: () => <DocsPage subtitleSlot={({ kind }) => `Subtitle: ${kind}`} />,
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
        { value: 'stacked', icon: 'bottombar', title: 'stacked' },
      ],
    },
  },
};

export const loaders = [async () => ({ globalValue: 1 })];
