import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-soft-blue flex flex-col items-center justify-center p-4">
      {/* Outlet akan merender komponen Undangan atau GenerateLink sesuai route */}
      <Outlet />
    </div>
  );
}

export default App;