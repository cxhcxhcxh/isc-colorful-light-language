import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '../components/Navigation'
import { getAssetPath } from '../constants/paths'
const videoPics = getAssetPath('/videos/ISCpics.mp4')
import { Step1ImportImage } from '../components/WordsClanSteps'
import ShareModal from '../components/ShareModal'
import ImagePreviewModal from '../components/ImagePreviewModal'
import LoadingAnimation from '../components/LoadingAnimation'

const WordsClan = () => {
  const [imageInput, setImageInput] = useState('')
  const [rValue, setRValue] = useState(0)
  const [gValue, setGValue] = useState(0)
  const [pixelLevel, setPixelLevel] = useState(15)
  const [contrast, setContrast] = useState(150)
  const [brightness, setBrightness] = useState(150)
  const [vignette, setVignette] = useState(0)
  const [selectedPoster, setSelectedPoster] = useState(1)
  const [carNumber, setCarNumber] = useState('')
  const [step, setStep] = useState(1)
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  const [previewTitle, setPreviewTitle] = useState('')
  
  // 图片变换状态
  const [imageScale, setImageScale] = useState(1)
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  
  // 加载动画状态
  const [isProcessingImage, setIsProcessingImage] = useState(false)
  const [isCropping, setIsCropping] = useState(false)
  const [isGeneratingLight, setIsGeneratingLight] = useState(false)
  const [isGeneratingPoster, setIsGeneratingPoster] = useState(false)
  const [isSyncingToCar, setIsSyncingToCar] = useState(false)

  const handleUploadConfirm = () => {
    if (!imageInput) {
      alert('请输入或粘贴图片信息')
      return
    }
    setIsProcessingImage(true)
    setTimeout(() => {
      setIsProcessingImage(false)
      setStep(2)
    }, 2000)
  }

  // 图片操作函数
  const handleMoveUp = () => {
    setImagePosition(prev => ({ ...prev, y: prev.y - 10 }))
  }

  const handleMoveDown = () => {
    setImagePosition(prev => ({ ...prev, y: prev.y + 10 }))
  }

  const handleMoveLeft = () => {
    setImagePosition(prev => ({ ...prev, x: prev.x - 10 }))
  }

  const handleMoveRight = () => {
    setImagePosition(prev => ({ ...prev, x: prev.x + 10 }))
  }

  const handleZoomIn = () => {
    setImageScale(prev => Math.min(prev + 0.9, 3))
  }

  const handleZoomOut = () => {
    setImageScale(prev => Math.max(prev - 0.9, 0.5))
  }

  const handleConfirmSend = () => {
    if (!carNumber) {
      alert('请输入 LS9 车架号')
      return
    }
    setIsSyncingToCar(true)
    setTimeout(() => {
      setIsSyncingToCar(false)
      alert('已成功同步至智己座舱！')
    }, 4000)
  }

  const handleResetAll = () => {
    setImageInput('')
    setRValue(0)
    setGValue(0)
    setPixelLevel(15)
    setContrast(150)
    setBrightness(150)
    setVignette(0)
    setSelectedPoster(1)
    setCarNumber('')
    setStep(1)
  }

  const handleDownloadPoster = (posterId) => {
    if (!imageInput) {
      alert('请先上传图片')
      return
    }
    
    // 创建一个临时的 canvas 来生成下载图片
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    // 设置 canvas 尺寸为 3:4 比例
    canvas.width = 1080
    canvas.height = 1440
    
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      // 绘制背景色
      ctx.fillStyle = '#2a0f0a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // 绘制图片
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      
      // 转换为下载链接
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `ISC-灯语分享图-${posterId}-${Date.now()}.png`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }, 'image/png')
    }
    img.src = imageInput
  }

  return (
    <div className="min-h-screen">
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
            {/* 背景视频 */}
            <video
              src={videoPics}
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
      <section className="relative py-8 md:py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-coral/10 to-transparent pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text" style={{ lineHeight: '1.2' }}>
              ISC PICS 吃谷一族
            </h1>
            <img
              src={getAssetPath('/assets/幻彩星星.png')}
              alt="装饰星星"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>
          
          <p className="text-sm md:text-base lg:text-lg text-white/60 mb-4 md:mb-8" style={{ lineHeight: '1.4' }}>
            让所有看到的谷子的人，都能心情愉悦
          </p>
        </motion.div>
      </section>

      {/* Step Cards */}
      <div className="container mx-auto px-4 pb-6 max-w-full md:max-w-4xl lg:max-w-6xl" style={{ maxWidth: '1120px' }}>
        <div className="space-y-4">
          {/* Step 1: 导入图片 - 始终显示 */}
          <Step1ImportImage
            imageInput={imageInput}
            setImageInput={setImageInput}
            handleUploadConfirm={handleUploadConfirm}
          />

        {step >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#2a0f0a] rounded-xl px-6 pt-5 pb-7 border border-[#5a2316]/60 relative"
        >
          <div className="mb-4 flex items-center">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-[#5a3324] to-[#c16b3a] flex items-center justify-center text-white/80 pixel-font text-sm md:text-base">
              2
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-2">移动与裁剪</h3>
            <p className="text-gray-200 text-xs md:text-base mb-1">16:9 画幅裁剪</p>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              支持拖动 / 缩放，默认为图片居中且宽度撑满
            </p>
          </div>

          <div className="mb-4 overflow-hidden rounded-2xl bg-white aspect-[16/9]">
            {imageInput ? (
              <img 
                src={imageInput} 
                alt="上传的图片"
                className="w-full h-full object-contain"
                style={{
                  transform: `scale(${imageScale}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
              />
            ) : (
              <div className="w-full bg-white rounded-2xl px-4 py-4 flex flex-col items-center justify-center text-center aspect-[16/9] overflow-hidden">
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
                <p className="text-gray-500 text-xs md:text-sm">
                  16:9 画幅，裁剪预览框（支持框内拖动 / 缩放）
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-2 mb-5">
            <button
              type="button"
              onClick={handleMoveUp}
              className="flex-1 bg-[#cc4f4f] hover:brightness-110 rounded-2xl py-2 flex items-center justify-center transition-colors"
            >
              <img src={getAssetPath('/assets/上.png')} alt="上移" className="w-5 h-5 object-contain" />
            </button>
            <button
              type="button"
              onClick={handleMoveDown}
              className="flex-1 bg-[#cc4f4f] hover:brightness-110 rounded-2xl py-2 flex items-center justify-center transition-colors"
            >
              <img src={getAssetPath('/assets/下.png')} alt="下移" className="w-5 h-5 object-contain" />
            </button>
            <button
              type="button"
              onClick={handleMoveLeft}
              className="flex-1 bg-[#cc4f4f] hover:brightness-110 rounded-2xl py-2 flex items-center justify-center transition-colors"
            >
              <img src={getAssetPath('/assets/左.png')} alt="左移" className="w-5 h-5 object-contain" />
            </button>
            <button
              type="button"
              onClick={handleMoveRight}
              className="flex-1 bg-[#cc4f4f] hover:brightness-110 rounded-2xl py-2 flex items-center justify-center transition-colors"
            >
              <img src={getAssetPath('/assets/右.png')} alt="右移" className="w-5 h-5 object-contain" />
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              className="flex-1 bg-[#cc4f4f] hover:brightness-110 rounded-2xl py-2 flex items-center justify-center transition-colors"
            >
              <img src={getAssetPath('/assets/放大.png')} alt="放大" className="w-5 h-5 object-contain" />
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              className="flex-1 bg-[#cc4f4f] hover:brightness-110 rounded-2xl py-2 flex items-center justify-center transition-colors"
            >
              <img src={getAssetPath('/assets/缩小.png')} alt="缩小" className="w-5 h-5 object-contain" />
            </button>
          </div>

          <button
            type="button"
            className="w-full bg-[#ff6b7b] text-white font-bold py-3.5 px-4 rounded-2xl hover:brightness-110 transition-all text-sm"
            onClick={() => {
              setIsCropping(true)
              setTimeout(() => {
                setIsCropping(false)
                setStep(3)
              }, 2000)
            }}
          >
            确认裁剪
          </button>
        </motion.div>
        )}

        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-[#2a0f0a] rounded-xl px-6 pt-5 pb-7 border border-[#5a2316]/60 relative"
          >
          <div className="mb-4 flex items-center">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-[#5a3324] to-[#c16b3a] flex items-center justify-center text-white/80 pixel-font text-sm md:text-base">
              3
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-2">AI 处理灯语图</h3>
            <p className="text-gray-300 text-xs md:text-base mb-1">
              调整核心参数，微调灯语图的细节表现
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              数值仅作预览调节，不影响原始素材
            </p>
          </div>

          <div className="mb-5">
            <div 
              className="w-full bg-white/95 rounded-2xl overflow-hidden cursor-pointer hover:bg-white transition-colors aspect-[16/9] relative"
              onClick={() => {
                setPreviewImage(imageInput)
                setPreviewTitle('AI 处理灯语图预览')
                setIsPreviewModalOpen(true)
              }}
            >
              {imageInput ? (
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={imageInput}
                    alt="处理预览"
                    className="w-full h-full object-cover"
                    style={{
                      filter: `
                        contrast(${contrast}%)
                        brightness(${brightness}%)
                      `,
                      transform: `scale(${imageScale}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                      imageRendering: pixelLevel > 0 ? 'pixelated' : 'auto',
                      ...(pixelLevel > 0 && {
                        filter: `
                          contrast(${contrast}%)
                          brightness(${brightness}%)
                          blur(${pixelLevel * 0.1}px)
                        `
                      })
                    }}
                  />
                  {/* 暗角效果 */}
                  {vignette > 0 && (
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, transparent 0%, rgba(0,0,0,${vignette / 100}) 100%)`
                      }}
                    />
                  )}
                  {/* RGB 色彩叠加 */}
                  {(rValue > 0 || gValue > 0) && (
                    <div 
                      className="absolute inset-0 pointer-events-none mix-blend-screen"
                      style={{
                        backgroundColor: `rgb(${rValue}, ${gValue}, 0)`,
                        opacity: 0.3
                      }}
                    />
                  )}
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 py-4">
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
                  <p className="text-gray-600 text-xs md:text-sm">
                    16:9 尺寸，实时调节预览框
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4 mb-5 text-[10px] md:text-xs text-gray-200">
            <div>
              <div className="flex justify-between mb-1">
                <span>R 值</span>
                <span className="text-[#ff6b7b] font-medium">{rValue}</span>
              </div>
              <input
                type="range"
                min="0"
                max="255"
                value={rValue}
                onChange={(e) => setRValue(Number(e.target.value))}
                className="w-full accent-[#ff6b7b]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>G 值</span>
                <span className="text-[#ff6b7b] font-medium">{gValue}</span>
              </div>
              <input
                type="range"
                min="0"
                max="255"
                value={gValue}
                onChange={(e) => setGValue(Number(e.target.value))}
                className="w-full accent-[#ff6b7b]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>像素化级别</span>
                <span className="text-[#ff6b7b] font-medium">{pixelLevel}</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={pixelLevel}
                onChange={(e) => setPixelLevel(Number(e.target.value))}
                className="w-full accent-[#ff6b7b]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>对比度</span>
                <span className="text-[#ff6b7b] font-medium">{contrast}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="300"
                value={contrast}
                onChange={(e) => setContrast(Number(e.target.value))}
                className="w-full accent-[#ff6b7b]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>亮度</span>
                <span className="text-[#ff6b7b] font-medium">{brightness}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="300"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full accent-[#ff6b7b]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>暗角程度</span>
                <span className="text-[#ff6b7b] font-medium">{vignette}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={vignette}
                onChange={(e) => setVignette(Number(e.target.value))}
                className="w-full accent-[#ff6b7b]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setPreviewImage(null)
                setPreviewTitle('AI 处理灯语图预览')
                setIsPreviewModalOpen(true)
              }}
              className="w-full bg-[#3a1810] text-white font-semibold py-3 rounded-2xl hover:bg-[#4b2519] transition-colors text-sm"
            >
              放大预览
            </button>
            <button
              type="button"
              className="w-full bg-[#ff6b7b] text-white font-bold py-3 rounded-2xl hover:brightness-110 transition-colors text-sm"
              onClick={() => {
                setIsGeneratingLight(true)
                setTimeout(() => {
                  setIsGeneratingLight(false)
                  // 生成灯语图后，再生成海报
                  setIsGeneratingPoster(true)
                  setTimeout(() => {
                    setIsGeneratingPoster(false)
                    setStep(4)
                  }, 3000)
                }, 2500)
              }}
            >
              确定使用
            </button>
          </div>
        </motion.div>
        )}

        {step >= 4 && (
          <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#2a0f0a] rounded-xl px-6 pt-5 pb-7 border border-[#5a2316]/60 relative mb-4"
          >
            <div className="mb-4 flex items-center">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-[#5a3324] to-[#c16b3a] flex items-center justify-center text-white/80 pixel-font text-sm md:text-base">
                4
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2">AI 生成灯语分享图</h3>
              <p className="text-gray-300 text-xs md:text-base mb-1">
                为选中的灯语图，生成 2 种海报选项
              </p>
              <p className="text-gray-500 text-xs md:text-sm">
                16:9 画幅，将灯语铺在后备箱 ISC 位置，加上图标和内容
              </p>
            </div>

            {/* 海报预览区域 - 结构参考 HotWorkshop Step4 */}
            <div className="rounded-xl px-4 py-5 mb-4">
              <div className="flex gap-3">
                {[1, 2].map((id) => {
                  const isSelectedPoster = selectedPoster === id

                  return (
                    <div
                      key={id}
                      onClick={() => setSelectedPoster(id)}
                      className={`flex-1 relative rounded-xl cursor-pointer transition-all flex flex-col ${
                        isSelectedPoster
                          ? 'border border-[#ffb979]'
                          : 'border border-[#3d1a11] hover:border-[#4b2519]'
                      }`}
                    >
                      {/* 3:4 占位海报 */}
                      <div 
                        className="bg-[#2a0f0a] rounded-t-xl flex items-center justify-center cursor-pointer hover:bg-[#3a1810] transition-colors"
                        style={{ height: '300px' }}
                        onClick={(e) => {
                          e.stopPropagation()
                          setPreviewImage(null)
                          setPreviewTitle(`灯语分享图 ${id}`)
                          setIsPreviewModalOpen(true)
                        }}
                      >
                        <div className="w-10 h-10 rounded-md bg-[#3d1e16] flex items-center justify-center text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="w-6 h-6"
                          >
                            <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                            <circle cx="9" cy="10" r="1.5" />
                            <path d="M21 16l-4.5-4.5L12 16l-2-2-4 4" />
                          </svg>
                        </div>
                      </div>

                      {/* 底部操作栏：分享 / 下载 / 确认（仅选中时显示） */}
                      {isSelectedPoster && (
                        <div className="flex h-9 text-xs font-medium rounded-b-xl overflow-hidden">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation()
                              setIsShareModalOpen(true)
                            }}
                            className="flex-1 bg-[#3a1810] text-gray-200 hover:bg-[#4b2519] transition-colors"
                          >
                            分享
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDownloadPoster(id)
                            }}
                            className="flex-1 bg-[#3a1810] text-gray-200 hover:bg-[#4b2519] transition-colors"
                          >
                            下载
                          </button>
                          <button className="flex-1 bg-[#ff6b7b] text-white">
                            确认
                          </button>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* 车架号和下发 - 参考 HotWorkshop 结构 */}
          <div className="pt-4 space-y-3">
            <input
              type="text"
              value={carNumber}
              onChange={(e) => setCarNumber(e.target.value)}
              placeholder="填写LS9车架号"
              className="w-full bg-white text-gray-900 px-4 py-3 rounded-2xl focus:outline-none focus:ring-0 mb-2 placeholder:text-gray-400 text-sm text-center"
            />

            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-[#ff6b7b]" />
              <span className="text-white text-sm">上传到社区</span>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={handleConfirmSend}
                className="w-full bg-gradient-to-r from-[#ff6b7b] via-[#ff7b55] to-[#ff9a4a] text-white font-bold py-3.5 rounded-2xl hover:brightness-110 transition-colors text-sm"
              >
                确认灯语，下发到车
              </button>
              <button
                type="button"
                onClick={handleResetAll}
                className="w-full bg-[#3a3a3a] text-gray-200 py-3.5 rounded-2xl hover:bg-[#4a4a4a] transition-colors text-sm"
              >
                重置生成，返回第一步
              </button>
            </div>
          </div>
          </>
        )}

        <footer className="mt-8 text-center text-gray-500 text-xs">
          <p className="mb-2">智己LS9幻彩智慧灯语 内容创作平台</p>
          <p>软件创意产品策划 CXH</p>
        </footer>
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

      {/* Loading Animations */}
      <LoadingAnimation
        type="copywriting"
        visible={isProcessingImage}
        duration={2000}
        onComplete={() => {}}
      />

      <LoadingAnimation
        type="copywriting"
        visible={isCropping}
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

export default WordsClan
