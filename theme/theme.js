import { theme } from "@chakra-ui/core"
import customColors from "./CustomColors"


const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    ...customColors,
  },

}

export default customTheme
