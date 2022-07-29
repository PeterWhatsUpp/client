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
import React, { useState } from 'react'
import { Product } from '../../app/models/product'
import { grey } from '@mui/material/colors'
import { Link } from 'react-router-dom'
import agent from '../../app/api/agent'
import { LoadingButton } from '@mui/lab'
import { useStoreContext } from '../../app/context/StoreContext'
import { currencyFormat } from '../../app/util/util'

interface Props {
  product: Product
}

const ProductCard = ({ product: p }: Props) => {
  const [loading, setLoading] = useState(false)
  const {setBasket} = useStoreContext();

  function handleAddItem(productId: number) {
    setLoading(true)
    agent.Basket.addItem(productId)
      .then(basket => setBasket(basket))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
              {p.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={p.name}
          titleTypographyProps={{
            sx: { fontWeight: 'bold', color: 'primary.main' },
          }}
        />
        <CardMedia
          component="img"
          height="100%"
          image={p.pictureUrl}
          title={p.name}
          sx={{ bgcolor: grey[400] }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {currencyFormat(p.price)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {p.brand} / {p.type}
          </Typography>
        </CardContent>
        <CardActions>
          <LoadingButton
            loading={loading}
            onClick={() => handleAddItem(p.id)}
            size="small"
          >
            Add to cart
          </LoadingButton>
          <Button component={Link} to={`/catalog/${p.id}`} size="small">
            View
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ProductCard
