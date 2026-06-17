import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import data from './data'
import Header from './components/Header'
import Navbar from './components/Navbar'
import TutorialPage from './components/TutorialPage'
import NotFound from './components/NotFound'

const firstTopic = Object.values(data)[0]
const firstSub   = Object.values(firstTopic.subs)[0]
const defaultPath = `/${firstTopic.slug}/${firstSub.slug}`

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to={defaultPath} replace />} />
          <Route path="/:topicSlug/:subtopicSlug" element={<TutorialPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
