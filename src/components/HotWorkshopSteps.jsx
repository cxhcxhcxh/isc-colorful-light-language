import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { getAssetPath } from '../constants/paths'

export const Step1CollectTopics = ({ 
  isLoadingTopics, 
  hasCollectedTopics, 
  mockHotTopics,
  selectedTopic,
  handleStartCollect,
  handleTopicSelect 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
        <h3 className="text-lg md:text-3xl lg:text-4xl font-normal text-white text-center" style={{ lineHeight: '1.2' }}>AI 爬取实时热点榜单</h3>
      </div>

      {/* 描述文字 - 居中 */}
      <div className="text-center mb-4 md:mb-6">
        <p className="text-white/60 text-xs md:text-base lg:text-xl leading-relaxed">
          收集微博、抖音、头条热榜，罗列前 5 选项<br/>
          只使用文娱类内容，排除政治和非正能量内容，做合并排序
        </p>
      </div>
      
      <button 
        onClick={handleStartCollect}
        className="w-full text-white font-bold rounded-xl md:rounded-2xl mb-4 md:mb-5 hover:shadow-lg hover:brightness-105 transition-all text-base md:text-2xl lg:text-3xl"
        style={{
          background: 'linear-gradient(90deg, #F76964 0%, #EA805A 100%)',
          height: '50px',
          lineHeight: '1.2'
        }}
      >
        {isLoadingTopics ? '正在收集热点...' : '开始收集热点'}
      </button>

      {isLoadingTopics && (
        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 md:h-16 bg-gray-800 rounded-xl animate-pulse" />
          ))}
        </div>
      )}

      {hasCollectedTopics && !isLoadingTopics && (
        <div>
          {/* 热点热梗标题 - 渐变文字 */}
          <h4 className="text-white text-center font-bold text-xl md:text-3xl lg:text-4xl mb-4 md:mb-6 gradient-text" style={{ lineHeight: '1.2' }}>热点热梗</h4>

          {/* 列表容器 */}
          <div className="space-y-2 md:space-y-3 mx-auto" style={{ maxWidth: '960px' }}>
            {mockHotTopics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => handleTopicSelect(topic)}
                className={`relative rounded-xl md:rounded-2xl cursor-pointer transition-all flex items-center justify-center ${
                  selectedTopic?.id === topic.id
                    ? 'bg-[#8D4535] border-2 border-[#ffb979]'
                    : 'bg-[#381912] hover:bg-[#4a2318]'
                }`}
                style={{ height: '60px' }}
              >
                {/* 文案+热 标签：居中 */}
                <div className="pointer-events-none select-none flex items-center justify-center gap-2 md:gap-3 px-2">
                  <span className="text-[#fff1e7]/80 text-sm md:text-xl lg:text-2xl text-center truncate" style={{ lineHeight: '1.2' }}>文案热点文案热点文案热点文案热点</span>
                  <img
                    src={getAssetPath('/assets/标签热点.png')}
                    alt="热点标签"
                    className="w-[40px] h-[20px] md:w-[50px] md:h-[25px] object-contain flex-shrink-0"
                  />
                </div>

                {/* 右侧确认按钮：贴边且不影响中间内容居中 */}
                {selectedTopic?.id === topic.id && (
                  <button className="absolute inset-y-0 right-0 bg-[#ff5b4a] text-white text-[10px] md:text-[11px] px-3 md:px-5 rounded-r-xl rounded-l-none font-medium hover:brightness-110 transition-colors flex items-center justify-center">
                    确认
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </motion.div>
  )
}

// 步骤2：AI 生成有趣文案
export const Step2GenerateCopy = ({ 
  mockCopyOptions,
  selectedCopy,
  handleCopySelect,
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
        <h3 className="text-lg md:text-3xl lg:text-4xl font-bold text-white text-center" style={{ lineHeight: '1.2' }}>AI 有梗文案</h3>
      </div>

      {/* 描述文字 - 居中 */}
      <div className="text-center mb-4 md:mb-6">
        <p className="text-white/60 text-xs md:text-base lg:text-xl leading-relaxed">
          为选中的热点内容，生成 5 种中英文选项<br />
          只使用简单内容和笔画字符，长度不超过 8 个中文字符
        </p>
      </div>

      {/* 选中热点文案条 */}
      <div className="mx-auto rounded-xl md:rounded-2xl mb-4 md:mb-6 text-center flex items-center justify-center" style={{ maxWidth: '1020px', height: '50px', background: 'rgba(43, 16, 10, 0.8)' }}>
        <span className="text-white text-base md:text-2xl lg:text-3xl font-bold" style={{ lineHeight: '1.2' }}>选中热点文案</span>
      </div>

      {/* 文案列表容器 */}
      <div className="rounded-xl md:rounded-2xl mx-auto space-y-2 md:space-y-3 mb-4 md:mb-6 p-4 md:p-6 lg:p-8" style={{ maxWidth: '1020px', background: 'rgba(43, 16, 10, 0.8)' }}>
        <h5 className="text-white text-center text-lg md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6" style={{ lineHeight: '1.2' }}>文案 5 种</h5>

        <div className="space-y-2 md:space-y-3 mx-auto" style={{ maxWidth: '960px' }}>
          {mockCopyOptions.map((copy) => (
            <div
              key={copy.id}
              onClick={() => handleCopySelect(copy)}
              className={`relative rounded-xl md:rounded-2xl cursor-pointer transition-all flex items-center justify-center ${
                selectedCopy?.id === copy.id
                  ? 'bg-[#8D4535]'
                  : 'bg-[#381912] hover:bg-[#4a2318]'
              }`}
              style={{ height: '60px' }}
            >
              {/* 文案文本：居中 */}
              <span className="text-[#fff1e7]/80 text-sm md:text-xl lg:text-2xl pointer-events-none select-none text-center px-2" style={{ lineHeight: '1.2' }}>
                {copy.text}
              </span>

              {/* 右侧确认按钮：贴边且不影响中间内容居中 */}
              {selectedCopy?.id === copy.id && (
                <button className="absolute inset-y-0 right-0 bg-[#ff5b4a] text-white text-[10px] md:text-[11px] px-3 md:px-5 rounded-r-xl rounded-l-none font-medium hover:brightness-110 transition-colors flex items-center justify-center">
                  确认
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </motion.div>
  )
}

// 步骤3：AI 生成灯语图
export const Step3GenerateLight = ({ 
  selectedCopy,
  selectedLight,
  handleLightSelect,
  handleReset 
}) => {
  return (
    <motion.div
      key="step3"
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
          3
        </div>
        <h3 className="text-lg md:text-3xl lg:text-4xl font-bold text-white text-center" style={{ lineHeight: '1.2' }}>AI 生成灯语图</h3>
      </div>

      {/* 描述文字 - 居中 */}
      <div className="text-center mb-4 md:mb-6">
        <p className="text-white/60 text-xs md:text-base lg:text-xl leading-relaxed">
          选中的文案，生成 2 种灯语选项<br />
          16:9 画幅，只使用红橙色系，中文和英文
        </p>
      </div>

      {/* 选中热点文案条 */}
      <div className="mx-auto rounded-xl md:rounded-2xl mb-4 md:mb-6 text-center flex items-center justify-center" style={{ maxWidth: '1020px', height: '50px', background: 'rgba(43, 16, 10, 0.8)' }}>
        <span className="text-white text-base md:text-2xl lg:text-3xl font-bold" style={{ lineHeight: '1.2' }}>选中热点文案</span>
      </div>

      {/* 图片列表容器 */}
      <div className="rounded-xl md:rounded-2xl mx-auto space-y-3 md:space-y-4 mb-4 md:mb-6 p-4 md:p-6 lg:p-8" style={{ maxWidth: '1020px', background: 'rgba(43, 16, 10, 0.8)' }}>
        <h5 className="text-white text-center text-lg md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 gradient-text" style={{ lineHeight: '1.2' }}>灯语方案</h5>

        <div className="space-y-3 md:space-y-4 mx-auto" style={{ maxWidth: '960px' }}>
          {[1, 2].map((id) => {
            const isSelected = selectedLight?.id === id

            return (
              <div
                key={id}
                onClick={() => handleLightSelect({ id, type: 'light', text: selectedCopy?.text })}
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

// 步骤4：AI 生成灯语分享图
export const Step4GeneratePoster = ({ 
  selectedLight,
  handleLightSelect,
  carNumber,
  setCarNumber,
  isLoading,
  handleSendToCar,
  handleReset,
  setIsShareModalOpen
}) => {
  return (
    <>
      <motion.div
        key="step4"
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
            4
          </div>
          <h3 className="text-lg md:text-3xl lg:text-4xl font-bold text-white text-center" style={{ lineHeight: '1.2' }}>AI 生成灯语分享图</h3>
        </div>

        {/* 描述文字 - 居中 */}
        <div className="text-center mb-4 md:mb-6">
          <p className="text-white/60 text-xs md:text-base lg:text-xl leading-relaxed">
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
                <div className="flex items-center justify-center py-8 md:py-12">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#3d1e16] flex items-center justify-center text-gray-400">
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
                    <button className="flex-1 bg-[#3a1810] text-white hover:bg-[#4b2519] transition-colors">下载</button>
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
