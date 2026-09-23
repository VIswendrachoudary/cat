import { useState, createContext, useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Toast from './components/Toast'
import OperatorLogin from './pages/OperatorLogin'
import PreCheck from './pages/PreCheck'
import ModeSelect from './pages/ModeSelect'
import MainFieldOps from './pages/MainFieldOps'

export const AppContext = createContext()

export function useApp() {
  return useContext(AppContext)
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('mode-select')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [safetyCleared, setSafetyCleared] = useState(false)
  const [toast, setToast] = useState(null)

  const showHeader = isLoggedIn && currentPage !== 'mode-select' && currentPage !== 'operator-login'

  function navigate(page) {
    if (page === 'pre-check' || page === 'main-field-ops') setIsLoggedIn(true)
    if (page === 'main-field-ops') setSafetyCleared(true)
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function showToast(title, desc, type = 'info') {
    setToast({ title, desc, type })
    setTimeout(() => setToast(null), 3500)
  }

  const ctx = { currentPage, navigate, showToast, isLoggedIn, safetyCleared }

  return (
    <AppContext.Provider value={ctx}>
      <div className="min-h-screen flex flex-col bg-surface">
        {showHeader && <Header />}
        <AnimatePresence mode="wait">
          {currentPage === 'operator-login' && <OperatorLogin key="login" />}
          {currentPage === 'pre-check' && <PreCheck key="precheck" />}
          {currentPage === 'mode-select' && <ModeSelect key="modeselect" />}
          {currentPage === 'main-field-ops' && <MainFieldOps key="fieldops" />}
        </AnimatePresence>
        {showHeader && <Footer />}
        <Toast toast={toast} onClose={() => setToast(null)} />
      </div>
    </AppContext.Provider>
  )
}
