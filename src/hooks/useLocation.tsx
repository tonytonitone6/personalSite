import React, {useState, useLayoutEffect} from 'react'

const useLocation = () => {
  const [location, setLocation] = useState(() => null)

  const throttle = (fn: any, time = 1000): any => {
    let timeout: boolean
    return (...args: any[]): void => {
      const clear = () => {
        timeout = false
      }
      if (!timeout) {
        fn.apply(null, args)
        timeout = true
        setTimeout(clear, time)
      }
    }
  }

  const onScroll = (e: any) => {
    setLocation(e)
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', throttle(onScroll, 500), false)
    return () => {
      window.removeEventListener('scroll', onScroll, false)
    }
  }, [])

  return [location, setLocation]
}

export default useLocation
