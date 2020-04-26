import React from 'react'
import { FavsWithQuery } from '../Containers/GetFavorites'
import { Layout } from '../Components/Layout'

export default () => (
  <Layout
    title='Favoritos'
    subtitle='Aquí puedes encontrar tus favoritos'
  >
    <FavsWithQuery />
  </Layout>
)
