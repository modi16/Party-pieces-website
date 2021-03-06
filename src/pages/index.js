import React from "react"
import { Link, graphql } from "gatsby"
import Story from "../components/Home/story.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Global/background.js";
import Products from "../components/Home/products";
import Services from "../components/Home/Services";
import Contact from "../components/Home/Contact";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Background img={data.img.childImageSharp.fluid} title="Your party site" styleClass="birthday-cake"/>
    <Story/>
    <Products items={data.menu}/>
    <Services/>
    <Contact/>
  </Layout>
);

export const query= graphql`
{
  img: file(relativePath: {eq: "birthday-cake.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  menu:allContentfulPartySupplies{
    edges{
      node{
        id
        title
        description{
          description
        }
        price
        category
        image{
          fixed(width:50, height:50){
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
}

`


export default IndexPage
