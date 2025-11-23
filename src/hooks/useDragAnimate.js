import { animate, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

// const inactiveShadow: string = "0px 0px 0px rgba(0,0,0,0.8)";

export function useDragAnimate(value, animationValues) {
  const animation = useMotionValue(animationValues)

  useEffect(() => {
    let isActive = false
    value.onChange((latest) => {
      const wasActive = isActive
      if (latest !== 0) {
        isActive = true
        if (isActive !== wasActive) {
          animate(animation, value)
        }
      } else {
        isActive = false
        if (isActive !== wasActive) {
          animate(animation, animationValues)
        }
      }
    })
  }, [value, animationValues, animation])

  return animation
}
