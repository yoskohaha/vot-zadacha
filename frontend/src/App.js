import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/cats')
      .then(response => response.json())
      .then(data => setCatImages(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cat Images</h1>
        <div className="cat-images">
          {catImages.map((url, index) => (
            <img key={index} src={url} alt={`Cat ${index + 1}`} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
