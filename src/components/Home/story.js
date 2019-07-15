import React from 'react'
import {Link} from "gatsby"
import Title from "../Global/title.js"

export default function story() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our story"/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="text-muted lead mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        </p>
                        <Link to="/about">
                            <button className="btn text-uppercase btn-yellow">about</button>
                        </Link>
                    </div>


                </div>
            </div>
            
        </section>
    )
}
