/**
 * Generate news index pages for all locales
 *
 * Scans docs/{locale}/news/*.md files (excluding index.md),
 * reads frontmatter, and generates docs/{locale}/news/index.md
 * sorted by date descending.
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// locale config: { subdir: { title, description } }
const locales = {
  '':        { title: '最新消息', desc: '按时间倒序排列。' },
  en:        { title: 'News', desc: 'Sorted in reverse chronological order.' },
  'zh-hk':   { title: '最新消息', desc: '按時間倒序排列。' },
  id:        { title: 'Berita', desc: 'Diurutkan dari yang terbaru.' },
  ms:        { title: 'Berita', desc: 'Disusun mengikut urutan kronologi terbalik.' },
  th:        { title: 'ข่าวสาร', desc: 'เรียงลำดับจากล่าสุดไปเก่าสุด' },
  vi:        { title: 'Tin tức', desc: 'Sắp xếp theo thứ tự thời gian đảo ngược.' },
  fil:       { title: 'Balita', desc: 'Inayos ayon sa petsa, pinakabago sa pinakaluma.' },
  lzh:       { title: '消息', desc: '以時爲序，由新至舊。' },
  hi:        { title: 'समाचार', desc: 'नवीनतम से प्राचीनतम क्रम में।' },
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

  if (!existsSync(newsDir)) {
    console.log(`[news] skipping ${subdir || '(root)'} — no news/ directory`)
    continue
  }

  const files = readdirSync(newsDir).filter(f => f.endsWith('.md') && f !== 'index.md')
  if (files.length === 0) {
    console.log(`[news] skipping ${subdir || '(root)'} — no news files`)
    continue
  }

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
    `# ${cfg.title}`,
    '',
    cfg.desc,
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

  const outPath = resolve(newsDir, 'index.md')
  writeFileSync(outPath, lines.join('\n'), 'utf-8')
  console.log(`[news] generated ${outPath} with ${articles.length} entries`)
}
