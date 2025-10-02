import { useState } from 'react';
import { NavigationSidebar } from './components/NavigationSidebar.jsx';
import { Zone } from './components/Zone.jsx';
import './App.css';

function App() {
  const [view, setView] = useState({ type: null, slug: null });

  return (
    <>
      <NavigationSidebar setView={setView} />
      <main className="main-content">
        <h1>Guild Wars Catalog</h1>
        {view.type === 'release' && <div>{view.slug}</div>}
        {view.type === 'zone' && <Zone slug={view.slug} />}
      </main>
    </>
  );
}

export default App;
