"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated Sky Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent animate-gradient-shift"></div>
      </div>

      {/* Flowing gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/50 to-cyan-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-300/50 to-pink-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-indigo-300/50 to-blue-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            Potential Labs
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 animate-fade-in">
          テクノロジーで、
          <br />
          人の可能性をひらく。
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
          クラウド、AI、データ。
          <br />
          それらは&quot;効率化のための道具&quot;ではなく、
          <br className="hidden md:block" />
          &quot;人が本来の力を発揮するためのきっかけ&quot;だと、私たちは考えています。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
          <Button
            size="lg"
            className="group px-8 py-6 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            無料で相談する
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base border-2 hover:bg-slate-50"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            サービスを見る
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-600 animate-fade-in-up animation-delay-400">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span>初回相談無料</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span>実績多数</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span>迅速対応</span>
          </div>
        </div>
      </div>
    </section>
  )
}
