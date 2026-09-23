import { motion } from 'framer-motion'

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const dirs = { up: { y: 20 }, down: { y: -20 }, left: { x: 30 }, right: { x: -30 } }
  return (
    <motion.div
      initial={{ opacity: 0, ...dirs[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
