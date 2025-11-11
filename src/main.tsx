import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Hide the loading screen once the React app is mounted
setTimeout(() => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
    // Optionally, you can remove it from the DOM entirely:
    // loadingScreen.parentNode?.removeChild(loadingScreen);
  }
}, 100); // A small delay to ensure React has started rendering
