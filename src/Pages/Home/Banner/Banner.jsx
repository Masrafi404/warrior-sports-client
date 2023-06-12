import React from 'react';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.ibb.co/hFSpVjv/Youth-soccer-indiana-1.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Welcome to Warrior Sports Academy</h3>
                        <p>Join us for exciting soccer training and competitions!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/xX63Yvw/Thinkstock-Photos-179779923-1280x720.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Unleash Your Potential</h3>
                        <p>Discover the thrill of sports and push your limits.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.postimg.cc/1Xk1XDxZ/i.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Train with Passion</h3>
                        <p>Experience world-className coaching and improve your skills.</p>/p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/cyzSQXX/image4.webp" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Be part of a Winning Team</h3>
                        <p>Join our community of dedicated athletes and achieve greatness together.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.postimg.cc/Vkt2GJxJ/IMG-20221008-WA0024-1665245049715-1665245054705-1665245054705.webp" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Embrace the Spirit of Sportsmanship</h3>
                        <p>Learn teamwork, discipline, and fair play.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;