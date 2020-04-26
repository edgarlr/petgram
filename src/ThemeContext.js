import React, { useState, createContext, useContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from './hooks/useLocalStorage'

const ThemeToggleContext = createContext()

export const useTheme = () => useContext(ThemeToggleContext)

// const themeContext = useContext(ThemeContext)
export const MyThemeProvider = ({ children }) => {
  const [themeMode] = useLocalStorage('theme', false)

  const initialValue = () => {
    if (themeMode.mode !== undefined) {
      return themeMode.mode
    }
    return 'light'
  }

  const [themeState, setThemeState] = useState({
    mode: initialValue()
  })

  const toggle = () => {
    const mode = (themeState.mode === 'light' ? 'dark' : 'light')
    setThemeState({ mode: mode })
    // setThemeMode(themeContext.mode)
  }

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider theme={{ mode: themeState.mode }} >
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}
