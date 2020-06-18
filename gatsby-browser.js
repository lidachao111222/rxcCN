import React from "react"
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  Heading,
  Text,
  Image
} from "@chakra-ui/core"
import theme from "./theme/theme"
import { MDXProvider } from "@mdx-js/react"

const state = {
  h1: ({ children }) => <Heading color="#000" fontFamily='NotoSansSC-Medium'  lineHeight="7vh">{children}</Heading>,
  b: ({ children }) => <Text fontSize="1rem" fontFamily='NotoSansSC-Regular'  color="#a8a9a6" my="4vh" lineHeight="3.25vh">{children}</Text>,
  h2: ({ children }) => <Heading color="#000" fontSize="1.5rem" fontFamily='NotoSansSC-Medium'  mt="5vh" >{children}</Heading>,
  p: ({ children }) => <Text color="#555" fontFamily='NotoSansSC-Regular' fontSize="1.2rem" my="3.5vh" lineHeight="4.25vh">{children}</Text>,
  span: ({ children }) => <Text color="#555" fontFamily='NotoSansSC-Regular' fontSize="1.2rem" my="3.5vh">{children}</Text>,
  ul:({ children }) => <ul  color="#555 !important" style={{marginLeft:'2vw'}} >{children}</ul>,
  li:({ children }) => <li color="#555 !important" style={{lineHeight:"4.25vh",fontFamily:'NotoSansSC-Regular',fontSize:'1.2rem'}} >{children}</li>,
}


export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <MDXProvider components={state}>{element}</MDXProvider>
    </ColorModeProvider>
  </ThemeProvider>
)
