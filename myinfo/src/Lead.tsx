import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import authFetch from './axiosInfobase/custom';
import LeadDisplay from './LeadDisplay';
import { Button } from '@mui/material';
import LeadForm from './LeadForm';


export default function Lead() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(()=>{
    setOpen(false);
  },[open]) 

  return (
    <>
     <Button variant="outlined" onClick={handleClickOpen}>
      Add Lead
      </Button>
    
      <LeadForm open={open} handleClose={handleClose}/>
    <LeadDisplay></LeadDisplay>
  
    </>
  )
}
