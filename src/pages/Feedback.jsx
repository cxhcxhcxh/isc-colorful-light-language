import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getAssetPath } from '../constants/paths'

const Feedback = () => {
  const [selectedType, setSelectedType] = useState('功能建议')
  const [feedbackText, setFeedbackText] = useState('')
  const maxLength = 500

  const feedbackTypes = ['功能异常', '功能建议', '体验问题', '其他']

  const handleSubmit = () => {
    if (!selectedType) {
      alert('请选择反馈类型')
      return
    }
    if (!feedbackText.trim()) {
      alert('请输入反馈内容')
      return
    }
    alert('感谢您的反馈！我们会认真处理')
    // 这里可以添加提交到后台的逻辑
  }

  return (
    <div className="min-h-screen px-4 py-8" style={{ background: '#000' }}>
      {/* 返回按钮 - 顶部 */}
      <div className="max-w-screen-xl mx-auto mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-gray-200 text-sm hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回</span>
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full" style={{ maxWidth: '380px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full rounded-3xl"
            style={{
              background: 'rgba(60, 37, 32, 0.5)',
              padding: '32px 24px'
            }}
          >

          {/* 标题 */}
          <div className="mb-6 relative">
            <h1 
              className="text-2xl font-bold mb-2 flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(90deg, #F86F3D 0%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.3',
                letterSpacing: '0.5px'
              }}
            >
              <img src={getAssetPath('/assets/幻彩星星.png')} alt="star" className="w-6 h-6 animate-pulse" />
              意见反馈*
              <img src={getAssetPath('/assets/幻彩星星.png')} alt="star" className="w-6 h-6 animate-pulse" />
            </h1>
            <p className="text-sm text-white/60 text-center" style={{ lineHeight: '1.5' }}>
              Hi，给出你的小建议吧～
            </p>
          </div>

          {/* 反馈类型选择 */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {feedbackTypes.map((type) => {
              const isActive = selectedType === type
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`rounded-xl text-base font-normal transition-all ${
                    isActive
                      ? 'border-2 border-[#F36063]'
                      : 'border-2 border-transparent'
                  }`}
                  style={{
                    height: '48px',
                    background: 'rgba(181, 70, 72, 0.2)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: '1.2'
                  }}
                >
                  {type}
                </button>
              )
            })}
          </div>

          {/* 文本输入框 */}
          <div className="mb-6 relative">
            <textarea
              value={feedbackText}
              onChange={(e) => {
                if (e.target.value.length <= maxLength) {
                  setFeedbackText(e.target.value)
                }
              }}
              placeholder="请输入你要描述的问题"
              className="w-full bg-white text-gray-900 px-4 py-4 rounded-2xl focus:outline-none focus:ring-0 placeholder:text-gray-400 resize-none text-base"
              style={{
                height: '200px',
                lineHeight: '1.6'
              }}
            />
            {/* 字数统计 */}
            <div className="absolute bottom-4 right-4 text-sm text-gray-400">
              {feedbackText.length}/{maxLength}
            </div>
          </div>

        {/* 提交按钮 */}
        <button
          onClick={handleSubmit}
          className="w-full text-white font-medium rounded-2xl hover:brightness-110 transition-all text-lg"
          style={{
            background: '#B54648',
            height: '56px',
            lineHeight: '1.2'
          }}
        >
          确认反馈
        </button>

          {/* Footer */}
          <footer className="mt-8 text-center">
            <p className="text-white/50 text-sm mb-2" style={{ lineHeight: '1.5' }}>
              智己 LS9 幻彩智慧灯语 内容创作平台
            </p>
            <p className="text-white/30 text-xs font-bold" style={{ lineHeight: '1.5' }}>
              软件创意产品策划 CXH
            </p>
          </footer>
        </motion.div>
      </div>
      </div>
    </div>
  )
}

export default Feedback
