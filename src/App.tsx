import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from "@vercel/analytics/react";
import { Home } from './pages/Home';
import { Footer } from './components/Layout/Footer';
import { Navigation } from './components/Layout/Navigation';
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigation />
    <Home />
    <Footer />
    <Analytics />
  </StrictMode>
);