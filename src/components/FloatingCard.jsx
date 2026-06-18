import React from 'react'

export default function FloatingCard({ 
  className = '', 
  icon = '', 
  iconColorClass = 'text-primary',
  title = '', 
  children,
  footerText = ''
}) {
  return (
    <div className={`group glass-card p-md rounded-xl ai-insight-border animate-float transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-[#818cf8]/80 hover:to-[#c084fc]/80 hover:border-white/20 hover:shadow-[0_0_30px_rgba(129,140,248,0.4)] cursor-default ${className}`}>
      <div className="flex items-center gap-sm mb-sm">
        {icon && (
          <span className={`material-symbols-outlined ${iconColorClass} group-hover:text-white transition-colors duration-300`}>
            {icon}
          </span>
        )}
        <span className="font-label-caps text-label-caps text-on-surface group-hover:text-white transition-colors duration-300">
          {title}
        </span>
      </div>
      
      <div className="transition-all duration-300">
        {children}
      </div>

      {footerText && (
        <p className="font-body-sm text-body-sm mt-sm text-on-surface-variant group-hover:text-white/80 transition-colors duration-300">
          {footerText}
        </p>
      )}
    </div>
  )
}
