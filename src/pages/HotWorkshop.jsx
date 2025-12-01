import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, TrendingUp, Sparkles, Share2, Download, Car } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Step1CollectTopics, Step2GenerateCopy, Step3GenerateLight, Step4GeneratePoster } from '../components/HotWorkshopSteps'
import ShareModal from '../components/ShareModal'
import LoadingAnimation from '../components/LoadingAnimation'
import { getAssetPath } from '../constants/paths'
const videoNews = '/isc-colorful-light-language/videos/ISCnews.mp4'

const HotWorkshop = () => {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedCopy, setSelectedCopy] = useState(null)
  const [selectedLight, setSelectedLight] = useState(null)
  const [carNumber, setCarNumber] = useState('')
  const [isLoadingTopics, setIsLoadingTopics] = useState(false)
  const [hasCollectedTopics, setHasCollectedTopics] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showCopyOptions, setShowCopyOptions] = useState(false)
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  
  // 加载动画状态
  const [isGeneratingCopy, setIsGeneratingCopy] = useState(false)
  const [isGeneratingLight, setIsGeneratingLight] = useState(false)
  const [isGeneratingPoster, setIsGeneratingPoster] = useState(false)
  const [isSyncingToCar, setIsSyncingToCar] = useState(false)

  // 模拟热点数据
  const mockHotTopics = [
    { id: 1, title: '冬日限定雪景大赏', source: '微博热搜', rank: 1 },
    { id: 2, title: '周末出游攻略分享', source: '抖音热榜', rank: 2 },
    { id: 3, title: '美食探店新发现', source: '头条热榜', rank: 3 },
    { id: 4, title: '科技新品发布会', source: '微博热搜', rank: 4 },
    { id: 5, title: '音乐节现场直击', source: '抖音热榜', rank: 5 },
  ]

  // 模拟文案数据
  const mockCopyOptions = [
    { id: 1, text: '冬日限定 雪景大赏', type: 'cn' },
    { id: 2, text: 'Winter Snow View', type: 'en' },
    { id: 3, text: '浪漫雪景 温暖相伴', type: 'cn' },
    { id: 4, text: 'Snowy Romance', type: 'en' },
    { id: 5, text: '雪落人间 美不胜收', type: 'cn' },
  ]

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
    // 显示文案生成加载动画
    setIsGeneratingCopy(true)
    setTimeout(() => {
      setIsGeneratingCopy(false)
      setShowCopyOptions(true)
    }, 2000)
  }

  const handleCopySelect = (copy) => {
    setSelectedCopy(copy)
    // 显示灯语图生成加载动画
    setIsGeneratingLight(true)
    setTimeout(() => {
      setIsGeneratingLight(false)
    }, 2500)
  }

  const handleLightSelect = (light) => {
    setSelectedLight(light)
    // 显示海报生成加载动画
    setIsGeneratingPoster(true)
    setTimeout(() => {
      setIsGeneratingPoster(false)
    }, 3000)
  }

  const handleStartCollect = () => {
    setIsLoadingTopics(true)
    setHasCollectedTopics(false)
    // 使用搜索热点加载动画
    setTimeout(() => {
      setIsLoadingTopics(false)
      setHasCollectedTopics(true)
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
    setSelectedTopic(null)
    setSelectedCopy(null)
    setSelectedLight(null)
    setShowCopyOptions(false)
    setHasCollectedTopics(false)
  }

  return (
    <div className="min-h-screen">
      {/* Video Section */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="relative bg-gray-800/50 overflow-hidden aspect-video flex items-center justify-center backdrop-blur-sm">
            {/* 返回按钮 - 左上角 */}
            <Link
              to="/"
              className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 text-gray-200 text-sm hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回</span>
            </Link>

            {/* 视频占位符 */}
            <video
              src={videoNews}
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text" style={{ lineHeight: '1.2' }}>
              ISC NEWS 热点工坊
            </h1>
            <img
              src={getAssetPath('/assets/幻彩星星.png')}
              alt="装饰星星"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>
          
          <p className="text-base md:text-lg lg:text-xl text-white/60 mb-4 md:mb-8" style={{ lineHeight: '1.4' }}>
            挖掘每日热点，提供更多时髦新鲜感
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 pb-6 max-w-full md:max-w-4xl lg:max-w-6xl" style={{ maxWidth: '1120px' }}>

        {/* Vertical Step Cards */}
        <div className="space-y-4">
          {/* Step 1: 选择热点 - 始终显示 */}
          <Step1CollectTopics
            isLoadingTopics={isLoadingTopics}
            hasCollectedTopics={hasCollectedTopics}
            mockHotTopics={mockHotTopics}
            selectedTopic={selectedTopic}
            handleStartCollect={handleStartCollect}
            handleTopicSelect={handleTopicSelect}
          />

          {/* Step 2: 生成文案 - 选择热点后显示 */}
          {showCopyOptions && (
            <Step2GenerateCopy
              mockCopyOptions={mockCopyOptions}
              selectedCopy={selectedCopy}
              handleCopySelect={handleCopySelect}
              handleReset={handleReset}
            />
          )}

          {/* Step 3: 生成灯语图 - 选择文案后显示 */}
          {selectedCopy && (
            <Step3GenerateLight
              selectedCopy={selectedCopy}
              selectedLight={selectedLight}
              handleLightSelect={handleLightSelect}
              handleReset={handleReset}
            />
          )}

          {/* Step 4: 生成灯语分享图 - 选择灯语图后显示 */}
          {selectedLight && (
            <Step4GeneratePoster
              selectedLight={selectedLight}
              handleLightSelect={handleLightSelect}
              carNumber={carNumber}
              setCarNumber={setCarNumber}
              isLoading={isLoading}
              handleSendToCar={handleSendToCar}
              handleReset={handleReset}
              setIsShareModalOpen={setIsShareModalOpen}
            />
          )}
        </div>


        {/* Footer */}
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

      {/* Loading Animations - 5个动画组合变换 */}
      <LoadingAnimation
        type="search"
        visible={isLoadingTopics}
        duration={2000}
        onComplete={() => {}}
      />

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

export default HotWorkshop
