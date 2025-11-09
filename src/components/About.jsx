import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">About Us</h2>
            <p className="mt-4 text-slate-300">
              We craft modern, high-performance websites that help businesses stand out. Our mission is to
              combine design excellence with production-grade engineering so you can launch with confidence.
            </p>
            <p className="mt-3 text-slate-300">
              This template is built for customization. Swap content, colors, and images to match any brand.
              Built on a scalable foundation using React and Tailwind.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-transparent p-0.5">
              <div className="h-full w-full rounded-[14px] bg-slate-900/60 backdrop-blur">
                <div className="flex h-full items-center justify-center p-6 text-center text-slate-300">
                  Replace this area with your brand imagery or a team photo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
