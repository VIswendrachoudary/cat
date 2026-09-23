import { AnimatePresence, motion } from 'framer-motion'

export default function Toast({ toast, onClose }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 40, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 40, x: '-50%' }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed bottom-6 left-1/2 z-[100] bg-inverse-surface text-inverse-on-surface px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-lg"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
            toast.type === 'engine' ? 'bg-primary-container text-on-surface' : 'bg-surface-container-highest text-on-surface'
          }`}>
            <span className="material-symbols-outlined text-lg font-bold">check</span>
          </div>
          <div>
            <div className="font-[Montserrat] font-semibold text-sm uppercase tracking-wider">{toast.title}</div>
            <div className="text-xs text-surface-dim mt-0.5">{toast.desc}</div>
          </div>
          <button onClick={onClose} className="ml-2 text-surface-dim hover:text-white transition-colors">
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
