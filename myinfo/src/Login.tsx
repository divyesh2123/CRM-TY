import React from 'react'
import LoginInfo from './components/LoginInfo'
import { Grid } from '@mui/material'

export default function Login() {
  return (
    <Grid container spacing={1}>
       <Grid container item xs={12} spacing={3}>
      
      <LoginInfo/>
      </Grid>
    </Grid>
  )
}
