import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'


interface Props{
  darkMode: boolean,
  setDarkMode: (a:boolean)=>void
}

const Header = ({setDarkMode, darkMode}:Props) => {
  return (
    <>
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>Re-Store</Typography>
                <Switch onChange={()=>setDarkMode(!darkMode)}/>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header