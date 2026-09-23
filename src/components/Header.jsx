import { useState } from 'react'
import { useApp } from '../App'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { id: 'pre-check', label: 'Safety Checks' },
  { id: 'main-field-ops', label: 'Field Ops & Tasks' },
]

const ALERTS = [
  { id: 1, text: 'Haul Truck #12 loose gravel in Sector C-4', time: '12m ago', severity: 'warning' },
  { id: 2, text: 'Battery threshold alert: Unit #207 at 18%', time: '34m ago', severity: 'caution' },
  { id: 3, text: 'Speed limit update: Sector A now 15 km/h', time: '1h ago', severity: 'info' },
]

export default function Header() {
  const { currentPage, navigate, safetyCleared } = useApp()
  const [showNotifs, setShowNotifs] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-inverse-surface flex items-center justify-center">
            <svg className="w-6 h-6 text-primary-container" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-[Montserrat] text-xl font-bold tracking-tight text-on-surface uppercase">Field Ops</span>
            <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase tracking-widest hidden sm:inline-block">Caterpillar Fleet Safety</span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-1 p-1 bg-surface-container-low rounded-xl">
          {NAV_ITEMS.map(item => {
            const locked = item.id === 'main-field-ops' && !safetyCleared
            return (
              <button
                key={item.id}
                onClick={() => !locked && navigate(item.id)}
                className={`px-4 py-2 transition-all duration-200 font-[Montserrat] text-base font-semibold rounded-lg flex items-center gap-1.5 ${
                  locked
                    ? 'text-on-surface-variant/50 cursor-not-allowed'
                    : currentPage === item.id
                    ? 'bg-primary-container text-on-surface'
                    : 'text-on-surface-variant hover:text-on-surface cursor-pointer'
                }`}
              >
                {locked && <span className="material-symbols-outlined text-sm">lock</span>}
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setShowNotifs(!showNotifs)}
              className="relative p-2 bg-surface-container-low hover:bg-surface-container-high transition-colors rounded-lg flex items-center justify-center min-w-[48px] min-h-[48px]"
            >
              <span className="material-symbols-outlined text-on-surface">notifications</span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1.5 right-1.5 flex items-center justify-center min-w-[20px] h-[20px] px-1 bg-error text-on-error font-[Montserrat] text-[10px] font-bold rounded-full"
              >
                3
              </motion.span>
            </button>

            <AnimatePresence>
              {showNotifs && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-14 w-80 bg-surface-container-lowest rounded-xl shadow-2xl border border-surface-container-high overflow-hidden z-50"
                >
                  <div className="px-4 py-3 bg-inverse-surface text-inverse-on-surface">
                    <span className="font-[Montserrat] text-xs font-bold uppercase tracking-wider">Active Hazard Alerts</span>
                  </div>
                  {ALERTS.map(alert => (
                    <div key={alert.id} className="px-4 py-3 border-b border-surface-container hover:bg-surface-container-low transition-colors cursor-pointer">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-caution text-lg mt-0.5">warning</span>
                        <div>
                          <p className="text-sm text-on-surface font-medium">{alert.text}</p>
                          <span className="text-xs text-on-surface-variant">{alert.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="px-4 py-2 text-center">
                    <button className="text-xs text-primary font-[Montserrat] font-bold uppercase tracking-wider hover:underline">View All Alerts</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2 bg-surface-container-low p-1 pr-4 rounded-xl min-h-[48px]">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqtzH10N65dbB3Awv5lSsMRomFy-iylQVKEkG5gy736rLnn_DWGrrL_xenlG8zvd1zVgO6pmJsHvv3JBlKb6Sbt4Vr3IjRlPsj9ymTgew_-F6ShETlYXYGIq4FmzH6LY_GcM4NbwFoC3trRfT7hPxGXalEP1oOR_BncKENMXG7GDC3TFEoWZkFJ4z29-l0ASV9kMwbWBALfdva0R-oRbAi5ZiYuZjf4ZBnL3HwO6FVk4tt8FOJe_TG0w" />
            <div className="hidden md:flex flex-col text-left">
              <span className="font-[Montserrat] text-base font-semibold text-on-surface leading-tight">Sarah Jenkins</span>
              <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">CAT 336 Excavator #104</span>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      <div className="w-full bg-primary-container text-on-surface py-1 shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between gap-4 overflow-x-auto">
          {[
            { icon: 'verified_user', text: 'Safety Verified (ML Engine Active)' },
            { icon: 'my_location', text: 'Live Telemetry & GPS' },
            { icon: 'cloud_sync', text: '24/7 Cloud Hazard Sync' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 shrink-0">
              <div className="w-7 h-7 rounded-full bg-inverse-surface flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary-container text-sm">{item.icon}</span>
              </div>
              <span className="font-[Montserrat] text-xs font-bold uppercase tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-surface-container-lowest border-t border-surface-container shadow-lg overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {NAV_ITEMS.map(item => {
                const locked = item.id === 'main-field-ops' && !safetyCleared
                return (
                  <button
                    key={item.id}
                    onClick={() => { if (!locked) { navigate(item.id); setMobileMenuOpen(false) } }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-[Montserrat] text-base font-semibold transition-colors flex items-center gap-2 ${
                      locked
                        ? 'text-on-surface-variant/50 cursor-not-allowed'
                        : currentPage === item.id
                        ? 'bg-primary-container text-on-surface'
                        : 'text-on-surface-variant hover:bg-surface-container-low'
                    }`}
                  >
                    {locked && <span className="material-symbols-outlined text-sm">lock</span>}
                    {item.label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
