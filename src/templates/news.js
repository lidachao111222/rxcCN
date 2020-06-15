import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

const News = ({ data }) => {
  const { body } = data.mdx
  return (
    <Layout>
      <MDXRenderer>{body}</MDXRenderer>
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
