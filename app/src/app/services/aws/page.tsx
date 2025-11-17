"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, Cloud, Shield, Zap, TrendingUp, Users, Award } from "lucide-react"
import Link from "next/link"

export default function AWSServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/20 to-white">
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
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-lg mb-6">
            <Cloud className="h-8 w-8 text-orange-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AWS開発・コンサルティング
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            AWSテクニカルアカウントマネージャ経験を活かした、プロフェッショナルなクラウドソリューション
          </p>
        </div>
      </section>

      {/* TAM Experience Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="h-10 w-10" />
            <h2 className="text-4xl font-bold text-center">AWS TAM経験</h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                AWSテクニカルアカウントマネージャ（TAM）として、エンタープライズ企業のクラウド移行・
                最適化プロジェクトを多数支援。AWS Well-Architected Frameworkに基づいた
                アーキテクチャレビュー、コスト最適化、セキュリティ強化など、幅広い領域で技術支援を提供してきました。
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <Users className="h-8 w-8 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">20+</h3>
                  <p className="text-sm text-white/80">エンタープライズ企業支援実績</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <TrendingUp className="h-8 w-8 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">30%</h3>
                  <p className="text-sm text-white/80">平均コスト削減率</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <Shield className="h-8 w-8 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">100%</h3>
                  <p className="text-sm text-white/80">セキュリティコンプライアンス達成率</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">AWS開発サービス</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Cloud className="h-10 w-10 text-orange-600 mb-4" />
                <CardTitle className="text-2xl">クラウドアーキテクチャ設計</CardTitle>
                <CardDescription>
                  Well-Architected Frameworkに基づいた、スケーラブルで信頼性の高いシステム設計
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>マイクロサービスアーキテクチャ設計</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>サーバーレスアプリケーション開発</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>コンテナオーケストレーション（ECS/EKS）</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="h-10 w-10 text-orange-600 mb-4" />
                <CardTitle className="text-2xl">クラウド移行支援</CardTitle>
                <CardDescription>
                  オンプレミスからクラウドへの安全でスムーズな移行をサポート
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>移行計画策定とリスク評価</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>データベース移行（DMS）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>アプリケーション最適化</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 text-orange-600 mb-4" />
                <CardTitle className="text-2xl">セキュリティ & コンプライアンス</CardTitle>
                <CardDescription>
                  企業要件に対応したセキュアなクラウド環境の構築
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>IAMポリシー設計と権限管理</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>ネットワークセキュリティ（VPC/Security Groups）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>監査ログとコンプライアンス対応</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-orange-600 mb-4" />
                <CardTitle className="text-2xl">コスト最適化</CardTitle>
                <CardDescription>
                  クラウドコストの可視化と継続的な最適化
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>コスト分析とレポーティング</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>リザーブドインスタンス/Savings Plans提案</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>リソース適正化と自動スケーリング</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">対応AWSサービス</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "EC2", "ECS", "EKS", "Lambda", "S3", "RDS", "DynamoDB",
              "CloudFront", "Route 53", "VPC", "IAM", "CloudWatch",
              "SageMaker", "SNS", "SQS", "API Gateway", "Cognito"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AWS開発のご相談はこちら
          </h2>
          <p className="text-lg mb-8 text-orange-50">
            TAM経験を活かした、プロフェッショナルなAWSソリューションをご提案します
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
