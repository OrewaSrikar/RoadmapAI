import React from 'react'

export default function Features() {
  return (
    <section className="py-xl bg-surface-container-lowest relative z-10">
      <div className="container mx-auto px-lg max-w-container-max">
        <div className="text-center mb-xl">
          <h2 className="font-headline-lg text-headline-lg mb-md text-on-surface">Deep Technical <span className="gradient-text">Diagnostics</span></h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">We don't just read your resume. We audit your codebase, evaluate your problem-solving logic, and measure your impact.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          
          {/* Resume Analyzer */}
          <div className="glass-card p-xl rounded-3xl flex flex-col gap-md group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-sm">
              <span className="material-symbols-outlined text-primary text-3xl">description</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">Resume Analyzer</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">ATS-driven scoring with AI-suggested rewrites for maximum impact on FAANG hiring managers.</p>
            <div className="mt-auto pt-md flex items-center text-primary font-bold cursor-pointer hover:gap-3 transition-all">
              Launch Tool <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </div>
          </div>
          
          {/* GitHub Auditor */}
          <div className="glass-card p-xl rounded-3xl flex flex-col gap-md group hover:border-secondary/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-sm">
              <span className="material-symbols-outlined text-secondary text-3xl">code</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">GitHub Auditor</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Deep codebase analysis including code quality, commit consistency, and architectural complexity scores.</p>
            <div className="mt-auto pt-md flex items-center text-secondary font-bold cursor-pointer hover:gap-3 transition-all">
              Connect Repo <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </div>
          </div>
          
          {/* LeetCode Benchmark */}
          <div className="glass-card p-xl rounded-3xl flex flex-col gap-md group hover:border-tertiary/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-sm">
              <span className="material-symbols-outlined text-tertiary text-3xl">terminal</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">Algorithmic Benchmarking</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Compare your DSA proficiency against the current hiring bar for top-tier tech firms worldwide.</p>
            <div className="mt-auto pt-md flex items-center text-tertiary font-bold cursor-pointer hover:gap-3 transition-all">
              Sync LeetCode <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
