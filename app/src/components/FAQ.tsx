"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function FAQ() {
  const faqs = [
    {
      question: "どのような開発案件に対応していますか？",
      answer: "AI、AWS、BytePlusを活用したクラウドアプリケーション開発、データパイプライン構築、機械学習モデルの実装、音楽関連のテクノロジーソリューションなど、幅広い案件に対応しています。お客様の課題に応じて最適なソリューションをご提案します。"
    },
    {
      question: "開発期間と費用の目安を教えてください",
      answer: "プロジェクトの規模や要件により異なりますが、小規模なMVP開発で1〜2ヶ月、中規模システムで3〜6ヶ月が目安です。まずはお気軽にご相談ください。初回のヒアリングとお見積もりは無料で対応いたします。"
    },
    {
      question: "既存システムの改修やリプレイスも可能ですか？",
      answer: "はい、可能です。レガシーシステムのモダナイゼーション、クラウド移行、パフォーマンス改善など、既存システムに関する様々な課題に対応しています。現状分析から最適な移行計画のご提案まで、ワンストップでサポートします。"
    },
    {
      question: "開発後のサポートは提供していますか？",
      answer: "はい、保守・運用サポートも提供しています。システム監視、定期的なメンテナンス、機能追加、技術サポートなど、お客様のニーズに応じた柔軟なサポートプランをご用意しています。"
    },
    {
      question: "遠隔地からでも依頼できますか？",
      answer: "はい、リモートでの開発に完全対応しています。オンラインミーティングやチャットツールを活用し、全国どこからでもスムーズにプロジェクトを進めることができます。必要に応じて対面でのミーティングも可能です。"
    },
    {
      question: "技術選定の相談にも乗っていただけますか？",
      answer: "はい、喜んでご相談に乗ります。お客様のビジネス要件、予算、スケジュールなどを総合的に考慮し、最適な技術スタックをご提案いたします。AWS、BytePlus、各種AIサービスなど、豊富な選択肢からベストソリューションを選定します。"
    }
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-amber-100 rounded-lg mb-4">
            <HelpCircle className="h-6 w-6 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            よくあるご質問
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            お客様からよくいただくご質問をまとめました
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-6 bg-slate-50 rounded-lg">
          <p className="text-slate-700 mb-4">
            その他のご質問がございましたら、お気軽にお問い合わせください。
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  )
}
