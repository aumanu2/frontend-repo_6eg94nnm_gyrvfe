import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    features: ['1 page', 'Email support', 'Basic SEO', '1 revision'],
    popular: false,
  },
  {
    name: 'Business',
    price: '$149',
    features: ['Up to 5 pages', 'Priority support', 'Advanced SEO', '3 revisions'],
    popular: true,
  },
  {
    name: 'Pro',
    price: '$299',
    features: ['Unlimited pages', 'Dedicated support', 'SEO + Analytics', 'Unlimited revisions'],
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Products & Services</h2>
          <p className="mt-3 text-slate-300">Choose a package and start publishing today.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 transition-all ${
                plan.popular
                  ? 'border-emerald-400/40 bg-gradient-to-b from-emerald-500/10 to-transparent'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-900">
                  Most Popular
                </span>
              )}
              <div className="flex items-end justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="text-3xl font-bold">{plan.price}</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
