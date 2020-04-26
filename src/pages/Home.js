import React, { Fragment } from 'react'
import { ListOfCategories } from '../Components/ListOfCategories'
import { ListOfPhotoCards } from '../Containers/ListOfPhotoCards'
import { Helmet } from 'react-helmet'
import { Logo } from '../Components/Logo'
import { Header } from '../Components/Header'

const HomePage = ({ categoryId }) => {
  return (
    <Fragment>
      <Header>
        <Logo size='180px' />
      </Header>
      <Helmet>
        <title>Petgram | Tu app de mascotas</title>
        <meta name='description' content='Con petgram puedes encontrar fotos de animales domésticos muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Fragment>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
