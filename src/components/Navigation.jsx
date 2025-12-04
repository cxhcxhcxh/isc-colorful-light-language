import { Link } from 'react-router-dom'
import { getAssetPath } from '../constants/paths'

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 h-14 lg:h-20" style={{ background: 'transparent' }}>
      <div className="container mx-auto px-4 flex items-center justify-between h-full" style={{ maxWidth: '1440px' }}>
        {/* Logo */}
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img 
            src={getAssetPath('/assets/image15.png')} 
            alt="Logo" 
            className="h-5 lg:h-7"
            style={{ width: 'auto' }}
          />
        </Link>

        {/* 导航链接 */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-8 xl:gap-16 overflow-x-auto">
          <Link 
            to="/hot-workshop" 
            className="text-white/60 hover:text-white transition-colors font-bold text-xs sm:text-sm lg:text-lg xl:text-xl whitespace-nowrap"
            style={{ lineHeight: '28px' }}
          >
            热点工坊
          </Link>
          <Link 
            to="/personal-sign" 
            className="text-white/60 hover:text-white transition-colors font-bold text-xs sm:text-sm lg:text-lg xl:text-xl whitespace-nowrap"
            style={{ lineHeight: '28px' }}
          >
            个性灯牌
          </Link>
          <Link 
            to="/words-clan" 
            className="text-white/60 hover:text-white transition-colors font-bold text-xs sm:text-sm lg:text-lg xl:text-xl whitespace-nowrap"
            style={{ lineHeight: '28px' }}
          >
            吃谷一族
          </Link>
          <Link 
            to="/creative-square" 
            className="text-white/60 hover:text-white transition-colors font-bold text-xs sm:text-sm lg:text-lg xl:text-xl whitespace-nowrap"
            style={{ lineHeight: '28px' }}
          >
            共创广场
          </Link>
          <Link 
            to="/feedback" 
            className="text-white/60 hover:text-white transition-colors font-bold text-xs sm:text-sm lg:text-lg xl:text-xl whitespace-nowrap"
            style={{ lineHeight: '28px' }}
          >
            意见反馈
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
