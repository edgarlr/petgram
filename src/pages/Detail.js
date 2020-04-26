import React from 'react'
import { PhotoCardWithQuery } from '../Containers/PhotoCardWithQuery'
import { DetailLayout } from '../Components/DetailLayout/DetailLayout'

export const Detail = ({ detailId }) => (
  <DetailLayout id={detailId}>
    <PhotoCardWithQuery id={detailId} />
  </DetailLayout>
)
