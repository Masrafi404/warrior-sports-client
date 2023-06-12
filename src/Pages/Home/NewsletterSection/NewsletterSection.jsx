import React from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
    return (
        <section className="newsletter-section mb-4 mt-3" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1372172485/photo/mail-envelope-on-pastel-blue-background-3d-render-of-new-e-mail-message-notice-icon-concept.webp?b=1&s=170667a&w=0&k=20&c=c1mA3rneBUQRgG7zijo-b6aE6JAiwbEEDA3VFukn_hU=')" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="newsletter-content text-center">
                            <h2 className="mb-4">Subscribe to our Newsletter</h2>
                            <p className="mb-4">Stay updated with the latest news and offers.</p>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <button type="submit" className="btn btn-primary">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
