import React, { useEffect, useState } from 'react'
import { ILead } from './types/ILeadGrid'
import axios from 'axios';
import authFetch from './axiosInfobase/custom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export default function LeadDisplay() {

    const [data,setData]= useState<ILead[]>([]);

    const columns: GridColDef[] = [
       
        {
          field: 'leadName',
          headerName: 'lead Name',
          width: 150,
          editable: true,
        },
        {
          field: 'leadStatus',
          headerName: 'lead Status',
          width: 150,
          editable: true,
        },
        {
          field: 'leadEmail',
          headerName: 'lead Email',
          type: 'string',
          width: 110,
          editable: true,
        }
       
      ];



    useEffect(()=>{

        authFetch.get("lead").then(y=>{

            var p = y.data.map((t: ILead)=>{

                

                 return t;
            })
          setData(p);
          console.log( p);
        })
    
    
      },[])

  return (
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
    getRowId={(row) => row._id} 
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
  )
}
