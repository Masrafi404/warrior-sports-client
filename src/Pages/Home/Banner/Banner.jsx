import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/vBm28nh/download.jpg" alt="Image 1" />
                <div className="text-overlay">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, odio.</div>
            </div>
            <div>
                <img src="https://i.ibb.co/LkWjmW0/4256.webp" alt="Image 2" />
                <div className="text-overlay">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nobis!</div>
            </div>
        </Carousel>
    );
};

export default Banner;
