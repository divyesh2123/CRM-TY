import React from 'react'
import { Formik, Form, Field, useFormik } from 'formik'
import { ILoginInformation } from '../types/ILoginForm'
import { Button, TextField } from '@mui/material';
import Login from '../service/loginservice';

export default function LoginInfo() {

  const invalues: ILoginInformation = {
    email: "",
    password: ""
  }

  const formik = useFormik({
    initialValues: invalues,
    onSubmit: (values:ILoginInformation) => {
     
      Login(values);
    },
  });

  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
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
