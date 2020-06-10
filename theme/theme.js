import { theme } from "@chakra-ui/core"
import customColors from "./CustomColors"


const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    ...customColors,
  },
  // fonts: {
  //   body: "Muli",
  //   heading: "Muli",
  //   mono: "Muli",
  // },
  
}

export default customTheme
