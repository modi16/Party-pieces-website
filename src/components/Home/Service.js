import React from 'react'
import Img from 'gatsby-image'

export default function Service({service}) {
    return <div className=" col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
        <div className="card" style={{minHeight:"100%"}}>
            <Img fluid={service.image.fluid} className="card-img-top"/>
            <div className="card-body text-center">
                <h6>{service.title}</h6>
                <h6>${service.price}</h6>
                <button className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"  
                    data-item-id={service.id}
                    data-item-name={service.title}
                    data-item-price={service.price}
                    data-item-image={service.image.fluid.src}
                    data-item-url="/."
                    > Cart</button>
            </div>
        </div>
    </div>
        
    
}
