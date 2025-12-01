import { motion } from 'framer-motion'
import { getAssetPath } from '../constants/paths'

const FloatingStars = () => {
  const stars = [
    { id: 1, top: '10%', left: '15%', delay: 0, size: 'w-4 h-4' },
    { id: 2, top: '20%', right: '20%', delay: 0.5, size: 'w-3 h-3' },
    { id: 3, top: '40%', left: '10%', delay: 1, size: 'w-5 h-5' },
    { id: 4, top: '60%', right: '15%', delay: 1.5, size: 'w-4 h-4' },
    { id: 5, top: '80%', left: '25%', delay: 2, size: 'w-3 h-3' },
    { id: 6, top: '30%', right: '30%', delay: 0.8, size: 'w-6 h-6' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute ${star.size}`}
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img 
            src={getAssetPath('/assets/幻彩星星.png')} 
            alt="star" 
            className="w-full h-full opacity-50"
          />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingStars
