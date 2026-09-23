import { motion } from 'framer-motion'
import { useApp } from '../App'
import PageWrapper from '../components/PageWrapper'
import FadeIn from '../components/FadeIn'

export default function ModeSelect() {
  const { navigate, showToast } = useApp()

  function handleSimulator() {
    showToast('Virtual Simulator Selected', 'Directing to Operator Authentication...', 'info')
    setTimeout(() => navigate('operator-login'), 1400)
  }

  function handleStartEngine() {
    showToast('Ignition Relay Requested', 'Directing to Operator Biometric Login...', 'engine')
    setTimeout(() => navigate('operator-login'), 1400)
  }

  return (
    <PageWrapper className="w-full pt-8 bg-surface min-h-screen">
      <div className="max-w-[1280px] mx-auto w-full px-4 md:px-6 lg:px-10 py-4 md:py-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-high mb-2">
              <span className="material-symbols-outlined text-primary text-base">shield</span>
              <span className="font-[Montserrat] text-xs font-bold text-on-surface uppercase tracking-widest">Step 01 &bull; Select Operating Mode</span>
            </div>
            <h1 className="font-[Montserrat] text-3xl md:text-[40px] font-extrabold text-on-surface uppercase tracking-tight">Select Operational Mode</h1>
            <p className="text-lg text-on-surface-variant mt-2 max-w-2xl mx-auto">
              Choose between virtual simulated training or authorized live worksite engine ignition for CAT 336 Excavator #104.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10">
          <FadeIn delay={0.2} className="lg:col-span-5">
            <div className="h-full flex flex-col justify-between bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-surface-container-highest" />
              <div>
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6 bg-surface-container">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpf-mlOFpbCPRmpCFUU43JmshR7zDEN1zKt-tXTn0Udu11E_YxFR1RhMqFGSRfeZDJinR9rABW3QuHdpFVCPjnDa_IMSbCrzdLgqT8vrb6txNGM7vqRwiC3DjvaV5sPedjiE_JtnLBoe1mY9ZLJH7AneYcVVBwp2gfJXC0X8uVekbwDuIvGt_6EopAMHMG_UpnfgPPT0BcYM1xW5almV4L02zvR4WZkToNmXJm-lTExPWBkqeRwXLTdA"
                    alt="Training Simulator" />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-inverse-surface/90 backdrop-blur-sm text-surface-bright">
                    <span className="material-symbols-outlined text-sm text-primary-fixed-dim">sports_esports</span>
                    <span className="font-[Montserrat] text-[10px] font-bold uppercase tracking-widest">Physics Engine v4.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-1 rounded font-[Montserrat] text-[10px] font-bold uppercase tracking-wider bg-surface-container-high text-on-surface-variant">VIRTUAL ENVIRONMENT</span>
                  <span className="flex items-center gap-1 text-on-surface-variant font-[Montserrat] text-[10px] font-bold">
                    <span className="material-symbols-outlined text-sm">lock_reset</span>Zero Penalty
                  </span>
                </div>
                <h2 className="font-[Montserrat] text-xl font-bold text-on-surface uppercase tracking-tight mb-1">Practice Simulator</h2>
                <p className="text-[15px] text-on-surface-variant mb-4">
                  Practice your upcoming quarry hauling mission in a risk-free 3D physics simulator. Test obstacle avoidance and machinery response with zero equipment wear.
                </p>
                <div className="p-2 bg-surface-container-low rounded-lg mb-6">
                  <div className="flex items-center gap-2 text-on-surface-variant text-[13px]">
                    <span className="material-symbols-outlined text-base text-primary">speed</span>
                    <span><strong className="text-on-surface">Difficulty:</strong> Intermediate</span>
                    <span className="text-surface-dim">&bull;</span>
                    <span><strong className="text-on-surface">Weather:</strong> Clear</span>
                    <span className="text-surface-dim">&bull;</span>
                    <span><strong className="text-on-surface">Est. run:</strong> 15 mins</span>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={handleSimulator}
                  className="w-full min-h-[56px] px-6 py-4 rounded-lg bg-surface-container-high hover:bg-surface-container-highest active:bg-surface-dim text-on-surface font-[Montserrat] text-[15px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">play_circle</span>
                  <span>Launch Simulator Mission (Practice)</span>
                </motion.button>
                <p className="text-[13px] text-on-surface-variant text-center mt-1">No machine hours logged &bull; Safe training credit</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="lg:col-span-7">
            <div className="h-full flex flex-col justify-between bg-inverse-surface text-inverse-on-surface rounded-xl p-6 md:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-container" />
              <div>
                <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden mb-6 bg-inverse-surface">
                  <img className="w-full h-full object-cover opacity-90"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNetKnZWrrUElXIovw1zNrEDUONjwP6yS-g6scTvZ0EeDpnmDnLFHal367AYwKFWbEN9s5B5WtKrj0Wqawdk2DkgBUtqFEBI2iP_VDoeZHBTVcbr9F2rMLrBsmY9M3LiT9KUf4-28DDAGZ-kJc39hG9J69giL_0czg2kCqVJMddNoUm6fGCW1nDAIYvAT42kJsjiOtjM2mvxZOH-Rp-vdsKDiovCcGJdqOjn0qWA2U_GRsXb-kNQ0M9g"
                    alt="Live Worksite" />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-primary-container text-on-primary-container font-[Montserrat] text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                      <span className="material-symbols-outlined text-sm font-bold">verified</span>
                      LIVE OPERATIONS &bull; VERIFIED
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-surface-bright">
                    <div className="flex items-center gap-2 bg-inverse-surface/90 px-3 py-1.5 rounded backdrop-blur-md">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse" />
                      <span className="font-[Montserrat] text-[10px] font-bold uppercase tracking-wider text-surface-container-lowest">Machine Armed & Synced</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1 font-[Montserrat] text-[10px] font-bold uppercase tracking-wider text-surface-dim">
                      <span className="material-symbols-outlined text-sm text-primary-fixed-dim">verified_user</span>
                      Operator Sarah Jenkins
                    </div>
                  </div>
                </div>
                <h2 className="font-[Montserrat] text-[30px] font-bold text-surface-container-lowest uppercase tracking-tight mb-1">Start Live Worksite Engine</h2>
                <p className="text-lg text-surface-variant mb-4">
                  Ignite real heavy-vehicle powertrain and commence assigned worksite payload operations. Requires operator authorization and credentials.
                </p>
                <div className="rounded-lg p-4 bg-inverse-surface/60 backdrop-blur-sm mb-6 shadow-inner">
                  <div className="font-[Montserrat] text-[10px] font-bold uppercase tracking-widest text-primary-fixed-dim mb-1">Safety Compliance Readiness</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                    {[
                      { icon: 'check_circle', text: 'Pre-check verified' },
                      { icon: 'sensors', text: 'Telemetry link active' },
                      { icon: 'location_on', text: 'GPS sync ready' },
                    ].map((c, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-container text-lg font-bold">{c.icon}</span>
                        <span className="text-[13px] text-surface-bright font-medium">{c.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.01 }}
                  onClick={handleStartEngine}
                  className="w-full min-h-[58px] px-8 py-4 rounded-lg bg-primary-container hover:bg-primary-fixed-dim active:bg-primary text-on-surface font-[Montserrat] text-[15px] font-black uppercase tracking-wider flex items-center justify-center gap-4 shadow-lg transition-all cursor-pointer group"
                  style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}
                >
                  <span className="material-symbols-outlined text-2xl font-bold group-hover:scale-110 transition-transform">power_settings_new</span>
                  <span>Start Engine & Proceed to Login &rarr;</span>
                </motion.button>
                <div className="flex items-center justify-between text-surface-dim font-[Montserrat] text-[10px] font-bold uppercase tracking-wider mt-2 px-1">
                  <span>Direct ignition relay arm</span>
                  <span>OSHA Compliant Shift Log</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="w-full bg-surface-container-low rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: 'safety_check', title: 'Zero Risk Practice', desc: 'Calibrate bucket controls and slope dynamics without diesel burn.' },
                { icon: 'cloud_done', title: 'Instant Cloud Verification', desc: 'Automated transmission of pre-trip safety log to site dispatch.' },
                { icon: 'emergency', title: 'Emergency Override', desc: 'Supervisor master key protocol for immediate bypass operations.' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-2 rounded-lg bg-surface-container-lowest hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-inverse-surface text-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">{f.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-[Montserrat] text-base font-semibold text-on-surface uppercase tracking-wide">{f.title}</h3>
                    <p className="text-[13px] text-on-surface-variant">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </PageWrapper>
  )
}
