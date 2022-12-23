Using Storybook with MSW
======================

* A development environment and playground for UI components
* Create components independently
* Showcase those components interactively in an isolated development environment
* Ability to view the different components that have already been developed
* View what are the different props that those developed components accept
* Ability to visually showcase those components to your stakeholder for feedback
* Dynamically change props, accessibility score

`npx sb init` : install storybook in react application in the terminal

**in webpack 5**

The Webpack 5 upgrade is Storybook's most upvoted GitHub issue.
Since 6.2 is a minor release, Webpack 4 is still the default builder. But you
can start using Webpack 5 by opting in.

**For a fresh Storybook install:**

`npx sb init -builder webpack5`

**Next steps**

스토리북에서 scss 사용하기

`npm install @storybook/preset-scss -D`

```js
  addons: [
  '@storybook/preset-scss',
]
```

---

추가 에드온

`npm install @storybook/addon-console -D`   
`npm install @storybook/addon-docs -D`   
`npm install @storybook/addon-knobs -D`

[https://storybook.js.org/addons/@storybook/addon-a11y/](https://storybook.js.org/addons/@storybook/addon-a11y/)

#

스토리북에서 절대경로 사용하기 1

```js
const path = require('path');

module.exports = {

  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];
    return config;
  },
}
```

스토리북에서 절대경로 사용하기 2

`npm install tsconfig-paths-webpack-plugin -D`

```js
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {

  webpackFinal: async config => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
}
```

스토리북을 실행하면 DocGenPluginDeprecationWarning 표시   
TypeScript 4.8 버전을 지원하지 않는 것으로 확인.

참고
[hipstersmoothie/react-docgen-typescript-plugin#69]()

solve this problem

```js
// main.js

typescript: {
  reactDocgen: false;
}
```

[https://stackoverflow.com/questions/70637257/storybook-error-when-using-webpack5-with-next-js-app-typescript](https://stackoverflow.com/questions/70637257/storybook-error-when-using-webpack5-with-next-js-app-typescript)

[https://storybook.js.org/docs/react/configure/typescript]()

#

`npm install msw msw-storybook-addon -D`   
.storybook/preview.js 파일에서 MSW 를 초기화하고 decorator를 제공하여
Storybook 에서 MSW 를활성화합니다.

```js
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];
```

`npx msw init public/`
