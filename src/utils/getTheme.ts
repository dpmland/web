import getPrefersColorSchemeDark from '@utils/getPrefersColorSchemeDark'
import { THEMES } from '@constants/themes'

const getTheme = () =>
  localStorage.getItem('theme') ||
  (getPrefersColorSchemeDark() ? THEMES.DARK : THEMES.LIGHT)

export default getTheme
