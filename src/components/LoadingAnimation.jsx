import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'
import { helix, grid, quantum, mirage } from 'ldrs'

// 注册所有 LDRS 组件
helix.register()
grid.register()
quantum.register()
mirage.register()

/**
 * 加载动画组件 - 5个动画组合变换
 * 顺序：幻影→量子→螺旋→量子→网格
 * @param {string} type - 加载类型
 * @param {boolean} visible - 是否显示
 * @param {function} onComplete - 完成回调
 * @param {number} duration - 持续时间(毫秒)，默认5000ms
 */
const LoadingAnimation = ({ 
  type = 'search', 
  visible = false, 
  onComplete,
  duration = 5000 
}) => {
  const isMobile = useIsMobile()
  const [progress, setProgress] = useState(0)
  const [currentAnimation, setCurrentAnimation] = useState(0) 
  // 0: mirage, 1: quantum, 2: helix, 3: quantum, 4: grid

  // 动画切换逻辑 - 5个动画依次播放
  useEffect(() => {
    if (!visible) {
      setCurrentAnimation(0)
      return
    }

    // 每个动画的时长
    const animationDuration = duration / 5
    // 提前切换，创造平滑过渡
    const transitionOffset = 150

    // Mirage → Quantum (第1次)
    const timer1 = setTimeout(() => {
      setCurrentAnimation(1)
    }, animationDuration - transitionOffset)

    // Quantum → Helix
    const timer2 = setTimeout(() => {
      setCurrentAnimation(2)
    }, animationDuration * 2 - transitionOffset)

    // Helix → Quantum (第2次)
    const timer3 = setTimeout(() => {
      setCurrentAnimation(3)
    }, animationDuration * 3 - transitionOffset)

    // Quantum → Grid
    const timer4 = setTimeout(() => {
      setCurrentAnimation(4)
    }, animationDuration * 4 - transitionOffset)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [visible, duration])

  // 进度条逻辑
  useEffect(() => {
    if (!visible) {
      setProgress(0)
      return
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          if (onComplete) {
            setTimeout(onComplete, 300)
          }
          return 100
        }
        return prev + (100 / (duration / 50))
      })
    }, 50)

    return () => clearInterval(interval)
  }, [visible, duration, onComplete])

  const configs = {
    search: {
      title: '热点挖掘机已启动！',
      subtitle: 'AI疯狂抓取ing 再等2秒给你递热瓜～',
      color: '#FF6B3D'
    },
    copywriting: {
      title: '梗王AI在线憋笑输出～',
      subtitle: '脑洞文案加载中 笑点请勿走开！',
      color: '#EA805A'
    },
    light: {
      title: 'AI正在破译汽车"悄悄话"～',
      subtitle: '专属灯语图 再等1秒闪现！',
      color: '#FF6B3D'
    },
    poster: {
      title: '晒圈神器加载中～',
      subtitle: 'AI正在给灯语"美颜" 高颜值分享图来啦！',
      color: '#FF6B3D'
    },
    sync: {
      title: '正在"烹饪"定制素材包～',
      subtitle: '加载完成后 自动同步至你的智己座舱！',
      color: '#EA805A'
    }
  }

  const config = configs[type] || configs.search

  // 响应式尺寸
  const containerWidth = isMobile ? '90vw' : '480px'
  const containerHeight = isMobile ? '200px' : '240px'
  const loaderScale = isMobile ? 0.8 : 1

  // 统一尺寸
  const animationSize = 60

  // 获取当前动画类型
  const getCurrentAnimationType = () => {
    if (currentAnimation === 0) return 'mirage'
    if (currentAnimation === 1) return 'quantum'
    if (currentAnimation === 2) return 'helix'
    if (currentAnimation === 3) return 'quantum'
    if (currentAnimation === 4) return 'grid'
    return 'mirage'
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative flex flex-col items-center justify-center"
            style={{
              width: containerWidth,
              maxWidth: '480px',
              height: containerHeight,
              background: 'rgba(0, 0, 0, 0.9)',
              borderRadius: '16px',
              padding: isMobile ? '24px 16px' : '32px'
            }}
          >
            {/* 5个动画依次变换 */}
            <div className={isMobile ? 'mb-4' : 'mb-6'} style={{ transform: `scale(${loaderScale})`, minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                {/* 1. Mirage 幻影 */}
                {currentAnimation === 0 && (
                  <motion.div
                    key="mirage-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <l-mirage 
                      size={animationSize} 
                      speed="2.5"
                      color={config.color}
                    ></l-mirage>
                  </motion.div>
                )}
                
                {/* 2. Quantum 量子 (第1次) */}
                {currentAnimation === 1 && (
                  <motion.div
                    key="quantum-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <l-quantum 
                      size={animationSize} 
                      speed="1.5"
                      color={config.color}
                    ></l-quantum>
                  </motion.div>
                )}
                
                {/* 3. Helix 螺旋 */}
                {currentAnimation === 2 && (
                  <motion.div
                    key="helix"
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <l-helix 
                      size={animationSize} 
                      speed="2"
                      color={config.color}
                    ></l-helix>
                  </motion.div>
                )}
                
                {/* 4. Quantum 量子 (第2次) */}
                {currentAnimation === 3 && (
                  <motion.div
                    key="quantum-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <l-quantum 
                      size={animationSize} 
                      speed="1.5"
                      color={config.color}
                    ></l-quantum>
                  </motion.div>
                )}
                
                {/* 5. Grid 网格 */}
                {currentAnimation === 4 && (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <l-grid 
                      size={animationSize} 
                      speed="1.5"
                      color={config.color}
                    ></l-grid>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 文字内容 */}
            <div className="text-center space-y-1">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-white font-semibold ${isMobile ? 'text-base' : 'text-xl'}`}
                style={{
                  fontFamily: 'IMSans QH, sans-serif',
                  lineHeight: isMobile ? '22px' : '28px'
                }}
              >
                {config.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-white/70 ${isMobile ? 'text-sm' : 'text-base'}`}
                style={{
                  fontFamily: 'IMSans QH, sans-serif',
                  lineHeight: isMobile ? '20px' : '28px',
                  maxWidth: '344px',
                  padding: isMobile ? '0 8px' : '0'
                }}
              >
                {config.subtitle}
              </motion.p>
            </div>

            {/* 进度条 */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-2xl overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 to-pink-500"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'linear' }}
              />
            </div>

            {/* 装饰性光晕效果 */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(circle at center, ${config.color}15 0%, transparent 70%)`,
                animation: 'pulse 2s ease-in-out infinite'
              }}
            />

            {/* 5个动画指示器 */}
            <div className="absolute top-4 right-4 flex gap-1">
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${currentAnimation === 0 ? 'bg-pink-500 w-4' : 'bg-white/30'}`} />
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${currentAnimation === 1 ? 'bg-purple-500 w-4' : 'bg-white/30'}`} />
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${currentAnimation === 2 ? 'bg-orange-500 w-4' : 'bg-white/30'}`} />
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${currentAnimation === 3 ? 'bg-purple-500 w-4' : 'bg-white/30'}`} />
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${currentAnimation === 4 ? 'bg-blue-500 w-4' : 'bg-white/30'}`} />
            </div>

            {/* 动画名称提示 */}
            <div className="absolute top-4 left-4 text-xs text-white/50">
              {currentAnimation === 0 && '💫 Mirage'}
              {currentAnimation === 1 && '⚛️ Quantum'}
              {currentAnimation === 2 && '🌀 Helix'}
              {currentAnimation === 3 && '⚛️ Quantum'}
              {currentAnimation === 4 && '⬛ Grid'}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingAnimation
