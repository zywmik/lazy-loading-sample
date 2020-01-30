import React, { lazy, Suspense, useState } from 'react';
import './app.css';


const MysteriousImage = lazy(() => import('./mysterious-image'));

function App() {
  const [showImage, setShowImage] = useState(false);
  return (
    <div>
      <button onClick={() => setShowImage(!showImage)}>
        Show mysterious image
        <span role="img" aria-label="emoji"> 🧐 </span>
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        {showImage && <MysteriousImage />}
      </Suspense>
    </div>
  );
}

export default App;
