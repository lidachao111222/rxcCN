import { Link } from "gatsby"
import React, { useState } from "react"
import { Flex, Box, Icon, Text, useColorMode, Heading } from "@chakra-ui/core"

const Header = () => {
  const [navList, setnavList] = useState(["新闻", "研究", "关于"])
  const [infoList, setinfoList] = useState([
    "经济",
    "社会",
    "变革",
    "新闻",
    "活动",
  ])
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    // 外部背景颜色
    <Box
      background="linear-gradient(165deg, rgb(121, 5, 171) 50%, rgb(92, 16, 123) 0%)"
      h="100%"
      minHeight="355px"
    >
      {/* 第一栏 */}
      <Flex
        w="100%"
        maxW={1080}
        mx="auto"
        color="hsla(0,0%,100%,.7)"
        padding="30px 10px 80px 10px"
        justifyContent="space-between"
      >
        {/* 左侧navbar */}
        <Flex>
          <Text
            fontSize="25px"
            fontWeigh={900}
            pr={5}
            borderRight={[0,0,"1px solid #ccc","1px solid #ccc"]}
            cursor="pointer"
          >
            RadicalxChange
          </Text>
          <Box display={["none","none","inline","inline"]}>
          <ul>
            {/* <li style={{display:'inline'}}>新闻</li> */}
            {navList.map((val,index) => (
              <li key={index} style={{ display: "inline", cursor: "pointer" }}>
                {" "}
                <Text display="inline-block" ml={6} lineHeight="37px">
                  {val}
                </Text>{" "}
              </li>
            ))}
          </ul>
          </Box>
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
      <Box
        w="100%"
        maxW={1080}
        mx="auto"
        color="white"
        padding="0px 10px 80px 10px"
      >
        <Heading fontSize={50} textAlign="center" fontFamily="Pirou">
          RXC
        </Heading>
        <ul style={{ listStyle: "none", textAlign: "center" }}>
          {infoList.map((val, index) => (
            <li key={index} style={{ display: "inline" }}>
              <Text display="inline-block">
                {index === 0 ? null : <span style={{ padding: "8px" }}>•</span>}
                {val}
              </Text>
            </li>
          ))}
        </ul>
      </Box>
      <Box>
        <Heading pr={2}  color="rgba(238,239,254,0.3)"  fontSize={30} textAlign="right"  fontFamily="LeagueSpartan">RadicalxChange</Heading>
      </Box>
    </Box>
  )
}

export default Header
