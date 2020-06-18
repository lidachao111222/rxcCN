import { Link } from "gatsby"
import React, { useState } from "react"
import { Flex, Box, Icon, Text, useColorMode, Heading } from "@chakra-ui/core"


const Header = () => {

  const windowGlobal = typeof window !== 'undefined' && window.location.pathname

  const [navList, setnavList] = useState(["新闻", "研究", "理念", "关于"])
  const [infoList, setinfoList] = useState([
    "经济",
    "社会",
    "变革",
    "新闻",
    "活动",
  ])
  const { colorMode, toggleColorMode } = useColorMode()

  const [page, setnavPage] = useState(["news", "research", "concept", "about"])


 
  return (
    // 外部背景颜色
    <Box
      // background="linear-gradient(162deg, rgb(121, 5, 171) 50%, rgb(92, 16, 123) 0%)"
      background= {windowGlobal === '/' ? "linear-gradient(162deg, rgb(121, 5, 171) 50%, rgb(92, 16, 123) 0%)" :"linear-gradient(165deg, rgb(121, 5, 171) 77%, rgb(92, 16, 123) 0%)"} 
      h="100%"
    >


      {/* 第一栏 */}
      <Flex
        w="100%"
        maxW={1080}
        mx="auto"
        justifyContent="space-between"
        padding="5px 30px 5px 30px"
        color="white"
      >
        {/* 左侧navbar */}
        <Flex>
          <Text
            fontSize="20px"
            fontWeigh={300}
            pr={8}
            h="62%"
            mt="0.6vw"
            borderRight={[0, 0, "1px solid #ccc", "1px solid #ccc"]}
            cursor="pointer"
            fontFamily="LeagueSpartan !important"
          >
            <Link to="/">RadicalxChange</Link>
          </Text>
          <Box display={["none", "none", "inline", "inline"]}>
            <ul>
              {/* <li style={{display:'inline'}}>新闻</li> */}
              {navList.map((val, index) => (
                <li
                  key={index}
                  style={{ display: "inline", cursor: "pointer" }}
                >
                  <Text display="inline-block" ml={8}  lineHeight="44px" color="#fff">
                    <Link style={{fontSize: '14px', paddingBottom:'0.5vh', borderBottom:(windowGlobal == "/"+page[index]) ? "1px solid white" :"none"}} to={page[index]} >{val}</Link>
                  </Text>{" "}
                </li>
              ))}
            </ul>
          </Box>
        </Flex>
        {/* 右侧icon */}
       
        <Box lineHeight="30px">
          {colorMode == "light" ? (
          
            <Icon   name="sun" fontSize="20px" onClick={toggleColorMode} />
          ) : (

            <Icon  name="moon" fontSize="20px" onClick={toggleColorMode} />

          )}
        </Box>

      </Flex>
      {/* 第二栏 */}
      {
        windowGlobal=== "/" ? (
          <>
            {" "}
            <Box
              w="100%"
              maxW={1080}
              mx="auto"
              color="white"
              padding="0px 10px 30px 10px"
              marginTop="10vh"
              marginBottom="1vh"
            >
              <Heading fontSize={60} textAlign="center" fontFamily="Pirou">
                RXC
              </Heading>
              <ul style={{ listStyle: "none", textAlign: "center" }}>
                {infoList.map((val, index) => (
                  <li key={index} style={{ display: "inline" }}>
                    <Text display="inline-block" color="#fff">
                      {index === 0 ? null : (
                        <span style={{ padding: "8px" }}>•</span>
                      )}
                      {val}
                    </Text>
                  </li>
                ))}
              </ul>
            </Box>
            <Box marginBottom="1vh">
              <Heading
                pr={10}
                color="rgba(238,239,254,0.1)"
                fontSize={["1.5rem","2rem","2.2rem","3.2rem"]}
                textAlign="right"
                fontFamily="LeagueSpartan"
              >
                RadicalxChange
              </Heading>
            </Box>{" "}
          </>
        ) : null
      }
    </Box>
  )
}

export default Header
