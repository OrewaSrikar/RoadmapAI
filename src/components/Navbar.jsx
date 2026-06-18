import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-surface/60 backdrop-blur-md border-b border-white/5 h-16 flex justify-between items-center px-lg">
      <div className="flex items-center gap-md">
        <span className="font-headline text-2xl md:text-3xl font-extrabold text-on-surface tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          RoadmapAI
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-lg">
        <a className="text-primary border-b-2 border-primary pb-1 font-body-sm text-body-sm transition-opacity" href="#">Product</a>
        <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-on-surface hover:bg-white/5 rounded-lg px-2 py-1 transition-all" href="#">Features</a>
        <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-on-surface hover:bg-white/5 rounded-lg px-2 py-1 transition-all" href="#">Pricing</a>
        <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-on-surface hover:bg-white/5 rounded-lg px-2 py-1 transition-all" href="#">About</a>
      </nav>
      <div className="flex items-center gap-md">
        <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">notifications</button>
        <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">smart_toy</button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
          <img
            className="w-full h-full object-cover"
            alt="A professional user profile avatar in a minimalist digital workspace."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJDHd8yjl7qEPa9nqZ3DzZpAt5sT66rchrW91iJKohuTG8O0QwYaHzdWUUVICLCyEO_c0Pp8Y8i4yB4yquGzqzCMeeo1hK_FiJjjHUrmZFpOzO3L3dE8a8vIbCtUokBqKn_YL50Uaq-0P2yRdfRP0uOgq1tWJd8SzO2eqg_IxdYguv1goeJWkSDUkuGhUIhMOqfMn2ppruk_P67AK6vkWBRD163FyHYR-KLfprnqtq5WGUzmroc_QE9clrv4NpOGwFYS2kvoBll2QR"
          />
        </div>
      </div>
    </header>
  )
}
