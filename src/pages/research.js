import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// ui
import {
  Flex,
  Heading,
  Box,
  Text,
  Stack,
  PseudoBox,
  Divider,
  Avatar,
} from "@chakra-ui/core"
// 图片引入】
import Img from "gatsby-image"


const Research = ({ data }) => {
  let a = data.allMdx.nodes
  let b = a.map(v => v.frontmatter.authorImg.publicURL)

  return (
    <Layout>
      <SEO title="研究" />
      <Box
        w="100%"
        maxW={1080}
        mx="auto"
        px="30px"
        pt={["20px", "20px", "50px", "40px"]}
        mt="2vw"
      >
        <Heading fontSize="2.5rem"  fontFamily="NotoSansSC-Regular">研究</Heading>
        <Text color="#969696" mt="1.2vw" fontWeight={500} fontSize="1.2rem" fontFamily="NotoSansSC-Regular">
          深入问题本质，阐述彻底的变革方案
        </Text>
      </Box>
      <Divider w="100%" maxW={1018} borderColor="#ddd" mt="1vw" mx="auto" />
      {/* 第一大栏目 */}
      <PseudoBox
        // flexWrap="wrap"
        w="100%"
        maxW={1080}
        mx="auto"
        px="2vw"
        pt={["20px", "20px", "50px", "11vh"]}
        _hover={{ color: " #6873e5" }}
      >
        <Flex
          flexDir={["column", "column", "column", "row"]}
          paddingBottom="0.5vw"
          w={["100%", "100%", "100%", "100%"]}
          mx="auto"
          justifyContent="space-between "
        >
          <PseudoBox
            w={["100%", "100%", "100%", "45%"]}
            mx={["auto", "auto", "auto", 0]}
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
            w={["100%", "100%", "100%", "45%"]}
            my="auto"
            px={["2vw", 0, 0, 0]}
            ml={[0, 0, 0, "40px"]}
            cursor="pointer"
          >
            <PseudoBox
              as="h2"
              mb="12px"
              fontSize="1.6rem"
              mt={["1.2rem", "1.2rem", "1.2rem", 0]}
              fontWeight="800"
              lineHeight="1.2em"
              letterSpacing="0.05vw"
              // _hover={{ color: " #6873e5" }}
              fontFamily="NotoSansSC-Bold"
            >
              {a.map(v => v.frontmatter.title)}
            </PseudoBox>
            <Text
              mb="1.2em"
              fontSize="1rem"
              lineHeight="1.5em"
              color="#969696"
              letterSpacing="0.025vw"
            >
              {a.map(v => v.frontmatter.description)}
            </Text>
            <Stack isInline>
              <Avatar
                position="relative"
                top="-5px"
                w="25px"
                h="25px"
                name="author"
                src={b[0]}
              />
              <Text fontSize="0.5px" color="#6873e5" fontWeight="700">
                {a.map(v => v.frontmatter.author)}
              </Text>
              <Text fontSize="0.5px" color="#aaa" fontWeight="700">
                {a.map(v => v.frontmatter.date)}
              </Text>
            </Stack>
          </Box>
        </Flex>
      </PseudoBox>
       {/* 第一大栏目 */}
       <PseudoBox
        // flexWrap="wrap"
        w="100%"
        maxW={1080}
        mx="auto"
        px="2vw"
        pt={["20px", "20px", "50px", "5vh"]}
        _hover={{ color: " #6873e5" }}
      >
        <Flex
          flexDir={["column", "column", "column", "row"]}
          paddingBottom="0.5vw"
          w={["100%", "100%", "100%", "100%"]}
          mx="auto"
          justifyContent="space-between "
        >
          <PseudoBox
            w={["100%", "100%", "100%", "45%"]}
            mx={["auto", "auto", "auto", 0]}
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
            w={["100%", "100%", "100%", "45%"]}
            my="auto"
            px={["2vw", 0, 0, 0]}
            ml={[0, 0, 0, "40px"]}
            cursor="pointer"
          >
            <PseudoBox
              as="h2"
              mb="12px"
              fontSize="1.6rem"
              mt={["1.2rem", "1.2rem", "1.2rem", 0]}
              fontWeight="800"
              lineHeight="1.2em"
              letterSpacing="0.05vw"
              // _hover={{ color: " #6873e5" }}
              fontFamily="NotoSansSC-Bold"
            >
              {a.map(v => v.frontmatter.title)}
            </PseudoBox>
            <Text
              mb="1.2em"
              fontSize="1rem"
              lineHeight="1.5em"
              color="#969696"
              letterSpacing="0.025vw"
            >
              {a.map(v => v.frontmatter.description)}
            </Text>
            <Stack isInline>
              <Avatar
                position="relative"
                top="-5px"
                w="25px"
                h="25px"
                name="author"
                src={b[0]}
              />
              <Text fontSize="0.5px" color="#6873e5" fontWeight="700">
                {a.map(v => v.frontmatter.author)}
              </Text>
              <Text fontSize="0.5px" color="#aaa" fontWeight="700">
                {a.map(v => v.frontmatter.date)}
              </Text>
            </Stack>
          </Box>
        </Flex>
      </PseudoBox>
       {/* 第一大栏目 */}
       <PseudoBox
        // flexWrap="wrap"
        w="100%"
        maxW={1080}
        mx="auto"
        px="2vw"
        pt={["20px", "20px", "50px", "5vh"]}
        _hover={{ color: " #6873e5" }}
      >
        <Flex
          flexDir={["column", "column", "column", "row"]}
          paddingBottom="0.5vw"
          w={["100%", "100%", "100%", "100%"]}
          mx="auto"
          justifyContent="space-between "
        >
          <PseudoBox
            w={["100%", "100%", "100%", "45%"]}
            mx={["auto", "auto", "auto", 0]}
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
            w={["100%", "100%", "100%", "45%"]}
            my="auto"
            px={["2vw", 0, 0, 0]}
            ml={[0, 0, 0, "40px"]}
            cursor="pointer"
          >
            <PseudoBox
              as="h2"
              mb="12px"
              fontSize="1.6rem"
              mt={["1.2rem", "1.2rem", "1.2rem", 0]}
              fontWeight="800"
              lineHeight="1.2em"
              letterSpacing="0.05vw"
              // _hover={{ color: " #6873e5" }}
              fontFamily="NotoSansSC-Bold"
            >
              {a.map(v => v.frontmatter.title)}
            </PseudoBox>
            <Text
              mb="1.2em"
              fontSize="1rem"
              lineHeight="1.5em"
              color="#969696"
              letterSpacing="0.025vw"
            >
              {a.map(v => v.frontmatter.description)}
            </Text>
            <Stack isInline>
              <Avatar
                position="relative"
                top="-5px"
                w="25px"
                h="25px"
                name="author"
                src={b[0]}
              />
              <Text fontSize="0.5px" color="#6873e5" fontWeight="700">
                {a.map(v => v.frontmatter.author)}
              </Text>
              <Text fontSize="0.5px" color="#aaa" fontWeight="700">
                {a.map(v => v.frontmatter.date)}
              </Text>
            </Stack>
          </Box>
        </Flex>
      </PseudoBox>
       {/* 第一大栏目 */}
       <PseudoBox
        // flexWrap="wrap"
        w="100%"
        maxW={1080}
        mx="auto"
        px="2vw"
        pt={["20px", "20px", "50px", "5vh"]}
        _hover={{ color: " #6873e5" }}
      >
        <Flex
          flexDir={["column", "column", "column", "row"]}
          paddingBottom="0.5vw"
          w={["100%", "100%", "100%", "100%"]}
          mx="auto"
          justifyContent="space-between "
        >
          <PseudoBox
            w={["100%", "100%", "100%", "45%"]}
            mx={["auto", "auto", "auto", 0]}
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
            w={["100%", "100%", "100%", "45%"]}
            my="auto"
            px={["2vw", 0, 0, 0]}
            ml={[0, 0, 0, "40px"]}
            cursor="pointer"
          >
            <PseudoBox
              as="h2"
              mb="12px"
              fontSize="1.6rem"
              mt={["1.2rem", "1.2rem", "1.2rem", 0]}
              fontWeight="800"
              lineHeight="1.2em"
              letterSpacing="0.05vw"
              // _hover={{ color: " #6873e5" }}
              fontFamily="NotoSansSC-Bold"
            >
              {a.map(v => v.frontmatter.title)}
            </PseudoBox>
            <Text
              mb="1.2em"
              fontSize="1rem"
              lineHeight="1.5em"
              color="#969696"
              letterSpacing="0.025vw"
            >
              {a.map(v => v.frontmatter.description)}
            </Text>
            <Stack isInline>
              <Avatar
                position="relative"
                top="-5px"
                w="25px"
                h="25px"
                name="author"
                src={b[0]}
              />
              <Text fontSize="0.5px" color="#6873e5" fontWeight="700">
                {a.map(v => v.frontmatter.author)}
              </Text>
              <Text fontSize="0.5px" color="#aaa" fontWeight="700">
                {a.map(v => v.frontmatter.date)}
              </Text>
            </Stack>
          </Box>
        </Flex>
      </PseudoBox>
       {/* 第一大栏目 */}
       <PseudoBox
        // flexWrap="wrap"
        w="100%"
        maxW={1080}
        mx="auto"
        px="2vw"
        pt={["20px", "20px", "50px", "5vh"]}
        _hover={{ color: " #6873e5" }}
        mb="30vh"
      >
        <Flex
          flexDir={["column", "column", "column", "row"]}
          paddingBottom="0.5vw"
          w={["100%", "100%", "100%", "100%"]}
          mx="auto"
          justifyContent="space-between "
        >
          <PseudoBox
            w={["100%", "100%", "100%", "45%"]}
            mx={["auto", "auto", "auto", 0]}
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
            w={["100%", "100%", "100%", "45%"]}
            my="auto"
            px={["2vw", 0, 0, 0]}
            ml={[0, 0, 0, "40px"]}
            cursor="pointer"
          >
            <PseudoBox
              as="h2"
              mb="12px"
              fontSize="1.6rem"
              mt={["1.2rem", "1.2rem", "1.2rem", 0]}
              fontWeight="800"
              lineHeight="1.2em"
              letterSpacing="0.05vw"
              // _hover={{ color: " #6873e5" }}
              fontFamily="NotoSansSC-Bold"
            >
              {a.map(v => v.frontmatter.title)}
            </PseudoBox>
            <Text
              mb="1.2em"
              fontSize="1rem"
              lineHeight="1.5em"
              color="#969696"
              letterSpacing="0.025vw"
            >
              {a.map(v => v.frontmatter.description)}
            </Text>
            <Stack isInline>
              <Avatar
                position="relative"
                top="-5px"
                w="25px"
                h="25px"
                name="author"
                src={b[0]}
              />
              <Text fontSize="0.5px" color="#6873e5" fontWeight="700">
                {a.map(v => v.frontmatter.author)}
              </Text>
              <Text fontSize="0.5px" color="#aaa" fontWeight="700">
                {a.map(v => v.frontmatter.date)}
              </Text>
            </Stack>
          </Box>
        </Flex>
      </PseudoBox>
    </Layout>
  )
}

export const query = graphql`
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
              fluid(maxWidth: 1000, maxHeight: 450) {
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
`

export default Research
