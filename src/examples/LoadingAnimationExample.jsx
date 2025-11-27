/**
 * 加载动画集成示例
 * 展示如何在实际页面中使用LoadingAnimation组件
 */

import { useState } from 'react'
import LoadingAnimation from '../components/LoadingAnimation'

// ==================== 示例1: 热点搜索 ====================
export const HotSearchExample = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState([])

  const handleSearch = async () => {
    setIsSearching(true)
    
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // 设置结果
    setResults(['热点1', '热点2', '热点3'])
    setIsSearching(false)
  }

  return (
    <div>
      <button onClick={handleSearch}>搜索热点</button>
      
      <LoadingAnimation
        type="search"
        visible={isSearching}
        duration={2000}
        onComplete={() => console.log('搜索完成')}
      />
      
      {results.length > 0 && (
        <div>
          {results.map((item, i) => <div key={i}>{item}</div>)}
        </div>
      )}
    </div>
  )
}

// ==================== 示例2: 文案生成 ====================
export const CopywritingExample = () => {
  const [isGenerating, setIsGenerating] = useState(false)
  const [copywriting, setCopywriting] = useState('')

  const handleGenerate = async () => {
    setIsGenerating(true)
    
    // 模拟AI生成
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setCopywriting('这是AI生成的创意文案！')
    setIsGenerating(false)
  }

  return (
    <div>
      <button onClick={handleGenerate}>生成文案</button>
      
      <LoadingAnimation
        type="copywriting"
        visible={isGenerating}
        duration={3000}
      />
      
      {copywriting && <p>{copywriting}</p>}
    </div>
  )
}

// ==================== 示例3: 灯语图生成 ====================
export const LightImageExample = () => {
  const [isCreating, setIsCreating] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const handleCreate = async () => {
    setIsCreating(true)
    
    // 模拟图片生成
    await new Promise(resolve => setTimeout(resolve, 2500))
    
    setImageUrl('/path/to/generated/image.png')
    setIsCreating(false)
  }

  return (
    <div>
      <button onClick={handleCreate}>生成灯语图</button>
      
      <LoadingAnimation
        type="light"
        visible={isCreating}
        duration={2500}
        onComplete={() => console.log('灯语图生成完成')}
      />
      
      {imageUrl && <img src={imageUrl} alt="灯语图" />}
    </div>
  )
}

// ==================== 示例4: 海报生成 ====================
export const PosterExample = () => {
  const [isCreating, setIsCreating] = useState(false)
  const [posterUrl, setPosterUrl] = useState('')

  const handleCreate = async () => {
    setIsCreating(true)
    
    // 模拟海报生成
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setPosterUrl('/path/to/poster.png')
    setIsCreating(false)
  }

  return (
    <div>
      <button onClick={handleCreate}>生成海报</button>
      
      <LoadingAnimation
        type="poster"
        visible={isCreating}
        duration={3000}
      />
      
      {posterUrl && <img src={posterUrl} alt="分享海报" />}
    </div>
  )
}

// ==================== 示例5: 下发到车 ====================
export const SyncToCarExample = () => {
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncSuccess, setSyncSuccess] = useState(false)

  const handleSync = async () => {
    setIsSyncing(true)
    setSyncSuccess(false)
    
    // 模拟下发过程
    await new Promise(resolve => setTimeout(resolve, 4000))
    
    setSyncSuccess(true)
    setIsSyncing(false)
  }

  return (
    <div>
      <button onClick={handleSync}>下发到车</button>
      
      <LoadingAnimation
        type="sync"
        visible={isSyncing}
        duration={4000}
        onComplete={() => console.log('下发完成')}
      />
      
      {syncSuccess && <p>✅ 已成功同步至智己座舱</p>}
    </div>
  )
}

// ==================== 示例6: 多步骤流程 ====================
export const MultiStepExample = () => {
  const [currentStep, setCurrentStep] = useState(null)

  const handleWorkflow = async () => {
    // 步骤1: 生成文案
    setCurrentStep('copywriting')
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // 步骤2: 生成灯语图
    setCurrentStep('light')
    await new Promise(resolve => setTimeout(resolve, 2500))
    
    // 步骤3: 生成海报
    setCurrentStep('poster')
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // 步骤4: 下发到车
    setCurrentStep('sync')
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setCurrentStep(null)
    alert('全部完成！')
  }

  return (
    <div>
      <button onClick={handleWorkflow}>开始完整流程</button>
      
      <LoadingAnimation
        type="copywriting"
        visible={currentStep === 'copywriting'}
        duration={2000}
      />
      
      <LoadingAnimation
        type="light"
        visible={currentStep === 'light'}
        duration={2500}
      />
      
      <LoadingAnimation
        type="poster"
        visible={currentStep === 'poster'}
        duration={3000}
      />
      
      <LoadingAnimation
        type="sync"
        visible={currentStep === 'sync'}
        duration={3000}
      />
    </div>
  )
}

// ==================== 示例7: 带错误处理 ====================
export const ErrorHandlingExample = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleAction = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      // 模拟可能失败的操作
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.5 ? resolve() : reject(new Error('操作失败'))
        }, 2000)
      })
      
      console.log('成功')
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <button onClick={handleAction}>执行操作</button>
      
      <LoadingAnimation
        type="search"
        visible={isLoading}
        duration={2000}
      />
      
      {error && <p style={{ color: 'red' }}>❌ {error}</p>}
    </div>
  )
}

// ==================== 示例8: 自定义持续时间 ====================
export const CustomDurationExample = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [duration, setDuration] = useState(3000)

  const handleStart = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, duration))
    setIsLoading(false)
  }

  return (
    <div>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        min="1000"
        max="10000"
        step="500"
      />
      <button onClick={handleStart}>开始 ({duration}ms)</button>
      
      <LoadingAnimation
        type="light"
        visible={isLoading}
        duration={duration}
      />
    </div>
  )
}
