module.exports = {
  plugins: [
    require('postcss-preset-env'),
    require('postcss-pxtorem')({
      rootValue: 1,
      unitPrecision: 2,
      propList: ['font', 'font-size', 'letter-spacing'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    }),
    require('postcss-px-to-viewport')({
      viewportWidth: 375, // (Number) The width of the viewport.
      viewportHeight: 667, // (Number) The height of the viewport.
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // (String) Expected units.
      propList: ['*', '!font', '!font-size', '!letter-spacing'],
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
    }),
    require('postcss-viewport-units')({
      filterRule: rule => {
        let hasContent
        rule.nodes.slice(0).forEach(decl => {
          if (decl.prop === 'content' && !hasContent) {
            hasContent = true
          }
        })
        return !hasContent
      },
    }),
  ]
}
