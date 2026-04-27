import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Golf from './pages/Golf';

function Landing() {
  return (
    <div className="bg-black text-white">
      <Hero />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"     element={<Landing />} />
        <Route path="/golf" element={<Golf />} />
      </Routes>
    </BrowserRouter>
  );
}
