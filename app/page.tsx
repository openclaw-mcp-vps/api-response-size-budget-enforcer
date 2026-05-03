export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Prevent API Responses from{" "}
          <span className="text-[#58a6ff]">Bloating Your Bandwidth</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Set per-endpoint bandwidth budgets, get real-time alerts when limits are exceeded, and track response size trends — before your cloud bill surprises you.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to explore. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📏</div>
            <h3 className="font-semibold text-white mb-1">Size Budgets</h3>
            <p className="text-sm text-[#8b949e]">Define max response sizes per endpoint. Get alerted the moment a budget is breached.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Trend Analytics</h3>
            <p className="text-sm text-[#8b949e]">Visualize response size growth over time. Catch bloat before it becomes a problem.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="font-semibold text-white mb-1">Real-Time Alerts</h3>
            <p className="text-sm text-[#8b949e]">Receive instant notifications via email or webhook when an endpoint exceeds its limit.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited endpoints monitored</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Custom size budgets per endpoint</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Real-time breach alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 90-day response size history</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Webhook + SDK integration</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email & webhook notifications</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Monitoring Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-12 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the integration work?</h3>
            <p className="text-sm text-[#8b949e]">You can integrate via our lightweight SDK (Node.js, Python, Go) or send response metadata to our webhook endpoint. No traffic proxying — your data stays on your servers.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What counts as a response size breach?</h3>
            <p className="text-sm text-[#8b949e]">You define the budget (e.g., 50 KB) per endpoint. Any response exceeding that threshold triggers an alert. You can set soft warnings and hard limits independently.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel your subscription at any time from your billing portal. You keep access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} API Response Size Budget Enforcer. All rights reserved.
      </footer>
    </main>
  );
}
