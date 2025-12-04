import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Sparkles, TrendingUp, Image, List, FileText } from 'lucide-react'
import { useIsMobile } from '../hooks/useIsMobile'
import { getAssetPath } from '../constants/paths'
import Navigation from '../components/Navigation'
const videoMain = getAssetPath('/videos/ISCmain.mp4')

const HomePage = () => {
  const isMobile = useIsMobile()
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(null)

  const to2x = (p) => p.replace(/(\.[a-zA-Z0-9]+)$/,'@2x$1')

  const features = [
    {
      pcImage: '/assets/热点工坊.png',
      mobileBg: '/assets/mobile/热点工坊背景.png',
      mobileBgSelected: '/assets/mobile/热点工坊点击状态.png',
      mobileIcon: '/assets/mobile/热点工坊图标@2x.png?v=3',
      title: '热点工坊',
      subtitle: 'ISC NEWS',
      description: '挖掘每日热点\n提供更多时髦新鲜感AI工作流趋势预测，时效性领先行业',
      link: '/hot-workshop',
    },
    {
      pcImage: '/assets/个性灯牌.png',
      mobileBg: '/assets/mobile/个性灯牌背景.png',
      mobileBgSelected: '/assets/mobile/个性灯牌点击状态.png',
      mobileIcon: '/assets/mobile/个性灯牌图标@2x.png?v=3',
      title: '个性灯牌',
      subtitle: 'ISC WORDS',
      description: '智己为自己代言\n随行的专属广告位',
      link: '/personal-sign',
    },
    {
      pcImage: '/assets/吃谷一族.png',
      mobileBg: '/assets/mobile/吃谷一族背景.png',
      mobileBgSelected: '/assets/mobile/吃谷一族点击状态.png',
      mobileIcon: '/assets/mobile/吃谷一族图标@2x.png?v=3',
      title: '吃谷一族',
      subtitle: 'ISC PICS',
      description: '让所有看到谷子的人\n都能心情愉悦',
      link: '/words-clan',
    },
    {
      pcImage: '/assets/共创广场.png',
      mobileBg: '/assets/mobile/共创广场背景.png',
      mobileBgSelected: '/assets/mobile/共创广场点击状态.png',
      mobileIcon: '/assets/mobile/共创广场图标@2x.png?v=3',
      title: '共创广场',
      subtitle: 'ISC LISTS',
      description: '汇集年友创意\n共创出街提案',
      link: '/creative-square',
    },
  ]

  const topFeatures = [
    { 
      pcImage: '/assets/内容生成.png', 
      mobileImage: '/assets/mobile/内容实时生成背景.png',
      mobileIcon: '/assets/mobile/内容实时生成@2x.png',
      text: '内容实时生成',
      subtitle: 'AI网页工作流'
    },
    { 
      pcImage: '/assets/推送即时到车.png', 
      mobileImage: '/assets/mobile/推送即时到车背景.png',
      mobileIcon: '/assets/mobile/推送即时到车@2x.png',
      text: '推送即时到车',
      subtitle: 'AI RPA桌面工作流'
    },
    { 
      pcImage: '/assets/低延时快响应.png', 
      mobileImage: '/assets/mobile/低延时快响应背景.png',
      mobileIcon: '/assets/mobile/低延迟快响应@2x.png',
      text: '低延时快响应',
      subtitle: '好用是好玩的基础'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* 导航条 */}
      <Navigation />

      {/* Video Section */}
      <section className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="relative bg-gray-800/50 overflow-hidden aspect-video flex items-center justify-center">
            {/* 背景视频 */}
            <video
              src={videoMain}
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
      <section className="relative py-10 px-4 overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto relative z-10"
        >
          {isMobile ? (
            <>
              <div className="flex items-center justify-center gap-2 mb-4">
                <h1 className="text-lg font-bold gradient-text" style={{ lineHeight: '20px' }}>
                  幻彩智慧灯语 · 内容创作平台
                </h1>
                <img src={getAssetPath('/assets/幻彩星星.png')} alt="star" className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#FF6B3D]"></div>
                <span className="text-sm font-bold" style={{ color: '#FDDBCE', lineHeight: '18px' }}>三大目标</span>
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-[#FF6B3D]"></div>
              </div>

              {/* Top Features - Mobile 深色卡片 + 背景素材 */}
              <div className="space-y-3 mb-10">
                {topFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    className="rounded-2xl px-4 py-4 flex items-center justify-between shadow-card overflow-hidden"
                    style={{
                      backgroundColor: '#1b1513',
                      backgroundImage: feature.mobileImage ? `url(${getAssetPath(feature.mobileImage)})` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="flex-1 mr-4">
                      <h3 className="text-white text-xs font-semibold mb-1">
                        {feature.text}
                      </h3>
                      <p className="text-[10px] text-gray-400">
                        {feature.subtitle}
                      </p>
                    </div>
                    <img
                      src={getAssetPath(feature.mobileIcon)}
                      alt={feature.text}
                      className="w-12 h-12 flex-shrink-0"
                    />
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <h1 className="text-3xl font-bold gradient-text" style={{ lineHeight: '42px' }}>
                  幻彩智慧灯语 · 内容创作平台
                </h1>
                <img src={getAssetPath('/assets/幻彩星星.png')} alt="star" className="w-8 h-8 animate-pulse" />
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-12">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[16px] border-l-[#FF6B3D]"></div>
                <p className="text-xl font-semibold gradient-text">三大目标</p>
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[16px] border-r-[#FF6B3D]"></div>
              </div>

              {/* Top Features - PC 居中且与稿面一致尺寸 */}
              <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-16 mx-auto" style={{ maxWidth: '1080px' }}>
                {topFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex-1 md:flex-none"
                    style={{ width: 'calc((100% - 64px) / 3)' }}
                  >
                    <div 
                      className="relative overflow-visible rounded-[24px] shadow-none p-6 pt-12 flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.01]"
                      style={{
                        backgroundImage: `url(${getAssetPath(to2x(feature.pcImage))})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center top',
                        backgroundRepeat: 'no-repeat',
                        minHeight: '240px',
                        boxShadow: 'none',
                        filter: 'none'
                      }}
                    >
                      {/* 文字内容在底部 */}
                      <div className="relative z-10">
                        <h3 className="text-white text-lg font-bold mb-2">
                          {feature.text}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Main Features Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {isMobile ? (
            <>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-brand-orange mb-4 text-center"
              >
                幻彩智慧灯语的多元创作通道
              </motion.h2>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link to={feature.link}>
                      <div
                        className="rounded-2xl flex items-center justify-between shadow-card overflow-hidden relative"
                        style={{
                          backgroundImage: feature.mobileBg
                            ? `url(${getAssetPath(activeFeatureIndex === index && feature.mobileBgSelected ? feature.mobileBgSelected : feature.mobileBg)})`
                            : undefined,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: '140px',
                          padding: '32px 16px 16px 16px'
                        }}
                        onMouseDown={() => setActiveFeatureIndex(index)}
                        onMouseUp={() => setActiveFeatureIndex(null)}
                        onMouseLeave={() => setActiveFeatureIndex(null)}
                      >
                        <div className="flex-1 mr-3 flex flex-col justify-center">
                          <p className="text-sm font-normal mb-1 pixel-text text-white" style={{ lineHeight: '15px' }}>
                            {feature.subtitle}
                          </p>
                          <p className="text-base font-bold mb-1 text-white" style={{ lineHeight: '22px' }}>
                            {feature.title}
                          </p>
                          <p className="text-[10px] text-white/50 whitespace-pre-line" style={{ lineHeight: '15px' }}>
                            {feature.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-center flex-shrink-0" style={{ width: '99px', height: '93px' }}>
                          <img
                            src={getAssetPath(feature.mobileIcon)}
                            alt={feature.title}
                            className="object-contain"
                            style={{ width: '99px', height: '93px' }}
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="section-title"
              >
                <span className="gradient-text flex items-center justify-center gap-3">
                  幻彩智慧灯语的多元创作通道
                  <img src={getAssetPath('/assets/幻彩星星.png')} alt="star" className="w-8 h-8 animate-pulse" />
                </span>
              </motion.h2>

              {/* 热点工坊 - 大卡片 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto mb-6"
                style={{ maxWidth: '1080px' }}
              >
                <Link to={features[0].link}>
                  <div 
                    className="relative group hover:scale-[1.01] transition-transform duration-300 overflow-hidden rounded-[24px] flex items-center justify-between"
                    style={{
                      backgroundImage: `url(${getAssetPath(features[0].pcImage)})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '300px',
                      padding: '40px 60px'
                    }}>
                    {/* 左侧文字 */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-normal mb-2 pixel-font text-white drop-shadow-lg" style={{ lineHeight: '32px' }}>
                        {features[0].subtitle}
                      </h3>
                      <p className="text-2xl font-bold mb-4 flex items-center gap-2 text-white drop-shadow-md" style={{ lineHeight: '38px' }}>
                        <img src={getAssetPath('/assets/像素小星星@2x.png')} alt="star" className="w-5 h-5" />
                        {features[0].title}
                      </p>
                      <p className="text-white/80 text-lg leading-6 drop-shadow-md max-w-lg whitespace-pre-line">
                        {features[0].description}
                      </p>
                    </div>
                    {/* 右侧预留图标空间 */}
                    <div className="w-48 h-48 flex-shrink-0"></div>
                  </div>
                </Link>
              </motion.div>

              {/* 其他三个 - 小卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto" style={{ maxWidth: '1080px' }}>
                {features.slice(1).map((feature, index) => (
                  <motion.div
                    key={index + 1}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 1) * 0.1 }}
                  >
                    <Link to={feature.link}>
                      <div 
                        className="relative group hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-2xl flex flex-col"
                        style={{
                          backgroundImage: `url(${getAssetPath(feature.pcImage)})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          width: '340px',
                          height: '400px',
                          padding: '44px 24px 24px 24px'
                        }}>
                        {/* 顶部文字 */}
                        <div className="mb-3 text-center">
                          <h3 className="text-3xl font-normal mb-1 pixel-font text-white drop-shadow-lg" style={{ lineHeight: '32px' }}>
                            {feature.subtitle}
                          </h3>
                          <p className="text-xl font-bold flex items-center justify-center gap-2 text-white drop-shadow-md" style={{ lineHeight: '29px' }}>
                            <img src={getAssetPath('/assets/像素小星星@2x.png')} alt="star" className="w-5 h-5" />
                            {feature.title}
                          </p>
                        </div>
                        {/* 占位空间 */}
                        <div className="flex-1"></div>
                        {/* 底部描述 */}
                        <div className="text-center">
                          <p className="text-white/80 text-sm leading-[18px] drop-shadow-md whitespace-pre-line">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-brand-coral/20 mt-20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src={getAssetPath('/assets/幻彩星星.png')} alt="logo" className="w-6 h-6" />
            <p className="text-gray-400 text-xs font-medium">
              智己 LS9 幻彩智慧灯语 内容创作平台
            </p>
          </div>
          <p className="text-gray-500 text-[10px]">
            © 幻彩智慧灯语 版权所有 CXH
          </p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
