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
import React from 'react'
import { NavLink } from 'react-router-dom'

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
          <IconButton size="large" sx={navStyles}>
            <Badge badgeContent={4} color="secondary">
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
