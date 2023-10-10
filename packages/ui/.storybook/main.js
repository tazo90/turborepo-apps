module.exports = {
  stories: [
    {
      directory: '../components/**/',
      files: "*.stories.*",
    }
  ],
  // staticDirs: ["../images"],
  // webpackFinal: (config) => {
  //   // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
  //   const fileLoaderRule = config.module.rules.find(
  //     (rule) => rule.test && rule.test.test(".svg")
  //   );
  //   fileLoaderRule.exclude = /\.svg$/;

  //   // config.module.rules.push({
  //   //   test: /\.svg$/,
  //   //   enforce: "pre",
  //   //   loader: require.resolve("@svgr/webpack"),
  //   // });

  //   // Handle tailwind
  //   // config.module.rules.push({
  //   //   test: /\.scss$/,
  //   //   use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
  //   // });

  //   return config;
  // },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: { reactDocgen: false },
};