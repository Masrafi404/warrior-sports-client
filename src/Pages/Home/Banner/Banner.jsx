import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/hFSpVjv/Youth-soccer-indiana-1.jpg" alt="Image 1" />
                <div className="text-overlay">
                    <h3>Welcome to Warrior Sports Academy</h3>
                    <p>Join us for exciting soccer training and competitions!</p>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/xX63Yvw/Thinkstock-Photos-179779923-1280x720.jpg" alt="Image 2" />
                <div className="text-overlay">
                    <h3>Unleash Your Potential</h3>
                    <p>Discover the thrill of sports and push your limits.</p>
                </div>
            </div>
            <div>
                <img src="https://i.postimg.cc/1Xk1XDxZ/i.jpg" alt="Image 2" />
                <div className="text-overlay">
                    <h3>Train with Passion</h3>
                    <p>Experience world-class coaching and improve your skills.</p>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/cyzSQXX/image4.webp" alt="Image 2" />
                <div className="text-overlay">
                    <h3>Be part of a Winning Team</h3>
                    <p>Join our community of dedicated athletes and achieve greatness together.</p>
                </div>
            </div>
            <div>
                <img src="https://i.postimg.cc/Vkt2GJxJ/IMG-20221008-WA0024-1665245049715-1665245054705-1665245054705.webp" alt="Image 2" />
                <div className="text-overlay">
                    <h3>Embrace the Spirit of Sportsmanship</h3>
                    <p>Learn teamwork, discipline, and fair play.</p>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;
