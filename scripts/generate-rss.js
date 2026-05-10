/**
 * Generate RSS feeds for all locales (run after vitepress build)
 *
 * Reads frontmatter from docs/{locale}/news/*.md,
 * outputs RSS to docs/.vitepress/dist/{locale}/news/rss.xml
 */

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const siteUrl = 'https://starry2233.github.io/keepxtcopen'

const locales = {
  '':        { title: 'keepxtcopen - 最新消息', desc: '小天才系列设备问题追踪与更新', lang: 'zh-CN' },
  en:        { title: 'keepxtcopen - News', desc: 'Xiaotiancai device issues tracking & updates', lang: 'en' },
  'zh-hk':   { title: 'keepxtcopen - 最新消息', desc: '小天才系列設備問題追蹤與更新', lang: 'zh-HK' },
  id:        { title: 'keepxtcopen - Berita', desc: 'Pelacakan & pembaruan masalah perangkat Xiaotiancai', lang: 'id' },
  ms:        { title: 'keepxtcopen - Berita', desc: 'Pengesanan & kemas kini isu peranti Xiaotiancai', lang: 'ms' },
  th:        { title: 'keepxtcopen - ข่าวสาร', desc: 'ติดตามปัญหาและอัปเดตอุปกรณ์ Xiaotiancai', lang: 'th' },
  vi:        { title: 'keepxtcopen - Tin tức', desc: 'Theo dõi & cập nhật vấn đề thiết bị Xiaotiancai', lang: 'vi' },
  fil:       { title: 'keepxtcopen - Balita', desc: 'Pagsubaybay & mga update sa isyu ng device ng Xiaotiancai', lang: 'fil' },
  lzh:       { title: 'keepxtcopen - 消息', desc: '小天才系列設備問題追蹤與更新', lang: 'lzh' },
  hi:        { title: 'keepxtcopen - समाचार', desc: 'Xiaotiancai डिवाइस समस्याओं पर नज़र रखना और अपडेट', lang: 'hi' },
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!match) return {}
  const fm = {}
  for (const line of match[1].split(/\r?\n/)) {
    const [key, ...rest] = line.split(':')
    if (key && rest.length) {
      fm[key.trim()] = rest.join(':').trim()
    }
  }
  return fm
}

for (const [subdir, cfg] of Object.entries(locales)) {
  const newsDir = resolve(__dirname, '..', 'docs', subdir, 'news')
  const distDir = resolve(__dirname, '..', 'docs', '.vitepress', 'dist', subdir, 'news')
  const prefix = subdir ? `/${subdir}` : ''

  if (!existsSync(newsDir)) {
    console.log(`[rss] skipping ${subdir || '(root)'} — no news/ directory`)
    continue
  }

  const files = readdirSync(newsDir).filter(f => f.endsWith('.md') && f !== 'index.md')
  if (files.length === 0) {
    console.log(`[rss] skipping ${subdir || '(root)'} — no news files`)
    continue
  }

  const articles = files.map(f => {
    const content = readFileSync(resolve(newsDir, f), 'utf-8')
    const fm = parseFrontmatter(content)
    return {
      slug: f.replace(/\.md$/, ''),
      title: fm.title || f,
      date: fm.date || '2000-01-01',
      description: fm.description || '',
    }
  }).sort((a, b) => b.date.localeCompare(a.date))

  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true })
  }

  const rssItems = articles.map(a => `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${siteUrl}${prefix}/news/${a.slug}.html</link>
      <guid>${siteUrl}${prefix}/news/${a.slug}.html</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <description><![CDATA[${a.description}]]></description>
    </item>`).join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${cfg.title}</title>
    <link>${siteUrl}${prefix}/news/</link>
    <description>${cfg.desc}</description>
    <language>${cfg.lang}</language>
    <atom:link href="${siteUrl}${prefix}/news/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`

  writeFileSync(resolve(distDir, 'rss.xml'), rss, 'utf-8')
  console.log(`[rss] generated ${distDir}/rss.xml with ${articles.length} entries`)
}
