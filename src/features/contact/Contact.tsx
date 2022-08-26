import { Button, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore'
import { increment, decrement } from './counterSlice'

const Contact = () => {
  const {data, title}= useAppSelector(state => state.counter);
  const dispatch=useAppDispatch();
  return (
    <>
    <Typography variant='h2'>{data}</Typography>
    <Typography variant='h2'>{title}</Typography>
    <Button onClick={()=>dispatch(increment(1))}>+</Button>
    <Button onClick={()=>dispatch(decrement(1))}>-</Button>
    </>
  )
}

export default Contact