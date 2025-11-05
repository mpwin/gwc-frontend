import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { NavigationSidebar } from './components/NavigationSidebar.jsx';
import { Release } from './components/Release.jsx';
import { Zone } from './components/Zone.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <NavigationSidebar />
        <main className="main-content">
          <Routes>
            <Route path="/:releaseSlug" element={<Release />} />
            <Route path="/:releaseSlug/:zoneSlug" element={<Zone />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
