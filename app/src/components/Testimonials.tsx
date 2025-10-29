"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "A社 開発責任者",
      company: "SaaS企業",
      content: "AI機能の実装をお願いしましたが、技術力の高さと提案力に驚きました。予算内で期待以上の成果物を納品いただき、大変満足しています。",
      rating: 5
    },
    {
      name: "B社 CTO",
      company: "スタートアップ",
      content: "AWSでのインフラ構築からアプリケーション開発まで一貫して対応していただきました。レスポンスも早く、安心してプロジェクトを任せられました。",
      rating: 5
    },
    {
      name: "C社 プロダクトマネージャー",
      company: "音楽配信サービス",
      content: "音楽テクノロジー分野での深い知見に感銘を受けました。ユーザー体験を重視した開発姿勢が素晴らしく、リリース後のユーザー評価も非常に高いです。",
      rating: 5
    }
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-yellow-100 rounded-lg mb-4">
            <Quote className="h-6 w-6 text-yellow-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            お客様の声
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            実際にご利用いただいたお客様からの評価をご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-slate-300 mb-4" />
                <p className="text-slate-600 leading-relaxed mb-6">
                  {testimonial.content}
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            あなたのプロジェクトも成功に導きます。まずはお気軽にご相談ください。
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            無料相談を申し込む
          </a>
        </div>
      </div>
    </section>
  )
}
