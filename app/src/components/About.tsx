"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, Target, Users } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-lg mb-4">
            <Building2 className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            会社概要
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            不可能を可能にする。それが私たちのミッションです。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">ビジョン</h3>
              <p className="text-slate-600">
                テクノロジーで人の可能性を最大限に引き出し、より良い未来を創造する
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">ミッション</h3>
              <p className="text-slate-600">
                最先端技術を活用し、顧客の課題を解決する革新的なソリューションを提供する
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">バリュー</h3>
              <p className="text-slate-600">
                革新・誠実・協働を大切にし、常に最高の価値を届ける
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Founder Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">チーム</h3>
          <Card className="max-w-2xl mx-auto overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <Image
                    src="/images/founder.jpg"
                    alt="Founder"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
                      Founder & CEO
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">関原 一明</h4>
                  <p className="text-slate-500 text-sm mb-4">Kazuaki Sekihara</p>

                  <p className="text-slate-600 leading-relaxed mb-4">
                    テクノロジーと人の可能性を信じ、Potential Labsを創業。
                    クラウドインフラ、AI/機械学習、音楽テクノロジーの分野で10年以上の経験を持ち、
                    技術を通じて社会に新しい価値を生み出すことに情熱を注いでいます。
                  </p>

                  <p className="text-slate-600 leading-relaxed mb-4">
                    これまでAWS、BytePlus等のクラウドプラットフォームを活用した
                    大規模システムの設計・構築に従事。特にAI/機械学習を活用した
                    データ駆動型ソリューションの開発において豊富な実績を持ちます。
                  </p>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    「技術は手段であり、人の可能性を引き出すためのきっかけ」という信念のもと、
                    日々チームとともに革新的なソリューションの開発に取り組んでいます。
                  </p>

                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-slate-700 mb-2">主な取引先・パートナー</p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://www.customercloudcorp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition-colors"
                      >
                        Customer Cloud Corp
                      </a>
                      <a
                        href="https://www.propagateinc.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition-colors"
                      >
                        Propagate Inc
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
