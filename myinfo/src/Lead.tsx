import axios from 'axios';
import React, { useEffect, useState } from 'react'
import authFetch from './axiosInfobase/custom';

export default function Lead() {

  const [data,setData]= useState([]);

  useEffect(()=>{

    authFetch.get("lead").then(y=>{
      setData(y.data);
      console.log(y.data);
    })


  },[])

  return (
    <div>Lead</div>
  )
}
