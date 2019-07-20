import React, { Component } from 'react'
import Img from "gatsby-image"
import Title from "../Global/title"

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            items: props.items.edges,
            productItems: props.items.edges
        }
    }
    render() {
        return (
            <div>
              content from product  
            </div>
        )
    }
}
