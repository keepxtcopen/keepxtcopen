/**
 * 生成 RSS 源（在 vitepress build 完成后运行）
 *
 * 从 docs/news/*.md 读取 frontmatter，
 * 输出 RSS 到 docs/.vitepress/dist/news/rss.xml
 */

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const newsDir = resolve(__dirname, '..', 'docs', 'news')
const distDir = resolve(__dirname, '..', 'docs', '.vitepress', 'dist', 'news')
const siteUrl = 'https://starry2233.github.io/keepxtcopen'

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

const files = readdirSync(newsDir).filter(f => f.endsWith('.md') && f !== 'index.md')
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
    <link>${siteUrl}/news/${a.slug}.html</link>
    <guid>${siteUrl}/news/${a.slug}.html</guid>
    <pubDate>${new Date(a.date).toUTCString()}</pubDate>
    <description><![CDATA[${a.description}]]></description>
  </item>`).join('\n')

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>keepxtcopen - 最新消息</title>
    <link>${siteUrl}/news/</link>
    <description>小天才系列设备问题追踪与更新</description>
    <language>zh-CN</language>
    <atom:link href="${siteUrl}/news/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`

writeFileSync(resolve(distDir, 'rss.xml'), rss, 'utf-8')
console.log(`[rss] generated rss.xml at ${resolve(distDir, 'rss.xml')}`)
