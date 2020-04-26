import React, { useState, useContext, useEffect } from 'react'
import { Div, Switch, Slider, Input, Text } from './styles'
import { useTheme } from '../../ThemeContext'
import { ThemeContext } from 'styled-components'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext)

  const [, setThemeMode] = useLocalStorage('theme', themeContext.mode)

  const initialValue = (themeContext.mode === 'dark')

  const [checkedInput, setCheckedInput] = useState(initialValue)

  const themeToggle = useTheme()

  const handleChecked = () => {
    setCheckedInput(!checkedInput)
    themeToggle.toggle()
  }

  useEffect(() => {
    setThemeMode(themeContext)
  })

  return (
    <Div>
      <Text>Tema Oscuro</Text>
      <Switch>
        <Input type='checkbox' onChange={handleChecked} />
        <Slider checked={checkedInput} />
      </Switch>
    </Div>
  )
}
