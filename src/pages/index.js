import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstRow from "../components/index-components/firstRow"


const IndexPage = () => (
  <Layout >
    <SEO title="首页" />
    <FirstRow/>
  </Layout>
)

export default IndexPage
