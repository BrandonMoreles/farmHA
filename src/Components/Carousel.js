import React, { useState, useEffect } from 'react';
import '../Styles/Carousel.css'
const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 8000); // Cambia la imagen cada 3 segundos (ajusta según tus necesidades)

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel">
      <button className="prev-button" onClick={goToPreviousImage}>
        &#8249; {/* Flecha izquierda */}
      </button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <button className="next-button" onClick={goToNextImage}>
        &#8250; {/* Flecha derecha */}
      </button>
      <div className="position-indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`position-dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
