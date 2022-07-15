import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import { Product } from '../../app/models/product';
import ProductCard from './ProductCard';

interface Props {
    products: Product[];
}

const ProductList = ({products}: Props) => {
  return (
    <>
    <Grid container spacing={2}>
        {products &&
          products.map((p, index: number) => {
            return (
            <Grid item xs={3} key={p.id}>
                <ProductCard product={p}/>
            </Grid>
            )
            
          })}
      </Grid>
    </>
  )
}

export default ProductList