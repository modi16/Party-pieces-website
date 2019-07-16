import React from "react"
import { Link, graphql } from "gatsby"
import Story from "../components/Home/story.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Global/background.js";

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Background img={data.img.childImageSharp.fluid} title="About us" styleClass="about-background"/>
    <Story/>
  </Layout>
);

export const query= graphql`
{
  img: file(relativePath: {eq: "animals-assorted.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`


export default AboutPage
