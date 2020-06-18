import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Flex,
  Heading,
  Box,
  PseudoBox,
  Text,
  Avatar,
  Stack,
} from "@chakra-ui/core"
import Img from "gatsby-image"

const FirstRow = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { frontmatter: { tags: { eq: "news" } } }
        limit: 1
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            author
            date(formatString: "YYYY-MM-DD")
            description
            title
            img {
              childImageSharp {
                fluid(maxHeight: 380) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            authorImg {
              publicURL
            }
          }
        }
      }
    }
  `)

  let a = data.allMdx.nodes

  let b = a.map(v => v.frontmatter.authorImg.publicURL)

  return (
    <Flex
      flexWrap="wrap"
      w="100%"
      maxW={1080}
      mx="auto"
      px={[0, 0, 0, "30px"]}
      pt={["20px", "20px", "50px", "60px"]}
      mb="5vw"
    >
      {/* 第一大栏目 */}
      <PseudoBox
        display="flex"
        flexDir={["column", "column", "column", "row"]}
        paddingBottom="3vw"
        w={["100%", "45%", "45%", "97.5%"]}
        borderBottom="1px solid #eee"
        mx="auto"
        mb="3vw"
        _hover={{ color: " #6873e5" }}
      >
        <PseudoBox
          w="100%"
          maxW={["400px", "400px", "620px", "620px"]}
          mx="auto"
          boxShadow="-1.5em 1em 4em #ccc, 0em 0 1em #ccc;"
          position="relative"
          _hover={{
            boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
            top: "-1px",
            transition: "all 1000ms ease 0s",
          }}
        >
          <Img fluid={a[0].frontmatter.img.childImageSharp.fluid} />
        </PseudoBox>
        <Box
          w={["100%", "100%", "100%", "40%"]}
          my="auto"
          px={["5vw", 0, 0, 0]}
          ml={[0, 0, 0, "40px"]}
        >
          <PseudoBox
            _hover={{ color: " #6873e5" }}
            mb="12px"
            fontWeight="900"
            fontSize="2rem"
            lineHeight="2.5rem"
            fontFamily="NotoSansSC-Medium "
            mt={["1.2rem", "1.2rem", "1.2rem", 0]}
          >
            {a.map(v => v.frontmatter.title)}
          </PseudoBox>
          <Text
            mb="1.5em"
            fontSize="1.1rem"
            lineHeight="1.5em"
            color="#999"
            letterSpacing="0.025vw"
            fontFamily="NotoSansSC-Medium !important"
          >
            {a.map(v => v.frontmatter.description)}
          </Text>
          <Stack isInline>
            {" "}
            <Avatar w="32px" h="32px" name="author" src={b[0]} />
            <Flex flexDir="column" ml="0.5vw">
              <Text fontSize="0.5px" color="#6873e5" fontWeight="700">
                {a.map(v => v.frontmatter.author)}
              </Text>
              <Text fontSize="0.5px" color="#aaa" fontWeight="700">
                {a.map(v => v.frontmatter.date)}
              </Text>
            </Flex>
          </Stack>
        </Box>
      </PseudoBox>

      {/* 第二大栏目 */}
      <PseudoBox
        w={["100%", "45%", "45%", "31%"]}
        borderBottom="1px solid #eee"
        mx="auto"
        mb="3vw"
        paddingBottom="3vw"
        _hover={{ color: " #6873e5" }}
      >
        {/* 图片 */}
        <PseudoBox w="100%" maxW={["400px", "400px", "620px", "620px"]} mx="auto"    boxShadow="-1.5em 1em 4em #ccc, 0em 0 1em #ccc;"
            position="relative"
            _hover={{
              boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
              top: "-1px",
              transition: "all 1000ms ease 0s",
            }}>
          <Img fluid={a[0].frontmatter.img.childImageSharp.fluid} />
        </PseudoBox>
        {/* 描述 */}
        <Box px={["5vw", 0, 0, 0]}>
          <PseudoBox
            _hover={{ color: " #6873e5" }}
            mb="12px"
            fontWeight="900"
            fontSize={["2rem", "2rem", "2rem", "1.5rem"]}
            lineHeight={["2.5rem", "2.5rem", "2.5rem", "2rem"]}
            mt={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
            fontFamily="NotoSansSC-Medium"
          >
            {a.map(v => v.frontmatter.title)}
          </PseudoBox>
          <Text
                mb="1.5em"
                fontSize={["1.1rem","1.1rem","1.1rem","1rem"]}
                lineHeight="1.5em"
                color="#999"
                letterSpacing="0.025vw"
                fontFamily="NotoSansSC-Medium !important"
          >
            {a.map(v => v.frontmatter.description)}
          </Text>
          <Stack isInline>
            {" "}
            <Avatar w="32px" h="32px" name="author" src={b[0]} />
            <Flex flexDir="column" ml="0.5vw">
              <Text fontSize="0.5px" color="#6873e5" fontWeight="700">
                {a.map(v => v.frontmatter.author)}
              </Text>
              <Text fontSize="0.5px" color="#aaa" fontWeight="700">
                {a.map(v => v.frontmatter.date)}
              </Text>
            </Flex>
          </Stack>
        </Box>
      </PseudoBox>
      {/* 第3大栏目 */}
      <PseudoBox
        w={["100%", "45%", "45%", "31%"]}
        borderBottom="1px solid #eee"
        mx="auto"
        mb="3vw"
        paddingBottom="3vw"
        _hover={{ color: " #6873e5" }}
      >
        {/* 图片 */}
        <PseudoBox w="100%" maxW={["400px", "400px", "620px", "620px"]} mx="auto"    boxShadow="-1.5em 1em 4em #ccc, 0em 0 1em #ccc;"
            position="relative"
            _hover={{
              boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
              top: "-1px",
              transition: "all 1000ms ease 0s",
            }}>
          <Img fluid={a[0].frontmatter.img.childImageSharp.fluid} />
        </PseudoBox>
        {/* 描述 */}
        <Box px={["5vw", 0, 0, 0]}>
          <PseudoBox
            _hover={{ color: " #6873e5" }}
            mb="12px"
            fontWeight="900"
            fontSize={["2rem", "2rem", "2rem", "1.5rem"]}
            lineHeight={["2.5rem", "2.5rem", "2.5rem", "2rem"]}
            mt={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
            fontFamily="NotoSansSC-Medium"
          >
            {a.map(v => v.frontmatter.title)}
          </PseudoBox>
          <Text
                mb="1.5em"
                fontSize={["1.1rem","1.1rem","1.1rem","1rem"]}
                lineHeight="1.5em"
                color="#999"
                letterSpacing="0.025vw"
                fontFamily="NotoSansSC-Medium !important"
          >
            {a.map(v => v.frontmatter.description)}
          </Text>
          <Stack isInline>
            {" "}
            <Avatar w="32px" h="32px" name="author" src={b[0]} />
            <Flex flexDir="column" ml="0.5vw">
              <Text fontSize="0.5px" color="#6873e5" fontWeight="700">
                {a.map(v => v.frontmatter.author)}
              </Text>
              <Text fontSize="0.5px" color="#aaa" fontWeight="700">
                {a.map(v => v.frontmatter.date)}
              </Text>
            </Flex>
          </Stack>
        </Box>
      </PseudoBox>
      {/* 第4大栏目 */}
      <PseudoBox
        w={["100%", "45%", "45%", "31%"]}
        borderBottom="1px solid #eee"
        mx="auto"
        mb="3vw"
        paddingBottom="3vw"
        _hover={{ color: " #6873e5" }}
      >
        {/* 图片 */}
        <PseudoBox w="100%" maxW={["400px", "400px", "620px", "620px"]} mx="auto"    boxShadow="-1.5em 1em 4em #ccc, 0em 0 1em #ccc;"
            position="relative"
            _hover={{
              boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
              top: "-1px",
              transition: "all 1000ms ease 0s",
            }}>
          <Img fluid={a[0].frontmatter.img.childImageSharp.fluid} />
        </PseudoBox>
        {/* 描述 */}
        <Box px={["5vw", 0, 0, 0]}>
          <PseudoBox
            _hover={{ color: " #6873e5" }}
            mb="12px"
            fontWeight="900"
            fontSize={["2rem", "2rem", "2rem", "1.5rem"]}
            lineHeight={["2.5rem", "2.5rem", "2.5rem", "2rem"]}
            mt={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
            fontFamily="NotoSansSC-Medium"
          >
            {a.map(v => v.frontmatter.title)}
          </PseudoBox>
          <Text
                mb="1.5em"
                fontSize={["1.1rem","1.1rem","1.1rem","1rem"]}
                lineHeight="1.5em"
                color="#999"
                letterSpacing="0.025vw"
                fontFamily="NotoSansSC-Medium !important"
          >
            {a.map(v => v.frontmatter.description)}
          </Text>
          <Stack isInline>
            {" "}
            <Avatar w="32px" h="32px" name="author" src={b[0]} />
            <Flex flexDir="column" ml="0.5vw">
              <Text fontSize="0.5px" color="#6873e5" fontWeight="700">
                {a.map(v => v.frontmatter.author)}
              </Text>
              <Text fontSize="0.5px" color="#aaa" fontWeight="700">
                {a.map(v => v.frontmatter.date)}
              </Text>
            </Flex>
          </Stack>
        </Box>
      </PseudoBox>

      {/* 第5大栏目 */}
      <PseudoBox
        w={["100%", "44.6%", "44.6%", "47.6%"]}
        mx="auto"
        borderBottom="1px solid #eee"
        mb="3vw"
        paddingBottom="3vw"
        _hover={{ color: " #6873e5" }}
      >
        {" "}
        {/* 图片 */}
        <PseudoBox w="100%" maxW={["400px", "400px", "500px", "500px"]} mx="auto"   _hover={{ color: " #6873e5" }}
        boxShadow="-1.5em 1em 4em #ccc, 0em 0 1em #ccc;"
        position="relative"
        _hover={{
          boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
          top: "-1px",
          transition: "all 1000ms ease 0s",
        }}>
          <Img fluid={a[0].frontmatter.img.childImageSharp.fluid} />
        </PseudoBox>
        {/* 描述 */}
        <Box px={["5vw", 0, 0, 0]}>
          <Heading mb="12px" fontSize="2xl" mt={"1.2rem"}>
            {a.map(v => v.frontmatter.title)}
          </Heading>
          <Text     mb="1.5em"
                fontSize="1.1rem"
                lineHeight="1.5em"
                color="#999"
                letterSpacing="0.025vw"
                fontFamily="NotoSansSC-Medium !important">
            {a.map(v => v.frontmatter.description)}
          </Text>
          <Stack isInline mb="1vw">
            {" "}
            <Avatar w="32px" h="32px" name="author" src={b[0]} />
            <Flex flexDir="column">
              <Text fontSize="0.5px" color="#6873e5" fontWeight="700">{a.map(v => v.frontmatter.author)}</Text>
              <Text fontSize="0.5px" color="#aaa" fontWeight="700">{a.map(v => v.frontmatter.date)}</Text>
            </Flex>
          </Stack>
        </Box>
      </PseudoBox>
      {/* 第6大栏目 */}
      <PseudoBox
        w={["100%", "44.6%", "44.6%", "47.6%"]}
        mx="auto"
        borderBottom="1px solid #eee"
        mb="3vw"
        paddingBottom="3vw"
        _hover={{ color: " #6873e5" }}
      >
        {" "}
        {/* 图片 */}
        <PseudoBox w="100%" maxW={["400px", "400px", "500px", "500px"]} mx="auto"   _hover={{ color: " #6873e5" }}
        boxShadow="-1.5em 1em 4em #ccc, 0em 0 1em #ccc;"
        position="relative"
        _hover={{
          boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
          top: "-1px",
          transition: "all 1000ms ease 0s",
        }}>
          <Img fluid={a[0].frontmatter.img.childImageSharp.fluid} />
        </PseudoBox>
        {/* 描述 */}
        <Box px={["5vw", 0, 0, 0]}>
          <Heading mb="12px" fontSize="2xl" mt={"1.2rem"}>
            {a.map(v => v.frontmatter.title)}
          </Heading>
          <Text     mb="1.5em"
                fontSize="1.1rem"
                lineHeight="1.5em"
                color="#999"
                letterSpacing="0.025vw"
                fontFamily="NotoSansSC-Medium !important">
            {a.map(v => v.frontmatter.description)}
          </Text>
          <Stack isInline mb="1vw">
            {" "}
            <Avatar w="32px" h="32px" name="author" src={b[0]} />
            <Flex flexDir="column">
              <Text fontSize="0.5px" color="#6873e5" fontWeight="700">{a.map(v => v.frontmatter.author)}</Text>
              <Text fontSize="0.5px" color="#aaa" fontWeight="700">{a.map(v => v.frontmatter.date)}</Text>
            </Flex>
          </Stack>
        </Box>
      </PseudoBox>
    </Flex>
  )
}

export default FirstRow
