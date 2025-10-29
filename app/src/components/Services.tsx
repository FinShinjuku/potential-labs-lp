"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Music, Sparkles, Database, Brain, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Services() {
  const mainServices = [
    {
      icon: Brain,
      title: "AI開発",
      description: "機械学習とAIテクノロジーを活用し、ビジネスの可能性を最大化します",
      link: "/services/ai",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "AWS開発",
      description: "TAM経験を活かした、プロフェッショナルなクラウドソリューション",
      link: "/services/aws",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Rocket,
      title: "BytePlus開発",
      description: "TikTokを支える先進テクノロジーを活用した次世代プラットフォーム開発",
      link: "/services/byteplus",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const otherServices = [
    {
      icon: Music,
      title: "音楽の未来を変えるソリューション",
      description: "テクノロジーとクリエイティビティを融合し、音楽業界に新しい体験と可能性をもたらします。",
      features: [
        "音楽配信プラットフォーム開発",
        "AIによる楽曲分析・レコメンデーション",
        "アーティスト支援ツール",
        "ライブストリーミングソリューション"
      ]
    }
  ]

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg mb-4">
            <Sparkles className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            サービス
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            技術の力で、ビジネスとクリエイティビティの可能性を最大化します
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainServices.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={service.link}>
                <Card className="h-full border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardHeader>
                    <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      <span>詳しく見る</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Other Services */}
        <div className="grid md:grid-cols-1 gap-8">
          {otherServices.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Database className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
