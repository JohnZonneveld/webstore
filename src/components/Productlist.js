import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    state= {
        products: []
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    {/* product row */}
                        <div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>
            // <Product />
        )
    }
}
