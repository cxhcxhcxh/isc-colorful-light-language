import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Share2, Download } from 'lucide-react'
import Navigation from '../components/Navigation'
import { getAssetPath } from '../constants/paths'
const videoLists = getAssetPath('/videos/ISClists.mp4')
import ShareModal from '../components/ShareModal'
import ImagePreviewModal from '../components/ImagePreviewModal'

const CreativeSquare = () => {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [carNumber, setCarNumber] = useState('')
  const [selectedScenes, setSelectedScenes] = useState(['欢送', '行车'])
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  const [previewTitle, setPreviewTitle] = useState('')

  const topics = Array.from({ length: 15 }).map((_, index) => ({
    rank: index + 1,
    category: '热点提案',
    title: `TOP#${(index + 1).toString().padStart(2, '0')}`,
    subtitle: '示例文案 · 可替换为真实提案标题',
    heat: 9999 - index * 123,
  }))

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* 导航条 */}
      <Navigation />

      {/* Video Section */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="relative bg-gray-800/50 overflow-hidden aspect-video flex items-center justify-center backdrop-blur-sm">
            <video
              src={videoLists}
              className="absolute inset-0 w-full h-full object-cover z-0"
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
            />
          </div>
        </motion.div>
      </section>

      {/* Hero Section */}
      <section className="relative py-6 md:py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-coral/10 to-transparent pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text" style={{ lineHeight: '1.2' }}>
              ISC LISTS 共创广场
            </h1>
            <img
              src={getAssetPath('/assets/幻彩星星.png')}
              alt="装饰星星"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>
          
          <p className="text-sm md:text-base lg:text-lg text-white/60 mb-4 md:mb-8" style={{ lineHeight: '1.4' }}>
            汇聚车友创意，共创出街弹幕
          </p>
        </motion.div>
      </section>

      {/* TOP15 Card */}
      <div className="container mx-auto px-4 pb-6 max-w-full md:max-w-4xl lg:max-w-6xl" style={{ maxWidth: '1120px' }}>
        <div className="space-y-4">
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
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4" style={{ lineHeight: '1.2' }}>共创广场 TOP15</h2>
            <p className="text-white/60 text-xs md:text-sm lg:text-base leading-relaxed">
              包含官方灯语、热点工坊、个性灯牌、吃谷一族的热门素材<br/>
              可直接选择喜欢的灯语分享到车，欢迎分享
            </p>
          </div>

          <div className="space-y-2 md:space-y-3 mt-3 md:mt-4" style={{ maxWidth: '1020px', margin: '0 auto' }}>
            {topics.map((item) => (
              <div key={item.rank}>
              <div
                className="rounded-xl md:rounded-2xl cursor-pointer transition-all p-4 md:p-6 lg:p-8"
                style={{ background: 'rgba(43, 16, 10, 0.8)' }}
                onClick={() => setSelectedTopic(selectedTopic?.rank === item.rank ? null : item)}
              >
                {/* Top meta row */}
                <div className="flex flex-col md:flex-row items-start md:items-center text-white/80 mb-4 md:mb-6 gap-2 md:gap-0">
                  <span className="text-sm md:text-base lg:text-lg mr-0 md:mr-3" style={{ lineHeight: '1.2' }}>制作人：XX</span>
                  <span className="inline-flex items-center px-2 md:px-3 py-1 rounded text-[10px] md:text-xs lg:text-sm mr-0 md:mr-3" style={{ background: 'linear-gradient(90deg, #F66964 0%, rgba(234, 128, 90, 0) 100%)', color: 'rgba(255, 221, 221, 0.8)' }}>
                    来源：热点工坊
                  </span>
                  <div className="flex-1 text-center pixel-font text-lg md:text-xl lg:text-2xl" style={{ 
                    background: 'linear-gradient(90deg, #FF3131 0%, #FFC869 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: '1',
                    marginLeft: '0'
                  }}>
                    TOP.N{item.rank.toString().padStart(2, '0')}
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm lg:text-base text-white/50">
                    <span>下载量：{item.heat.toLocaleString()}+</span>
                  </div>
                </div>

                {/* Preview bar */}
                <div 
                  className="w-full bg-white rounded-xl md:rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors aspect-[16/9]" 
                  style={{ maxWidth: '960px', margin: '0 auto' }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setPreviewImage(null)
                    setPreviewTitle(`TOP.N${item.rank.toString().padStart(2, '0')} 灯语图预览`)
                    setIsPreviewModalOpen(true)
                  }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-1 md:mb-2 rounded-md bg-gray-200 flex items-center justify-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                      <circle cx="9" cy="10" r="1.5" />
                      <path d="M21 16l-4.5-4.5L12 16l-2-2-4 4" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm md:text-lg lg:text-xl font-bold" style={{ lineHeight: '1.2' }}>16:9 尺寸，灯语图</p>
                </div>
              </div>

              {/* 选中后展开的详细内容 */}
              {selectedTopic?.rank === item.rank && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl md:rounded-2xl mt-3 md:mt-4 p-4 md:p-6 lg:p-8"
                  style={{ background: 'rgba(43, 16, 10, 0.8)', maxWidth: '1020px', margin: '16px auto 0' }}
                >
                  {/* 车架号输入 */}
                  <input
                    type="text"
                    value={carNumber}
                    onChange={(e) => setCarNumber(e.target.value)}
                    placeholder="填写LS9车架号"
                    className="w-full bg-white text-gray-900 px-3 md:px-4 py-2 md:py-3 rounded-xl md:rounded-2xl focus:outline-none focus:ring-0 mb-4 md:mb-6 placeholder:text-gray-400 text-center font-bold text-sm md:text-base lg:text-lg"
                    style={{ maxWidth: '960px', margin: '0 auto 24px', height: '60px', lineHeight: '1.2', color: '#AFAEAE' }}
                  />

                  {/* 场景选择 */}
                  <div className="rounded-xl md:rounded-2xl mb-4 md:mb-6 p-4 md:p-6 lg:p-8" style={{ background: '#3C2520', maxWidth: '960px', margin: '0 auto 24px' }}>
                    <p className="text-center text-sm md:text-base lg:text-lg text-white mb-4 md:mb-6" style={{ lineHeight: '1.2' }}>请选择应用场景（可多选）</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                      {['迎宾', '欢送', '行车', '驻车'].map((scene) => {
                        const isActive = selectedScenes.includes(scene)
                        return (
                          <button
                            key={scene}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedScenes((prev) =>
                                prev.includes(scene)
                                  ? prev.filter((s) => s !== scene)
                                  : [...prev, scene]
                              )
                            }}
                            className={`rounded-lg text-sm md:text-base lg:text-lg font-light transition-all flex items-center justify-center ${
                              isActive
                                ? 'border-2 border-[#F36063]'
                                : ''
                            }`}
                            style={{ 
                              height: '60px',
                              background: 'rgba(181, 70, 72, 0.2)',
                              color: '#FFFFFF',
                              lineHeight: '1.2'
                            }}
                          >
                            {scene}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* 底部按钮 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4" style={{ maxWidth: '960px', margin: '0 auto' }}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsShareModalOpen(true)
                      }}
                      className="w-full text-white font-bold rounded-xl md:rounded-2xl hover:brightness-110 transition-colors text-sm md:text-base lg:text-lg"
                      style={{ background: '#B54648', height: '60px', lineHeight: '1.2' }}
                    >
                      分享海报
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        if (!carNumber) {
                          alert('请先填写LS9车架号')
                          return
                        }
                        alert('应用到车：功能待接入')
                      }}
                      className="w-full text-white font-bold rounded-xl md:rounded-2xl hover:brightness-110 transition-colors text-sm md:text-base lg:text-lg"
                      style={{ background: 'linear-gradient(90deg, #F66964 0%, #EA805A 100%)', height: '60px', lineHeight: '1.2' }}
                    >
                      应用到车
                    </button>
                  </div>
                </motion.div>
              )}
              </div>
            ))}
          </div>

          <footer className="mt-6 md:mt-8 text-center text-gray-500 text-[10px] md:text-xs">
            <p className="mb-2">智己LS9幻彩智慧灯语 共创提案广场</p>
            <p>软件创意产品策划 CXH</p>
          </footer>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
      />

      {/* Image Preview Modal */}
      <ImagePreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
        imageSrc={previewImage}
        title={previewTitle}
      />

      {/* 旧的弹窗代码删除 */}
      {false && selectedTopic && (
        <div className="fixed inset-0 z-40 flex items-center justify-center px-4 pointer-events-none">
          {isShareModalOpen ? (
            // 分享海报界面
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-[380px] w-full shadow-2xl px-4 pointer-events-auto"
            >
              <div className="relative pt-0 pb-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsShareModalOpen(false)
                    setSelectedTopic(null)
                  }}
                  className="absolute -top-2 -right-1 text-gray-400 hover:text-white text-lg leading-none"
                >
                  ×
                </button>

                <div className="relative rounded-2xl mb-3 overflow-hidden border border-[#3d1a11] bg-[#fff4ec] pt-4 pb-6 flex flex-col items-center">
                  {/* 上部：大预览卡片 */}
                  <div className="w-[90%] max-w-[320px] bg-[#2a0f0a] rounded-2xl mb-3 flex items-center justify-center py-10">
                    <div className="w-10 h-10 rounded-md bg-[#3d1e16] flex items-center justify-center text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-5 h-5"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                        <circle cx="9" cy="10" r="1.5" />
                        <path d="M21 16l-4.5-4.5L12 16l-2-2-4 4" />
                      </svg>
                    </div>
                  </div>

                  {/* 文案 + LOGO 区域 */}
                  <div className="w-[90%] max-w-[320px] mt-auto">
                    <p className="text-gray-800 text-xs md:text-sm mb-3 text-left">
                      很棒的灯语图！！ 快去给你的小伙伴分享～
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-800 border-t border-dashed border-gray-300 pt-2">
                      <span className="font-semibold">IM 智己汽车</span>
                    </div>
                  </div>
                </div>

                {/* 底部三个分享入口按钮 */}
                <div className="flex items-center justify-around pb-1 pt-1">
                  {/* 左：微信 */}
                  <button
                    type="button"
                    onClick={() => alert('分享到微信：功能待接入')}
                    className="flex flex-col items-center gap-1 text-xs text-gray-200"
                  >
                    <span className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={getAssetPath('/assets/微信.png')}
                        alt="微信"
                        className="w-10 h-10 rounded-full object-contain"
                      />
                    </span>
                    <span>微信</span>
                  </button>

                  {/* 中：小红书 */}
                  <button
                    type="button"
                    onClick={() => alert('分享到社区：功能待接入')}
                    className="flex flex-col items-center gap-1 text-xs text-gray-200"
                  >
                    <span className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={getAssetPath('/assets/Group 68.png')}
                        alt="小红书"
                        className="w-10 h-10 rounded-full object-contain"
                      />
                    </span>
                    <span>小红书</span>
                  </button>

                  {/* 右：复制链接 */}
                  <button
                    type="button"
                    onClick={() => alert('复制链接：功能待接入')}
                    className="flex flex-col items-center gap-1 text-xs text-gray-200"
                  >
                    <span className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={getAssetPath('/assets/复制链接.png')}
                        alt="复制链接"
                        className="w-10 h-10 rounded-full object-contain"
                      />
                    </span>
                    <span>复制链接</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            // 车架号 + 场景选择界面
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-[380px] w-full shadow-2xl px-4 pointer-events-auto"
            >
              <div className="relative bg-[#2a0f0a] rounded-2xl border border-[#5a2316]/60 px-5 pt-4 pb-5">
                <button
                  type="button"
                  onClick={() => setSelectedTopic(null)}
                  className="absolute -top-2 -right-1 text-gray-400 hover:text-white text-lg leading-none"
                >
                  ×
                </button>

                {/* 顶部信息行：制作人 / 来源 / TOP 编号 / 下载量 */}
                <div className="flex items-center text-xs text-gray-300 mb-3">
                  <span className="mr-2">制作人：XX</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gradient-to-r from-[#ff6b7b] to-[#ff9a4a] text-[10px] text-white mr-2">
                    来源：{selectedTopic?.category || '热点工坊'}
                  </span>
                  <div className="flex-1 text-center pixel-font text-sm text-[#ffb979] tracking-[0.25em]">
                    TOP.N{selectedTopic?.rank?.toString().padStart(2, '0')}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#ff6b7b]">
                    <span>🔥</span>
                    <span>下载量：{selectedTopic?.heat?.toLocaleString() || '0'}+</span>
                  </div>
                </div>

                {/* 灯语图预览条 */}
                <div className="w-full bg-white rounded-2xl px-4 py-4 flex flex-col items-center justify-center text-center mb-3">
                  <div className="w-8 h-8 mb-2 rounded-md bg-gray-200 flex items-center justify-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-4 h-4"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                      <circle cx="9" cy="10" r="1.5" />
                      <path d="M21 16l-4.5-4.5L12 16l-2-2-4 4" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">8:1 尺寸，灯语图</p>
                </div>

                {/* 车架号输入 */}
                <div className="mb-3">
                  <input
                    type="text"
                    value={carNumber}
                    onChange={(e) => setCarNumber(e.target.value)}
                    placeholder="填写LS9车架号"
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-2xl focus:outline-none focus:ring-0 placeholder:text-gray-400 text-sm text-center"
                  />
                </div>

                {/* 应用场景选择 */}
                <div className="bg-[#3a1a10] rounded-2xl px-4 py-4 mb-4">
                  <p className="text-center text-sm text-white mb-3">请选择应用场景（可多选）</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['迎宾', '欢送', '行车', '驻车'].map((scene) => {
                      const isActive = selectedScenes.includes(scene)
                      return (
                        <button
                          key={scene}
                          type="button"
                          onClick={() =>
                            setSelectedScenes((prev) =>
                              prev.includes(scene)
                                ? prev.filter((s) => s !== scene)
                                : [...prev, scene]
                            )
                          }
                          className={`h-10 rounded-2xl text-sm border transition-all flex items-center justify-center px-3 ${
                            isActive
                              ? 'bg-[#ff6b7b] border-[#ff6b7b] text-white shadow-[0_0_0_1px_rgba(255,185,121,0.4)]'
                              : 'bg-[#2a0f0a] border-[#4b2519] text-gray-200 hover:bg-[#3a2418]'
                          }`}
                        >
                          {scene}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 底部操作按钮 */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsShareModalOpen(true)}
                    className="w-full bg-[#ff6b7b] text-white font-bold py-3 rounded-2xl hover:brightness-110 transition-colors text-sm"
                  >
                    分享海报
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (!carNumber) {
                        alert('请先填写LS9车架号')
                        return
                      }
                      alert('应用到车：功能待接入')
                    }}
                    className="w-full bg-gradient-to-r from-[#ff6b7b] via-[#ff7b55] to-[#ff9a4a] text-white font-bold py-3 rounded-2xl hover:brightness-110 transition-colors text-sm"
                  >
                    应用到车
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}

    </div>
  )
}

export default CreativeSquare
