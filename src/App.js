import React, { lazy, Suspense, useState } from 'react';
import './app.css';


const MysteriousImage = lazy(() => import('./mysterious-image'));

function App() {
  const [showImage, setShowImage] = useState(false);
  return (
    <div className="root">
      <button onClick={() => setShowImage(!showImage)}>
        Show mysterious image
        <span role="img" aria-label="emoji"> 🧐 </span>
      </button>
      <Suspense fallback={<div className="loader">Loading...</div>}>
        {showImage && <MysteriousImage />}
      </Suspense>
    </div>
  );
}

export default App;
