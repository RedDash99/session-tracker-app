import { useEffect } from 'react'

export const useHead = (title) => {
  useEffect(() => {
    document.title = title
  }, [title])
}
