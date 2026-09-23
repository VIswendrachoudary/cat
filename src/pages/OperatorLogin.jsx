import { useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../App'
import PageWrapper from '../components/PageWrapper'

export default function OperatorLogin() {
  const { navigate } = useApp()
  const [pinVisible, setPinVisible] = useState(false)
  const [operatorId, setOperatorId] = useState('CAT-OP-8842')
  const [pin, setPin] = useState('784912')
  const [authState, setAuthState] = useState('idle')
  const [nfcState, setNfcState] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    if (authState !== 'idle') return
    setAuthState('verifying')
    setTimeout(() => {
      setAuthState('verified')
      setTimeout(() => navigate('pre-check'), 800)
    }, 1200)
  }

  function handleNfc() {
    if (nfcState !== 'idle') return
    setNfcState('scanning')
    setTimeout(() => {
      setNfcState('idle')
      navigate('pre-check')
    }, 2000)
  }

  return (
    <PageWrapper className="w-full min-h-screen bg-surface">
      <main className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-40">
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[600px] h-[600px] rounded-full bg-primary-container/10 blur-3xl -translate-y-12"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="w-[450px] h-[450px] rounded-full bg-surface-container-highest/60 blur-2xl translate-x-32 translate-y-24"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-xl flex flex-col items-center"
        >
          <div className="mb-6 flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              className="w-14 h-14 rounded-xl bg-inverse-surface flex items-center justify-center shadow-md mb-4"
            >
              <svg className="w-8 h-8 text-primary-container" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5zM11 11h2v4h-2zm0 5h2v2h-2z"/>
              </svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="font-[Montserrat] text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Fleet Sync Active &bull; Terminal 04A</span>
            </motion.div>
            <h1 className="font-[Montserrat] text-3xl font-bold text-on-surface tracking-tight">Operator Authentication</h1>
            <p className="text-[15px] text-on-surface-variant max-w-md mt-1.5">Enter your Caterpillar operator ID and secure PIN to verify heavy machine authorization.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full bg-surface-container-lowest rounded-xl shadow-xl p-6 sm:p-8 flex flex-col gap-6"
          >
            <div className="bg-surface-container-low rounded-lg p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-surface-container-highest">
                  <img alt="Operator" className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqtzH10N65dbB3Awv5lSsMRomFy-iylQVKEkG5gy736rLnn_DWGrrL_xenlG8zvd1zVgO6pmJsHvv3JBlKb6Sbt4Vr3IjRlPsj9ymTgew_-F6ShETlYXYGIq4FmzH6LY_GcM4NbwFoC3trRfT7hPxGXalEP1oOR_BncKENMXG7GDC3TFEoWZkFJ4z29-l0ASV9kMwbWBALfdva0R-oRbAi5ZiYuZjf4ZBnL3HwO6FVk4tt8FOJe_TG0w" />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-primary-container rounded-tl-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-[10px] text-on-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-[Montserrat] text-base font-semibold text-on-surface truncate">Sarah Jenkins</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-[Montserrat] text-[9px] font-bold uppercase tracking-wide shrink-0">Level 4</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="material-symbols-outlined text-[15px] text-primary">precision_manufacturing</span>
                    <span className="text-[13px] text-on-surface-variant truncate">CAT 336 Excavator &bull; Unit #104</span>
                  </div>
                </div>
              </div>
              <span className="px-2 py-1 rounded bg-inverse-surface text-primary-container font-[Montserrat] text-[10px] font-bold tracking-wider uppercase">READY</span>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">
                <label className="font-[Montserrat] text-xs font-bold text-on-surface uppercase tracking-wider flex justify-between items-center">
                  <span>Operator ID or Badge Number</span>
                  <span className="text-on-surface-variant font-[Inter] text-[11px] font-normal normal-case">e.g. CAT-OP-8842</span>
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3.5 flex items-center pointer-events-none text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]">badge</span>
                  </div>
                  <input
                    className="w-full h-12 bg-surface-container-low rounded-lg pl-11 pr-4 text-[15px] text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-on-surface transition-all duration-200"
                    placeholder="Enter Operator ID"
                    required
                    value={operatorId}
                    onChange={e => setOperatorId(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="font-[Montserrat] text-xs font-bold text-on-surface uppercase tracking-wider">Security PIN / Passcode</label>
                  <button type="button" className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant hover:text-primary transition-colors">Forgot PIN?</button>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-3.5 flex items-center pointer-events-none text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </div>
                  <input
                    className="w-full h-12 bg-surface-container-low rounded-lg pl-11 pr-12 text-[15px] tracking-widest text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-on-surface transition-all duration-200"
                    maxLength={6}
                    placeholder="••••••"
                    required
                    type={pinVisible ? 'text' : 'password'}
                    value={pin}
                    onChange={e => setPin(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setPinVisible(!pinVisible)}
                    className="absolute right-3.5 w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">{pinVisible ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={authState !== 'idle'}
                  className={`w-full h-14 rounded-lg font-[Montserrat] text-[15px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all duration-300 cursor-pointer ${
                    authState === 'verified'
                      ? 'bg-pass text-white'
                      : authState === 'verifying'
                      ? 'bg-primary-container text-on-surface opacity-90'
                      : 'bg-primary-container hover:bg-primary-fixed text-on-primary-fixed hover:shadow-lg'
                  }`}
                >
                  {authState === 'verifying' && (
                    <>
                      <span className="material-symbols-outlined text-[20px] animate-spin">sync</span>
                      <span>Verifying Machine Interlock...</span>
                    </>
                  )}
                  {authState === 'verified' && (
                    <>
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      <span>Authorization Verified</span>
                    </>
                  )}
                  {authState === 'idle' && (
                    <>
                      <span>Authorize & Enter Worksite</span>
                      <span className="material-symbols-outlined text-[20px] font-bold">arrow_forward</span>
                    </>
                  )}
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleNfc}
                  className="w-full h-12 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-[Montserrat] text-xs font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {nfcState === 'scanning' ? (
                    <>
                      <span className="material-symbols-outlined text-[20px] text-primary animate-pulse">sensors</span>
                      <span>Holding for reader...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px] text-primary">contactless</span>
                      <span>Tap NFC Badge or Biometric Touch</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>

            <div className="pt-2 flex flex-col items-center text-center gap-3">
              <button className="font-[Montserrat] text-xs font-bold text-on-surface-variant hover:text-on-surface transition-colors">
                Forgot Operator ID &bull; Contact Site Supervisor
              </button>
              <div className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-container-low text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                <p className="text-[13px] text-left leading-tight">
                  Authorized heavy machinery personnel only. All logins logged to <span className="font-semibold text-on-surface">Caterpillar Safety Cloud</span>.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center justify-center gap-6 text-on-surface-variant"
          >
            <div className="flex items-center gap-1.5 font-[Montserrat] text-[10px] font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px] text-primary">security</span>
              <span>ISO 13849 PL-d Compliant</span>
            </div>
            <span className="text-surface-container-highest">&bull;</span>
            <div className="flex items-center gap-1.5 font-[Montserrat] text-[10px] font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px] text-primary">cell_tower</span>
              <span>CAN-Bus Telemetry Online</span>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </PageWrapper>
  )
}
