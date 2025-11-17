"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, Sparkles, Building2, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function AIServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Header */}
      <header className="py-6 px-6 border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              トップページに戻る
            </Button>
          </Link>
          <span className="text-2xl font-bold">Potential Labs</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-6">
            <Sparkles className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI開発サービス
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            機械学習とAIテクノロジーを活用し、ビジネスの可能性を最大化します
          </p>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">開発事例</h2>

          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="h-6 w-6" />
                <CardTitle className="text-2xl">富山県 民泊管理システム</CardTitle>
              </div>
              <CardDescription className="text-blue-50 text-base">
                AIを活用した業務効率化と収益最適化プラットフォーム
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    プロジェクト概要
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    富山県内の民泊事業者様向けに、予約管理・売上分析・動的価格設定を統合した
                    AIベースの管理システムを開発。複数の予約チャネルを一元管理し、
                    業務効率を大幅に改善しました。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    達成した成果
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">予約管理工数を70%削減</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">AI価格最適化により平均収益15%向上</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">複数チャネルの在庫を自動同期</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold mb-4">技術スタック</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Python
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    TensorFlow
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    scikit-learn
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    AWS SageMaker
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    React
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Next.js
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our AI Services */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">AI開発サービス内容</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>機械学習モデル開発</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  予測・分類・レコメンデーションなど、ビジネス課題に応じたカスタムAIモデルを開発
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>データ分析・可視化</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  膨大なデータから価値ある洞察を抽出し、意思決定を支援
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI基盤構築</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  AWS SageMaker等を活用した、スケーラブルなAI運用基盤の構築
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI開発のご相談はこちら
          </h2>
          <p className="text-lg mb-8 text-blue-50">
            貴社のビジネス課題に最適なAIソリューションをご提案します
          </p>
          <Link href="/#contact">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              無料相談を申し込む
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
