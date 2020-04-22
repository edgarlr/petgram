import React from 'react'
import { PhotoCardWithQuery } from '../Containers/PhotoCardWithQuery'
import { Layout } from '../Components/Layout'

export const Detail = ({ detailId }) => (
  <Layout title={`Fotografia ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
