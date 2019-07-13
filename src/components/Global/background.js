import React from 'react';
import BackgroundImage from "gatsby-background-image";

export default function Background({img, styleClass, title, children}) {

    return (
        <BackgroundImage className={styleClass} fluid={img}>
            <h1 className="title text-white text-center text-uppercase display-4 font-weight-bold">{title}</h1>
            {children}
        </BackgroundImage>
       
    )
}

Background.defaultProps={
    title:"default title",
    styleClass: "default-background"
}
