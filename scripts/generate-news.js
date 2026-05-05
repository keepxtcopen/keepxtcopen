/**
 * 生成新闻索引页
 *
 * 扫描 docs/news/ 下所有 .md 文件（排除 index.md），
 * 读取 frontmatter，按日期倒序生成 docs/news/index.md
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const newsDir = resolve(__dirname, '..', 'docs', 'news')

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/)
  if (!match) return {}
  const fm = {}
  for (const line of match[1].split('\n')) {
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
    title: fm.title || f.replace(/\.md$/, ''),
    date: fm.date || '2000-01-01',
    description: fm.description || '',
  }
}).sort((a, b) => b.date.localeCompare(a.date))

const lines = [
  '# 最新消息',
  '',
  '按时间倒序排列。',
  '',
]

for (const a of articles) {
  lines.push(`## ${a.date} — [${a.title}](./${a.slug})`)
  if (a.description) {
    lines.push('')
    lines.push(a.description)
  }
  lines.push('')
  lines.push('---')
  lines.push('')
}

writeFileSync(resolve(newsDir, 'index.md'), lines.join('\n'), 'utf-8')
console.log(`[news] generated index.md with ${articles.length} entries`)
