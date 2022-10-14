import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
} from "@mui/material";
import {v1 as uuidv1} from "uuid";
import {getJobs,addJobs} from '../Redux/actions';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import React from "react";
import {Link} from 'react-router-dom'
import { useFormik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
const formSchema = yup.object({
    title: yup
    .string("Enter the Title")
    .required("Title is required")
    .min(3, "Title should contain atleast 3 characters"),
    sname: yup
    .string("Enter the Company name")
    .required("Company name is required")
    .min(3, "Company Name should contain atleast 3 characters"),
    jon:yup
    .string("enter the date")
    .required('date is required'),
  description: yup
    .string("Enter the description")
    .required("Description is required")
    .min(20, "Description should contain atleast 20 characters"),
  salary: yup
    .string("Enter numbers only")
    .required("salary is required")
});
const AddCompany = (props) => {
  let navigate = useNavigate();
  const formformik = useFormik({
    initialValues: {
      title:"",
      sname: "",
      jon:"",
      description: "",
      salary:"",
    },
    validationSchema: formSchema,
    onSubmit(values) {
       console.log(values);
       const newJob = {
          id:uuidv1(),
          title:values.title,
          companyName:values.sname,
          salary:values.salary,
          joiningDate:values.jon,
          description:values.description
       }
       props.addJobs(newJob);
       navigate('/');
    },
  });
  return (
    <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }} className='mt-3'>
      <CardContent>
        <Typography gutterBottom mb={5} variant="h3">
          Add Jobs
        </Typography>
        <Typography textAlign="left" variant="h5" gutterBottom>
          Fill Job Details
        </Typography>
        <form onSubmit={formformik.handleSubmit}>
          <Grid container justify="space-between" spacing={1}>
            <Grid xs={12} item>
              <TextField
                label="Title*"
                name="title"
                placeholder="enter the title"
                value={formformik.values.title}
                helperText={formformik.touched.title && formformik.errors.title}
                onBlur={formformik.handleBlur}
                onChange={formformik.handleChange}
                error={
                  formformik.touched.title && Boolean(formformik.errors.title)
                }
                variant="standard"
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Company Name*"
                name="sname"
                placeholder="enter the company name"
                value={formformik.values.sname}
                helperText={formformik.touched.sname && formformik.errors.sname}
                onBlur={formformik.handleBlur}
                onChange={formformik.handleChange}
                error={
                  formformik.touched.sname && Boolean(formformik.errors.sname)
                }
                variant="standard"
                fullWidth
              ></TextField>
            </Grid>
              <Grid xs={12} sm={6} className='mt-2'  item>
              <TextField
                label="Salary*"
                name="salary"
                value={formformik.values.salary}
                onBlur={formformik.handleBlur}
                helperText={formformik.touched.salary && formformik.errors.salary}
                onChange={formformik.handleChange}
                error={ formformik.touched.salary && Boolean(formformik.errors.salary)}
                placeholder="enter the salary"
                variant="standard"
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <InputLabel className="float-start">Joining Date*</InputLabel>
             <TextField
                name="jon"
                type="date"
                value={formformik.values.jon}
                onBlur={formformik.handleBlur}
                helperText={
                  formformik.touched.jon && formformik.errors.jon
                }
                onChange={formformik.handleChange}
                error={
                  formformik.touched.jon &&
                  Boolean(formformik.errors.jon)
                }
                variant="standard"
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Description*"
                name="description"
                value={formformik.values.description}
                helperText={
                  formformik.touched.description &&
                  formformik.errors.description
                }
                onBlur={formformik.handleBlur}
                onChange={formformik.handleChange}
                error={
                  formformik.touched.description &&
                  Boolean(formformik.errors.description)
                }
                placeholder="enter description"
                variant="standard"
                fullWidth
              ></TextField>
            </Grid>
       </Grid>
       <div className="mt-4">
         <Button component={Link} className="float-start" to="/">Back</Button>
         <Button variant="contained" type="submit" className="float-end">Save Job</Button>
         
           </div>
        </form>
      </CardContent>
    </Card>
  );
};
const mapStateToProps =(state)=>({
    jobList : state?.jobList
});
export default connect(mapStateToProps,{addJobs})(AddCompany);
