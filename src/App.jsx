import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3" aria-label="Primary">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            YourBrand
          </a>
          <div className="hidden gap-6 text-sm text-slate-200 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-slate-900 transition hover:bg-emerald-400"
          >
            Get Started
          </a>
        </nav>
      </header>

      <main id="home" className="pt-14">
        <Hero />
        <Features />
        <About />
        <Services />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold">YourBrand</h3>
            <p className="mt-2 text-sm text-slate-300">A modern business website template you can brand and publish instantly.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li><a className="hover:text-white" href="#about">About</a></li>
              <li><a className="hover:text-white" href="#services">Services</a></li>
              <li><a className="hover:text-white" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li>hello@yourbrand.com</li>
              <li>+1 (555) 000-0000</li>
              <li>Remote / Worldwide</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Follow</h4>
            <div className="mt-2 flex gap-4 text-sm text-slate-300">
              <a href="https://twitter.com" className="hover:text-white" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://instagram.com" className="hover:text-white" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://linkedin.com" className="hover:text-white" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-6 text-xs text-slate-400">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
