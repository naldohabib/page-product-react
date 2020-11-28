import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import '../css/Details.css'
import '../css/Cart.css'

export class Payment extends Component {
    static contextType = DataContext;
    state = {
        item: []
    }

    getPayment = () => {
        if (this.props.match.params.id) {
            const res = this.context.cart;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            this.setState({ item: data })
        }
    };

    componentDidMount() {
        this.getPayment()
        this.context.getTotal();
    }

    render() {
        const { item } = this.state
        const { buyProduct, total } = this.context;
        return (
            <>
                {
                    item.map(item => (
                        <div className="details cart" key={item._id}>
                            <img src={item.src} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price * item.count}</span>
                                </div>
                                <div className="amount">
                                    <span>{item.count}</span>
                                </div>
                                <div className='row'>
                                    <div className="total">
                                        <Link to="/cart" onClick={() => buyProduct(item._id)}>Buy</Link>
                                    </div>
                                    <div className="total">
                                        <Link to="/cart">Cancel</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Payment
