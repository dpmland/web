import getPrefersColorSchemeDark from '@utils/getPrefersColorSchemeDark'
import { THEMES } from '@constants/themes'

const getTheme = () => {
  const theme = localStorage.getItem('theme')

  if (theme) return theme

  return getPrefersColorSchemeDark() ? THEMES.DARK : THEMES.LIGHT
}

export default getTheme
