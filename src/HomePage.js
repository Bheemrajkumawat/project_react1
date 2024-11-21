import React, { useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { initialValues, loginSchema } from "./const/Login";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    let userName = JSON.parse(localStorage.getItem("user"));
    if (userName?.emailId) {
      navigate("/home"); // अगर user पहले से लॉगिन है तो /home पेज पर जाएं
    }
  }, [navigate]);

  const handleData = (values) => {
    localStorage.setItem("user", JSON.stringify(values));  // user को localStorage में सेव करें
    navigate("/home");  // लॉगिन के बाद होम पेज पर रीडायरेक्ट करें
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleData,  // submit करने पर handleData को कॉल करें
    validationSchema: loginSchema,
  });

  const { values, handleChange, handleSubmit, errors, touched } = formik;

  
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={handleSubmit} style={{ width: "400px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Email Id / User Name"
              variant="outlined"
              value={values.emailId || ''}
              name="emailId"
              onChange={handleChange}
              error={touched.emailId && Boolean(errors.emailId)}
              helperText={touched.emailId && errors.emailId}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              value={values.password || ''}
              name="password"
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default HomePage;
