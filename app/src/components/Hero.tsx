"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
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
            className="group px-8 py-6 text-base"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            お問い合わせ
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            サービスを見る
          </Button>
        </div>
      </div>
    </section>
  )
}
