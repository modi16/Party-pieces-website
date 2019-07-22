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
        if (this.state.items.length>0){
        return (
            <section className="menu py-5">
                <div className="container">
                    <Title title="Best of products"/>
                    <div className="row">
                        {this.state.productItems.map(({node})=>{
                            return(
                                <div key={node.id}className="col-11 col-md-6 my-3 d-flex mx-auto">
                                    <div>
                                        <Img fixed={node.image.fixed}/>
                                    </div>
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0"><small>{node.title}</small></h6>
                                            <h6 className="mb-0 text-yellow"><small>${node.price}</small></h6>
                                        </div>
                                        <p className="text-muted">
                                            <small>{node.description.description}</small>
                                        </p>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>           
            </section>
        )}
        else{
            return(<section className="menu py-5">
                <div className="container">
                    <Title title="Best of products"></Title>
                    <div className="row">
                        <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                            <h1> There are no products to display</h1>
                        </div>
                    </div>
                </div>
            </section>)
        }
    }
}
