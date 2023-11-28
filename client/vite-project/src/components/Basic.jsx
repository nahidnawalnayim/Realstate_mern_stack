import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
const Basic = () => {
  
  return (
    <div>
        <Box>
        <Grid container className='flex justify-center'>
          <Grid item md={3} className='bg-red-300 flex justify-center'>
            first
          </Grid>
          <Grid item md={6} className='bg-blue-300'>
            second
          </Grid>
          <Grid item md={3} className='bg-green-300'>
            third
          </Grid>
        </Grid>
        <Button variant="text">
          text
        </Button>

        </Box>
    
  
        
    </div>
  )
}

export default Basic