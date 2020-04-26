import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      const itemValue = () => {
        if (typeof value === 'string') {
          return value
        }
        return JSON.stringify(value)
      }

      window.localStorage.setItem(key, itemValue())
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }
  return [storedValue, setLocalStorage]
}
