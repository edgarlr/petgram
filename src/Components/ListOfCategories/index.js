import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        let response = await window.fetch(
          'https://petgram-server-edgarlr.edgarlr.now.sh/categories'
        )
        let res = await response.json()
        setCategories(res)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed} >
      {
        loading
          ? <Item key='loading'>
            <Category />
          </Item>
          : categories.map(category => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))}
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
