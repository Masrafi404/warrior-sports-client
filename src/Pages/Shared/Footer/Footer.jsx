import moment from 'moment/moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="">
            <footer
                className="text-center text-lg-start text-dark"
                style={{ backgroundColor: '#ECEFF1' }}
            >
                <section
                    className="d-flex justify-content-between p-4 text-white"
                    style={{ backgroundColor: '#21D192' }}
                >
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <Link className="text-white me-4">
                            <FaFacebook />
                        </Link>
                        <Link className="text-white me-4">
                            <FaTwitter />
                        </Link>
                        <Link className="text-white me-4">
                            <FaGoogle />
                        </Link>
                        <Link className="text-white me-4">
                            <FaInstagram />
                        </Link>
                        <Link className="text-white me-4">
                            <FaLinkedin />
                        </Link>
                        <Link className="text-white me-4">
                            <FaGithub />
                        </Link>
                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Company name</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '130px' }}
                                />
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '84px' }}
                                />
                                <p>
                                    <Link className="text-dark" style={{ textDecoration: 'none' }}>
                                        MDBootstrap
                                    </Link>
                                </p>
                                <p>
                                    <Link className="text-dark" style={{ textDecoration: 'none' }}>
                                        MDWordPress
                                    </Link>
                                </p>
                                <p>
                                    <Link className="text-dark" style={{ textDecoration: 'none' }}>
                                        BrandFlow
                                    </Link>
                                </p>
                                <p>
                                    <Link className="text-dark" style={{ textDecoration: 'none' }}>
                                        Bootstrap Angular
                                    </Link>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '110px' }}
                                />
                                <p>
                                    <Link className="text-dark" style={{ textDecoration: 'none' }}>
                                        Your Account
                                    </Link>
                                </p>
                                <p>
                                    <Link className="text-dark" style={{ textDecoration: 'none' }}>
                                        Become an Affiliate
                                    </Link>
                                </p>
                                <p>
                                    <Link className="text-dark" style={{ textDecoration: 'none' }}>
                                        Shipping Rates
                                    </Link>
                                </p>
                                <p>
                                    <Link className="text-dark" style={{ textDecoration: 'none' }}>
                                        Help
                                    </Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '73px' }}
                                />
                                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                    © {moment().format('YYYY')} Sports Warrior Academy
                </div>
            </footer>
        </div>
    );
};

export default Footer;
