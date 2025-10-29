"use client"

import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Potential Labs</h3>
            <p className="text-sm leading-relaxed">
              テクノロジーで、人の可能性をひらく。
              <br />
              不可能を可能にするソリューションを提供します。
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  サービス
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>© {currentYear} Potential Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
