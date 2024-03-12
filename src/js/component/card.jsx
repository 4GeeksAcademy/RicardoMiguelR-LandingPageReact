import React from 'react';

const Card = () => {
    return (
        <div className="card-width mt-4 rounded-2">
            <img src="https://img.freepik.com/premium-photo/abstract-neon-light-game-controller-artwork-design-digital-art-wallpaper-glowing-space-background-generative-ai_742252-10394.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title p-3">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e" className="card-img-top" />
                </h5>
                <p className="card-text p-3">Descubre tu siguiente juego favorito. Disfruta de cientos de juegos por un módico precio mensual. ÚNETE AHORA.</p>
                <a href="https://www.xbox.com/es-MX" target="_blank" className="btn btn-success mb-2">Official Site</a>
            </div>
        </div>
    );
};

export default Card;
