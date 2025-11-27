import { motion } from 'framer-motion'

const ImagePreviewModal = ({ isOpen, onClose, imageSrc, title }) => {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center px-2 md:px-4 bg-black/90"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-full md:max-w-4xl lg:max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-1 md:right-0 text-white hover:text-gray-300 text-3xl md:text-4xl leading-none z-10"
          style={{ top: '-8px' }}
        >
          ×
        </button>

        {/* 标题 */}
        {title && (
          <div className="text-center mb-2 md:mb-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">{title}</h3>
          </div>
        )}

        {/* 图片预览区域 */}
        <div className="bg-white/95 rounded-xl md:rounded-2xl p-3 md:p-6 lg:p-8 flex items-center justify-center">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt="预览" 
              className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg"
            />
          ) : (
            <div className="w-full aspect-[16/9] flex items-center justify-center bg-gray-200 rounded-lg">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-md bg-gray-300 flex items-center justify-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-6 h-6 md:w-8 md:h-8"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                    <circle cx="9" cy="10" r="1.5" />
                    <path d="M21 16l-4.5-4.5L12 16l-2-2-4 4" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg">图片预览</p>
              </div>
            </div>
          )}
        </div>

        {/* 提示文字 */}
        <div className="text-center mt-2 md:mt-4">
          <p className="text-white/60 text-xs md:text-sm">点击任意位置关闭预览</p>
        </div>
      </motion.div>
    </div>
  )
}

export default ImagePreviewModal
