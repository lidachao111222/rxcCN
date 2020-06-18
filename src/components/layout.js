import React,{useState, useEffect } from "react"
import Header from "./header"
import Footer from './footer'
import "./layout.css"
import { Flex, Box } from "@chakra-ui/core";

const Layout = ({children}) => {

  return (
    <Flex minH='100vh' flexDirection='column'>
       <Header  /> 
      <Box flex={1}>{children}</Box>
      <Footer/>
    </Flex>
  )
}


export default Layout
