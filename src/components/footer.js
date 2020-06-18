import React from "react"
import {
  AiOutlineWeibo,
  AiOutlineTwitter,
  AiOutlineWechat,
} from "react-icons/ai"
import { Flex, Text } from "@chakra-ui/core"

const Footer = () => {
  return (
    <Flex
      backgroundColor="#eeeffe"
      justifyContent="center"
      height={110}
      flexDirection="column"
      alignItems="center"
    >
      <Text
        color="#555"
        fontWeight="bold"
        fontSize="16px"
        fontFamily="Muli-ExtraBold"
        letterSpacing="5px"
      >
        基进变革
      </Text>
      <Flex mt={2}>
        <a
          href="https://weibo.com/RadicalXChange?is_all=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineWeibo
            style={{
              fontSize: "20px",
              marginRight: "10px",
              color: "#555",
            }}
          />
        </a>

        <a
          href="https://twitter.com/rxcchina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter style={{ fontSize: "20px", color: "#555" }} />
        </a>

        <a
          href="https://open.weixin.qq.com/qr/code?username=radxchange"
          target="_blank"
          rel="noopener noreferrer"
        >
        <AiOutlineWechat
          style={{ fontSize: "20px", marginLeft: "10px", color: "#555" }}
        />
        </a>
      </Flex>
    </Flex>
  )
}

export default Footer
