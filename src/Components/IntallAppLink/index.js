import React, { useState, useEffect } from 'react'
import { MdClose } from 'react-icons/md'
import { Div, Button, Close } from './styles'

export const InstallAppLink = () => {
  const [supportPWA, setSupportPWA] = useState(false)
  const [promptInstall, setPromptInstall] = useState(null)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const handler = e => {
      e.preventDefault()
      setSupportPWA(true)
      setPromptInstall(e)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('transitionend', handler)
  })

  const onDownloadClick = e => {
    e.preventDefault()
    if (!promptInstall) return null
    promptInstall.prompt()
  }
  if (!supportPWA) {
    return null
  }

  const onCloseClick = () => {
    setShow(false)
  }

  if (!show) {
    return null
  }
  return (
    <Div>
      <Button onClick={onDownloadClick} >
        Install app
      </Button>
      <Close onClick={onCloseClick}>
        <MdClose size='18px' />
      </Close>
    </Div>
  )
}
