const getPrefersColorSchemeDark = () =>
  window?.matchMedia('(prefers-color-scheme: dark)').matches

export default getPrefersColorSchemeDark
