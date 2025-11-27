import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HotWorkshop from './pages/HotWorkshop'
import PersonalSignWorkshop from './pages/PersonalSign'
import CreativeSquare from './pages/CreativeSquare'
import WordsClan from './pages/WordsClan'
import FloatingStars from './components/FloatingStars'
import DesignGuide from './pages/DesignGuide'
import Feedback from './pages/Feedback'
import LoadingDemo from './pages/LoadingDemo'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-dark relative">
        <FloatingStars />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hot-workshop" element={<HotWorkshop />} />
            <Route path="/personal-sign" element={<PersonalSignWorkshop />} />
            <Route path="/creative-square" element={<CreativeSquare />} />
            <Route path="/words-clan" element={<WordsClan />} />
            <Route path="/design" element={<DesignGuide />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/loading-demo" element={<LoadingDemo />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
