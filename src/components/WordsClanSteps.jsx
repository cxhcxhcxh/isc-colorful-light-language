import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { getAssetPath } from '../constants/paths'

// 步骤1：导入图片
export const Step1ImportImage = ({ 
  imageInput,
  setImageInput,
  handleUploadConfirm
}) => {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="rounded-2xl relative mx-auto"
      style={{
        maxWidth: '1080px',
        background: 'rgba(60, 37, 32, 0.5)',
        padding: '20px 30px 30px 30px'
      }}
    >
      {/* 步骤编号和标题 */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 w-[70px] h-[70px] rounded-full flex items-center justify-center text-white pixel-font text-4xl" 
             style={{ 
               background: 'linear-gradient(153.43deg, rgba(234, 128, 90, 0.5) 0%, rgba(234, 128, 90, 0.0288462) 81.33%)',
               lineHeight: '37px'
             }}>
          1
        </div>
        <h3 className="text-4xl font-normal text-white text-center" style={{ lineHeight: '50px' }}>导入图片</h3>
      </div>

      {/* 描述文字 - 居中 */}
      <div className="text-center mb-6">
        <p className="text-white/60 text-xl leading-7">
          上传喜欢的谷子图像<br />
          图形越简洁清晰，显示效果越好
        </p>
      </div>

      {/* 图片上传区域 */}
      <div className="rounded-2xl mx-auto mb-6" style={{ maxWidth: '1020px', background: 'rgba(43, 16, 10, 0.8)', padding: '30px' }}>
        {/* 白色输入框 */}
        <div className="relative mb-4">
          <input
            type="text"
            value={imageInput}
            onChange={(e) => setImageInput(e.target.value)}
            placeholder="输入框点击或拖拽图片到此处"
            className="w-full bg-white text-gray-900 px-4 py-6 rounded-2xl focus:outline-none focus:ring-0 placeholder:text-gray-400 text-2xl text-center"
            style={{ height: '80px' }}
          />
          {/* 右上角上传图标 */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <img
              src={getAssetPath('/assets/上.png')}
              alt="上传"
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>

        {/* 确认上传按钮 */}
        <button
          onClick={handleUploadConfirm}
          className="w-full text-white font-bold rounded-2xl hover:brightness-110 transition-all text-2xl"
          style={{
            background: '#B54648',
            height: '80px',
            lineHeight: '34px'
          }}
        >
          确认上传
        </button>
      </div>
    </motion.div>
  )
}
