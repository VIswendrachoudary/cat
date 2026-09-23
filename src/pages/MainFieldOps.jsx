import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../App'
import PageWrapper from '../components/PageWrapper'
import FadeIn from '../components/FadeIn'

export default function MainFieldOps() {
  const { showToast } = useApp()
  const [proximityVisible, setProximityVisible] = useState(true)
  const [routeToast, setRouteToast] = useState(null)
  const [task1Status, setTask1Status] = useState('in-progress')
  const [task2Status, setTask2Status] = useState('pending')

  function switchRoute(dest) {
    setRouteToast(`Mission Route switched to: ${dest}. Recalculating path...`)
    setTimeout(() => setRouteToast(null), 3500)
  }

  function handleMarkComplete() {
    setTask1Status('completed')
    showToast('Task Completed', 'Mission #409 marked as complete. Logged to safety ledger.', 'engine')
  }

  function handleUpdateTask() {
    showToast('Task Updated', 'Mission #409 progress notes saved to dispatch cloud.', 'info')
  }

  function handleStartTask() {
    setTask2Status('in-progress')
    showToast('Task Started', 'Mission #410 Rock Sorting & Stockpile Loading is now active.', 'engine')
  }

  return (
    <PageWrapper className="w-full pt-32 bg-surface min-h-screen">
      <div className="flex flex-col w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 pb-10 space-y-6">

        <FadeIn>
          <section className="w-full bg-primary-container text-on-surface rounded-xl p-4 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-2">
              <div className="w-10 h-10 rounded-lg bg-inverse-surface text-primary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-[Montserrat] text-[10px] font-bold uppercase tracking-widest bg-inverse-surface text-primary-container px-1.5 py-0.5 rounded">Site Broadcast</span>
                  <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase">12m ago &bull; Sector C-4</span>
                </div>
                <p className="font-[Montserrat] text-base font-semibold text-on-surface mt-0.5">
                  SITE HAZARD ALERT: Haul Truck #12 reported loose gravel obstacle in Sector C-4. Proceed with caution.
                </p>
              </div>
            </div>
            <div className="shrink-0 bg-surface-container-lowest/80 backdrop-blur rounded-lg px-4 py-1 flex items-center gap-2 text-on-surface">
              <span className="w-2.5 h-2.5 rounded-full bg-pass animate-pulse" />
              <span className="font-[Montserrat] text-xs font-bold uppercase tracking-wider">
                Your Vehicle: <strong>Clear</strong> &bull; Driving: <strong>Normal</strong> &bull; Speed: <strong>14 km/h</strong>
              </span>
            </div>
          </section>
        </FadeIn>

        <AnimatePresence>
          {proximityVisible && (
            <motion.section
              initial={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0, padding: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-surface-container-lowest rounded-xl p-4 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-danger-bg text-danger flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>farsight_digital</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="font-[Montserrat] text-[10px] font-bold text-danger uppercase tracking-widest">Rear Hazard Buffer</span>
                    <span className="text-danger font-[Montserrat] text-[10px] font-bold uppercase">&bull; Active Tracking</span>
                  </div>
                  <p className="font-[Montserrat] text-lg font-bold text-on-surface tracking-tight truncate">
                    PROXIMITY WARNING: Service Van detected 18 meters to Rear-Left. Maintain safe clearance.
                  </p>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setProximityVisible(false)}
                className="min-h-[48px] px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-[Montserrat] text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
              >
                Acknowledge & Dismiss
              </motion.button>
            </motion.section>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="lg:col-span-7 flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-primary-container rounded-full" />
                <h2 className="font-[Montserrat] text-xl font-bold text-on-surface uppercase tracking-tight">Assigned Quarry Tasks</h2>
              </div>
              <span className="font-[Montserrat] text-[10px] font-bold uppercase tracking-wider bg-surface-container-high px-2 py-1 rounded text-on-surface">3 Scheduled Today</span>
            </div>

            <FadeIn delay={0.1}>
              <article className="bg-surface-container-lowest rounded-xl p-4 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <span className={`font-[Montserrat] text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                        task1Status === 'completed' ? 'bg-pass-bg text-pass' : 'bg-caution-bg text-caution'
                      }`}>
                        {task1Status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                      <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase">Mission #409</span>
                    </div>
                    <h3 className="font-[Montserrat] text-xl font-bold text-on-surface">Trench Excavation - Pipeline Trench Sector B</h3>
                    <p className="text-[13px] text-on-surface-variant">ML Model: Skill Level: Expert &bull; Weather: Dry 22&deg;C &bull; Soil: Heavy Clay</p>
                  </div>
                  <div className="text-left sm:text-right shrink-0 bg-surface-container-low p-1 rounded-lg">
                    <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase block">Elapsed / ML Est</span>
                    <span className="font-[Montserrat] text-lg font-bold text-on-surface">28 mins / 45 mins</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center font-[Montserrat] text-[10px] font-bold text-on-surface">
                    <span>Progress Complete</span>
                    <span>{task1Status === 'completed' ? '100%' : '62%'}</span>
                  </div>
                  <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: task1Status === 'completed' ? '100%' : '62%' }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className={`h-full rounded-full ${task1Status === 'completed' ? 'bg-pass' : 'bg-primary-container'}`}
                    />
                  </div>
                </div>
                {task1Status !== 'completed' && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <motion.button whileTap={{ scale: 0.95 }} onClick={handleUpdateTask}
                      className="min-h-[52px] px-6 bg-primary-container hover:bg-primary-fixed-dim text-on-surface font-[Montserrat] text-[15px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-lg">edit_note</span>Update Task
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.95 }} onClick={handleMarkComplete}
                      className="min-h-[52px] px-6 bg-inverse-surface hover:bg-black text-inverse-on-surface font-[Montserrat] text-[15px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-lg">check_circle</span>Mark Complete
                    </motion.button>
                  </div>
                )}
              </article>
            </FadeIn>

            <FadeIn delay={0.2}>
              <article className="bg-surface-container-lowest rounded-xl p-4 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <span className={`font-[Montserrat] text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                        task2Status === 'in-progress' ? 'bg-caution-bg text-caution' : 'bg-surface-container-high text-on-surface'
                      }`}>
                        {task2Status === 'in-progress' ? 'In Progress' : 'Pending'}
                      </span>
                      <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase">Mission #410</span>
                    </div>
                    <h3 className="font-[Montserrat] text-xl font-bold text-on-surface">Rock Sorting & Stockpile Loading</h3>
                    <p className="text-[13px] text-on-surface-variant">Zone: Quarry Sector C North Pit &bull; Haul Dumpers: 3 Allocated</p>
                  </div>
                  <div className="text-left sm:text-right shrink-0 bg-surface-container-low p-1 rounded-lg">
                    <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase block">ML Estimated Time</span>
                    <span className="font-[Montserrat] text-lg font-bold text-on-surface">1h 10m</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[13px] text-on-surface-variant">
                    {task2Status === 'in-progress' ? 'Task is now active' : 'Awaiting completion of Trench B'}
                  </span>
                  {task2Status !== 'in-progress' && (
                    <motion.button whileTap={{ scale: 0.95 }} onClick={handleStartTask}
                      className="min-h-[52px] px-6 bg-surface-container hover:bg-surface-container-high text-on-surface font-[Montserrat] text-[15px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-lg">play_arrow</span>Start Task
                    </motion.button>
                  )}
                </div>
              </article>
            </FadeIn>

            <FadeIn delay={0.3}>
              <article className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <span className="font-[Montserrat] text-[10px] font-bold bg-pass-bg text-pass px-2 py-0.5 rounded uppercase flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">done</span>Completed
                    </span>
                    <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase">Pre-Shift Routine</span>
                  </div>
                  <h3 className="font-[Montserrat] text-lg font-bold text-on-surface">Daily Machine Grease & Track Inspection</h3>
                  <p className="text-[13px] text-pass font-semibold">&checkmark; Done in 18 mins (Est: 20 mins)</p>
                </div>
                <span className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase bg-surface-container-low px-4 py-1 rounded-md shrink-0">Signed off: 07:15 AM</span>
              </article>
            </FadeIn>
          </section>

          <div className="lg:col-span-5 flex flex-col space-y-6">
            <FadeIn delay={0.15}>
              <section className="bg-surface-container-lowest rounded-xl p-4 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-pass rounded-full" />
                    <h2 className="font-[Montserrat] text-xl font-bold text-on-surface uppercase tracking-tight">Safety Predictions</h2>
                  </div>
                  <span className="font-[Montserrat] text-[10px] font-bold uppercase bg-pass-bg text-pass px-2 py-1 rounded">100% Compliant</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Driving Behavior', status: '✓ Normal', desc: 'Smooth steering, zero reckless acceleration recorded in past 4 hours.' },
                    { label: 'Alertness / Sobriety', status: '✓ Pass (100% Alert)', desc: 'Cab camera eye-tracking confirms zero signs of micro-sleep or fatigue.' },
                    { label: 'Seatbelt State', status: '✓ Latched', desc: 'Continuous harness engagement verified by pressure telemetry.' },
                  ].map((row, i) => (
                    <div key={i} className="p-2 bg-surface-container-low rounded-lg space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="font-[Montserrat] text-xs font-bold text-on-surface-variant uppercase">{row.label}</span>
                        <span className="font-[Montserrat] text-[10px] font-bold text-pass uppercase">{row.status}</span>
                      </div>
                      <p className="text-[13px] text-on-surface">{row.desc}</p>
                    </div>
                  ))}
                  <div className="p-2 bg-surface-container rounded-lg space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="font-[Montserrat] text-xs font-bold text-on-surface-variant uppercase">Zone Safety Rule</span>
                      <span className="font-[Montserrat] text-[10px] font-bold text-on-surface uppercase">Sector B Policy</span>
                    </div>
                    <p className="text-[13px] text-on-surface">Quarry Sector B speed limit: 20 km/h. High-vis PPE required.</p>
                  </div>
                </div>
              </section>
            </FadeIn>

          </div>
        </div>

        <FadeIn delay={0.35}>
          <section className="w-full bg-surface-container-lowest rounded-xl p-4 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-primary-container rounded-full" />
                  <h2 className="font-[Montserrat] text-xl font-bold text-on-surface uppercase tracking-tight">GPS & 3D Site Map</h2>
                </div>
                <p className="text-[13px] text-on-surface-variant mt-0.5">Tap any task pin on the map to switch active mission route.</p>
              </div>
              <div className="flex items-center gap-1 bg-surface-container px-4 py-1 rounded-lg self-start sm:self-auto">
                <span className="material-symbols-outlined text-sm text-on-surface">layers</span>
                <span className="font-[Montserrat] text-[10px] font-bold text-on-surface uppercase">Layer: 3D Topography Mesh Active</span>
              </div>
            </div>

            <div className="relative w-full h-[440px] rounded-xl overflow-hidden bg-surface-container-high flex items-center justify-center select-none">
              <div className="absolute inset-0 w-full h-full opacity-60 bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxOqNemtxm_4TSL5-qbS1dKMcq933PG6xgBN_TNKPmG3VCWAb9I461PccNN0TyVhAFRUWeVDEpde79-j0zS5_9ZW41RD7hxP0wtLHr3oiBN3pkbxRLI3vvJx7rYre5i4QlddeM1fkDPInsMhYNE4KdWz609ZXxo9GR-eQklJncVKqIpldyjkitdcpZT3LPLyoshpbyfAy8XbABOapFoyXD-319ng2SS82GKPYGlKQj8zXGRL-3oxU7zQ')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer"
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-12 h-12 rounded-full bg-primary-container/40 animate-ping-custom" />
                  <div className="w-10 h-10 rounded-xl bg-inverse-surface text-primary-container flex items-center justify-center shadow-lg border-2 border-primary-container">
                    <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
                  </div>
                </div>
                <div className="mt-2 px-3 py-1 rounded-md bg-inverse-surface text-primary-container font-[Montserrat] text-[10px] font-bold uppercase shadow-md whitespace-nowrap">
                  You (CAT 336 #104)
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={() => switchRoute('Trench B')}
                className="absolute left-2/3 top-1/3 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-container text-on-surface flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="font-[Montserrat] text-base font-bold">1</span>
                </div>
                <div className="mt-1.5 px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-[Montserrat] text-[10px] font-bold uppercase shadow-md border border-outline-variant/30 text-center">
                  Trench B &bull; Tap to Navigate
                  <span className="block text-[9px] text-primary font-normal">Active Objective (62%)</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={() => switchRoute('Rock Quarry #4')}
                className="absolute right-1/4 bottom-1/4 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-surface-container-lowest text-on-surface flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="font-[Montserrat] text-base font-bold">2</span>
                </div>
                <div className="mt-1.5 px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-[Montserrat] text-[10px] font-bold uppercase shadow-md border border-outline-variant/30 text-center">
                  Rock Quarry #4
                  <span className="block text-[9px] text-on-surface-variant font-normal">Pending Next</span>
                </div>
              </motion.div>

              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1 bg-inverse-surface/90 backdrop-blur text-inverse-on-surface px-4 py-1 rounded-lg font-[Montserrat] text-[10px] font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-primary-container" />
                <span>Elevation: +342m &bull; Slope: 4.2&deg; &bull; GNSS RTK Fix: Solid</span>
              </div>
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1">
                <button className="min-w-[48px] min-h-[48px] bg-surface-container-lowest text-on-surface rounded-lg shadow-md flex items-center justify-center hover:bg-surface-container-high transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">my_location</span>
                </button>
                <button className="min-w-[48px] min-h-[48px] bg-surface-container-lowest text-on-surface rounded-lg shadow-md flex items-center justify-center hover:bg-surface-container-high transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">3d_rotation</span>
                </button>
              </div>
            </div>

            <AnimatePresence>
              {routeToast && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="w-full bg-inverse-surface text-inverse-on-surface rounded-lg p-2 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-container">navigation</span>
                    <span className="font-[Montserrat] text-xs font-bold uppercase">{routeToast}</span>
                  </div>
                  <button onClick={() => setRouteToast(null)} className="font-[Montserrat] text-[10px] font-bold text-primary-container uppercase underline p-1 cursor-pointer">Dismiss</button>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </FadeIn>
      </div>
    </PageWrapper>
  )
}
