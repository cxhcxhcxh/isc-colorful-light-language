import { useEffect, useState } from 'react'

const MOBILE_MAX_WIDTH = 768

function getIsMobile() {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= MOBILE_MAX_WIDTH
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setIsMobile(getIsMobile())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile
}
