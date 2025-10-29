"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Send } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // ここに実際の送信ロジックを実装
    await new Promise(resolve => setTimeout(resolve, 1000))

    alert("お問い合わせありがとうございます。担当者より折り返しご連絡いたします。")
    setFormData({ name: "", email: "", company: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-50 via-indigo-100/50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-lg mb-4">
            <MessageSquare className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            プロジェクトのご相談、サービスに関するお問い合わせはこちらから
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Form
            </CardTitle>
            <CardDescription>
              以下のフォームに必要事項をご記入の上、送信してください
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="山田太郎"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  会社名
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="株式会社〇〇"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="お問い合わせ内容をご記入ください"
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "送信中..." : "送信する"}
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
