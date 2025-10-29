"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Music, Sparkles, Database } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Cloud,
      title: "AI、AWS、BytePlusを使った受託開発",
      description: "最新のクラウドテクノロジーとAIを駆使し、お客様のビジネス課題を解決するカスタムソリューションを提供します。",
      features: [
        "AWS / BytePlus インフラ構築",
        "AI/機械学習モデル開発",
        "スケーラブルなアプリケーション開発",
        "データパイプライン構築"
      ]
    },
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
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-white via-blue-100/50 to-white">
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

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Database className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
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
