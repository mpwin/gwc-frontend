import { useState } from 'react';
import { NavigationSidebar } from './components/NavigationSidebar.jsx';
import './App.css'

function App() {
  const [view, setView] = useState({ type: null, slug: null });

  return (
    <>
      <NavigationSidebar setView={setView} />
      <main className="main-content">
        <h1>Guild Wars Catalog</h1>
        <div>{view.type}</div>
        <div>{view.slug}</div>
      </main>
    </>
  )
}

export default App
