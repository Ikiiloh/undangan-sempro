// src/App.jsx
import { Outlet } from 'react-router-dom';

function App() {
  return (
    // Gunakan latar belakang abu-abu netral agar kartu biru menonjol
    <div className="min-h-screen bg-page-bg flex flex-col items-center justify-center p-4">
      {/* Outlet akan merender komponen Undangan atau GenerateLink sesuai route */}
      <Outlet />
    </div>
  );
}

export default App;