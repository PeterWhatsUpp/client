import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material'
import { Product } from '../../app/models/product'
import { grey } from '@mui/material/colors'
import { Link } from 'react-router-dom'
import { LoadingButton } from '@mui/lab'
import { currencyFormat } from '../../app/util/util'
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore'
import { addBasketItemAsync } from '../basket/basketSlice'

interface Props {
  product: Product
}

const ProductCard = ({ product: p }: Props) => {
 const {status} = useAppSelector(state => state.basket);
  const dispatch=useAppDispatch();



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
            loading={status.includes('pendingAddItem'+p.id)}
            onClick={() => dispatch(addBasketItemAsync({productId: p.id}))}
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
