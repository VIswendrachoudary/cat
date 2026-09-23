import { useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../App'
import PageWrapper from '../components/PageWrapper'
import FadeIn from '../components/FadeIn'

const CHECKLIST_PASS = [
  { id: 'seatbelt', icon: 'airline_seat_recline_extra', num: '01', cat: 'Cab Interlock', name: 'Seatbelt Status: Fastened', desc: 'Electronic mechanical buckle sensor securely locked. Tension threshold optimal.', badge: 'PASS - SECURED' },
  { id: 'sobriety', icon: 'vital_signs', num: '02', cat: 'Volatile Gas & Pulse Sensor', name: 'Driver Sobriety State: Sober (Biometric Sensor Normal)', desc: 'Cab-mounted infrared breath vapor detection read 0.00% BAC. Heart rate normal (74 bpm).', badge: 'PASS - SOBER' },
  { id: 'alertness', icon: 'visibility', num: '03', cat: 'Neural Vision AI', name: 'Driver Alertness State: Alert & Focused (Eye-Tracking AI active)', desc: 'PERCLOS index 2.1% (Drowsiness threshold >12%). Head orientation tracking center forward.', badge: 'PASS - ALERT' },
  { id: 'activity', icon: 'directions_run', num: '04', cat: 'Pressure & Movement Matrix', name: 'Operator Activity Level: Active Movement Detected', desc: 'Primary joystick micro-input valid. Cab floor kinetic load verified at 78kg continuous.', badge: 'PASS - ACTIVE' },
]

const CHECKLIST_FAIL = {
  seatbelt: { name: 'Seatbelt Status: UNFASTENED', desc: 'Buckle sensor open circuit. Mechanical switch has not engaged. Belt must be secured.', badge: '✕ FAIL - UNFASTENED' },
  alertness: { name: 'Driver Alertness State: DROWSINESS DETECTED', desc: 'PERCLOS index 18.4% (>12% critical threshold). Operator eye closure exceeded 1.8 seconds.', badge: '✕ CRITICAL - DROWSY' },
}

export default function PreCheck() {
  const { navigate } = useApp()
  const [mode, setMode] = useState('pass')
  const [rescanning, setRescanning] = useState(false)

  const isFail = mode === 'fail'

  function handleRescan() {
    setRescanning(true)
    setTimeout(() => {
      setRescanning(false)
      setMode('pass')
    }, 900)
  }

  function getItem(item) {
    if (isFail && CHECKLIST_FAIL[item.id]) {
      return { ...item, ...CHECKLIST_FAIL[item.id], failed: true }
    }
    return { ...item, failed: false }
  }

  return (
    <PageWrapper className="w-full pt-32 bg-surface min-h-screen">
      <div className="max-w-[1080px] w-full mx-auto px-4 md:px-6 lg:px-10 pb-10 flex flex-col gap-6">
        <FadeIn>
          <div className="w-full bg-inverse-surface text-inverse-on-surface rounded-xl p-4 md:p-6 shadow-md relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none select-none">
              <span className="material-symbols-outlined text-[180px] text-primary-container">shield_with_heart</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-primary-container text-on-surface font-[Montserrat] text-[10px] font-extrabold uppercase tracking-wider">Pre-Op Gate</span>
                  <span className="text-on-secondary-fixed-variant font-[Montserrat] text-xs font-bold uppercase tracking-wider">Step 2 of 3</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  <span className="text-primary-container font-[Montserrat] text-xs font-bold uppercase tracking-wider">ML Safety Engine v4.2 Active</span>
                </div>
                <h1 className="font-[Montserrat] text-[30px] font-bold text-inverse-on-surface tracking-tight mt-1">Pre-Operation Safety Verification</h1>
                <p className="text-[15px] text-outline-variant">Machine Designation: <strong className="text-inverse-on-surface font-bold">CAT 336 Heavy Excavator</strong> &bull; Unit #104 &bull; Quarry Sector B</p>
              </div>
              <div className="flex items-center gap-4 shrink-0 bg-on-surface/40 p-2 rounded-lg backdrop-blur-md">
                <div className="w-12 h-12 rounded-lg bg-inverse-surface flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-[Montserrat] text-[10px] font-bold text-outline-variant uppercase">Interlock Status</span>
                  <span className={`font-[Montserrat] text-lg font-bold uppercase ${isFail ? 'text-error' : 'text-primary-container'}`}>
                    {isFail ? 'IGNITION LOCKED' : 'Ready To Authorize'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between bg-surface-container rounded-xl p-2 gap-2 shadow-sm">
            <div className="flex items-center gap-2 px-1">
              <span className="material-symbols-outlined text-tertiary">tune</span>
              <span className="font-[Montserrat] text-base font-semibold text-on-surface">Inspection Sensor State Feed:</span>
            </div>
            <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg">
              <button
                onClick={() => setMode('pass')}
                className={`px-4 py-1 rounded font-[Montserrat] text-base font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  !isFail ? 'bg-inverse-surface text-inverse-on-surface shadow-sm font-bold' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse" />
                Standard (All Pass)
              </button>
              <button
                onClick={() => setMode('fail')}
                className={`px-4 py-1 rounded font-[Montserrat] text-base font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  isFail ? 'bg-error text-on-error shadow-sm font-bold' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-lg">warning</span>
                Simulate Hazard Lockout
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <motion.div
            layout
            className={`w-full rounded-xl p-4 flex items-center justify-between gap-4 transition-all duration-300 shadow-sm ${
              isFail ? 'bg-error-container text-on-error-container' : 'bg-surface-container-lowest'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isFail ? 'bg-error' : 'bg-surface-container'}`}>
                <span className={`material-symbols-outlined text-2xl ${isFail ? 'text-on-error' : 'text-on-surface'}`}>
                  {isFail ? 'block' : 'check_circle'}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-[Montserrat] text-lg font-bold text-on-surface">
                  {isFail ? 'Safety Check Failed: Engine Ignition Interlocked' : 'Safety Check Cleared. Engine start authorization unlocked.'}
                </span>
                <span className="text-[13px] text-on-surface-variant">
                  {isFail
                    ? 'Hardware interlock engaged. Operator must resolve cab violations before engine ignition can be authorized.'
                    : 'All 4 mandatory machine-cab criteria verified. Biometrics synchronized with safety dispatch.'}
                </span>
              </div>
            </div>
            {!isFail && (
              <div className="hidden lg:flex items-center gap-1 px-4 py-1 bg-surface-container rounded-lg">
                <span className="material-symbols-outlined text-tertiary text-sm">wifi</span>
                <span className="font-[Montserrat] text-[10px] font-bold uppercase tracking-wider text-on-surface">100% Signal</span>
              </div>
            )}
          </motion.div>
        </FadeIn>

        <div className="w-full flex flex-col gap-2">
          {CHECKLIST_PASS.map((rawItem, i) => {
            const item = getItem(rawItem)
            return (
              <FadeIn key={item.id} delay={0.2 + i * 0.08}>
                <div className={`w-full bg-surface-container-lowest rounded-xl p-4 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md ${
                  item.failed ? 'border-l-4 border-l-error' : ''
                }`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-3xl text-on-surface">{item.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Mandatory Item {item.num}</span>
                        <span className="text-tertiary">&bull;</span>
                        <span className="font-[Montserrat] text-[10px] font-bold text-tertiary uppercase">{item.cat}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${item.failed ? 'bg-error animate-ping-custom' : 'bg-on-surface'}`} />
                        <h2 className={`font-[Montserrat] text-lg font-bold ${item.failed ? 'text-error' : 'text-on-surface'}`}>{item.name}</h2>
                      </div>
                      <p className="text-[13px] text-on-surface-variant mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-start md:self-center">
                    <span className={`px-4 py-1 rounded-full font-[Montserrat] text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${
                      item.failed ? 'bg-error text-on-error' : 'bg-surface-container-high text-on-surface'
                    }`}>
                      {!item.failed && <span className="material-symbols-outlined text-base">check</span>}
                      {item.badge}
                    </span>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Biometric Telemetry</span>
                <span className="material-symbols-outlined text-on-surface text-lg">ecg_heart</span>
              </div>
              <div className="my-2">
                <div className="flex items-baseline gap-1">
                  <CountUp target={74} className="font-[Montserrat] text-[30px] font-bold text-on-surface" />
                  <span className="font-[Montserrat] text-[10px] font-bold text-tertiary uppercase">BPM Average</span>
                </div>
                <svg className="w-full h-10 mt-1 text-primary" fill="none" viewBox="0 0 200 40">
                  <path className="sparkline-draw" d="M0 25 L30 25 L40 10 L50 35 L60 25 L90 25 L100 8 L110 38 L120 25 L160 25 L170 12 L180 32 L190 25 L200 25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </div>
              <span className="text-[13px] text-on-surface-variant">Baseline variance: -0.4% from standard</span>
            </div>

            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Cab Air Quality & VOC</span>
                <span className="material-symbols-outlined text-on-surface text-lg">air</span>
              </div>
              <div className="my-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-[Montserrat] text-[30px] font-bold text-on-surface">0.00</span>
                  <span className="font-[Montserrat] text-[10px] font-bold text-tertiary uppercase">PPM Volatiles</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-3 mt-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '4%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-inverse-surface h-full rounded-full"
                  />
                </div>
              </div>
              <span className="text-[13px] text-on-surface-variant">Ethanol, CO & VOC sensors clear</span>
            </div>

            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Unit Camera Feeds</span>
                <span className="material-symbols-outlined text-primary text-lg">videocam</span>
              </div>
              <div className="flex items-center gap-2 my-1">
                <div className="w-16 h-16 rounded-lg bg-surface-container overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBujwKUaa7KJ_MO_NeExleVZjMBQobUdyInabRBEImfMvcS4M9LpeeSKq-4fqyEfNkL5WpT2aDlQjuOyanr-oQkeaIkY4HxvNtd7upLnIXvdj6CYfNn_55eqDLLN4S5ZsaHm4r1P27x5UCqP2ZcLY4UY-9UgHiF3Tro5yx19HwoiGS6fAc5lytTJimFn1j0ogQN_5Yz7oe010EXav9Gzfa2Kt_62LYjTFbUivM17RKGFlAqagvp2gZqyA"
                    alt="In-Cab Neural Cam" />
                </div>
                <div className="flex flex-col">
                  <span className="font-[Montserrat] text-base font-semibold text-on-surface">In-Cab Neural Cam</span>
                  <span className="font-[Montserrat] text-[10px] font-bold text-tertiary">30 FPS &bull; Low Latency 5G</span>
                  <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mt-1">Status: Calibrated</span>
                </div>
              </div>
              <span className="text-[13px] text-on-surface-variant">Last hard check: Today, 06:42 AM</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="w-full bg-surface-container-low p-4 md:p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 mt-2 shadow-sm">
            <div className="flex flex-col text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1">
                <span className={`material-symbols-outlined text-lg ${isFail ? 'text-error' : 'text-on-surface'}`}>
                  {isFail ? 'error' : 'cloud_done'}
                </span>
                <span className="font-[Montserrat] text-base font-semibold text-on-surface">
                  {isFail ? 'CRITICAL ALERT: 2 safety criteria compromised. Ignition switch locked out.' : 'All 4 mandatory safety criteria satisfied. Cloud telemetry synced.'}
                </span>
              </div>
              <p className="text-[13px] text-on-surface-variant mt-1">Pre-shift inspection log #CAT-89240 will be permanently locked into site safety ledger upon proceeding.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto shrink-0">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleRescan}
                className="px-6 py-4 rounded-lg font-[Montserrat] text-lg font-bold bg-surface-container-highest text-on-surface hover:bg-surface-container transition-all flex items-center justify-center gap-2 min-h-[56px] shadow-sm cursor-pointer"
              >
                <span className={`material-symbols-outlined text-xl ${rescanning ? 'animate-spin' : ''}`}>refresh</span>
                <span>Re-run Biometric & Seatbelt Scan</span>
              </motion.button>

              <motion.button
                whileTap={isFail ? {} : { scale: 0.95 }}
                onClick={() => !isFail && navigate('main-field-ops')}
                disabled={isFail}
                className={`px-8 py-4 rounded-lg font-[Montserrat] text-lg font-bold flex items-center justify-center gap-2 min-h-[56px] shadow-sm transition-all ${
                  isFail
                    ? 'bg-surface-container-highest text-tertiary cursor-not-allowed opacity-60'
                    : 'bg-primary-container text-on-surface hover:bg-primary-fixed-dim cursor-pointer'
                }`}
              >
                {isFail ? (
                  <>
                    <span className="material-symbols-outlined text-xl">lock</span>
                    <span>Progress Locked by Safety Interlock</span>
                  </>
                ) : (
                  <>
                    <span>Continue to Field Ops</span>
                    <span className="material-symbols-outlined text-xl font-bold">arrow_forward</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="w-full p-4 rounded-xl bg-surface-container text-on-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">gavel</span>
              <div className="flex flex-col">
                <span className="font-[Montserrat] text-[10px] font-bold uppercase tracking-wider text-tertiary">Regulatory Interlock Protocol</span>
                <span className="text-[13px] text-on-surface">If seatbelt unfastened or drowsiness detected, progress is strictly locked with clear red alert text. Engine ignition relay stays offline.</span>
              </div>
            </div>
            <span className="font-[Montserrat] text-[10px] font-bold text-outline px-2 py-1 rounded bg-surface-container-lowest shrink-0 uppercase tracking-widest">OSHA 1926.602 / ISO 5010</span>
          </div>
        </FadeIn>
      </div>
    </PageWrapper>
  )
}

function CountUp({ target, className }) {
  const [val, setVal] = useState(0)
  return (
    <motion.span
      className={className}
      onViewportEnter={() => {
        let start = 0
        const step = () => {
          start += Math.ceil(target / 30)
          if (start >= target) { setVal(target); return }
          setVal(start)
          requestAnimationFrame(step)
        }
        step()
      }}
    >
      {val}
    </motion.span>
  )
}
