"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, Rocket, Video, TrendingUp, Globe, Award, Sparkles } from "lucide-react"
import Link from "next/link"

export default function BytePlusServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white">
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
          <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-lg mb-6">
            <Rocket className="h-8 w-8 text-purple-600" />
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="h-4 w-4" />
            日本初のBytePlus開発実績
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            BytePlus開発サービス
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            TikTokを支える先進テクノロジーを活用した、次世代の動画・コンテンツプラットフォーム開発
          </p>
        </div>
      </section>

      {/* Japan First Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Globe className="h-10 w-10" />
            <h2 className="text-4xl font-bold text-center">日本初の実績</h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                2023年、日本で初めてBytePlus（ByteDanceのエンタープライズ向けソリューション）を活用した
                大規模動画配信プラットフォームの開発を実現。TikTokと同じ技術スタックを使用し、
                高品質な動画配信・AIレコメンデーション・リアルタイム分析を統合したプラットフォームを構築しました。
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <Video className="h-8 w-8 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">1,000万+</h3>
                  <p className="text-sm text-white/80">月間動画配信数</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <TrendingUp className="h-8 w-8 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">50%</h3>
                  <p className="text-sm text-white/80">エンゲージメント向上</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <Sparkles className="h-8 w-8 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">99.9%</h3>
                  <p className="text-sm text-white/80">サービス稼働率</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">開発事例</h2>

          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Video className="h-6 w-6" />
                <CardTitle className="text-2xl">次世代動画配信プラットフォーム</CardTitle>
              </div>
              <CardDescription className="text-purple-50 text-base">
                BytePlusを活用した、AIレコメンデーション搭載の動画SNS
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">実装した機能</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">高品質動画エンコーディング & 配信</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">AIによるパーソナライズドレコメンデーション</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">リアルタイムコメント・いいね機能</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">コンテンツモデレーション（AI）</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">達成した成果</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">日本初のBytePlus導入事例</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">月間1,000万動画配信を実現</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">ユーザーエンゲージメント50%向上</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">99.9%のサービス稼働率を維持</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold mb-4">技術スタック</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    BytePlus VOD
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    BytePlus Recommend
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    BytePlus Analytics
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    React Native
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    Node.js
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BytePlus Services */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">BytePlus開発サービス</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Video className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle>動画配信プラットフォーム</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  高品質な動画エンコーディング・配信・管理を実現する、エンタープライズグレードのプラットフォーム開発
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle>AIレコメンデーション</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  TikTokと同じAI技術を活用した、パーソナライズドコンテンツレコメンデーション実装
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle>リアルタイム分析</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  ユーザー行動・エンゲージメント・コンテンツパフォーマンスのリアルタイム分析基盤構築
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why BytePlus */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">BytePlusを選ぶ理由</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-6 w-6 text-purple-600" />
                  TikTokと同じ技術スタック
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  世界中で使われているTikTokと同じインフラ・AI技術を活用できます
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-purple-600" />
                  グローバル展開に最適
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  世界各地のCDNとデータセンターにより、グローバルな動画配信を実現
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            BytePlus開発のご相談はこちら
          </h2>
          <p className="text-lg mb-8 text-purple-50">
            日本初の実績を持つ、BytePlusのプロフェッショナルがサポートします
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
