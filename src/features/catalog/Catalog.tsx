import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { pink } from '@mui/material/colors'
import React from 'react'
import { Product } from '../../app/models/product'
import ProductList from './ProductList'

interface Props {
  products: Product[]
  addProducts: () => void
}

const Catalog = ({ products, addProducts }: Props) => {
  return (
    <>
      <ProductList products={products} />
      <Button style={{backgroundColor: pink.A100}} variant='contained' onClick={addProducts} >Add product</Button>
    </>
  )
}

export default Catalog
