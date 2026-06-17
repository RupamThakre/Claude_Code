import { useState } from 'react'
import { useParams } from 'react-router-dom'
import data, { sidebarCategories } from '../data'
import Sidebar from './Sidebar'
import NotFound from './NotFound'

const allData = { ...data, ...sidebarCategories }

function SectionRenderer({ sections }) {
  return (
    <div className="sections-body">
      {sections.map((sec, i) => {
        switch (sec.type) {
          case 'heading':
            return sec.level === 2
              ? <h2 key={i} className="section-h2">{sec.text}</h2>
              : <h3 key={i} className="section-h3">{sec.text}</h3>

          case 'paragraph':
            return <p key={i} className="section-para">{sec.text}</p>

          case 'code':
            return (
              <pre key={i} className="code-block">
                <code>{sec.text}</code>
              </pre>
            )

          case 'link':
            return (
              <p key={i} className="section-link-line">
                <a href={sec.href} target="_blank" rel="noopener noreferrer" className="section-link">
                  {sec.text}
                </a>
              </p>
            )

          case 'list':
            return (
              <ul key={i} className="section-list">
                {sec.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )

          case 'table':
            return (
              <div key={i} className="intro-table-wrap">
                <table className="intro-table">
                  {sec.headers && (
                    <thead>
                      <tr>
                        {sec.headers.map((h, j) => <th key={j}>{h}</th>)}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {sec.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k} className={k === 0 ? 'intro-table__topic' : ''}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )

          case 'image':
            return <SectionImage key={i} src={sec.src} alt={sec.alt} />

          default:
            return null
        }
      })}
    </div>
  )
}

function SectionImage({ src, alt }) {
  const [missing, setMissing] = useState(false)
  return (
    <figure className="section-figure">
      {missing ? (
        <div className="section-img-placeholder">
          <span className="section-img-placeholder__icon">🖼</span>
          <span className="section-img-placeholder__text">{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="section-img"
          onError={() => setMissing(true)}
        />
      )}
      <figcaption className="section-figcaption">{alt}</figcaption>
    </figure>
  )
}

export default function TutorialPage() {
  const { topicSlug, subtopicSlug } = useParams()

  const topicEntry = Object.entries(allData).find(([, t]) => t.slug === topicSlug)
  if (!topicEntry) return <NotFound />

  const [topicName, topic] = topicEntry

  const subEntry = Object.entries(topic.subs).find(([, s]) => s.slug === subtopicSlug)
  if (!subEntry) return <NotFound />

  const [subName, sub] = subEntry

  return (
    <div className="body-layout">
      <Sidebar
        topicSlug={topicSlug}
        subtopicSlug={subtopicSlug}
      />

      <main className="content-panel">
        <p className="breadcrumb" aria-label="breadcrumb">
          <span>{topicName}</span>
          <span className="breadcrumb-sep" aria-hidden="true"> › </span>
          <span>{subName}</span>
        </p>

        <h1 className="content-title">{sub.title}</h1>

        {sub.sections ? (
          <SectionRenderer sections={sub.sections} />
        ) : (
          <>
            {sub.body && (
              <div className="content-body">
                {sub.body.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            {sub.table && (
              <div className="intro-table-wrap">
                <table className="intro-table">
                  <thead>
                    <tr>
                      <th>Topic</th>
                      <th>Problem</th>
                      <th>Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sub.table.map((row, i) => (
                      <tr key={i}>
                        <td className="intro-table__topic">{row.topic}</td>
                        <td>{row.problem}</td>
                        <td>{row.solution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {sub.example && (
              <pre className="code-block"><code>{sub.example}</code></pre>
            )}
          </>
        )}
      </main>
    </div>
  )
}
