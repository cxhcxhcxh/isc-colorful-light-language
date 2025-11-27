import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Type, Sparkles, Share2, Download, Car } from 'lucide-react'
import { Link } from 'react-router-dom'
import videoWords from '../../ISCvideos/ISCvideos/ISCwords.mp4'
import { Step1InputText, Step2GenerateLight, Step3GeneratePoster } from '../components/PersonalSignSteps'
import ShareModal from '../components/ShareModal'
import LoadingAnimation from '../components/LoadingAnimation'

const PersonalSignWorkshop = () => {
  const [inputText, setInputText] = useState('')
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedCopy, setSelectedCopy] = useState(null)
  const [selectedLight, setSelectedLight] = useState(null)
  const [carNumber, setCarNumber] = useState('')
  const [isLoadingTopics, setIsLoadingTopics] = useState(false)
  const [hasCollectedTopics, setHasCollectedTopics] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showCopyOptions, setShowCopyOptions] = useState(false)
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [showSteps, setShowSteps] = useState(false)
  const [showAiCopyOptions, setShowAiCopyOptions] = useState(false)
  
  // 加载动画状态
  const [isGeneratingCopy, setIsGeneratingCopy] = useState(false)
  const [isGeneratingLight, setIsGeneratingLight] = useState(false)
  const [isGeneratingPoster, setIsGeneratingPoster] = useState(false)
  const [isSyncingToCar, setIsSyncingToCar] = useState(false)

  const mockHotTopics = [
    { id: 1, title: '冬日限定雪景大赏', source: '微博热搜', rank: 1 },
    { id: 2, title: '周末出游攻略分享', source: '抖音热榜', rank: 2 },
    { id: 3, title: '美食探店新发现', source: '头条热榜', rank: 3 },
    { id: 4, title: '科技新品发布会', source: '微博热搜', rank: 4 },
    { id: 5, title: '音乐节现场直击', source: '抖音热榜', rank: 5 },
  ]

  const mockCopyOptions = [
    { id: 1, text: '智己为自己代言', type: 'cn' },
    { id: 2, text: 'IM For Myself', type: 'en' },
    { id: 3, text: '随行专属广告位', type: 'cn' },
    { id: 4, text: 'My Own Billboard', type: 'en' },
    { id: 5, text: '智己 LS9', type: 'cn' },
  ]

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
    setShowCopyOptions(true)
  }

  const handleCopySelect = (copy) => {
    setSelectedCopy(copy)
    setShowCopyOptions(false)
  }

  const handleLightSelect = (light) => {
    setIsGeneratingPoster(true)
    setTimeout(() => {
      setIsGeneratingPoster(false)
      setSelectedLight(light)
    }, 3000)
  }

  const handleApplyDirect = () => {
    if (!inputText) {
      alert('请先输入文案')
      return
    }
    // 直接应用：跳过AI文案步骤，直接设置文案并显示灯语图步骤
    setSelectedCopy({ id: 0, text: inputText })
    setShowAiCopyOptions(false)
  }

  const handleSelectAiCopy = (copy) => {
    setIsGeneratingLight(true)
    setTimeout(() => {
      setIsGeneratingLight(false)
      setSelectedCopy(copy)
    }, 2500)
  }

  const handleAiPolish = () => {
    if (!inputText) {
      alert('请先输入文案')
      return
    }
    // AI润色：显示AI文案选择步骤
    setIsGeneratingCopy(true)
    setTimeout(() => {
      setIsGeneratingCopy(false)
      setShowAiCopyOptions(true)
      setSelectedCopy(null)
    }, 2000)
  }

  const handleSendToCar = () => {
    if (!carNumber) {
      alert('请输入车架号')
      return
    }
    setIsLoading(true)
    setIsSyncingToCar(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSyncingToCar(false)
      alert('已成功同步至智己座舱！')
    }, 4000)
  }

  const handleReset = () => {
    setInputText('')
    setSelectedTopic(null)
    setSelectedCopy(null)
    setSelectedLight(null)
    setShowCopyOptions(false)
    setHasCollectedTopics(false)
    setShowAiCopyOptions(false)
  }

  return (
    <div className="min-h-screen">
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="relative bg-gray-800/50 overflow-hidden aspect-video flex items-center justify-center backdrop-blur-sm">
            <Link
              to="/"
              className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 text-gray-200 text-sm hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回</span>
            </Link>

            <video
              src={videoWords}
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

      <section className="relative py-6 md:py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-coral/10 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10"
        >
          <div className="relative inline-block">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 gradient-text drop-shadow-lg" style={{ lineHeight: '1.2' }}>
              ISC WORDS 个性灯牌
            </h1>
            <div className="hidden md:block absolute -top-4 -right-10 w-6 h-6 md:w-8 md:h-8 pointer-events-none select-none">
              <img
                src="/assets/幻彩星星.png"
                alt="装饰星星"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-2 md:mb-3" style={{ lineHeight: '1.4' }}>
            智己为自己代言，随行的专属广告位
          </p>

          <div className="mx-auto mb-3 md:mb-4 w-3 h-2 md:w-4 md:h-3 pointer-events-none select-none">
            <img
              src="/assets/浅色三角形.png"
              alt="装饰三角形"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 pb-6 max-w-full md:max-w-4xl lg:max-w-6xl" style={{ maxWidth: '1120px' }}>
        <div className="space-y-4">
          {/* Step 1: 输入文案 - 始终显示 */}
          <Step1InputText
            inputText={inputText}
            setInputText={setInputText}
            handleApplyDirect={handleApplyDirect}
            handleAiPolish={handleAiPolish}
          />

          {/* Step 1.5: AI文案选择 - 点击直接生成后显示 */}
          {showAiCopyOptions && (
            <motion.div
              key="ai-copy-step"
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
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center" style={{ lineHeight: '1.2' }}>AI 生成有梗文案</h3>
              </div>

              {/* 描述文字 - 居中 */}
              <div className="text-center mb-4 md:mb-6">
                <p className="text-white/60 text-sm md:text-base lg:text-xl leading-relaxed">
                  为选中的热点内容，生成 5 种中英文选项<br />
                  只使用简单内容和笔画字符，长度不超过 8 个中文字符
                </p>
              </div>

              {/* 选中热点文案条 */}
              <div className="mx-auto rounded-xl md:rounded-2xl mb-4 md:mb-6 text-center flex items-center justify-center" style={{ maxWidth: '1020px', height: '60px', background: 'rgba(43, 16, 10, 0.8)' }}>
                <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold truncate px-4" style={{ lineHeight: '1.2' }}>{inputText}</span>
              </div>

              {/* 文案列表容器 */}
              <div className="rounded-xl md:rounded-2xl mx-auto space-y-2 md:space-y-3 mb-4 md:mb-6 p-4 md:p-6 lg:p-8" style={{ maxWidth: '1020px', background: 'rgba(43, 16, 10, 0.8)' }}>
                <h5 className="text-white text-center text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6" style={{ lineHeight: '1.2' }}>文案 5 种</h5>

                <div className="space-y-2 md:space-y-3 mx-auto" style={{ maxWidth: '960px' }}>
                  {mockCopyOptions.map((copy) => (
                    <div
                      key={copy.id}
                      onClick={() => handleSelectAiCopy(copy)}
                      className={`relative rounded-xl md:rounded-2xl cursor-pointer transition-all flex items-center justify-center ${
                        selectedCopy?.id === copy.id
                          ? 'bg-[#8D4535] border-2 border-[#ffb979]'
                          : 'bg-[#381912] hover:bg-[#4a2318]'
                      }`}
                      style={{ height: '60px' }}
                    >
                      {/* 文案文本：居中 */}
                      <span className="text-[#fff1e7]/80 text-base md:text-xl lg:text-2xl text-center pointer-events-none select-none px-2" style={{ lineHeight: '1.2' }}>
                        {copy.text}
                      </span>

                      {/* 右侧确认按钮 */}
                      {selectedCopy?.id === copy.id && (
                        <button className="absolute inset-y-0 right-0 bg-[#ff5b4a] text-white text-xs md:text-sm px-4 md:px-6 rounded-r-xl md:rounded-r-2xl font-medium hover:brightness-110 transition-colors flex items-center justify-center">
                          确认
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: 生成灯语图 - 选择文案后显示 */}
          {selectedCopy && (
            <Step2GenerateLight
              inputText={inputText}
              selectedLight={selectedLight}
              handleLightSelect={handleLightSelect}
              handleReset={handleReset}
            />
          )}

          {/* Step 4: 生成分享图 - 选择灯语图后显示 */}
          {selectedLight && (
            <Step3GeneratePoster
              selectedLight={selectedLight}
              handleLightSelect={handleLightSelect}
              handleReset={handleReset}
              setIsShareModalOpen={setIsShareModalOpen}
              carNumber={carNumber}
              setCarNumber={setCarNumber}
              isLoading={isLoading}
              handleSendToCar={handleSendToCar}
            />
          )}
        </div>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p className="mb-2">智己LS9幻彩智慧灯语 内容创作平台</p>
          <p>软件创意产品策划 CXH</p>
        </footer>
      </div>

      {/* Share Modal */}
      <ShareModal 
        isOpen={isShareModalOpen && selectedLight?.posterId} 
        onClose={() => setIsShareModalOpen(false)} 
      />

      {/* Loading Animations */}
      <LoadingAnimation
        type="copywriting"
        visible={isGeneratingCopy}
        duration={2000}
        onComplete={() => {}}
      />

      <LoadingAnimation
        type="light"
        visible={isGeneratingLight}
        duration={2500}
        onComplete={() => {}}
      />

      <LoadingAnimation
        type="poster"
        visible={isGeneratingPoster}
        duration={3000}
        onComplete={() => {}}
      />

      <LoadingAnimation
        type="sync"
        visible={isSyncingToCar}
        duration={4000}
        onComplete={() => {}}
      />
    </div>
  )
}

export default PersonalSignWorkshop
