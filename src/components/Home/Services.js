import React from 'react'
import Service from './Service'
import Title from '../Global/title'
import {StaticQuery,graphql} from 'gatsby'

const getServices=graphql`{services:allContentfulPartyServices{
    edges{
      node{
        id
        title
        price
        image{
          fluid(maxHeight:426){
            src
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }}`;


export default function Services() {
    return (
      <StaticQuery query={getServices} render={data=>{
          return(<section className="py-5">
              <div className="container">
                  <Title title="Our Services"/>
                  <div className="row">
                    {data.services.edges.map(({node:service})=>{
                        return <Service key={service.id} service={service}/>
                    })}
                  </div>
                  </div>
                  </section>)
      }}/>
    )
}
