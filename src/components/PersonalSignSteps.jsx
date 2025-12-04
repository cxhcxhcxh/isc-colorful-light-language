import { motion } from 'framer-motion'

// 步骤1：输入文案
export const Step1InputText = ({ 
  inputText,
  setInputText,
  handleApplyDirect,
  handleAiPolish
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
        background: 'rgba(60, 37, 32, 0.5)'
      }}
    >
      <div className="p-4 sm:p-6 md:p-8" style={{ padding: '20px 30px 30px 30px' }}>
      {/* 步骤编号和标题 */}
      <div className="relative mb-3 md:mb-4">
        <div className="absolute -left-2 md:left-0 -top-2 md:top-0 w-10 h-10 md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center text-white pixel-font text-xl md:text-4xl" 
             style={{ 
               background: 'linear-gradient(153.43deg, rgba(234, 128, 90, 0.5) 0%, rgba(234, 128, 90, 0.0288462) 81.33%)',
               lineHeight: '1'
             }}>
          1
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white text-center" style={{ lineHeight: '1.2' }}>输入你的文案</h3>
      </div>

      {/* 描述文字 - 居中 */}
      <div className="text-center mb-4 md:mb-6">
        <p className="text-white/60 text-sm md:text-base lg:text-xl leading-relaxed">
          输入你想要展示的个性文案<br />
          建议不超过 8 个中文字符
        </p>
      </div>

      {/* 输入框 */}
      <div className="max-w-[960px] mx-auto mb-3 md:mb-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="输入你的文案..."
          className="w-full bg-[#381912] text-white px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl text-base md:text-xl lg:text-2xl focus:outline-none focus:ring-2 focus:ring-[#ffb979]"
          style={{ height: '60px', lineHeight: '1.2' }}
          maxLength={8}
        />
        <div className="text-right mt-1 md:mt-2 text-white/40 text-xs md:text-sm">
          {inputText.length}/8
        </div>
      </div>

      {/* 两个按钮 */}
      <div className="max-w-[960px] mx-auto grid grid-cols-2 gap-2 md:gap-4">
        <button
          onClick={handleApplyDirect}
          disabled={!inputText}
          className="px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg lg:text-xl text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            height: '60px',
            background: inputText ? 'linear-gradient(135deg, #FF6B6B 0%, #FF8A65 100%)' : '#666',
          }}
        >
          直接应用
        </button>
        <button
          onClick={handleAiPolish}
          disabled={!inputText}
          className="px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg lg:text-xl text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            height: '60px',
            background: inputText ? 'linear-gradient(135deg, #FF8A65 0%, #FFB74D 100%)' : '#666',
          }}
        >
          AI 润色
        </button>
      </div>
      </div>
    </motion.div>
  )
}

// 步骤2：生成灯语图
export const Step2GenerateLight = ({
  inputText,
  selectedLight,
  handleLightSelect,
  handleReset
}) => {
  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="rounded-2xl relative mx-auto"
      style={{
        maxWidth: '1080px',
        background: 'rgba(60, 37, 32, 0.5)'
      }}
    >
      <div className="p-4 sm:p-6 md:p-8" style={{ padding: '20px 30px 30px 30px' }}>
      {/* 步骤编号和标题 */}
      <div className="relative mb-3 md:mb-4">
        <div className="absolute -left-2 md:left-0 -top-2 md:top-0 w-10 h-10 md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center text-white pixel-font text-xl md:text-4xl" 
             style={{ 
               background: 'linear-gradient(153.43deg, rgba(234, 128, 90, 0.5) 0%, rgba(234, 128, 90, 0.0288462) 81.33%)',
               lineHeight: '1'
             }}>
          2
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center" style={{ lineHeight: '1.2' }}>AI 生成灯语图</h3>
      </div>

      {/* 描述文字 - 居中 */}
      <div className="text-center mb-4 md:mb-6">
        <p className="text-white/60 text-sm md:text-base lg:text-xl leading-relaxed">
          为你的文案生成 2 种灯语选项<br />
          16:9 画幅，只使用红橙色系，中文和英文
        </p>
      </div>

      {/* 选中文案条 */}
      <div className="mx-auto rounded-xl md:rounded-2xl mb-4 md:mb-6 text-center flex items-center justify-center" style={{ maxWidth: '1020px', height: '60px', background: 'rgba(43, 16, 10, 0.8)' }}>
        <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold truncate px-4" style={{ lineHeight: '1.2' }}>{inputText}</span>
      </div>

      {/* 图片列表容器 */}
      <div className="rounded-xl md:rounded-2xl mx-auto space-y-3 md:space-y-4 mb-4 md:mb-6 p-4 md:p-6 lg:p-8" style={{ maxWidth: '1020px', background: 'rgba(43, 16, 10, 0.8)' }}>
        <h5 className="text-white text-center text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6" style={{ lineHeight: '1.2' }}>图片 2 种</h5>

        <div className="space-y-3 md:space-y-4 mx-auto" style={{ maxWidth: '960px' }}>
          {[1, 2].map((id) => {
            const isSelected = selectedLight?.id === id

            return (
              <div
                key={id}
                onClick={() => handleLightSelect({ id, type: 'light', text: inputText })}
                className={`relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer transition-all ${
                  isSelected
                    ? 'border-2 border-[#ffb979]'
                    : 'bg-[#381912] hover:bg-[#4a2318]'
                }`}
              >
                {/* 图片占位 - 16:9 比例 */}
                <div className={`flex items-center justify-center aspect-[16/9] ${
isSelected ? 'bg-[#8D4535]' : 'bg-[#381912]'}`}>
                  <div className="pointer-events-none select-none w-10 h-10 md:w-[52px] md:h-[52px] rounded-lg bg-[#3d1e16] flex items-center justify-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-5 h-5 md:w-6 md:h-6"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                      <circle cx="9" cy="10" r="1.5" />
                      <path d="M21 16l-4.5-4.5L12 16l-2-2-4 4" />
                    </svg>
                  </div>
                </div>

                {/* 底部确认按钮：仅选中时出现 */}
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#ff6b7b] to-[#ff8a65] text-white text-xs md:text-sm font-bold py-1.5 md:py-2 text-center">
                    已选中
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <button
        onClick={handleReset}
        className="w-full bg-transparent border-2 border-gray-600 text-gray-400 py-2 md:py-3 px-4 md:px-6 rounded-xl md:rounded-2xl hover:border-gray-500 hover:text-gray-300 transition-all text-xs md:text-sm font-semibold"
      >
        返回第一步
      </button>
      </div>
    </motion.div>
  )
}

// 步骤3：生成分享图
export const Step3GeneratePoster = ({
  selectedLight,
  handleLightSelect,
  handleReset,
  setIsShareModalOpen,
  carNumber,
  setCarNumber,
  isLoading,
  handleSendToCar
}) => {
  
  const handleDownloadPoster = (posterId) => {
    // 创建一个临时的 canvas 来生成下载图片
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    // 设置 canvas 尺寸为 3:4 比例
    canvas.width = 1080
    canvas.height = 1440
    
    // 绘制背景色
    ctx.fillStyle = '#2a0f0a'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    // 添加文字（示例）
    ctx.fillStyle = '#ffffff'
    ctx.font = '48px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('ISC SIGN 个性签名', canvas.width / 2, canvas.height / 2)
    
    // 转换为下载链接
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `ISC-个性签名-海报${posterId}-${Date.now()}.png`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }, 'image/png')
  }
  
  return (
    <>
      <motion.div
        key="step3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="rounded-2xl relative mx-auto mb-4"
        style={{
          maxWidth: '1080px',
          background: 'rgba(60, 37, 32, 0.5)'
        }}
      >
        <div className="p-4 sm:p-6 md:p-8" style={{ padding: '20px 30px 30px 30px' }}>
        {/* 步骤编号和标题 */}
        <div className="relative mb-3 md:mb-4">
          <div className="absolute -left-2 md:left-0 -top-2 md:top-0 w-10 h-10 md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center text-white pixel-font text-xl md:text-4xl" 
               style={{ 
                 background: 'linear-gradient(153.43deg, rgba(234, 128, 90, 0.5) 0%, rgba(234, 128, 90, 0.0288462) 81.33%)',
                 lineHeight: '1'
               }}>
            3
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center" style={{ lineHeight: '1.2' }}>AI 生成灯语分享图</h3>
        </div>

        {/* 描述文字 - 居中 */}
        <div className="text-center mb-4 md:mb-6">
          <p className="text-white/60 text-sm md:text-base lg:text-xl leading-relaxed">
            为选中的灯语图，生成 2 种海报选项<br />
            3:4 画幅，将灯语图贴合在 LS9 尾 ISC 位置，加上原热点内容
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-6 mx-auto" style={{ maxWidth: '1020px' }}>
          {[1, 2].map((id) => {
            const isSelectedPoster = selectedLight?.posterId === id
            return (
              <div
                key={id}
                onClick={() => handleLightSelect({ ...selectedLight, posterId: id })}
                className="flex-1 relative rounded-xl md:rounded-2xl cursor-pointer transition-all flex flex-col overflow-hidden"
                style={{ 
                  background: 'rgba(43, 16, 10, 0.8)',
                  border: isSelectedPoster ? '2px solid #ffb979' : 'none'
                }}
              >
                <div className="flex items-center justify-center p-6 md:p-8 aspect-[3/4]">
                  <div className="w-16 h-16 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] rounded-lg bg-[#3d1e16] flex items-center justify-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                      <circle cx="9" cy="10" r="1.5" />
                      <path d="M21 16l-4.5-4.5L12 16l-2-2-4 4" />
                    </svg>
                  </div>
                </div>
                {isSelectedPoster && (
                  <div className="flex h-10 md:h-12 text-xs md:text-sm font-medium">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsShareModalOpen(true)
                      }}
                      className="flex-1 bg-[#3a1810] text-white hover:bg-[#4b2519] transition-colors"
                    >
                      分享
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDownloadPoster(id)
                      }}
                      className="flex-1 bg-[#3a1810] text-white hover:bg-[#4b2519] transition-colors"
                    >
                      下载
                    </button>
                    <button className="flex-1 bg-[#ff6b7b] text-white">确认</button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        </div>
      </motion.div>

      {/* 车架号和下发 - 仅在选中海报后显示 */}
      {selectedLight?.posterId && (
        <div className="mb-4 px-4">
          {/* 纯白输入条，无单独label */}
          <input
            type="text"
            value={carNumber}
            onChange={(e) => setCarNumber(e.target.value)}
            placeholder="填写LS9车架号"
            className="w-full bg-white text-gray-900 px-4 py-2 md:py-3 rounded-xl md:rounded-2xl focus:outline-none focus:ring-0 mb-3 md:mb-4 placeholder:text-gray-400 text-xs md:text-sm text-center"
          />

          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#ff6b7b]" />
            <span className="text-white text-xs md:text-sm">上传到社区</span>
          </div>

          <button
            onClick={handleSendToCar}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#ff6b7b] via-[#ff7b55] to-[#ff9a4a] text-white font-bold py-3 md:py-5 px-4 md:px-6 rounded-xl md:rounded-2xl hover:shadow-lg hover:brightness-105 transition-all disabled:opacity-50 text-sm md:text-base mb-2 md:mb-3"
          >
            {isLoading ? '确认灯语，下发中…' : '确认灯语，下发到车'}
          </button>

          <button
            onClick={handleReset}
            className="w-full bg-[#3a3a3a] text-gray-200 py-3 md:py-5 px-4 md:px-6 rounded-xl md:rounded-2xl hover:bg-[#4a4a4a] transition-all text-sm md:text-base font-semibold"
          >
            重置生成，返回第一步
          </button>
        </div>
      )}
    </>
  )
}
