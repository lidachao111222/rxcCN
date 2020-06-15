import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Flex,
  Heading,
  Box,
  Text,
  Avatar,
  Stack,
  Divider,
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
            autoImg {
              publicURL
            }
          }
        }
      }
    }
  `)

  let a = data.allMdx.nodes

  let b = a.map(v => v.frontmatter.autoImg.publicURL)

  return (
    <Flex
      flexWrap="wrap"
      w="100%"
      maxW={1080}
      mx="auto"
      px={[0, 0, 0, "30px"]}
      pt={["20px", "20px", "50px", "40px"]}
    >
      {/* 第一大栏目 */}
      <Flex
        w={["100%", "50%", "50%", "100%"]}
        flexDir={["column", "column", "column", "row"]}
        paddingBottom="40px"
        px="20px"
        borderBottom="1px solid #ccc"
      >
        <Box w="100%" maxW={["400px", "400px", "620px", "620px"]}>
          <Img fluid={a[0].frontmatter.img.childImageSharp.fluid} />
        </Box>
        <Box
          w={["100%", "100%", "100%", "40%"]}
          my="auto"
          pl={[0, 0, 0, "40px"]}
        >
          <Heading
            mb="12px"
            fontSize="2xl"
            mt={["1.2rem", "1.2rem", "1.2rem", 0]}
          >
            {a.map(v => v.frontmatter.title)}
          </Heading>
          <Text mb="1.5em" fontSize="1rem" lineHeight="1.5em">
            {a.map(v => v.frontmatter.description)}
          </Text>
          <Stack isInline>
            {" "}
            <Avatar w="32px" h="32px" name="author" src={b[0]} />
            <Flex flexDir="column">
              <Text fontSize="0.5px">{a.map(v => v.frontmatter.author)}</Text>
              <Text fontSize="0.5px">{a.map(v => v.frontmatter.date)}</Text>
            </Flex>
          </Stack>
        </Box>
      </Flex>

      {/* 第二大栏目 */}
      <Box w={["100%", "50%", "50%", "33.3%"]} px="20px">
        
        {/* 图片 */}
        <Box w="100%" maxW={["400px", "400px", "620px", "620px"]}>
          <Img fluid={a[0].frontmatter.img.childImageSharp.fluid} />
        </Box>
        {/* 描述 */}
        <Box>
          <Heading mb="12px" fontSize="2xl" mt={"1.2rem"}>
            {a.map(v => v.frontmatter.title)}
          </Heading>
          <Text mb="1em" fontSize="1rem" lineHeight="1.5em">
            {a.map(v => v.frontmatter.description)}
          </Text>
          <Stack isInline>
            {" "}
            <Avatar w="32px" h="32px" name="author" src={b[0]} />
            <Flex flexDir="column">
              <Text fontSize="0.5px">{a.map(v => v.frontmatter.author)}</Text>
              <Text fontSize="0.5px">{a.map(v => v.frontmatter.date)}</Text>
            </Flex>
          </Stack>
        </Box>
        
      </Box>
      {/* 第3大栏目 */}
      <Box w={["100%", "50%", "50%", "33.3%"]} px="20px">
        {/* 图片 */}
        <Box w="100%" maxW={["400px", "400px", "620px", "620px"]}>
          <Img fluid={a[0].frontmatter.img.childImageSharp.fluid} />
        </Box>
        {/* 描述 */}
        <Box>
          <Heading mb="12px" fontSize="2xl" mt={"1.2rem"}>
            {a.map(v => v.frontmatter.title)}
          </Heading>
          <Text mb="1em" fontSize="1rem" lineHeight="1.5em">
            {a.map(v => v.frontmatter.description)}
          </Text>
          <Stack isInline>
            {" "}
            <Avatar w="32px" h="32px" name="author" src={b[0]} />
            <Flex flexDir="column">
              <Text fontSize="0.5px">{a.map(v => v.frontmatter.author)}</Text>
              <Text fontSize="0.5px">{a.map(v => v.frontmatter.date)}</Text>
            </Flex>
          </Stack>
        </Box>
      </Box>
      {/* 第4大栏目 */}
      <Box w={["100%", "50%", "50%", "33.3%"]} px="20px">
        {/* 图片 */}
        <Box w="100%" maxW={["400px", "400px", "620px", "620px"]}>
          <Img fluid={a[0].frontmatter.img.childImageSharp.fluid} />
        </Box>
        {/* 描述 */}
        <Box>
          <Heading mb="12px" fontSize="2xl" mt={"1.2rem"}>
            {a.map(v => v.frontmatter.title)}
          </Heading>
          <Text mb="1em" fontSize="1rem" lineHeight="1.5em">
            {a.map(v => v.frontmatter.description)}
          </Text>
          <Stack isInline>
            {" "}
            <Avatar w="32px" h="32px" name="author" src={b[0]} />
            <Flex flexDir="column">
              <Text fontSize="0.5px">{a.map(v => v.frontmatter.author)}</Text>
              <Text fontSize="0.5px">{a.map(v => v.frontmatter.date)}</Text>
            </Flex>
          </Stack>
        </Box>
      </Box>

      {/* 第5大栏目 */}
      <Box w={["100%", "50%", "50%", "50%"]} px="20px">
        {" "}
        {/* 图片 */}
        <Box w="100%" maxW={["400px", "400px", "500px", "500px"]}>
          <Img fluid={a[0].frontmatter.img.childImageSharp.fluid} />
        </Box>
        {/* 描述 */}
        <Box>
          <Heading mb="12px" fontSize="2xl" mt={"1.2rem"}>
            {a.map(v => v.frontmatter.title)}
          </Heading>
          <Text mb="1em" fontSize="1rem" lineHeight="1.5em">
            {a.map(v => v.frontmatter.description)}
          </Text>
          <Stack isInline>
            {" "}
            <Avatar w="32px" h="32px" name="author" src={b[0]} />
            <Flex flexDir="column">
              <Text fontSize="0.5px">{a.map(v => v.frontmatter.author)}</Text>
              <Text fontSize="0.5px">{a.map(v => v.frontmatter.date)}</Text>
            </Flex>
          </Stack>
        </Box>
      </Box>
      {/* 第6大栏目 */}
      <Box w={["100%", "50%", "50%", "50%"]} px="20px">
        {" "}
        {/* 图片 */}
        <Box w="100%" maxW={["400px", "400px", "500px", "500px"]}>
          <Img
            style={{ height: "20%" }}
            fluid={a[0].frontmatter.img.childImageSharp.fluid}
          />
        </Box>
        {/* 描述 */}
        <Box>
          <Heading mb="12px" fontSize="2xl" mt={"1.2rem"}>
            {a.map(v => v.frontmatter.title)}
          </Heading>
          <Text mb="1em" fontSize="1rem" lineHeight="1.5em">
            {a.map(v => v.frontmatter.description)}
          </Text>
          <Stack isInline>
            {" "}
            <Avatar w="32px" h="32px" name="author" src={b[0]} />
            <Flex flexDir="column">
              <Text fontSize="0.5px">{a.map(v => v.frontmatter.author)}</Text>
              <Text fontSize="0.5px">{a.map(v => v.frontmatter.date)}</Text>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Flex>
  )
}

export default FirstRow
