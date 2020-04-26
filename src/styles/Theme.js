import theme from 'styled-theming'

export const backgroundColor = theme('mode', {
  light: 'rgb(254, 254, 254)',
  dark: '#000'
})

export const ShadowColor = theme('mode', {
  light: 'rgb(0,0,0, 0.05)',
  dark: 'rgba(254, 254, 254, 0.05)'
})

export const TitleColor = theme('mode', {
  light: '#484848',
  dark: '#fff'
})

export const SubtitleColor = theme('mode', {
  light: '#333',
  dark: '#fff'
})

export const TextColor = theme('mode', {
  light: '#000',
  dark: '#fff'
})

export const IconColor = theme('mode', {
  light: '#484848',
  dark: '#fff'
})

export const AccentColor = theme('mode', {
  light: '#eb6263',
  dark: '#eb6263'
})

export const SkeletonColor = theme('mode', {
  light: 'rgba(0,0,0,0.05)',
  dark: 'rgba(254,254,254,0.05)'
})
