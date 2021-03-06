/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css";
import "./layout.css"
import Navbar from "./Global/navbar.js"
import Footer from "./Global/footer.js"
const Layout = ({ children }) =>
  <>
  <Navbar/>
  {children}
  <Footer/>
  </>;


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
