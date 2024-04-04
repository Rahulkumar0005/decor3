import React, { useState } from 'react';
import './trial.css';

const ZoomedImage = ({ src }) => {
  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setZoomed(true);
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src={src}
        alt="Main Image"
        style={{ width: '400px', height: 'auto', display: 'block' }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {zoomed && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '100%',
            marginLeft: '20px', // Adjust the distance from the main image
            width: '800px', // Adjust the size of the zoomed image container
            height: '400px', // Adjust the size of the zoomed image container
            overflow: 'hidden',
            border: '1px solid #ccc', // Optional: Add border for better visualization
          }}
        >
          <img
            src={src}
            alt="Zoomed Image"
            style={{
              width: '800px', // Adjust the width of the zoomed-in part
              height: 'auto',
              transformOrigin: `${position.x}px ${position.y}px`,
              transform: 'scale(2)', // Adjust the scale factor for zooming
              marginLeft: `${-position.x * 2 + 100}px`, // Adjust the position of the zoomed part
              marginTop: `${-position.y * 2 + 100}px`, // Adjust the position of the zoomed part
            }}
          />
        </div>
      )}
    </div>
  );
};

// Usage
const Trial = () => {
  return (
    <div>
      <h2>Hover to Zoom Image</h2>
      <ZoomedImage src="https://images.bewakoof.com/t1080/men-s-black-snoopy-vibes-graphic-printed-oversized-t-shirt-633742-1711481910-1.jpg" /> {/* Path to the main image */}
    </div>
  );
};

export default Trial;
