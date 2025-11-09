import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      setStatus('Sending...');
      // In a production integration, send to a backend endpoint or service like Formspree
      await new Promise((res) => setTimeout(res, 800));
      setStatus('Thanks! Your message has been sent.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Contact</h2>
            <p className="mt-3 text-slate-300">
              Have a question or want a custom package? Send a message and we’ll get back within 1 business day.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-emerald-400"/> hello@yourbrand.com</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-emerald-400"/> +1 (555) 000-0000</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-emerald-400"/> Remote / Worldwide</div>

              <div className="mt-4 flex items-center gap-4">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-300 underline-offset-4 hover:text-white hover:underline">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-300 underline-offset-4 hover:text-white hover:underline">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 underline-offset-4 hover:text-white hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-300">First name</label>
                <input name="firstName" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="Jane" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Last name</label>
                <input name="lastName" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="Doe" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Message</label>
                <textarea name="message" rows={4} required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="Tell us about your project" />
              </div>
            </div>

            <button type="submit" className="mt-4 w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400">
              Send message
            </button>
            {status && <p className="mt-3 text-center text-sm text-slate-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
