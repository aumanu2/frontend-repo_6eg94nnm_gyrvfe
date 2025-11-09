import React from 'react';
import { Shield, Zap, Palette, Search } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-5 w-5 text-emerald-400" />,
    title: 'Fast & Responsive',
    desc: 'Built with a mobile-first mindset and optimized for performance across devices.',
  },
  {
    icon: <Search className="h-5 w-5 text-emerald-400" />,
    title: 'SEO-Friendly',
    desc: 'Semantic markup, clean metadata, and best practices for search engine visibility.',
  },
  {
    icon: <Palette className="h-5 w-5 text-emerald-400" />,
    title: 'Easy to Brand',
    desc: 'Edit text, colors, and images in minutes to fit any brand or niche.',
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
    title: 'Production-Ready',
    desc: 'Modern tooling and best practices ensure reliability and maintainability.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Everything you need, ready to ship</h2>
          <p className="mt-3 text-slate-300">
            A pragmatic set of essentials so you can publish fast and grow with confidence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-emerald-400/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30">
                  {f.icon}
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
