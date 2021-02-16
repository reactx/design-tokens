import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import '../src/global.scss';

addParameters({
  options: {
    showRoots: true,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  dependencies: {
    //display only dependencies/dependents that have a story in storybook
    //by default this is false
    withStoriesOnly: true,

    //completely hide a dependency/dependents block if it has no elements
    //by default this is false
    hideEmpty: true,
  },
});

addDecorator(withA11y);

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => { },
  hovering: () => { },
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: true,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
};

// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     description: 'Global theme for components',
//     defaultValue: 'light',
//     toolbar: {
//       icon: 'circlehollow',
//       // array of plain string values or MenuItem shape (see below)
//       items: ['light', 'dark'],
//     },
//   },
// };

// const withThemeProvider = (Story, context) => {
//   return (
//     <div className={"nirvana-full-screen " + context.globals.theme + "Theme"}><Story {...context} /></div>
//   )
// }
// export const decorators = [withThemeProvider];
