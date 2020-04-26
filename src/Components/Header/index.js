import React, { useEffect, useState, Fragment } from 'react'
import { Div } from './styles'

export const Header = ({ children }) => {
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 20
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const HeaderComponent = (fixed) => (
    <Div fixed={fixed}>
      {children}
    </Div>
  )

  return (
    <Fragment>
      {HeaderComponent(showFixed)}
    </Fragment>
  )
}
