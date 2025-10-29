"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [showCompanyName, setShowCompanyName] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCompanyName(prev => !prev)
    }, 2000) // 2秒間隔で切り替え

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated Sky Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent animate-gradient-shift"></div>
      </div>

      {/* Flowing gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-indigo-200/40 to-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="relative h-64 md:h-80 flex items-center justify-center mb-8">
          <h1
            className={`absolute inset-0 flex flex-col items-center justify-center text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 transition-opacity duration-1000 ${
              showCompanyName ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Potential Labs
          </h1>
          <h1
            className={`absolute inset-0 flex flex-col items-center justify-center text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 transition-opacity duration-1000 ${
              !showCompanyName ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span>テクノロジーで、</span>
            <span>人の可能性をひらく。</span>
          </h1>
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="group px-10 py-7 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            お問い合わせ
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
