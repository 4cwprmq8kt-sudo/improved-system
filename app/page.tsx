const holdings = [
  { name: "Nvidia", ticker: "NVDA", value: "€24,600", allocation: "18%" },
  { name: "Apple", ticker: "AAPL", value: "€17,900", allocation: "13%" },
  { name: "ASML", ticker: "ASML", value: "€15,200", allocation: "11%" },
  { name: "MSCI World ETF", ticker: "IWDA", value: "€32,450", allocation: "24%" }
];

const insights = [
  "You are 42% exposed to semiconductors, driven by NVDA and ASML.",
  "Top 3 holdings represent 52% of the portfolio — concentration risk is high.",
  "Diversification score: 62/100. Consider adding healthcare or utilities.",
  "Risk profile: Balanced with tech-heavy tilt."
];

const Page = () => {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Portfolio Intelligence App
            </p>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">
              Connect your broker. See your real portfolio. Get intelligent analysis.
            </h1>
            <p className="text-lg text-slate-300">
              Automated risk, diversification, and performance insights for modern investors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30">
                Sign Up / Login
              </button>
              <button className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200">
                View Live Demo
              </button>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Portfolio Value</p>
                <p className="text-3xl font-semibold text-white">€132,450</p>
              </div>
              <div className="rounded-2xl bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                +€1,240 today
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {holdings.map((holding) => (
                <div key={holding.ticker} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                  <p className="text-sm font-semibold text-white">{holding.name}</p>
                  <p className="text-xs text-slate-400">{holding.ticker}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-200">
                    <span>{holding.value}</span>
                    <span className="text-emerald-300">{holding.allocation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-3">
          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Account System</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>• Email + password onboarding</li>
              <li>• Google / Apple login supported</li>
              <li>• Secure OAuth 2.0 session management</li>
            </ul>
            <button className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200">
              Create account
            </button>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Broker Connection</h2>
            <p className="text-sm text-slate-300">Connect your broker to import your portfolio.</p>
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/40 p-4 text-sm text-slate-300">
              FinAPI OAuth → Holdings, tickers, quantities, buy prices, current prices.
            </div>
            <button className="rounded-full bg-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-200">
              Connect Broker
            </button>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Data Processing Engine</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>• Total portfolio value & invested capital</li>
              <li>• Unrealized P/L & daily change</li>
              <li>• Allocation by sector, country, asset type</li>
              <li>• Risk simulation for -10%, -20%, -40% markets</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-900/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
              <p className="text-sm text-slate-400">Total invested</p>
              <p className="text-2xl font-semibold text-white">€118,300</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
              <p className="text-sm text-slate-400">Unrealized P/L</p>
              <p className="text-2xl font-semibold text-emerald-300">+€14,150</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
              <p className="text-sm text-slate-400">Market drop -20%</p>
              <p className="text-2xl font-semibold text-rose-300">-€8,450</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white">Asset allocation</h3>
              <div className="mt-4 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Stocks</span>
                  <span>58%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>ETFs</span>
                  <span>31%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Crypto</span>
                  <span>11%</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white">AI Insights</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {insights.map((insight) => (
                  <li key={insight} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Live News</h3>
            <p className="mt-2 text-sm text-slate-300">This news affects 4 of your holdings.</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Nvidia beats earnings expectations on data center demand.</li>
              <li>• ASML raises guidance following EUV backlog growth.</li>
              <li>• Apple unveils new AI features at developer conference.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Security & Compliance</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• OAuth 2.0 with encrypted token vault.</li>
              <li>• Read-only broker access enforced.</li>
              <li>• GDPR-ready data retention controls.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Monetization Ready</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Free tier: portfolio view & holdings.</li>
              <li>• Premium: AI analysis, risk simulation, alerts.</li>
              <li>• Upgrade prompts embedded in insights.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
