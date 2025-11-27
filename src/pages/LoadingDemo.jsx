import { useState } from 'react'
import LoadingAnimation from '../components/LoadingAnimation'

const LoadingDemo = () => {
  const [activeLoading, setActiveLoading] = useState(null)

  const loadingTypes = [
    { 
      type: 'search', 
      label: '搜索热点',
      desc: '新顺序：幻影→量子→螺旋→量子→网格',
      icon: '🔍',
      color: 'from-orange-500 to-red-500'
    },
    { 
      type: 'copywriting', 
      label: '文案生成',
      desc: '新顺序：幻影→量子→螺旋→量子→网格',
      icon: '✍️',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      type: 'light', 
      label: '灯语图生成',
      desc: '新顺序：幻影→量子→螺旋→量子→网格',
      icon: '💡',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      type: 'poster', 
      label: '海报生成',
      desc: '新顺序：幻影→量子→螺旋→量子→网格',
      icon: '🎨',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      type: 'sync', 
      label: '下发到车',
      desc: '新顺序：幻影→量子→螺旋→量子→网格',
      icon: '🚗',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const handleLoadingComplete = () => {
    console.log('Loading completed!')
    setActiveLoading(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <img src="/assets/幻彩星星.png" alt="star" className="w-10 h-10 animate-pulse" />
            加载动画演示
            <img src="/assets/幻彩星星.png" alt="star" className="w-10 h-10 animate-pulse" />
          </h1>
          <p className="text-gray-400 text-lg mb-4">
            Mirage → Quantum → Helix → Quantum → Grid
          </p>
          <div className="flex items-center justify-center gap-2 text-sm flex-wrap">
            <span className="text-pink-400">💫 幻影</span>
            <span className="text-gray-500">→</span>
            <span className="text-purple-400">⚛️ 量子</span>
            <span className="text-gray-500">→</span>
            <span className="text-orange-400">🌀 螺旋</span>
            <span className="text-gray-500">→</span>
            <span className="text-purple-400">⚛️ 量子</span>
            <span className="text-gray-500">→</span>
            <span className="text-blue-400">⬛ 网格</span>
          </div>
        </div>

        {/* 网格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {loadingTypes.map(({ type, label, desc, icon, color }) => (
            <button
              key={type}
              onClick={() => setActiveLoading(type)}
              className="group relative overflow-hidden bg-gray-800/50 hover:bg-gray-800 backdrop-blur-sm border border-gray-700 hover:border-gray-600 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* 背景渐变 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* 内容 */}
              <div className="relative z-10 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">{icon}</span>
                  </div>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-2">
                  {label}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {desc}
                </p>
                
                <div className="inline-flex items-center gap-2 text-orange-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>点击查看</span>
                  <span>→</span>
                </div>
              </div>

              {/* 装饰性边框 */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {/* 功能说明 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>✨</span>
              动画特性
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">▸</span>
                <span>新的动画顺序，5个动画依次播放</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">▸</span>
                <span>量子动画出现2次，增强节奏感</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">▸</span>
                <span>每个动画占总时长的1/5</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">▸</span>
                <span>右上角5个彩色指示器</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">▸</span>
                <span>建议总时长5秒，每个动画1秒</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>🎬</span>
              动画序列
            </h2>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">💫</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">1. Mirage 幻影</h3>
                  <p className="text-gray-400 text-xs">0-20%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">⚛️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">2. Quantum 量子</h3>
                  <p className="text-gray-400 text-xs">20-40%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🌀</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">3. Helix 螺旋</h3>
                  <p className="text-gray-400 text-xs">40-60%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">⚛️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">4. Quantum 量子</h3>
                  <p className="text-gray-400 text-xs">60-80%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">⬛</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">5. Grid 网格</h3>
                  <p className="text-gray-400 text-xs">80-100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 使用说明 */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">💡</span>
            使用说明
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">导入组件</h3>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">
{`import LoadingAnimation from '../components/LoadingAnimation'`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">使用示例</h3>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">
{`<LoadingAnimation
  type="search"
  visible={isLoading}
  duration={5000}  // 总时长5秒，每个动画1秒
  onComplete={() => console.log('完成')}
/>`}
                </pre>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <h4 className="text-orange-300 font-semibold mb-2">💡 新顺序说明</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 以幻影开始，营造神秘感</li>
                <li>• 量子动画出现2次，形成呼应</li>
                <li>• 螺旋在中间，作为过渡</li>
                <li>• 以网格结束，稳定收尾</li>
                <li>• 右上角5个彩色指示器对应不同动画</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 加载动画组件 */}
      <LoadingAnimation
        type={activeLoading}
        visible={activeLoading !== null}
        duration={5000}
        onComplete={handleLoadingComplete}
      />
    </div>
  )
}

export default LoadingDemo
