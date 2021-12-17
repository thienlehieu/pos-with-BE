import React from 'react';
import logo from "../Data/images/logo.JPG";
import { Link } from 'react-router-dom';

const PaymentDone = (setCartItems) => {
    return (
        <section className="menu section">
        <div className="title">
            <img src={logo} alt="logo" className="logo" />
            <p>Thanh toán thành công! Chúc quý khách ngon miệng!!!</p>
            <Link to="/">
                <button className="btn btn-info">Tiếp tục mua sắm</button>
            </Link>
        </div>
        </section>
    )
}

export default PaymentDone