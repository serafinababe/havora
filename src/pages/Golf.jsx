import { useEffect } from 'react';
import GolfNav      from '../components/golf/GolfNav';
import WhoWeAre     from '../components/golf/WhoWeAre';
import WhatWeDo     from '../components/golf/WhatWeDo';
import Connections  from '../components/golf/Connections';
import Join         from '../components/golf/Join';
import GolfFooter   from '../components/golf/GolfFooter';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.15 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Golf() {
  useReveal();
  return (
    <div className="bg-black text-white">
      <GolfNav />
      <WhoWeAre />
      <WhatWeDo />
      <Connections />
      <Join />
      <GolfFooter />
    </div>
  );
}
