import { motion } from 'framer-motion'
import { getAssetPath } from '../constants/paths'

const ShareModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full"
        style={{ maxWidth: '320px' }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-8 right-2 text-white hover:text-gray-300 text-2xl leading-none z-10"
        >
          ×
        </button>

        {/* 分享卡片 - 使用img标签 */}
        <div className="rounded-3xl overflow-hidden relative">
          {/* 背景图片 */}
          <img 
            src={getAssetPath('/assets/Group 69@2x.png')} 
            alt="分享海报"
            className="w-full h-auto"
          />
          
          {/* 棕色图片占位符叠加层 */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: '-50px' }}>
            <div 
              className="rounded-3xl bg-[#3d2520] flex items-center justify-center"
              style={{ width: '300px', height: '420px', maxWidth: '100%', maxHeight: '100%' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-24 h-24 text-gray-500"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                <circle cx="9" cy="10" r="1.5" />
                <path d="M21 16l-4.5-4.5L12 16l-2-2-4 4" />
              </svg>
            </div>
          </div>
        </div>

        {/* 底部三个圆形按钮 */}
        <div className="flex items-center justify-center gap-8 mt-4">
          {/* 微信 */}
          <button
            type="button"
            onClick={() => alert('分享到微信：功能待接入')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
              <img src={getAssetPath('/assets/微信@2x.png')} alt="WeChat" className="w-6 h-6" />
            </div>
            <span className="text-white/70 text-xs">微信</span>
          </button>

          {/* 小红书 */}
          <button
            type="button"
            onClick={() => alert('分享到小红书：功能待接入')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={getAssetPath('/assets/Group 68.png')}
                alt="小红书"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white/70 text-xs">小红书</span>
          </button>

          {/* 复制链接 */}
          <button
            type="button"
            onClick={() => alert('复制链接：功能待接入')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={getAssetPath('/assets/复制链接.png')}
                alt="复制链接"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white/70 text-xs">复制链接</span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ShareModal
