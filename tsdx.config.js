const postcss = require('rollup-plugin-postcss');
const alias = require('@rollup/plugin-alias');
module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        extensions: ['.less', '.css'],
        use: {
          less: { javascriptEnabled: true },
        },
      })
    );
    config.plugins.push({
      plugins: [
        alias({
          entries: [{ find: /@\//, replacement: /src\// }],
        }),
      ],
    });
    return {
      ...config,
      external: (id) => !id.startsWith('@/') && config.external(id),
    };
  },
};
