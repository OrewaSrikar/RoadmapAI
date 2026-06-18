import React from 'react'
import FloatingCard from './FloatingCard'

export default function Hero() {
  return (
    <main className="relative pt-32 pb-xl overflow-hidden min-h-screen flex items-center">
      <div className="hero-glow"></div>
      <div className="container mx-auto px-lg max-w-container-max relative z-10">
        <div className="grid lg:grid-cols-12 gap-xl items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-lg pr-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-primary uppercase">Powered by Advanced GPT-4o</span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-on-surface leading-[1.15] tracking-tight">
              Know Your <span className="bg-gradient-to-r from-[#b4c6ff] to-[#d4c5ff] bg-clip-text text-transparent">Placement</span> <br />
              <span className="bg-gradient-to-r from-[#b4c6ff] to-[#d4c5ff] bg-clip-text text-transparent">Readiness</span> with AI
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
              Analyze Resume, GitHub, LeetCode and get a personalized roadmap to your dream job. Our AI engine evaluates your professional fingerprint against 10,000+ success trajectories.
            </p>
            <div className="flex flex-wrap gap-md mt-md">
              <button className="px-lg py-md rounded-xl bg-[#b4c6ff] hover:bg-[#a1b7fa] active:scale-95 text-[#0b1539] font-bold shadow-[0_8px_32px_rgba(180,198,255,0.15)] transition-all duration-200 cursor-pointer">
                Analyze Profile
              </button>
              <button className="px-lg py-md rounded-xl border border-white/10 hover:bg-white/5 active:opacity-80 transition-all flex items-center gap-2 text-on-surface font-medium cursor-pointer">
                <span className="material-symbols-outlined text-md">play_circle</span>
                View Demo
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-xl mt-xl pt-lg border-t border-white/5 w-full">
              <div className="flex flex-col gap-0.5">
                <span className="font-headline text-3xl font-bold text-on-surface">98%</span>
                <span className="text-xs text-on-surface-variant">Prediction Accuracy</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-headline text-3xl font-bold text-on-surface">12k+</span>
                <span className="text-xs text-on-surface-variant">Careers Navigated</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-headline text-3xl font-bold text-on-surface">200+</span>
                <span className="text-xs text-on-surface-variant">Partner Companies</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Background Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 blur-[100px] rounded-full"></div>
              
              {/* Main Illustration Container */}
              <div className="relative w-full h-full max-w-md mx-auto flex items-center justify-center">
                
                {/* Floating AI Insight Card 1 */}
                <FloatingCard
                  className="absolute -top-4 -right-4 z-20 w-56"
                  icon="analytics"
                  iconColorClass="text-primary"
                  title="LeetCode Analysis"
                  footerText="Rank: Top 5% of Applicants"
                >
                  <div className="h-2 w-full bg-white/5 group-hover:bg-white/20 rounded-full overflow-hidden transition-colors duration-300">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary group-hover:bg-white transition-colors duration-300" style={{ width: '85%' }}></div>
                  </div>
                </FloatingCard>
                
                {/* Floating AI Insight Card 2 */}
                <FloatingCard
                  className="absolute bottom-8 -left-12 z-20 delay-1000 w-64"
                  icon="map"
                  iconColorClass="text-secondary"
                  title="Career Roadmap Generated"
                >
                  <div className="flex flex-col gap-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-white transition-colors duration-300"></span>
                      <span className="text-body-sm text-[12px] text-on-surface group-hover:text-white transition-colors duration-300">Cloud Architecture Mastery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-300"></span>
                      <span className="text-body-sm text-[12px] opacity-50 text-on-surface group-hover:text-white/70 transition-colors duration-300">System Design Review</span>
                    </div>
                  </div>
                </FloatingCard>
                
                {/* Center Visualization */}
                <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="A highly complex and premium digital illustration depicting the future of career planning." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXFBxxCKtjyykzE1iUfvG_SFmILr-FlV9wmUHUvxh6zNvcE6ViREJejN_LC56HEXT1rm7kBD-wEpv_yUofNbLKQB4-KZAVFr2GVtBRltgVyRjPAUKkv80GKrZrhJ5KAXduhoQFOLB0-i7fGVW_1leo_PcvlhZnD6hP5969-Jzu7VVFe1yJ3ZMObSu6jwTXN_BkhHngbQGs0-aL4XGVK4Jnx7nwqbNtByhVftH809gM_37998LKxIw245dz4Iss28CHpj54jR3MxkCg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                  <div className="absolute bottom-md left-md right-md">
                    <p className="font-label-caps text-label-caps text-white/40 mb-1">CURRENT TRAJECTORY</p>
                    <p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-white">Senior Staff Engineer</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
