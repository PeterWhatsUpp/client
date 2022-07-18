import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import { Product } from '../../app/models/product'
import { grey } from '@mui/material/colors'
import { Link } from 'react-router-dom'

interface Props {
  product: Product
}



const ProductCard = ({ product: p }: Props) => {

  return (
    <>
      <Card>
        <CardHeader avatar={
            <Avatar sx={{bgcolor: 'secondary.main'}}>
                {p.name.charAt(0).toUpperCase()}
            </Avatar>
        }
            title={p.name}
            titleTypographyProps={{
              sx: {fontWeight: 'bold', color: 'primary.main'}
            }}
       />

        
        <CardMedia
          component="img"
          height="100%" 
          image={p.pictureUrl}
          title={p.name}
          sx={{bgcolor: grey[400]}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${(p.price/100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {p.brand} / {p.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to cart</Button>
          <Button component={Link} to={`/catalog/${p.id}`} size="small">View</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ProductCard
