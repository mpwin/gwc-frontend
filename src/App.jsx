import { Routes, Route } from 'react-router-dom';
import { NavigationSidebar } from './components/NavigationSidebar.jsx';
import { Zone } from './components/Zone.jsx';
import './App.css';

function App() {
  return (
    <>
      <NavigationSidebar />
      <main className="main-content">
        <h1>Guild Wars Catalog</h1>
        <Routes>
          <Route path="/:releaseSlug/:zoneSlug" element={<Zone />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
