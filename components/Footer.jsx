import React from 'react';

const Footer = () => {
    return <div className='footer'>
        <div className="footer-first p-5 py-5">
            <div className="row px-4">
                <div className="col">
                    <h6>HELP & INFORMATION</h6>
                    <div className="content mt-4 pt-2 text-secondary">
                    <p>Track Order</p>
                    <p>Delivery & Returns</p>
                    <p>Premier Delivery</p>
                    <p>FAQs</p>
                    </div>
                </div>
                <div className="col">
                    <h6>ABOUT SUPRO</h6>
                    <div className="content mt-4 pt-2 text-secondary">
                        <p>About us</p>
                        <p>Careers</p>
                        <p>Coporate</p>
                        <p>Investors</p>
                    </div>
                </div>
                <div className="col">
                    <h6>ONLINE SHOP</h6>
                    <div className="content mt-4 pt-2 text-secondary">
                        <p>Shoes</p>
                        <p>Bags</p>
                        <p>Wallets</p>
                        <p>Belts</p>
                    </div>
                </div>
                <div className="col">
                    <h6>LANGUAGE</h6>
                    <div className="content mt-4 pt-2 text-secondary">
                        <select>
                            <option value="english">English</option>
                            <option value="italian">Italian</option>
                            <option value="german">German</option>
                            <option value="french">French</option>
                        </select>
                    </div>
                </div>
                <div className="col">
                    <h6>CURRENCY</h6>
                    <div className="content mt-4 pt-2 text-secondary">
                        <select>
                            <option value="usd">USD</option>
                            <option value='gdp'>GDP</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="second-footer w-100 border-top p-4 d-flex align-items-center justify-content-between justify-content-between">
            <p className="m-0">© 2021 Supro. All rights reserved</p>
            <div className="d-flex gap-4 text-secondary">
                <p className='m-0 pointer'>Privacy Policy</p>
                <p className='m-0 pointer'>Term of Use</p>
            </div>
        </div>
    </div>
}

export default Footer;