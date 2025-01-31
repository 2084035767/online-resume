import { useEffect } from 'react'

const preloadedComponents = new Set<string>()

export const usePreload = (
  componentId: string,
  importFn: () => Promise<any>,
  delay: number = 1000
) => {
  useEffect(() => {
    if (preloadedComponents.has(componentId)) return

    const timer = setTimeout(() => {
      importFn().then(() => {
        preloadedComponents.add(componentId)
      })
    }, delay)

    return () => clearTimeout(timer)
  }, [componentId, importFn, delay])
}
