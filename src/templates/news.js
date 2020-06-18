import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import { Box } from "@chakra-ui/core"
const News = ({ data }) => {
  const { body } = data.mdx
  return (
    <Layout>
      <Box
        w="100%"
        maxW={800}
        mx="auto"
        px="30px"
        pt={["20px", "20px", "50px", "10vh"]}
        mb="40vh"
      >
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MM DD")
      }
    }
  }
`

export default News
