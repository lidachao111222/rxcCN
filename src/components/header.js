import { Link } from "gatsby"
import React, { useState } from "react"
import { Flex, Box, Icon, Text, useColorMode,Heading } from "@chakra-ui/core"

const Header = () => {
  const [navList, setnavList] = useState(["新闻", "研究", "关于"])
  const [infoList, setinfoList] = useState(["经济", "社会", "变革","新闻","活动"])
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    // 外部背景颜色
    <Box
      background="linear-gradient(165deg, rgb(110, 30, 165) 50%, rgb(84, 27, 118) 0%)"
      h="100%"
      minHeight="355px"
    >
      {/* 第一栏 */}
      <Flex
        w="100%"
        maxW={1080}
        mx="auto"
        color="white"
        padding="30px 10px 80px 10px"
        justifyContent="space-between"
      >
        {/* 左侧navbar */}
        <Flex>
          <Text
            fontSize="25px"
            fontWeigh={900}
            pr={5}
            borderRight="1px solid #ccc"
            cursor="pointer"
          >
            RadicalxChange
          </Text>
          <ul>
            {/* <li style={{display:'inline'}}>新闻</li> */}
            {navList.map(val => (
              <li style={{ display: "inline", cursor: "pointer" }}>
                {" "}
                <Text display="inline-block" ml={6} lineHeight="37px">
                  {val}
                </Text>{" "}
              </li>
            ))}
          </ul>
        </Flex>
        {/* 右侧icon */}
        <Box lineHeight="37px">
          {colorMode == "light" ? (
            <Icon name="sun" fontSize="20px" onClick={toggleColorMode} />
          ) : (
            <Icon name="moon" fontSize="20px" onClick={toggleColorMode} />
          )}
        </Box>
      </Flex>
      {/* 第二栏 */}
      <Flex
        w="100%"
        maxW={1080}
        mx="auto"
        color="white"
        padding="0px 10px 80px 10px"
        justifyContent="center"
      >
        <Heading fontSize={50}>RXC</Heading>
        <Flex flexDirection="column" ml={4} mt={1.5}>
          <Text letterSpacing={2} fontSize={18}>RadicalxChange</Text>
          <ul>
          {infoList.map((info,index)=>
            <li style={{ display: "inline", cursor: "pointer" }}>
            <Text fontSize="14px" display="inline-block"> {index === 0 ? null : <span style={{marginLeft:'5px'}}>·</span> } {info} </Text>
            </li>
          )}
          </ul>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
