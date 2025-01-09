import React from 'react'
import { Formik, Form, Field, useFormik } from 'formik'
import { ILoginInformation } from '../types/ILoginForm'
import { Button, TextField } from '@mui/material';
import Login from '../service/loginservice';
import { useNavigate } from 'react-router-dom';

export default function LoginInfo() {

  const navig= useNavigate();
  const invalues: ILoginInformation = {
    username: "",
    password: ""
  }

  const formik = useFormik({
    initialValues: invalues,
    onSubmit: (values:ILoginInformation) => {
     
      Login(values).then(y=>{
        navig("/lead")
      });
    },
  });

  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="username"
        name="username"
        label="Email"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
  </div>
  )
}
