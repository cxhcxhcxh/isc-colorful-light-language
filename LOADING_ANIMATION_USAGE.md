# 加载动画组件使用说明

## 组件位置
`src/components/LoadingAnimation.jsx`

## 功能特性

✨ **5种加载场景**
- 搜索热点 (`search`)
- 文案生成 (`copywriting`)
- 灯语图生成 (`light`)
- 海报生成 (`poster`)
- 下发到车 (`sync`)

🎨 **动画效果**
- 图标呼吸动画
- 文字淡入效果
- 进度条加载
- 粒子装饰效果
- 弹簧式弹出/消失

📱 **响应式设计**
- 自动适配PC和移动端
- 移动端图标和文字缩小
- 容器尺寸自适应

## 基本用法

```jsx
import { useState } from 'react'
import LoadingAnimation from '../components/LoadingAnimation'

function YourComponent() {
  const [isLoading, setIsLoading] = useState(false)

  const handleAction = async () => {
    setIsLoading(true)
    // 执行异步操作
    await someAsyncOperation()
    setIsLoading(false)
  }

  return (
    <>
      <button onClick={handleAction}>开始操作</button>
      
      <LoadingAnimation
        type="search"
        visible={isLoading}
        duration={3000}
        onComplete={() => console.log('加载完成')}
      />
    </>
  )
}
```

## Props 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | string | `'search'` | 加载类型，可选值见下方 |
| `visible` | boolean | `false` | 是否显示加载动画 |
| `duration` | number | `3000` | 持续时间(毫秒) |
| `onComplete` | function | - | 完成时的回调函数 |

### type 可选值

| 值 | 场景 | 文案 |
|---|------|------|
| `search` | 搜索热点 | 热点挖掘机已启动！AI疯狂抓取ing 再等2秒给你递热瓜～ |
| `copywriting` | 文案生成 | 梗王AI在线憋笑输出～ 脑洞文案加载中 笑点请勿走开！ |
| `light` | 灯语图生成 | AI正在破译汽车"悄悄话"～ 专属灯语图 再等1秒闪现！ |
| `poster` | 海报生成 | 晒圈神器加载中～ AI正在给灯语"美颜" 高颜值分享图来啦！ |
| `sync` | 下发到车 | 正在"烹饪"定制素材包～ 加载完成后 自动同步至你的智己座舱！ |

## 使用场景示例

### 1. 热点工坊 - 搜索热点
```jsx
<LoadingAnimation
  type="search"
  visible={isSearching}
  duration={2000}
  onComplete={() => setSearchResults(data)}
/>
```

### 2. 个性灯牌 - 文案生成
```jsx
<LoadingAnimation
  type="copywriting"
  visible={isGenerating}
  duration={3000}
  onComplete={() => setCopywriting(result)}
/>
```

### 3. 灯语图生成
```jsx
<LoadingAnimation
  type="light"
  visible={isGeneratingLight}
  duration={2500}
  onComplete={() => setLightImage(image)}
/>
```

### 4. 海报生成
```jsx
<LoadingAnimation
  type="poster"
  visible={isGeneratingPoster}
  duration={3000}
  onComplete={() => setPosterImage(image)}
/>
```

### 5. 下发到车
```jsx
<LoadingAnimation
  type="sync"
  visible={isSyncing}
  duration={4000}
  onComplete={() => showSuccessMessage()}
/>
```

## 演示页面

访问 `/loading-demo` 查看所有加载动画效果的实时演示。

## 设计规范

- **容器尺寸**: 480px × 240px (PC) / 90vw × 200px (移动端)
- **背景色**: rgba(0, 0, 0, 0.9)
- **圆角**: 16px
- **字体**: IMSans QH
- **进度条**: 橙色到粉色渐变
- **遮罩**: rgba(0, 0, 0, 0.7)

## 注意事项

1. 确保图标资源文件存在于 `/assets/` 目录
2. 组件使用 `framer-motion` 库，确保已安装
3. 使用 `useIsMobile` hook 进行响应式适配
4. 加载动画会自动居中显示并覆盖全屏
5. 完成后会自动触发 `onComplete` 回调

## 自定义扩展

如需添加新的加载类型，在 `configs` 对象中添加配置：

```jsx
const configs = {
  // ... 现有配置
  newType: {
    icon: '/assets/your-icon.png',
    title: '你的标题',
    subtitle: '你的副标题文案',
    iconSize: { width: 100, height: 100 }
  }
}
```
