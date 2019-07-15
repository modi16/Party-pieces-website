import React from "react"
import { Link, graphql } from "gatsby"
import Story from "../components/Home/story.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Global/background.js";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Background img={data.img.childImageSharp.fluid} title="Your party site" styleClass="birthday-cake"/>
    <Story/>
  </Layout>
);

export const query= graphql`
{
  img: file(relativePath: {eq: "birthday-cake.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`


export default IndexPage
