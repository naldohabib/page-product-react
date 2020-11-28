import React, { Component } from 'react'
import Products from './section/Products'
import {Route} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Products} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/cart/:id" component={Cart}  exact/>
                    <Route path="/payment/:id" component={Payment} exact />
            </section>
        )
    }
}

export default Section
