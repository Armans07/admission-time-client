import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-80" style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIP.ndAuhnhAtmfUg_KdatCvEwHaEo?pid=ImgDet&rs=1)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Our Collage</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-blue-900 text-white hover:text-black">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;