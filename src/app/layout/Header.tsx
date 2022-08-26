import { ShoppingCart } from '@mui/icons-material'
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { useAppSelector } from '../store/configureStore'

interface Props {
  darkMode: boolean
  setDarkMode: (a: boolean) => void
}

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
]

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
]

const navStyles = {
  color: 'inherit',
  typography: 'h6',
  textDecoration: 'none',
  '&:hover': { color: 'grey.300' },
  '&.active': { color: 'text.secondary' },
}

const Header = ({ setDarkMode, darkMode }: Props) => {
  const {basket}=useAppSelector(state => state.basket);
  const itemCount=basket?.items.reduce((sum, item) => sum+item.quantity, 0)
  
  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={navStyles}
          >
            Re-Store
          </Typography>
          <Switch onChange={() => setDarkMode(!darkMode)} />
          </Box>
          <Box>
          <List sx={{ display: 'flex' }}>
            {midLinks.map(({ title, path }) => {
              return (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              )
            })}
          </List>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
          <IconButton component={Link} to='/basket' size="large" sx={navStyles}>
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => {
              return (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              )
            })}
          </List>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
