import React from "react"
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  Heading,
  Text
} from "@chakra-ui/core"
import theme from "./theme/theme"
import { MDXProvider } from "@mdx-js/react"

const state = {
  h1: ({ children }) => <Heading fontFamily='Lato-Regular'>{children}</Heading>,
  p: ({ children }) => <Text  fontSize="16px" lineHeight="1.75" p={2} fontFamily='Lato-Regular'>{children}</Text>,
  li: ({ children }) => <Text as="li"  fontSize="16px" lineHeight="1.75" ml={6} mr={6} mb={2} fontFamily='Lato-Regular'>{children}</Text>,
}


export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <MDXProvider components={state}>{element}</MDXProvider>
    </ColorModeProvider>
  </ThemeProvider>
)
