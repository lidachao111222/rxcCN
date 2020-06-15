import React from 'react'
import { Flex,Text,Box } from "@chakra-ui/core"
import { FiTwitter } from "react-icons/fi";
const Footer = () => {
    return (
        <Box backgroundColor="rgb(110, 30, 165)" color="hsla(0,0%,100%,.7)" px="30px">
        <Flex justifyContent="space-between" w="100%" maxW={1080} mx="auto" pb="60px" pt="20px" >
            <Text>RedicalxChange © 2020 </Text>
            <Text><FiTwitter/></Text>
        </Flex>
        </Box>
    )
}

export default Footer
